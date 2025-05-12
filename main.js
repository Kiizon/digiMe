const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.content');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {

    document.querySelector('.tab.active').classList.remove('active');
    tab.classList.add('active');

    document.querySelector('.content.active').classList.remove('active');
    document.getElementById(tab.dataset.target).classList.add('active');
  });
});