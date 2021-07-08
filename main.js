const menuBar = document.querySelector(".menuBar");
const navLinks = document.querySelector('.navLinks');

menuBar.addEventListener('click', function(){
    navLinks.classList.toggle('ShowSideMenu');
});