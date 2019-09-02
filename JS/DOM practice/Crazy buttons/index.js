let container = document.querySelector('.container');
function changeCoord(e) {
    let btnHeight = e.target.clientHeight;
    let btnWidth = e.target.clientWidth;
    let newTop = Math.floor(Math.random() * (window.innerHeight - btnHeight));
    let newLeft = Math.floor(Math.random() * (window.innerWidth - btnWidth));
    e.target.style.top = `${newTop}px`;
    e.target.style.left = `${newLeft}px`;
}
container.addEventListener('mouseover', changeCoord);