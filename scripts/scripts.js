document.addEventListener('DOMContentLoaded', (event) => {
  const lastModified = document.lastModified;
  document.getElementById('lastModified').textContent = lastModified;
});
function toggleMenu() {
  document.querySelector('.nav').classList.toggle('show');
}