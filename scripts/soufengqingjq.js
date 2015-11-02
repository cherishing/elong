$(document).ready(function (e){	
	$("#sm li").width(200);
	$("#sm li").on("mouseover",function (){
		$(":animated").stop(true,false);
		$(this).animate({width:400})      
		.siblings().animate({width:160})
		$(this).find("a").find(".mask_b").css({opacity:"0"});
	});
	$("#sm li").on("mouseout",function (){
		$("#sm li").animate({width:200});
		// $("#sm li").first().animate({width:400});
		$(this).find("a").find(".mask_b").css({opacity:1});
        
	});

});