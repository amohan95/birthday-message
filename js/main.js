$(document).ready(function(){
	$('#create-birthday').click(function(){
		var name = $('#name-input').val();
		var message = $('#message-input').val();
		if(name.length != 0 || message.length != 0){
			$.ajax({
				type: 'POST',
				url: './ajax/store_info.php',
				data: {'name' : name, 'message' : message, 'color' : '#' + $('.colorpicker_hex input').val() , 'isbday' : checkMessage(message)},
				success: function(data){
					$("#linkModal").modal("show");
					$('#destination-url').html('<a target="_blank" href=' + getDestinationURL(data.id) + '>' + document.URL.substring(0, document.URL.length - 1) + getDestinationURL(data.id) + '</a>');
				},
				error: function(){

				}
			});
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

	$('#copy-url').click(function(){
		copyToClipboard($('#destination-url a').text());
	});

});

function getDestinationURL(id){
	return window.location.pathname + 'landing.php?id=' + id;
}

function checkMessage(message){
	if(message.toLowerCase().search('fuck you') != -1) {
		return 0;
	}
	else{
		return 1;
	}
}

function copyToClipboard(text) {
  window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}