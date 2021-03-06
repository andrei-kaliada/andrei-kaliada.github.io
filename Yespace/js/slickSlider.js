
$('.center').slick({
    centerMode: false,
    centerPadding: '0px',
    slidesToShow: 4,
    infinite:false,
    responsive: [
      
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3.999
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1.5
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '0px',
          slidesToShow:1.17,
          infinite:false,
          
        }
      }
    ]
  });


  $('.variable-width').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1.2,
    centerMode: true,
    variableWidth: true
  });

  $('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});


$('.card-gold').css('marginLeft',25);

$('.center').on('afterChange', function(){
  console.log($('.center').slick('slickCurrentSlide'));
  let currentSlide = $('.center').slick('slickCurrentSlide');
if(currentSlide==0)
{
   $('.slick-prev').hide();
   $('.slick-next').show();
   $('.card-centurion').css('opacity',0.5);
   $('.card-gold').css('opacity',1);
   $('.card-gold').css('marginLeft',25);
  
}


else if(currentSlide==4)
{
$('.slick-next').hide();
$('.slick-prev').show();
$('.slick-track').addClass('card-translate');


}

else if(currentSlide==3){
  $('.slick-track').removeClass('card-translate');
}


if(currentSlide>0 && currentSlide<4)
{
   $('.slick-prev').show();
   $('.slick-next').hide();
   $('.card-gold').css('opacity',0.5);
   $('.card-centurion').css('opacity',1);
  //  $('.slick-current').css('width',291);
  //$('.card-gold').css('marginLeft',0);
 
}

});

$(document).ready(function(){
let currentSlide = $('.center').slick('slickCurrentSlide');
if(currentSlide==0)
{
   $('.slick-prev').hide();
   $('.card-centurion').css('opacity',0.5);
   ('.card-gold').css('opacity',1);

  
}
else if(currentSlide==3)
{
$('.slick-next').hide();
$('.card-gold').css('opacity',0.5);
$('.card-centurion').css('opacity',1);
}

});