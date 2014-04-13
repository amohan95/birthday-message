<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<!--[if lte IE 8]><script language="javascript" type="text/javascript" src="excanvas.min.js"></script><![endif]--> 
<html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>Birthday Message!</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width">
	<link href="css/vendor/bootstrap.min.css" rel="stylesheet">
	<link href="css/main.css" rel="stylesheet">
	<link href="css/landing.css" rel="stylesheet">
	<link href="css/main.css" rel="stylesheet">
	<link rel="stylesheet" media="screen" type="text/css" href="colorpicker/css/colorpicker.css" />
	<style>
	</style>
</head>
<body>
	<!-- Modal -->
	<div class="modal fade" id="linkModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
	        <h4 class="modal-title">Send them this URL!</h4>
	      </div>
	      <div class="modal-body">
	        	<div id="destination-url">
					<div id="url-description"></div>
				</div>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	      </div>
	    </div><!-- /.modal-content -->
	  </div><!-- /.modal-dialog -->
	</div><!-- /.modal -->


	<div class="form-group">
		<div id="top">
			<div id="name">
				<input type="text" id="name-input" placeholder="Type Name Here"/>
			</div>
			<div id="b-day">happy birthday!</div>
				<div id="color-title">Select Color:</div>
				<div id="colorSelector">
					<div id="color-input"></div>
				</div>
		</div>
	<div class="line-outline"></div>
	<div id="line"></div>
	<div class="line-outline"></div>

		<div id="below"><div id="message-title">Message:</div><div id="message"></div></div>
			<div class="col-lg-g">
				<textarea id="message-input" rows="2" placeholder="Type your message text here!"></textarea>
			</div>
		<div id="birthday-container"><div id="create-birthday" class="btn btn-lg btn-default" data-toggle="modal">Create Birthday Party!</div></div>
	</div>

</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>
<script src="js/vendor/bootstrap.min.js"></script>
<script type="text/javascript" src="colorpicker/js/colorpicker.js"></script>
<script src="js/main.js"></script>
</html>