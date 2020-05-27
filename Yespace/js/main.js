const dropdownBtn = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdownMenu');
const cardCent = document.querySelector('.card-centurion');

function showDropdownMenu(){
    dropdownMenu.classList.toggle('dropdownMenu-active')
}

dropdownBtn.addEventListener('click',showDropdownMenu);
