function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

$(function () {

	//Слайдера slick
	$('.banner-section__slider').slick({
		dots: true,
		prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="img/arrow-left.svg" alt=""></button>',
		nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="img/arrow-right.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 969,
				settings: {
					arrows: false,
				}
			}
		]
	});
	$(document).ready(function () { $('.banner-section__slider').slick('setPosition'); });
	$('.product-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="img/arrow-left.svg" alt=""></button>',
		nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="img/arrow-right.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 1301,
				settings: {
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 3,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 870,
				settings: {
					slidesToShow: 2,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 590,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true,
				}
			}
		]
	});


	//табы 
	$('.tab').on('click', function (e) {
		e.preventDefault(); //выключает ссылку
		$($(this).siblings()).removeClass('tab--active');
		$($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

		$(this).addClass('tab--active');
		$($(this).attr('href')).addClass('tabs-content--active');

		$('.product-slider').slick('setPosition');
	});

	//добавить в избранное 
	$('.product-item__favorite').on('click', function () {
		$(this).toggleClass('product-item__favorite--active');
	});

	//фильтры
	$('.filter-style').styler();

	$('.filter__item-drop, .filter__extra').on('click', function () {
		$(this).toggleClass('filter__item-drop--active');
		$(this).next().slideToggle('200');
	});

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 100000,
		max: 500000,
	});
});
$('.catalog__filter-btngrid').on('click', function () {
	$(this).addClass('catalog__filter-button--active');
	$('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
	$('.product-item__wrapper').removeClass('product-item__wrapper--list')
});
$('.catalog__filter-btnline').on('click', function () {
	$(this).addClass('catalog__filter-button--active');
	$('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
	$('.product-item__wrapper').addClass('product-item__wrapper--list');
});

//звездный рейтинг
$(".rate-yo").rateYo({
	ratedFill: "#FF4351",
	normalFill: "#C4C4C4",
	spacing: "7px",
});





$('.menu__btn').on('click', function () {
	$('.menu-mobile__list').toggleClass('menu-mobile__list--active');
});

$('.footer__topdrop').on('click', function () {
	$(this).next().slideToggle();
	$(this).toggleClass('footer__topdrop--active')
});
$('.aside__btn').on('click', function () {
	$(this).next().slideToggle();
});

