$('.myslider').slick({
    infinite:true,         // 마지막 슬라이드에서 처음으로 돌아오는 기능 
    //dots:true,             // 슬라이드 표시 점들
    slidesToShow: 1,       // 박스안에 보이는 슬라이드 개수 
    slidesToScroll: 1,     // 한번에 움직이는 슬라이드 개수 
    autoplaySpeed: 1000,
    speed:500,
    fade: true,
    cssEase: 'linear',
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
});

$('.slide-prev').click(function(){ 
  $('.myslider').slick('slickPrev');
} );

$('.slide-next').click(function(){
  $('.myslider').slick('slickNext');
} );  

$('.auto_play').click(function(){   
    if ($('.play_toggle').hasClass("fa-play") ===true) {
     $('.myslider').slick('slickPlay');
    $('.play_toggle').removeClass('fa-play').addClass('fa-pause');
    }else{
        $('.myslider').slick('slickPause');
       $('.play_toggle').removeClass('fa-pause').addClass('fa-play');
    } 
});


