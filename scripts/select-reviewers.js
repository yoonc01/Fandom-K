const axios = require('axios');
const token = process.env.GITHUB_TOKEN;
const repoOwner = process.env.GITHUB_REPOSITORY.split('/')[0];
const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];

async function getCollaborators() {
  const response = await axios.get(
    `https://api.github.com/repos/${repoOwner}/${repoName}/collaborators`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data.map((user) => user.login);
}

async function assignReviewers(prNumber, reviewers) {
  await axios.post(
    `https://api.github.com/repos/${repoOwner}/${repoName}/pulls/${prNumber}/requested_reviewers`,
    { reviewers },
    { headers: { Authorization: `Bearer ${token}` } }
  );
}

async function main() {
  const collaborators = await getCollaborators();
  const selectedReviewers = collaborators
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  console.log('Selected reviewers:', selectedReviewers);

  const prNumber = process.env.GITHUB_REF.split('/').pop();
  await assignReviewers(prNumber, selectedReviewers);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
