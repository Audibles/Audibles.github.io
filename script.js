$(document).ready(function() {				
	//Main div
	$( "#main" ).mouseenter(function(){
		$( this ).animate({
			opacity: 0
		}, 400, function() {});
	});
	$( "#main" ).mouseleave(function(){
		$( this ).animate({
			opacity: 1
		}, 400, function() {});
	});
				
	//About div
	$( "#about" ).mouseenter(function(){
		$( this ).animate({
			width: "+=10px",
			height: "+=10px",
			left: "-=5px",
			top: "-=5px"
		}, 400, function() {});
	});
	$( "#about" ).mouseleave(function(){
		$( this ).animate({
			width: "-=10px",
			height: "-=10px",
			left: "+=5px",
			top: "+=5px"
		}, 400, function() {});
	});
				
	//Contact div
	$( "#contact" ).mouseenter(function(){
		$( ".icon" ).animate({
			width: "+=10px",
			height: "+=10px",
			left: "-=5px",
			top: "-=5px"
		}, 400, function() {});
		$( "#fb" ).animate({
			width: "+=10px",
			height: "+=10px",
			left: "-=5px",
			top: "-=5px"
		}, 400, function() {});
		$( "#github" ).animate({
			width: "+=10px",
			height: "+=10px",
			left: "-=5px",
			top: "-=5px"
		}, 400, function() {});
		$( "#linkedIn" ).animate({
			width: "+=10px",
			height: "+=10px",
			left: "-=5px",
			top: "-=5px"
		}, 400, function() {});
		$( "#gmail" ).animate({
			width: "+=10px",
			height: "+=10px",
			left: "-=5px",
			top: "-=5px"
		}, 400, function() {});
	});
	$( "#contact" ).mouseleave(function(){
		$( ".icon" ).animate({
			width: "-=10px",
			height: "-=10px",
			left: "+=5px",
			top: "+=5px"
		}, 400, function() {});
		$( "#fb" ).animate({
			width: "-=10px",
			height: "-=10px",
			left: "+=5px",
			top: "+=5px"
		}, 400, function() {});
		$( "#github" ).animate({
			width: "-=10px",
			height: "-=10px",
			left: "+=5px",
			top: "+=5px"
		}, 400, function() {});
		$( "#linkedIn" ).animate({
			width: "-=10px",
			height: "-=10px",
			left: "+=5px",
			top: "+=5px"
		}, 400, function() {});
		$( "#gmail" ).animate({
			width: "-=10px",
			height: "-=10px",
			left: "+=5px",
			top: "+=5px"
		}, 400, function() {});
	});
				
	//Resume div
	$( "#resume" ).mouseenter(function(){
		$( this ).animate({
			width: "+=15px",
			height: "+=15px",
			left: "-=7.5px",
			top: "-=7.5px"
		}, 400, function() {});
	});
	$( "#resume" ).mouseleave(function(){
		$( this ).animate({
			width: "-=15px",
			height: "-=15px",
			left: "+=7.5px",
			top: "+=7.5px"
		}, 400, function() {});
	});
});			