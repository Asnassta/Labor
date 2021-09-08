	/*==============Tabs=============*/
	function tab(n)
{
  $('.block__tabs a').removeClass('active');
  $('.block__tabs a.t'+n).addClass('active');
  $('.block__tab').fadeOut(0);
  $('.block__tab.tab_'+n).fadeIn(222);

  $('.projects__slider').slick('refresh');

  
};

$(document).ready(function() {
	/*======Menu-toggle=============*/
	
	if($(window).width() > 766) { 
		$(".burger").on("click", function() {

			$(this).toggleClass("active");
			$(".menu").slideToggle(333);
		});
	} else {
		$(".burger").on("click", function() {

			$(this).toggleClass("active");
			$(".menu").slideToggle(666);
		});
	}
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

	/*===============Gallery-zoom=================*/
	/*$(".page-gallery__photo").on("click", function() {
		$(this).next().fadeIn(333);
 
		$(this).next().css('top', $(window).scrollTop()+'px');
		$(this).next().find(".gallery-zoom__inner").fadeIn(333);
		$('body').addClass("hidden");
	});
	$(".gallery-zoom__close,  .closex").on("click", function(event) {
		event.preventDefault();
		$(".gallery-zoom").fadeOut('222');
		$('body').removeClass("hidden");
	});*/
/*==============/gallery-zoom=================*/

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


	/*======Projects__slider=============*/
	$('.projects__slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		prevArrow: $('.projects__slider-arrow-prev'),
		nextArrow: $('.projects__slider-arrow-next'),
	});
	/*=============/projects__slider==============*/

	/*======Helpful__slider=============*/
	$('.helpful__slider').slick({
  		infinite: true,
  		slidesToShow: 6,
  		slidesToScroll: 1,
  		prevArrow: $('.helpful__slider-arrow-prev'),
		nextArrow: $('.helpful__slider-arrow-next'),
		responsive: [
    {
      breakpoint: 1200,
      settings: {
        infinite: true,
  		slidesToShow: 5,
  		slidesToScroll: 1,
  		prevArrow: $('.helpful__slider-arrow-prev'),
		nextArrow: $('.helpful__slider-arrow-next'),
		}
     },
     {
       breakpoint: 880,
      settings: {
        infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		prevArrow: $('.helpful__slider-arrow-prev'),
		nextArrow: $('.helpful__slider-arrow-next'),
		}
      },
      {
       breakpoint: 766,
      settings: {
        infinite: true,
  		slidesToShow: 2,
  		slidesToScroll: 1,
  		prevArrow: $('.helpful__slider-arrow-prev'),
		nextArrow: $('.helpful__slider-arrow-next'),
		}
      },
      {
       breakpoint: 415,
      settings: {
        infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		prevArrow: $('.helpful__slider-arrow-prev'),
		nextArrow: $('.helpful__slider-arrow-next'),
		}
      }
  ]
	});
	/*=============/helpful__slider==============*/


		



	
});