$(document).ready(function() {				
	//Main div
	$( "#main" ).mouseenter(function(){
		$( this ).stop().animate({
			opacity: 0
		}, 400, function() {});
	});
	$( "#main" ).mouseleave(function(){
		$( this ).stop().animate({
			opacity: 1
		}, 'fast', function() {});
	});
				
	//About div
	$( "#about" ).mouseenter(function(){
		$( this ).stop().animate({
			width: "110px",
			height: "110px",
			left: "645px",
			top: "135px"
		}, 'fast', function() {});
	});
	$( "#about" ).mouseleave(function(){
		$( this ).stop().animate({
			width: "100px",
			height: "100px",
			left: "650px",
			top: "140px"
		}, 'fast', function() {});
	});
				
	//Contact div
	$( "#contact" ).mouseenter(function(){
		$( "#fb" ).stop().animate({
			width: "110px",
			height: "110px",
			left: "1020px",
			top: "145px"
		}, 'fast', function() {});
		$( "#github" ).stop().animate({
			width: "110px",
			height: "110px",
			left: "1195",
			top: "145px"
		}, 'fast', function() {});
		$( "#linkedIn" ).stop().animate({
			width: "110px",
			height: "110px",
			left: "1345px",
			top: "255px"
		}, 'fast', function() {});
		$( "#gmail" ).stop().animate({
			width: "110px",
			height: "110px",
			left: "1345px",
			top: "425px"
		}, 'fast', function() {});
	});
	$( "#contact" ).mouseleave(function(){
		$( "#fb" ).stop().animate({
			width: "100px",
			height: "100px",
			left: "1025px",
			top: "150px"
		}, 'fast', function() {});
		$( "#github" ).stop().animate({
			width: "100px",
			height: "100px",
			left: "1200px",
			top: "150px"
		}, 'fast', function() {});
		$( "#linkedIn" ).stop().animate({
			width: "100px",
			height: "100px",
			left: "1350",
			top: "260px"
		}, 'fast', function() {});
		$( "#gmail" ).stop().animate({
			width: "100px",
			height: "100px",
			left: "1350px",
			top: "430px"
		}, 'fast', function() {});
	});
				
	//Resume div
	$( "#resume" ).mouseenter(function(){
		$( this ).stop().animate({
			width: "234px",
			height: "234px",
			left: "743px",
			top: "283px"
		}, 'fast', function() {});
	});
	$( "#resume" ).mouseleave(function(){
		$( this ).stop().animate({
			width: "220px",
			height: "220px",
			left: "750px",
			top: "290px"
		}, 'fast', function() {});
	});
});			