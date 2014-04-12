$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: './ajax/get_info.php',
		data: {'id' : getUrlParameter('id')},
		success: function(data){

		},
		error: function(){
			
		}
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