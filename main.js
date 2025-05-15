const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.content');
const sunIcon = document.querySelector('.theme-icon.sun');
const moonIcon = document.querySelector('.theme-icon.moon');
const navSfx = document.getElementById('nav-sfx');


tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    navSfx.currentTime = 0;
    navSfx.play();
    navSfx.volume = 0.2;
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

function toggleToNightMode  () {
    document.body.style.setProperty('--primary-color', '#0e0d26');
}

function toggleToDayMode() {
    document.body.style.setProperty('--primary-color', '#f5e9b8');
}
if (sunIcon && moonIcon) {
    sunIcon.addEventListener('click', toggleIcons);
    sunIcon.addEventListener('click', toggleToNightMode);
    moonIcon.addEventListener('click', toggleIcons);
    moonIcon.addEventListener('click', toggleToDayMode);
    
}
