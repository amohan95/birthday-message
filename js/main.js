$(document).ready(function(){
	$('#create-birthday').click(function(){
		var name = $('#name-input').val();
		var message = $('#message-input').val();
		$.ajax({
			type: 'POST',
			url: './ajax/store_info.php',
			data: {'name' : name, 'message' : message, 'color' : '#' + $('.colorpicker_hex input').val() , 'isbday' : 1},
			success: function(data){
				$('#destination-url').html(getDestinationURL(data.id));
			},
			error: function(){

			}
		});
	});

	$('#colorSelector').ColorPicker({
		color: '#0000ff',
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
		}
	});
});

function getDestinationURL(id){
	return window.location.pathname + 'landing.php?id=' + id;
}