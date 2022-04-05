$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 1) {
        $(".header").addClass("active");
        $(".menu a").css("color","black")
        $(".right_menu").css("color","black")
      }
      else{
        $(".header").removeClass("active");
        $(".header").addClass("deactive");
        $(".menu a").css("color","white")
        $(".right_menu").css("color","white")
      }
    })
  })