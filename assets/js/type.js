window.ityped.init(document.querySelector('.ityped'),{
    strings: ['Body & Soul'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

$(document).ready(function(){

    var packagesOwl = $('.owl-carousel');
    
    

    packagesOwl.owlCarousel({
        loop:true,
        items:3,
        margin:100,
        center:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:8000,
        autoplayHoverPause:true,
        responsiveClass:true,
        lazyLoad:true,
        loop:true,
        responsive:{
            0:{
                items:1,
                
            },
            600:{
                items:2,
               
            },
            1000:{
                items:3,
                
            }
        }
       
    })

     // Custom Button
  $('.nav-next').click(function() {
    packagesOwl.trigger('next.owl.carousel');
  });
  $('.nav-prev').click(function() {
    packagesOwl.trigger('prev.owl.carousel');
  });

  $('products-nav .nav-link').on('click', function(){
    $(this).addClass('active').parent().siblings().children().removeClass('active')
  })
  });