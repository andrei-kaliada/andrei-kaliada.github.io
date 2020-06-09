const dropdownBtn = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdownMenu');
const cardCent = document.querySelector('.card-centurion');
const messageBtn = document.querySelectorAll('.btn_value');

function setValueBtn(event){
   let value = event.target.value;
   console.log(value);
   value !== '' ? messageBtn.forEach(el => el.classList.add('active-mail'))
    : messageBtn.forEach(el => el.classList.remove('active-mail'));
}

function showDropdownMenu(){
    dropdownMenu.classList.toggle('dropdownMenu-active')
}


dropdownBtn.addEventListener('click',showDropdownMenu);
messageBtn.forEach( element => {
    element.addEventListener('input', setValueBtn);
})

