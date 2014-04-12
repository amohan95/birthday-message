$(document).ready(function(){
	$.ajax({
			type: 'POST',
			url: './ajax/store_info.php',
			data: {'name' : 'Ananth', 'message' : "Hello.\nMy name is bananth.", 'color' : "#666666", 'isbday' : '1'},
			success: function(data){
				console.log(data);
			},
			error: function(){
				
			}
		});
});