/*----------- JS Blog Slider ------------*/
$(document).ready(function(){
    var data = {
      dots: true,
      arrows: false,
      speed: 300,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      centerMode: true,
      variableWidth: false,
    };
    $(".blog-slider").slick(data);

    $('.menu-icon').click(function (e) { 
      e.preventDefault();
      $('.row').addClass('active');
    });
    $('.close').click(function (e) { 
      e.preventDefault();
      $('.row').removeClass('active');
    });
  });
/*----------- End JS Blog Slider ------------*/

/*----------- Header Scroll -------------*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
  } else {
      document.getElementById("header").style.top = "-105px";
  }
  prevScrollpos = currentScrollPos;
}     
/*----------- End Header Scroll -------------*/

/*------------- Menu ---------------*/

/*------------- End Menu ---------------*/
