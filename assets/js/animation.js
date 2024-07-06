ScrollReveal({
    reset: false,
    distance: '10px',
    diration: 60,
    delay: 10
});


ScrollReveal().reveal('.homeSetiStolovyh__div h2, .homeSetiStolovyh__div p', { delay: 500, origin: 'left', interval: 100 });
ScrollReveal().reveal('.home1, .just1, .just4, .sect4 h2', { delay: 500, duration: 1400, origin: 'left',  distance: '200px' });
ScrollReveal().reveal('.home2, .just2, .just3', { delay: 500, duration: 1400, origin: 'right',  distance: '200px' });
ScrollReveal().reveal('.home3, .two', { delay: 500, distance: '150px', duration: 1400, origin: 'bottom' });

function toggleVisibility() {
    let svgElement = document.getElementById('navbar__header1');
    if (svgElement.style.display === 'block') {
        svgElement.style.display = 'none';
    } else {
        svgElement.style.display = 'block';
    }
}

$(document).ready(function(){
  // = Вешаем событие прокрутки к нужному месту
    //	 на все ссылки якорь которых начинается на #
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
      e.preventDefault();
  
      var target = this.hash,
      $target = $(target);
  
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
        window.location.hash = target;
      });
    });
  
  });