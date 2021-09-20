	/*==============Tabs=============*/
	function tab(n)
{
  $('.block__tabs a').removeClass('active');
  $('.block__tabs a.t'+n).addClass('active');
  $('.block__tab').fadeOut(0);
  $('.block__tab.tab_'+n).fadeIn(222);

  $('.projects__slider').slick('refresh');

};

function tabs(n)
{
  $('.block__tabs a').removeClass('active');
  $('.block__tabs a.t'+n).addClass('active');
  $('.block__tab').fadeOut(0);
  $('.block__tab.tab_'+n).fadeIn(222);
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

	/*=============FAQ-toggle================*/
	$(".timetable__btn-more").on("click", function(event) {
		event.preventDefault();
		$(".timetable__more").slideToggle(333);
	});

	/*=============Timetable-more================*/
	$(".faq-block__item").on("click", function() {
		$(this).find(".faq-block__answer").slideToggle(333);
		$(this).find(".faq-block__question").toggleClass('active');
	});

	/*===============Form-popup=================*/
	$(".btn-open").on("click", function(event) {
		event.preventDefault();
		$(".form-popup").fadeIn(333);
 
		$('.form-popup').css('top', $(window).scrollTop()+'px');
		$(".form-popup__inner").fadeIn(333);
		$('body').addClass("hidden");
	});
	$(".form-popup__close,  .closex, btn-close").on("click", function(event) {
		event.preventDefault();
		$(".form-popup").fadeOut('222');
		$(".form-popup__inner").fadeOut(222);
		$('body').removeClass("hidden");
	});
/*==============/Form-popup=================*/





	/*======Select-styler=============*/
	$(function() {
		$('select, .input-file').styler();
	});
	/*======/select=============*/

/*=======================Sliders========================*/
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

/*======Page-slider=============*/
	$('.page-slider__slider').slick({
  		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		prevArrow: $('.page-slider-arrow-prev'),
		nextArrow: $('.page-slider-arrow-next'),
		responsive: [
     {
       breakpoint: 992,
      settings: {
        infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		prevArrow: $('.page-slider-arrow-prev'),
		nextArrow: $('.page-slider-arrow-next'),
		}
      },
      {
       breakpoint: 600,
      settings: {
        infinite: true,
  		slidesToShow: 2,
  		slidesToScroll: 1,
  		prevArrow: $('.page-slider-arrow-prev'),
		nextArrow: $('.page-slider-arrow-next'),
		}
      },
      {
       breakpoint: 376,
      settings: {
        infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		prevArrow: $('.page-slider-arrow-prev'),
		nextArrow: $('.page-slider-arrow-next'),
		}
      }
  ]
	});
	/*=============/page-slider==============*/

/*=======================/sliders========================*/

		


	
});



 
  