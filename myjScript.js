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

function checkFullName() {
  var name = document.getElementById("FullName").value;
  var alphExp = /^[a-zA-Z]+$/;
  if ((name.length < 8) && (name.match(alphExp))) {
    document.getElementById("fullname-error").innerText = "Name must have more than 4 chars and not numric value";
  } else {
    document.getElementById("fullname-error").innerText = "";
  }
}

function checkContactNo() {
  var contactno = document.getElementById("ContactNumber").value;
  var contact_regex = /^[0-9]{10}$/
  if (!contactno.match(contact_regex))
 {
    document.getElementById("ContactNumber-error").innerText = "Contact number Should be 10 digits";
    //document.getElementsByClassName("").style.color ="red";
  } else {
    document.getElementById("ContactNumber-error").innerText = "";
  }
}


function checkPasswordMatch() {
  var Password = document.getElementById("Password").value;
  var RePassword = document.getElementById("RePassword").value;
  //var alphExp = /^[0-9]+$/;
  if (Password   != RePassword ) {
    document.getElementById("RePassword-error").innerText = "Password not matched";
  } else {
    document.getElementById("RePassword-error").innerText = "";
  }
}


// function checkFullName() {
//   var fullname = $('#FullName').val();
//   if (fullname.length < 5) {
//     $('#fullname-error').text = "Fullname length must be greater than 10";
//   }
// }