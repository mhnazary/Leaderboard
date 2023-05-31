import './style.css';
import render from './modules/render.js';
import addScore from './modules/addScore.js';

const $ = document;
const addButton = $.getElementById('submitBtn');
const refresh = $.getElementById('RefreshBtn');

addButton.addEventListener('click', async (event) => {
  event.preventDefault();
  await addScore();
  await render();
});

refresh.addEventListener('click', async () => {
  await render();
});

render();