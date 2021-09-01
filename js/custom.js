$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#home');
    var offset = startchange.offset();
     if (startchange.length){
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
           $(".fixed-top").css('background-color', '#709dca');
        } else {
           $('.fixed-top').css('background-color', 'transparent');
        }
    });
     }
 });


// $(function () {
//     $(document).scroll(function () {
//       var $nav = $(".navbar-fixed-top");
//       $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
//   });
  


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  items:3,
  autoplay:true,
  autoplayTimeout:4000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});