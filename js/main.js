$(document).ready(function(){
	$('#create-birthday').click(function(){
		var name = $('#name-input').val();
		var message = $('#message-input').val();
		if(name.length != 0 || message.length != 0){
			if(checkMessage(message)){
				$.ajax({
					type: 'POST',
					url: './ajax/store_info.php',
					data: {'name' : name, 'message' : message, 'color' : '#' + $('.colorpicker_hex input').val() , 'isbday' : 1},
					success: function(data){
						$("#linkModal").modal("show");
						$('#destination-url').html('<a href=' + getDestinationURL(data.id) + '>localhost'
												   + getDestinationURL(data.id) + '</a>');
					},
					error: function(){

					}
				});
			}
			else {
				$.ajax({
					type: 'POST',
					url: './ajax/store_info.php',
					data: {'name' : name, 'message' : message, 'color' : '#' + $('.colorpicker_hex input').val() , 'isbday' : 0},
					success: function(data){
						$('#destination-url').html('<div id="url-description">Send them this URL!</div>' +
												   '<a href=' + getDestinationURL(data.id) + '>localhost'
												   + getDestinationURL(data.id) + '</a>');
					},
					error: function(){

					}
				});
			}
		}
	});
	$('#top').css('background-color', '#ffae00');
	$('#colorSelector').ColorPicker({
		color: '#ffae00',
		onShow: function (colpkr) {
			$(colpkr).fadeIn(500);
			return false;
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb, hex, rgb) {
			$('#colorSelector div').css('backgroundColor', '#' + hex);
			$('#top').css('background-color', '#' + hex);
			$('#create-birthday').css('border-color', '#' +  hex);

		}
	});
});

function getDestinationURL(id){
	return window.location.pathname + 'landing.php?id=' + id;
}

function checkMessage(message){
	if(message.toLowerCase().search('fuck you') != -1) return false;
	else return true;
}