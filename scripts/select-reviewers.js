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
    const prNumber = process.env.GITHUB_EVENT_PULL_REQUEST_NUMBER;
    if (!prNumber) {
      console.error('PR number could not be determined.');
      process.exit(1);
    }

    await assignReviewers(prNumber, selectedReviewers);
  } catch (error) {
    console.error('Error in main execution:', error.message);
    process.exit(1);
  }
}

main();
