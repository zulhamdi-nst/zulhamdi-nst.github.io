const menuIcon = document.getElementById('hamburger-menu')
const menuList = document.getElementById('menu-h')
menuIcon.addEventListener('click', () => {
    menuList.classList.toggle('hidden');
})