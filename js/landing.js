$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: './ajax/get_info.php',
		data: {'id' : getUrlParameter('id')},
		success: function(data){
			if(data['content']['isbday']){
				$('#top').css('background-color', data['content']['color']);
				document.title = 'Happy Birthday ' + data['content']['name']; 
				$('#name').text(data['content']['name']);
				$('#message').html(data['content']['message'].replace('\\', ''));
			}
			else {
				$('#top').css('background-color', 'red');
				document.title = 'Fuck You ' + data['content']['name']; 
				$('#name').text(data['content']['name']);
				$('#message').html(data['content']['message']);
				$('#b-day').text('fuck you!');	
			}
			$('#b-day').fadeIn('slow', function(){
				$('#name').fadeIn('slow', function(){
					$('#message').fadeIn('slow', function(){
						explode($('body'));
					});
				});
			});
		},
		error: function(){
			$('#name').text('ERROR!');
			document.title = 'ERROR';
			$('#top').css('background-color', 'red');
			$('#b-day').text('happy birthday?')
			$('#message').text('Apparently, we can\'t seem to find this ID! We\'re either sorry, or you\'re messing around with something!');
		}
	});
	
	$('body').click(function() {
		explode($('body'));
	});

});

function getUrlParameter(sParam){
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) 
	{
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) 
		{
			return sParameterName[1];
		}
	}
}

$.fn.duplicate = function(count, cloneEvents) {
	var tmp = [];
	for ( var i = 0; i < count; i++ ) {
		$.merge( tmp, this.clone(cloneEvents).get());
	}
	return this.pushStack(tmp);
};

function explode(element) {

	var colors = [  '#ffffff', '#ff0000', '#00ff00', '#ffff00',
	'#00ffff', '#ff00ff', '#ffee00' ]

	var emitter = $('<div></div>').addClass('particle');

	var multicolor = Math.floor(Math.random()*10);

	emitter.css({
		left: Math.floor((window.innerWidth-15)*Math.random()) + 3 + 'px',
		top: Math.floor((window.innerHeight-15)*Math.random()) + 3 + 'px',
		background: colors[Math.floor(Math.random()*colors.length)]
	});
	$('.particle').remove();
	element.append(emitter.duplicate(50));

	$('.particle', element).each(function() {
		var xoffset = Math.floor((10- -11)*Math.random()) + -10;
		var yoffset = Math.floor((10- -11)*Math.random()) + -10;
		if(multicolor > 5) $(this).css('background', colors[Math.floor(Math.random()*colors.length)]);
		$(this).animate({
			"left": "+="+ xoffset*10 +"px",
			"top": "+="+ yoffset*10 +"px",
		},  2500);
		$(this).animate({
			"opacity": "0.1",
			"top": "+=20"
		},  "slow");
	});
}
