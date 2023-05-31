const scoreResult = document.getElementById('scoreResult');
const API = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg3fUdz/scores/';

const render = async () => {
  try {
    const res = await fetch(API);
    if (res.ok) {
      const data = await res.json();
      const { result } = data;
      const sortedScores = result.sort((a, b) => b.score - a.score);
      scoreResult.innerHTML = '';

      sortedScores.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.user}: ${item.score}`;
        scoreResult.appendChild(li);
      });
    } else {
      throw new Error('Failed to fetch scores.');
    }
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export default render;
