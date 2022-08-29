$(document).ready(function () {
	$('.menu-burger__header').click(function () {
		$('.menu-burger__header').addClass('open-menu').removeClass('close-menu');
		$('.menu').addClass('open-menu').removeClass('close-menu');
		$('body').addClass('fixed-page').removeClass('unfixed-page');
		$('.menu__close').addClass('appear-close').removeClass('hide-close');
	});
	$('.menu__close').click(function () {
		$('.menu-burger__header').addClass('close-menu').removeClass('open-menu');
		$('.menu').addClass('close-menu').removeClass('open-menu');
		$('body').addClass('unfixed-page').removeClass('fixed-page');
		$('.menu__close').addClass('hide-close').removeClass('appear-close');
	});
});

