const dropdownBtn = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdownMenu');

function showDropdownMenu(){
    dropdownMenu.classList.toggle('dropdownMenu-active')
}

dropdownBtn.addEventListener('click',showDropdownMenu);