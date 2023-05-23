const adWindow = document.querySelector('.ad-window');
const consultationBtn = document.querySelector('.consultation-btn');
const closeBtn = document.querySelector('.close-btn');
    
window.addEventListener('scroll', () => {
    const scrollBottom = window.scrollY + window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const isBottom = scrollBottom >= docHeight;
    if (isBottom) {
        adWindow.style.display = 'block';
    }
});
    
consultationBtn.addEventListener('click', () => {
    adWindow.style.display = 'none';
});
    
setTimeout(() => {
    closeBtn.style.display = 'block';
}, 5000);
    
closeBtn.addEventListener('click', () => {
    adWindow.style.display = 'none';
});