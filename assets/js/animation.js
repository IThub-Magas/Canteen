ScrollReveal({
    reset: false,
    distance: '10px',
    diration: 60,
    delay: 10
});

ScrollReveal().reveal('.homeSetiStolovyh__div h2, .homeSetiStolovyh__div p', { delay: 500, origin: 'left', interval: 100 });
ScrollReveal().reveal('.home1, .just1, .just4, .sect4 h2', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.home2, .just2, .just3', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.home3, .two', { delay: 500, origin: 'bottom' });

function toggleVisibility() {
    let svgElement = document.getElementById('navbar__header1');
    if (svgElement.style.display === 'block') {
        svgElement.style.display = 'none';
    } else {
        svgElement.style.display = 'block';
    }
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}