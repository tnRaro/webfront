$(function(){
	var $sidebar = $(".sidebar"),
		$window = $(window),
		offset = $sidebar.offset(),
		marginTop = offset.top;
	$window.scroll(function(){
		if($window.scrollTop() > offset.top){
			$sidebar.stop().animate({
				marginTop: $window.scrollTop() - offset.top + marginTop
			});
		} else {
			$sidebar.stop().animate({ marginTop: marginTop });
		}
	});

	/*
	이하 sidebar 내용 채우기용 실시간 IOTA 시세
	*/
	function doth(s){
		return s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	function update(){
		$.ajax({
			method: "GET",
			url: "https://api.coinone.co.kr/ticker/",
			data: {
				currency: "iota"
			}
		}).done(function(response){
			console.info(response);

			$("#last").text(doth(response.last));
			$("#volume").text(doth(parseInt(response.volume, 10).toString()));

			var delta = response.last / response.yesterday_last;

			$("#delta").text((delta > 0 && "+") + (delta * 100).toFixed(2) + "%");
			$("#delta").css({
				color: delta >= 0 ? "green" : red
			});
		});
	}
	setInterval(function(){
		update();
	}, 60 * 1000);
	update();

	console.info("sidebar.js is ready");
});
