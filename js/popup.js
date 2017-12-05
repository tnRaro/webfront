$(function(){
	$(".popup").draggable();

	$(".popup [data-type='close']").click(function(){
		$(this).parent().addClass("closed");
	});

	console.info("popup.js is ready");
});
