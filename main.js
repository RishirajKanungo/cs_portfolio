
$(document).ready(function(){
    $('.skill_item').slick({
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 0
            }
          }
        ]
      });
});
