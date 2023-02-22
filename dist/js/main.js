


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body

$(document).ready(function ($) {
	$body = $('body');
		if(devStatus) {
		pageWidget(['index']);
		pageWidget(['category']);
		pageWidget(['404']);
		pageWidget(['contacts']);
		pageWidget(['news']);
		pageWidget(['policy']);
		pageWidget(['reviews']);
		pageWidget(['shop']);
		pageWidget(['single-news']);
		pageWidget(['single-products']);
		getAllClasses('html', '.elements_list');
	}
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	standartPopup('.popup', '.removePopup', '.trigger');
	standartPopup('.burger', '.removePopup', '.header_burger');
	maps('Великий Новгород', 'Великий Новгород', [36, 49]);
	visibleBtn();
	hoverNavItem();
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function failed(failed) {
	$(failed).toggleClass('active');
		setTimeout(function() {
			$(failed).removeClass('active')
		}, 3000)
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: black'].join(';');
var message = 'Developed by KotoFeelGood Arkada-Studio https://arkada-web.ru/';
console.info('%c%s', styles, message);



$(document).ready(function() {
	const btns = document.querySelectorAll('.btn')

	btns.forEach(el => {
			el.addEventListener('click', function(e) {
					let
							size = Math.max(this.offsetWidth, this.offsetHeight),
							x = e.offsetX - size / 2,
							y = e.offsetY - size / 2,
							wave = this.querySelector('.wave')
	
					// Create an element if it doesn't exist
					if (!wave) {
							wave = document.createElement('span')
							wave.className = 'wave'
					}
					wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
					this.appendChild(wave)
			})
	})
})










$(document).ready(function()  {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})



async function maps(street, city, size) {

	function init() {
		const geocoder = ymaps.geocode(`${street} ${city}`);
		geocoder.then(
			async function (res) {
				var myMapMobile = await new ymaps.Map('map', {
						center: res.geoObjects.get(0).geometry.getCoordinates(),
						zoom: 16,
					}, {
						searchControlProvider: 'yandex#search'
					}),
					myPlacemark = new ymaps.Placemark(myMapMobile.getCenter(), {
						balloonContent: `${street} ${city}`
					}, {
						iconLayout: 'default#image',
						iconImageHref: '/i/global/map.svg',
						iconImageSize: size,
						iconImageOffset: [-5, -38]
					});

				myMapMobile.geoObjects
					.add(myPlacemark)
				myMapMobile.behaviors.disable('scrollZoom')
			}
		);
	}
	await ymaps.ready(init);

}





const aboutSlider = new Swiper('.about_slider', {
	navigation: {
		nextEl: '.next',
		prevEl: '.prev'
	},
	scrollbar: {
		el: '.aboutSlider_scrollbar'
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 21
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 21
		},
		1024: {
			slidesPerView: 2,
			spaceBetween: 21
		},
		1200: {
			slidesPerView: 1.4,
			spaceBetween: 21
		}
	}
})




$(function () {

	if($('.singleproducts_gallery')) {

		var galleryThumbs = new Swiper(".singleProducts_thumb_slider", {
			spaceBetween: 18,
			slidesPerView: 4,
			freeMode: false,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			watchOverflow: true,
			// breakpoints: {
			// 	480: {
			// 		slidesPerView: 2
			// 	},
			// 	768: {
			// 		slidesPerView: 3
			// 	},
			// 	1200: {
			// 		slidesPerView: 5
			// 	}
			// },
		});
		var galleryTop = new Swiper(".singleProducts_slider", {
			direction: "horizontal",
			spaceBetween: 10,
			a11y: {
				prevSlideMessage: "Предыдущий слайд",
				nextSlideMessage: "Следущий слайд",
			},
			navigation: {
				nextEl: '.next_single',
				prevEl: '.prev_single'
			},
			keyboard: {
				enabled: true,
			},
			thumbs: {
				swiper: galleryThumbs
			},
		});
	}
});





const crosselSlider = new Swiper('.crossel_slider', {
	navigation: {
		nextEl: '.next_cross',
		prevEl: '.prev_cross'
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 30
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 30
		}
	}
})

function standartPopup(popups, closes, trigger) {
	let btn =  document.querySelectorAll(trigger)
	let popup = document.querySelector(popups)
	let remove = popup.querySelectorAll(closes)
	let blocked = document.body




	function openPopup() {
		popup.classList.add('active')
		blocked.classList.add('hidden')
	}

	function removePopup() {
		popup.classList.remove('active')
		blocked.classList.remove('hidden')
	}


	btn.forEach(item => {
		item.addEventListener('click', function() {
			openPopup();
		})
	});


	remove.forEach(item => {
		item.addEventListener('click', function() {
			removePopup();
		})
	});
}


// tabs
function tabs(link, block) {
	let linkSelector = $(link),
		blockSelector = $(block);

	$(linkSelector).on('click', function (e) {
		e.preventDefault();

		let $this = $(this),
			currentData = $(this).data('tab');

		$(blockSelector).removeClass('active_tab');
		$(linkSelector).removeClass('active_tab');

		$(block + '[data-tab="' + currentData + '"]').addClass('active_tab');
		$this.addClass('active_tab');

	});
}

tabs('.singleProducts_tab_link>li', '.singleProducts_tab_item');



function visibleBtn() {
	const count = document.querySelectorAll('.reviews_item_txt')
	
	Array.from(count).map((item) => {
		const btnShow = document.querySelector('.reviews_item_more')
		const current = item.innerHTML.length
		if(current <= 90) {
			item.nextElementSibling.style="display: none"
		}

		item.nextElementSibling.addEventListener('click', function() {
			item.classList.toggle('active')
			this.style="display: none"
		})
	})
}






document.addEventListener('DOMContentLoaded', () => {
	loader();
})
function loader() {
	let loader = document.querySelector('.loader')

	
	setTimeout(() => {
		loader.classList.add('is-hidden')
	}, 100)
}






































