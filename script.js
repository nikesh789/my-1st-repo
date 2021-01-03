$('#btn').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	var randomBkg = '#'+Math.random().toString().slice(2,8);
	$('body').css('background-color', randomBkg);
});