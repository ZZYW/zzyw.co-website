var winWidth, winHeight;

$(document).ready(function(){
	winWidth = $(window).width();
	winHeight = $(window).height();
	centerTextBlock();
	console.log(winWidth/2 - $('#just-text')/2);
})

$(window).resize(function(){
	winWidth = $(window).width();
	winHeight = $(window).height();
	centerTextBlock();
})


function centerTextBlock(){
	$('#just-text').css("margin-left", winWidth/2 - $('#just-text').width()/2);
	$('#just-text').css("margin-top", winHeight/2 - $('#just-text').height()/2);
}