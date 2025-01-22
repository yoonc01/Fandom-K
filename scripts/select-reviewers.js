import axios from 'axios';

const token = process.env.GITHUB_TOKEN;
const [repoOwner, repoName] = process.env.GITHUB_REPOSITORY.split('/');

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
    const selectedReviewers = collaborators
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    console.log('Selected reviewers:', selectedReviewers);

    const prNumber = process.env.GITHUB_REF.split('/').pop();
    await assignReviewers(prNumber, selectedReviewers);
  } catch (error) {
    console.error('Error in main execution:', error.message);
    process.exit(1);
  }
}

main();
