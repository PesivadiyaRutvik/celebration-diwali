(function ($) {
	"use strict";
	/* ..............................................
	Loader 
	................................................. */

	$(window).on('load', function () {
		$('body').delay(450).css({ 'overflow': 'hidden' });
	});

	/* ..............................................
	Navbar Bar
	................................................. */

	$('.navbar-nav .nav-link').on('click', function () {
		var toggle = $('.navbar-toggler').is(':visible');
		if (toggle) {
			$('.navbar-collapse').collapse('hide');
		}
	});

	/* ..............................................
	Fixed Menu
	................................................. */

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.top-header').addClass('fixed-menu');
		} else {
			$('.top-header').removeClass('fixed-menu');
		}
	});

	/* ..............................................
	Properties Filter
	................................................. */
	var Container = $('.container');
	Container.imagesLoaded(function () {
		var portfolio = $('.properties-menu');
		portfolio.on('click', 'button', function () {
			$(this).addClass('active').siblings().removeClass('active');
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});
		var $grid = $('.properties-list').isotope({
			itemSelector: '.properties-grid'
		});

	});

	/* ..............................................
	Gallery
	................................................. */

	$(document).ready(function () {
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function (item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}
			}
		});
	});

	/* ..............................................
	Scroll To Top
	................................................. */

	$(document).ready(function () {

		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#scroll-to-top').fadeIn();
			} else {
				$('#scroll-to-top').fadeOut();
			}
		});

		$('#scroll-to-top').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
		});

	});


	/* ..............................................
	Smooth Scroll
	................................................. */

	$('a[href*="#"]:not([href="#"])').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 65,
				}, 1000);
				return false;
			}
		}
	});

	/* ..............................................
	Counter
	................................................. */



	(function () {
		const sec = 1000,
			min = sec * 60,
			hr = min * 60,
			d = hr * 24;

		let christmas = "Nov 12, 2023 00:00:00",
			countDown = new Date(christmas).getTime(),
			x = setInterval(function () {

				let now = new Date().getTime(),
					distance = countDown - now;

				document.getElementById("d").innerText = Math.floor(distance / (d)),
					document.getElementById("hr").innerText = Math.floor((distance % (d)) / (hr)),
					document.getElementById("min").innerText = Math.floor((distance % (hr)) / (min)),
					document.getElementById("sec").innerText = Math.floor((distance % (min)) / sec);

				if (distance < 0) {
					let christmasTime = document.getElementById("christmasTime"),
						countdown = document.getElementById("countdown"),
						fest = document.getElementById("fest");

					christmasTime.innerText = "Happy Christmas!";
					countdown.style.display = "none";
					fest.style.display = "block";

					clearInterval(x);
				}
			}, 0)
	}());


	$('#fire2').delay(450).css({ 'display': 'none' });
	$('#fire3').delay(450).css({ 'display': 'none' });

}(jQuery));

function display2() {
	$('#fire1').css({ 'display': 'none' });
	$('#fire2').css({ 'display': 'block' });
}
function display1() {
	$('#fire1').css({ 'display': 'block' });
	$('#fire2').css({ 'display': 'none' });
}

function display3() {
	$('#fire1').remove();
	$('#fire2').remove();
	$('#fire3').css({ 'display': 'block' });

	setTimeout(() => {
		$('#preloader').css({ 'background': '#ffffff' });
	}, 5005);
	setTimeout(() => {
		$('#preloader').css({ 'display': 'none' });
		$('body').css({ 'overflow': 'visible' });
		$('#jetho').innerHTML(`<audio autoplay>
            <source src="./video/jetho.mp3" type="audio/mpeg">
         </audio>`);
	}, 5300)

}
