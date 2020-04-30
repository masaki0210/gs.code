// jsを記述する際はここに記載していく

// ヘッダーを透明にする

$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
        $('header').css('opacity', 0.8);
      } else {
        $('header').css('opacity', 1);
      }
    });
  });

  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    centeredSlides: true,
	slidesPerView: 4,
	autoplay: {
	delay: 3000,
	stopOnLastSlide: false,
	disableOnInteraction: false,
	reverseDirection: false
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});