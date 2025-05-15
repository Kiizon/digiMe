const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.content');
const sunIcon = document.querySelector('.theme-icon.sun');
const moonIcon = document.querySelector('.theme-icon.moon');


tabs.forEach(tab => {
  tab.addEventListener('click', () => {
      document.querySelector('.tab.active').classList.remove('active');
      tab.classList.add('active');

      document.querySelector('.content.active').classList.remove('active');
      document.getElementById(tab.dataset.target).classList.add('active');
  });
});

function toggleIcons() {
    if (sunIcon.style.display === 'none') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
}
