window.ityped.init(document.querySelector('.ityped'),{
    strings: ['Body & Soul'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})
$(document).ready(function(){
    var packagesOwl = $('.pricing');
    packagesOwl.owlCarousel({
        loop:true,
        items:3,
        margin:10,
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
})

$(document).ready(function(){
    var packagesOwl = $('.products');
    packagesOwl.owlCarousel({
        loop:false,
        items:3,
        margin:100,
        center:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:8000,
        autoplayHoverPause:true,
        responsiveClass:true,
        lazyLoad:true,
        loop:false,
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

    $('.owl-carousel-2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    //pricing owl
    

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
  $('.metric-btn').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.metric-bmi').removeClass('d-none').siblings().addClass('d-none')
  })

  $('.bmi-table-btn').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.bmi-table').removeClass('d-none').siblings().addClass('d-none')
  })
  $('.english-btn').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.english-bmi').removeClass('d-none').siblings().addClass('d-none')
  }) 

  //nav clicking
  $(".yoga-nav").on('click', function(){
    event.preventDefault()
    $(this).addClass('active').parent().siblings().children().removeClass('active')
    $('#yoga-service').removeClass('d-none').siblings('.siha-services').addClass('d-none')
  })

  $(".yoga-plus-nav").on('click', function(){
    event.preventDefault()
    $(this).addClass('active').parent().siblings().children().removeClass('active')
    $('#yoga-plus-service').removeClass('d-none').siblings('.siha-services').addClass('d-none')
  })

  $(".zumba-nav").on('click', function(){
    event.preventDefault()
    $(this).addClass('active').parent().siblings().children().removeClass('active')
    $('#zumba-service').removeClass('d-none').siblings('.siha-services').addClass('d-none')
  })

  $(".physiotherapy-nav").on('click', function(){
    event.preventDefault()
    $(this).addClass('active').parent().siblings().children().removeClass('active')
    $('#physiotherapy-service').removeClass('d-none').siblings('.siha-services').addClass('d-none')
  })

  $(".private-nav").on('click', function(){
    event.preventDefault()
    $(this).addClass('active').parent().siblings().children().removeClass('active')
    $('#private-service').removeClass('d-none').siblings('.siha-services').addClass('d-none')
  })

  $(".challenge-nav").on('click', function(){
    event.preventDefault()
    $(this).addClass('active').parent().siblings().children().removeClass('active')
    $('#challenge-service').removeClass('d-none').siblings('.siha-services').addClass('d-none')
  })

  var clickedText

  // moment js codes start here
  $(document).ready(function(){
    //TUE NOVEMBER 14, 2017
    var todayDate=moment().format('dddd MMM DD, YYYY')
    var todayDay=moment().format('dddd')
    var activeClassName="table-"+todayDay
    $('.this-year').text(moment().format('yyyy'))
    //alert("today is "+todayDay)
    $('.today-date').text(todayDate)
    //alert(todayDate)
    $('.timetable-navbar .nav-item').each(function(index){
      var theDay=$(this).text()
      //alert(theDay)
      if(theDay===todayDay){
        $(this).addClass('active').text(theDay+' (Today)')
      }
    })

    $('.day-table').each(function(index){
     var isclassPresent=$(this).hasClass(activeClassName)
      if(isclassPresent===true){
        $(this).removeClass('d-none')
      }
    })
  })

  //changing timetable 
  $(document).ready(function(){

    $('#youtube-vid').magnificPopup({
      type:'inline',
      midClick:true,
      
    })

    $('.timetable-navbar .nav-item').on('click', function(event){
      event.preventDefault()
      $(this).addClass('active').siblings().removeClass('active')
      clickedText=$(this).text()
      var activeClassName="table-"+clickedText

      $('.day-table').each(function(index){
        var isclassPresent=$(this).hasClass(activeClassName)
         if(isclassPresent===true){
           $(this).removeClass('d-none').siblings('.day-table').addClass('d-none')
         }
       })
    })
  })

  $(document).ready(function() {
    $('.youtube-vid').magnificPopup({
      type:'inline'
    });

    $('.test-popup-link').magnificPopup({
      items:{
        src: '#youtube-vid',
        type: 'inline',
        // midClick:true
      }
      // other options
    });

  });