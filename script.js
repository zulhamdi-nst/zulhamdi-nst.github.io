// if(confirm("Apakah anda ingin memasukan nama anda ?")){
//     let inputName = prompt("MASUKAN NAMA ANDA");
//     let kapital = inputName.toUpperCase();
//     alert("SELAMAT DATANG DI WEB SAYA "+kapital+" BODOH")
// } else {
//     alert("MASOK KAN LAH BODOH !");
// };

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