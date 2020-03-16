const navPannel = document.querySelector('.navigationPanel');
const navBtn = document.querySelector('.wrapper-header__button');
const anchorsBtn = document.querySelectorAll('.anchors > li > a');
 



function showNavPannel(){
    navPannel.classList.toggle('addNavigationPanel');
}


for(let i = 0; i < anchorsBtn.length; i++){
    anchorsBtn[i].addEventListener('click', function(event){
        console.log('work');
        event.preventDefault();
        const blockId = anchorsBtn[i].getAttribute('href');
        document.querySelector(blockId).scrollIntoView({
            behavior:"smooth",
            block:"start",
        });
    })
}


navBtn.addEventListener('click', showNavPannel);

        function t(e, i) {
            try {
                var o = document.querySelector(i);
                o.addEventListener("submit", function(t) {
                    t.preventDefault(),
                     o.querySelector(".lds-spinner").style.display = "inline-block", 
                     fetch(e, {
                        method: "POST",
                        body: new FormData(o)
                    }).then(function() {
                        o.querySelector(".lds-spinner").style.display = "none", o.querySelector(".confirm").style.display = "inline-block";
                        var t = document.createElement("div");
                        t.style.color = "green", t.style.marginTop = "10px", t.textContent = ".contactpage__feed" === i ? "Спасибо за отзыв и ваше доверие!" : "Спасибо, мы скоро с вами свяжемся", o.appendChild(t), o.querySelectorAll("input").forEach(function(t) {
                            t.value = ""
                        }), o.querySelectorAll("textarea").forEach(function(t) {
                            t.value = ""
                        }), setTimeout(function() {
                            o.querySelector(".confirm").style.display = "none", t.remove()
                        }, 1e4)
                    }).catch(function() {
                        var t = document.createElement("div");
                        t.style.color = "red", t.style.marginTop = "10px", t.textContent = "Что-то пошло не так, попробуйте, пожалуйста, позже",
                         o.appendChild(t),
                          o.querySelector(".lds-spinner").style.display = "none",
                           o.querySelector(".reject").style.display = "inline-block",
                            setTimeout(function() {
                            o.querySelector(".reject").style.display = "none", t.remove()
                        }, 5e3)
                    })
                })
            } catch (t) {}
        }
        t(".../reply.php", ".reply__body > form");

$(function($){
    $('[name="phone"]').mask("+7(999) 999-9999");
});


$(document).ready(function() {
	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value == '' || document.form.phone.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "../mail/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
});


$(function(){
    $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.7});
    $(".twentytwenty-container[data-orientation='vertical']").twentytwenty({default_offset_pct: 0.3, orientation: 'vertical'});
  });



