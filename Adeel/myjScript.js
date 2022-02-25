$(document).ready(function(){
            
    $(window).resize(function () {
        if ($(window).width() < 700) {
            $(".nav-bgcolor").removeClass('nav-bgcolor')
        }
        else{
          $(".navbar").addClass('nav-bgcolor')
        } 
  })
  
  // $( document ).click(function() {
  //   $( "#mobilenav" ).toggle( "slide" );
  // });

  
});