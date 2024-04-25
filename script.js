const menuIcon = document.getElementById('hamburger-menu')
const menuList = document.getElementById('menu-h')
menuIcon.addEventListener('click', () => {
    menuList.classList.toggle('hidden');
})

var typed = new Typed(".auto-type",{
    strings: ['HELLO,','BONJOUR,', 'HOLA,','NI HAO,'],
    typeSpeed: 150,
    backSpeed: 50,
    loop: true
});