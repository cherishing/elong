$(document).ready(function (){
	$("#serhotel").click(function (){
		$(".searchhotel").show();
		$(this).css({"height":"40px"}).siblings().css({"height":"39px"});
		$(".searchshort").hide();
		$(".searchhongk").hide();
	});
	$("#sershort").click(function (){
		$(".searchshort").show();
		$(this).css({"height":"40px"}).siblings().css({"height":"39px"});
		$(".searchhotel").hide();
		$(".searchhongk").hide();
	});
 	$("#serhongk").click(function (){
		$(".searchhongk").show();
		$(this).css({"height":"40px"}).siblings().css({"height":"39px"});
		$(".searchhotel").hide();
		$(".searchshort").hide();
	});
});