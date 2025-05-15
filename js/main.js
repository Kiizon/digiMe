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
    navSfx.currentTime = 0;
    navSfx.volume = 0.2;
    navSfx.play();
  
    const moonIsHidden = getComputedStyle(moonIcon).display === 'none';
    if (moonIsHidden) {
        toggleToDayMode();
    } else {
        toggleToNightMode();
    }
}
  

function toggleToNightMode() {
    document.body.style.setProperty('--primary-color', '#0e0d26');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
}

function toggleToDayMode() {
    document.body.style.setProperty('--primary-color', '#f5e9b8');
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
}

if (sunIcon && moonIcon) {
    sunIcon.addEventListener('click', toggleIcons);
    moonIcon.addEventListener('click', toggleIcons);
}
