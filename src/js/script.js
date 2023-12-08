var menuBtn = document.getElementById("menu-btn")
var mobileMenu = document.getElementById('mobile-menu')



function setFlex(){
    mobileMenu.classList.toggle('hidden');
    
}



menuBtn.addEventListener('click',setFlex);