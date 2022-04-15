$(document).ready(function () {

  //   $(window).resize(function () {
  //       if ($(window).width() < 700) {
  //           $(".nav-bgcolor").removeClass('nav-bgcolor')
  //       }
  //       else{
  //         $(".navbar").addClass('nav-bgcolor')
  //       } 
  // })


  //for nav on mobile view

  var fixHeight = function () {
    $('.navbar-nav').css(
      'max-height',
      document.documentElement.clientHeight - 150
    );
  };
  fixHeight();

  $(window).resize(function () {
    fixHeight();
  });

  $('.navbar .navbar-toggler').on('click', function () {
    fixHeight();
  });


  $('.navbar-toggler,.overlay,.btnclsnav').on('click', function () {
    $('.mobileMenu,.overlay,.btnclsnav').toggleClass('open');
  });



  //for banner portion
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
  document.getElementById("footeryear").innerHTML = new Date().getFullYear();
});






// function checkPasswordMatch() {
//     var psw = document.getElementById("Password").value;
    
//   var pswreEnter = document.getElementById("RePassword").value;
  
//   let alphExp = /^[0-9]+$/;
//     if ( (psw.length < 8 )) {
//      document.getElementById("Password").innerText = "Password  contain   atleast 8 charecters "
   
//   }
//     if (!psw.match(alphExp)) {
//          document.getElementById("Password").innerText = "Password  does not  follow criteria "
//     }
//      if ((psw != pswreEnter)) {
//         document.getElementById("RePassword").innerText = "Password not matched" 

//     }
    
//   else {
//     document.getElementById("Re-Password-error").innerText = "";
//   }
// }
//   function checkPasswordMatch(){
    
//    var InputValue = $("#password").val();
//     var regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
//     $("#passwordText").text(`Password value:- ${InputValue}`);
    
//     if(!regex.test(InputValue)) {
//          $("#error").text("Invalid Password");
//     }
//     else{
//           $("#error").text("");
//     }
// }

    // function checkPasswordMatch() {
    //     var psw = document.getElementById("Password").value;
    //     alert(typeOf(psw));
    //     var pswreEnter = document.getElementById("RePassword").value;
    //     var lowerCaseLetters = /[a-z]/g;
    //     var upperCaseLetters = /[A-Z]/g;
    //     alert('chal raha shai', psw.length)
    //     //let alphExp = /^[0-9]+$/;
    //     if (psw.length < 8 && pswreEnter.match(alphExp)) {
    //         alert('8 charecter')
    //         document.getElementById("Re-Password-error").innerText = "Password not matched";
    //     } else if (psw == "") {
    //         alert(' pass')
    //         document.getElementById("Re-Password-error").innerHTML = "**Fill the password please!";
    //         return false;
    //     } else if (psw.value.match(lowerCaseLetters)) {
    //         alert('re pass')
    //         document.getElementById("Re-Password-error").innerHTML = "**please enter one lower case letter";
    //     } else {
    //         document.getElementById("Re-Password-error").innerText = "";
    //     }
    // }
          

