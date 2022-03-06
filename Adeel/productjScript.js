$(document).ready(function(){
            
  //   $(window).resize(function () {
  //       if ($(window).width() < 700) {
  //           $(".nav-bgcolor").removeClass('nav-bgcolor')
  //       }
  //       else{
  //         $(".navbar").addClass('nav-bgcolor')
  //       } 
  // })
  
  


  var fixHeight = function() {
    $('.navbar-nav').css(
      'max-height',
      document.documentElement.clientHeight - 150
    );
  };
  fixHeight();
  
  $(window).resize(function() {
    fixHeight();
  });

  $('.navbar .navbar-toggler').on('click', function() {
    fixHeight();
  });
  

  $('.navbar-toggler,.overlay,.btnclsnav').on('click', function() {
    $('.mobileMenu,.overlay,.btnclsnav').toggleClass('open');
  });




  $('.carousel').carousel({
    interval: 3000,
    keyboard: true,
    pause: 'hover',
    wrap: true
  });

  $('#slider4').on('slide.bs.carousel', function () {
    console.log('SLIDE!');
  });

  $('#slider4').on('slid.bs.carousel', function () {
    console.log('SLID!');
  });

  //current year for copyright
  document.getElementById("footeryear").innerHTML=new Date().getFullYear();

});