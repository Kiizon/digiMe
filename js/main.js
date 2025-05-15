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

const win       = document.querySelector('.window');
const handle    = win.querySelector('.title-bar');
let   isDragging = false;
let   startX, startY;
let   origX, origY;        


const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0; 

if (!isTouchDevice) {
    handle.addEventListener('mousedown', (e) => {
        e.preventDefault();

        // record where we clicked vs. the window's current position
        const rect = win.getBoundingClientRect();
        startX = e.clientX;
        startY = e.clientY;
        origX = rect.left;
        origY = rect.top;

        // remove the centering transform so left/top take full effect
        win.style.transform = 'none';
        win.classList.add('dragging');

        isDragging = true;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
}

function onMouseMove(e) {
    if (!isDragging) return;

    // calculate how far the mouse has moved
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    // move the window by that delta
    win.style.left = `${origX + dx}px`;
    win.style.top = `${origY + dy}px`;
}

function onMouseUp() {
    isDragging = false;
    win.classList.remove('dragging');
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}
