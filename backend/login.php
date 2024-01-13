<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept");

$rawPostData = file_get_contents("php://input");

// // Decode the JSON data if needed
// $postData = json_decode($rawPostData);

 
 // Echo the JSON data
 echo $rawPostData;
?>