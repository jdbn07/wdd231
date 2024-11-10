document.addEventListener('DOMContentLoaded', (event) => {
  const lastModified = document.lastModified;
  document.getElementById('lastModified').textContent = lastModified;
});
function toggleMenu() {
  document.querySelector('.nav').classList.toggle('show');
}
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});