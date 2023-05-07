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

  $(document).ready(function() {
    //calculating BMI
    var weight,height,age,gender, version="Metric",bmi

    function getBMI(){

      height=height/100
      bmi=(weight / (height*height))

      $('.calculated-bmi').removeClass('alert-success').removeClass('alert-info').removeClass('alert-warning').removeClass('alert-danger').removeClass('alert-secondary')

      if(bmi>40){
        //overweight
        $('.calculated-bmi').addClass('alert-danger')
        $('.bmi-class').text('Your are Overweight')

      }
      if(bmi<16){
        //servere thinness
        $('.calculated-bmi').addClass('alert-danger')
        $('.bmi-class').text('Your are Serverly Thin')
      }

      if(bmi>15){
        if(bmi>=16){
          //moderate thinness
          if(bmi<17){
            $('.calculated-bmi').addClass('alert-warning')
            $('.bmi-class').text('Your are Moderatley Thin')
          }
        }

        if(bmi>17){
          //mild thinness
          if(bmi<=18.5){
            $('.calculated-bmi').addClass('alert-secondary')
            $('.bmi-class').text('You are Mild thin')
          }
        }

        if(bmi>18.5){
          // normal
          if(bmi<=25){
            $('.calculated-bmi').addClass('alert-success')
            $('.bmi-class').text('Your BMi is Normal')
          }
        }

        if(bmi>25){
          //overweight
          if(bmi<=30){
            $('.calculated-bmi').addClass('alert-secondary')
            $('.bmi-class').text('Your are Overweight')
          }
        }

        if(bmi>30){
          //obese class 1
          if(bmi<=40){
            $('.calculated-bmi').addClass('alert-warning')
            $('.bmi-class').text('Your are Obese Class 1')
          }
        }
      }

      $('.calculated-bmi').removeClass("d-none")
      return "Your BMI is "+bmi.toFixed(2)
    }

    $('.calculate-bmi').on('click', function(e){
      e.preventDefault()
      $('.calculated-bmi-txt').text(getBMI())
    })

    //calculating using metric version
    $('.height-cm').on('change', function(){
      height=parseFloat($(this).val())
      
    })

    $('.text-age').on('change', function(){
      age=parseFloat($(this).val())
    })

    $('.weight-kgs').on('change', function(){
      weight=parseFloat($(this).val())
    })

    $('[name="bmi_metric_gender"]').on("change", function(){
      gender=parseFloat($(this).val())
    })
    
  });