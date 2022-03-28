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

  
  // Get the current year for the copyright
  $('#year').text(new Date().getFullYear());
  CKEDITOR.replace('editor1');

});