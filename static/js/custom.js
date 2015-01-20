var winWidth, winHeight;

$(document).ready(function(){

    winWidth = $(window).width();
    winHeight = $(window).height();

    $('#logo').css('width',
        $('#main-menu').children().eq(1).offset().left + $('#main-menu').children().eq(1).width() - $('#main-menu').offset().left
        );

	$('#stopmusic').clickToggle(
		function () {document.getElementById('player').pause()},
		function () {document.getElementById('player').play()}
		);
});

$(window).resize(function(){
	winWidth = $(window).width();
	winHeight = $(window).height();

    $('#logo').css('width',
    $('#main-menu').children().eq(1).offset().left + $('#main-menu').children().eq(1).width() - $('#main-menu').offset().left
    );


})

(function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));