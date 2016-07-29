$(document).ready(function() {
	$( "#back" ).mouseenter(function(){
		$( this ).stop().animate({
			width: "110px",
			height: "110px",
			left: "1095px",
			top: "120px"
		}, 'fast', function() {});
	});
	$( "#back" ).mouseleave(function(){
		$( this ).stop().animate({
			width: "100px",
			height: "100px",
			left: "1100px",
			top: "125px"
		}, 'fast', function() {});
	});
});