const dropdownBtn = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdownMenu');
const cardCent = document.querySelector('.card-centurion');
const messageBtn = document.querySelectorAll('.btn_value');
const popup = document.querySelector('.mobile-header__burger');
const wrappPopUp = document.querySelector('.popup-mobile');

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

function showPopUp(){
   
    popup.classList.toggle('activePopUp');
    wrappPopUp.classList.toggle('showWrappPopUp');
    document.body.classList.toggle('fixed');
}

popup.addEventListener('click', showPopUp);


let form = document.querySelectorAll('.my-form');
let msgFormText = document.querySelectorAll('.message-form__text');

form.forEach(el => el.addEventListener('submit', function(evt) {
  evt.preventDefault();

  let formData = {
    name: document.querySelector('input[name="email"]').value,
  };

  let request = new XMLHttpRequest();

  request.addEventListener('load', function() {
    // В этой части кода можно обрабатывать ответ от сервера
    console.log(request.response);
    form.forEach( el => el.innerHTML = `
      <div class="sendForm"> 
        <p class="sendForm__text">Спасибо отправлено!</p>
      </div>
    `
    );
    msgFormText.forEach( el => {
      if(screen.width < 768){
        el.innerHTML="Ты молодец!";
        el.style.paddingLeft = 0;
      }

 
      
    })
  });

  request.open('POST', '/send.php', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send('name=' + encodeURIComponent(formData.name) );
}));

let test = document.querySelector('.slick-track');
let center = document.querySelector('.center');
let card = document.querySelector('.card-add');
console.log(center);

center.addEventListener('click', function(){
  console.log('hello')
  card.innerHTML="";
})