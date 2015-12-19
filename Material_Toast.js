
if (typeof jQuery == 'undefined') {
	console.log("Notice :You Have To Add Jquery Befor Using This Library");
}else{
	$(document).on("click",".toast_material",function(){
		if($('.toast_open').length){
			$('.toast_material').removeClass("fadeInUp");
			$('.toast_material').addClass("fadeOutDown");
			setTimeout(function() {
				$('.toast_material').remove();
			}, 800);
		}
	});
}
function isset(variable) {
    if (typeof variable !== "undefined" && variable !== null) {
        return true;
    } else {
        return false;
    }
}
function Toast_Material(options){
	if(isset(options.position)){
		if(options.position == "right" || options.position == "left"){
			var positionStyle = options.position + ":16px";
		}
		else if(options.position == "center"){
			var positionStyle="";
			$(document).ready(function(){
				$('.toast_material').css({'left': '50%'});
				$(".toast_material").css({'margin-left': -$(".toast_material").outerWidth() / 2 + 'px'});
			});
		}		
	}
	else{
		var positionStyle = "left : 16px";
	}
	if(isset(options.align)){
		var alignStyle = options.align;
		if(alignStyle == "right"){
			var directionStyle = "rtl";
		}
		else if(alignStyle == "left"){
			var directionStyle = "ltr";
		}
		else if(alignStyle == "center"){
			var directionStyle = "ltr";
		}
	}
	else{
		var alignStyle = "left";
		var directionStyle = "ltr";
	}
	if(isset(options.content)){
		var contentText = options.content;
	}
	else{
		var contentText = "";
	}
	if($('.toast_material').length){
		if($('.toast_open').length){
			$('.toast_material').addClass("animated fadeOutDown");
		}
		else{
			$('.toast_material').remove();
		}	
		$('body').append('<div class="toast_material toast_open animated fadeInUp" style="'+ positionStyle +';text-align:'+ alignStyle +'"><p style="direction:'+ directionStyle +'">'+ contentText +'</p></div>');
		setTimeout(function() {
			$('.toast_material').removeClass("fadeInUp");
			$('.toast_material').addClass("fadeOutDown");
		}, 3000);
	}
	else{
		$('body').append('<div class="toast_material toast_open animated fadeInUp" style="'+ positionStyle +';text-align:'+ alignStyle +'"><p style="direction:'+ directionStyle +'">'+ contentText +'</p></div>');
		setTimeout(function() {
			$('.toast_material').removeClass("fadeInUp");
			$('.toast_material').addClass("fadeOutDown");
		}, 3000);
	}
};
