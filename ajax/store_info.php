<?php
require_once(__DIR__ . '/../config.php');

if(isset($_POST['name']) && isset($_POST['message']) && isset($_POST['color']) && isset($_POST['isbday'])){
	header('Content-type: application/json');
	$statement = $db->prepare('INSERT INTO lookup VALUES(:hashId, :name, :message, :color, :isbday)');
	$name = $_POST['name'];
	$message = $_POST['message'];
	$hashId = $name;
	$hashId = hash('adler32', $name);
	$statement->bindValue(':hashId', $hashId, SQLITE3_TEXT);
	$statement->bindValue(':name', $name, SQLITE3_TEXT);
	$statement->bindValue(':message', $message, SQLITE3_TEXT);
	$statement->bindValue(':color', $_POST['color'], SQLITE3_TEXT);
	$statement->bindValue(':isbday', $_POST['isbday'], SQLITE3_INTEGER);
	$statement->execute();
	echo(json_encode(array("success"=>true, "hashId"=>$hashId)));
}
else{
	echo(json_encode(array("success"=>false, "worth"=>false)));
	http_response_code(400);
}
?>