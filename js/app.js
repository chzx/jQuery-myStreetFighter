$(document).ready(function () {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	
	.mousedown(function() {
		playHadouken();
		// play hadouken sound
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		// show hadouken and animate it to the right side of the screen
		$('.hadouken').finish().show().animate(
			{'left': '1200px'},
			650,
			function() {
				$(this).hide();
				$(this).css('left', '600px');
			});
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		// ryu goes back to his ready position	
	});
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

 $(document).keydown(function(e){
    if (e.which == 88) { 
   		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-throwing').hide();
		$('.ryu-cool').show();
		playMustard();
    }
});

$(document).keyup(function(e){
    if (e.which == 88) { 
   		$('.ryu-ready').show();
		$('.ryu-cool').hide();
    }
});

function playMustard () {
	$('#mustard')[0].volume = 0.5;
	$('#mustard')[0].play();
}

$(document).ready(function() {
    $("#ryu-theme").get(0).play();
    $('#ryu-theme')[0].volume = 0.3;
});