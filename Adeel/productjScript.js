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

// Add Quantity Button
function wcqib_refresh_quantity_increments() {
  jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
      var c = jQuery(b);
      c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
  })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function() {
  var a = this,
      b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function() {
  wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function() {
  wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function() {
  var a = jQuery(this).closest(".quantity").find(".qty"),
      b = parseFloat(a.val()),
      c = parseFloat(a.attr("max")),
      d = parseFloat(a.attr("min")),
      e = a.attr("step");
  b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});

