$(document).ready(function(){
            
  //   $(window).resize(function () {
  //       if ($(window).width() < 700) {
  //           $(".nav-bgcolor").removeClass('nav-bgcolor')
  //       }
  //       else{
  //         $(".navbar").addClass('nav-bgcolor')
  //       } 
  // })
  
  // $( document ).click(function() {
  //   $( "#mobilenav" ).toggle( "slide" );
  // });


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
  

  $('.navbar-toggler, .overlay').on('click', function() {
    $('.mobileMenu, .overlay').toggleClass('open');
  });














});