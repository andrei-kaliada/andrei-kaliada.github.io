const menuBtn = document.querySelector('.menu-btn');
const navMedia = document.querySelector('.media-menu-nav');
 

 function changeBtn(){
     menuBtn.classList.toggle('menu-btn-active');
     navMedia.classList.toggle('media-menu-nav-active');
 }

 menuBtn.addEventListener('click', changeBtn);

