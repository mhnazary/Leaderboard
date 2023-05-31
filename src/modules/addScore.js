const nameInput = document.getElementById('nameInput');
const scoreInput = document.getElementById('scoreInput');
const API = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg3fUdz/scores/';

const addScore = async () => {
  const name = nameInput.value;
  const score = Number(scoreInput.value);

  if (Number.isNaN(score)) {
    throw new Error('Invalid score value. Please enter a number.');
  }
  const data = { user: name, score };

  try {
    const res = await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      nameInput.value = '';
      scoreInput.value = '';
      return 'Score added successfully.';
    }
    throw new Error('Failed to add score.');
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export default addScore;
