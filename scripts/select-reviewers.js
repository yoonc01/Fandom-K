import fs from 'fs';
import axios from 'axios';

const token = process.env.GITHUB_TOKEN;
const [repoOwner, repoName] = process.env.GITHUB_REPOSITORY.split('/');
const prAuthor = process.env.GITHUB_ACTOR; // PR 작성자

async function getCollaborators() {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${repoOwner}/${repoName}/collaborators`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.map((user) => user.login);
  } catch (error) {
    console.error(
      'Error fetching collaborators:',
      error.response?.data || error.message
    );
    process.exit(1);
  }
}

async function assignReviewers(prNumber, reviewers) {
  try {
    await axios.post(
      `https://api.github.com/repos/${repoOwner}/${repoName}/pulls/${prNumber}/requested_reviewers`,
      { reviewers },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(`Reviewers successfully assigned: ${reviewers}`);
  } catch (error) {
    console.error(
      'Error assigning reviewers:',
      error.response?.data || error.message
    );
    process.exit(1);
  }
}

function getPullRequestNumber() {
  try {
    const eventPath = process.env.GITHUB_EVENT_PATH;
    if (!eventPath) {
      throw new Error('GITHUB_EVENT_PATH is not defined.');
    }

    const eventData = JSON.parse(fs.readFileSync(eventPath, 'utf8'));
    const prNumber = eventData.pull_request?.number;

    if (!prNumber) {
      throw new Error('Pull request number not found in event data.');
    }

    return prNumber;
  } catch (error) {
    console.error('Error fetching PR number:', error.message);
    process.exit(1);
  }
}

async function main() {
  try {
    const collaborators = await getCollaborators();

    // PR 작성자 제외
    const filteredCollaborators = collaborators.filter(
      (user) => user !== prAuthor
    );

    // 무작위로 2명 선택
    const selectedReviewers = filteredCollaborators
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    console.log('Selected reviewers:', selectedReviewers);

    // PR 번호 가져오기
    const prNumber = getPullRequestNumber();
    await assignReviewers(prNumber, selectedReviewers);
  } catch (error) {
    console.error('Error in main execution:', error.message);
    process.exit(1);
  }
}

main();
