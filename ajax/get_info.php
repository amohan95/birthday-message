<?php
require_once(__DIR__ . '/../config.php');

if(isset($_GET['id'])){
	header('Content-type: application/json');
	$statement = $db->prepare('SELECT * FROM lookup WHERE hashId = :i');
	$statement->bindValue(':i', $_GET['id'], SQLITE3_TEXT);
	$result = $statement->execute()->fetchArray(SQLITE3_ASSOC);
	if($result){
		echo(json_encode(array("success"=>true, "content" => $result)));
	} else {
		echo(json_encode(array("success"=>false)));
	}
} 
else{
	echo(json_encode(array("success"=>false, "test"=>$_GET)));
}

?>