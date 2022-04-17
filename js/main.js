$(function() {


  $(".header__menu-list a, .footer__logo").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

    $('.slider-blog__inner').slick({
        dots:true,
        arrows:false
    });

    $('.menu__btn').on('click', function(){
      $('.header__inner').toggleClass('header__inner--active');
    });
    var mixer = mixitup('.gallery__pictures');

});

