$(document).ready(function() {
	/*======Menu-toggle=============*/
	$(".burger").on("click", function() {

		$(this).toggleClass("active");
		$(".menu").slideToggle();
	});
	/*==========/menu-toggle=========*/

	/*=============Search-toggle================*/
	$("#search-toggle").on("click", function(event) {
		event.preventDefault();
		$(".header-search").slideDown(555);
	});
	$(".header-search__close").on("click", function(event) {
		event.preventDefault();
		$(".header-search").slideUp(555);
	});
	/*============/search-toggle================*/

	/*======Slider-intro=============*/
	$('.intro__slider').slick({
  		infinite: true,
  		fade: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		prevArrow: $('.slider-arrow-prev'),
		nextArrow: $('.slider-arrow-next'),
	});
	/*=============/slider-intro==============*/

	/*======Slider-about=============*/
	$('.about__slider').slick({
  		infinite: true,
  		fade: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		prevArrow: $('.about__slider-arrow-prev'),
		nextArrow: $('.about__slider-arrow-next'),
	});
	/*=============/slider-about==============*/

	/*================Slider-servises=================*/
	if($(window).width() < 767) { 
		$('.servises__slider').slick({
  			infinite: true,
  			slidesToShow: 1,
  			slidesToScroll: 1,
  			prevArrow: $('.servises__slider-arrow-prev'),
			nextArrow: $('.servises__slider-arrow-next'),
		});
	}

	
});