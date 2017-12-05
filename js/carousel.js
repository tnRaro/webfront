$(function(){
	var width = 676;
	var height = 383;

	var imgs = [
		"http://file.aniplustv.com/aniplustv/banner/banner_20171201110502.png",
		"http://file.aniplustv.com/aniplustv/banner/banner_20171204160312.png",
		"http://file.aniplustv.com/aniplustv/banner/banner_20171129104852.jpg",
		"http://file.aniplustv.com/aniplustv/banner/banner_20171201160459.jpg",
		"http://file.aniplustv.com/aniplustv/banner/banner_20171115152928.jpg"
	];
	var fragment = $(document.createDocumentFragment());

	for(var i = 0; i < imgs.length; i ++) {
		var li = $('<li data-index="' + i + '"><a href="#"><img src="' + imgs[i] + '"/></a></li>');

		fragment.append(li);
	}

	$("#event-info-carousel").append(fragment);

	$("#event-info-carousel").slick({
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true
	});


	console.info("carousel.js is ready");
})
