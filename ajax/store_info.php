<?php
require_once(__DIR__ . '/../config.php');

function randomString($length = 6) {  $str = "";  $characters = array_merge(range('A','Z'), range('a','z'), range('0','9'));  $max = count($characters) - 1;  for ($i = 0; $i < $length; $i++) {   $rand = mt_rand(0, $max);   $str .= $characters[$rand];  }  return $str; }

if(isset($_POST['name']) && isset($_POST['message']) && isset($_POST['color']) && isset($_POST['isbday'])){
	header('Content-type: application/json');
	$statement = $db->prepare('INSERT INTO lookup VALUES(:hashId, :name, :message, :color, :isbday)');
	$name = $_POST['name'];
	$message = $_POST['message'];
	$hashId = randomString(8);
	$statement->bindValue(':hashId', $hashId, SQLITE3_TEXT);
	$statement->bindValue(':name', $name, SQLITE3_TEXT);
	$statement->bindValue(':message', $message, SQLITE3_TEXT);
	$statement->bindValue(':color', $_POST['color'], SQLITE3_TEXT);
	$statement->bindValue(':isbday', $_POST['isbday'], SQLITE3_INTEGER);
	$statement->execute();
	echo(json_encode(array("success"=>true, "id"=>$hashId)));
}
else{
	echo(json_encode(array("success"=>false)));
	http_response_code(400);
}
?>