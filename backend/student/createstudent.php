<?php
include '../database.php';
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET");


$rawPostData = json_decode(file_get_contents("php://input"),true);

 $conn =query("INSERT INTO `student`( `username`, `firstname`, `lastname`, `password`) VALUES ('".$rawPostData['username']."','".$rawPostData['firstname']."','".$rawPostData['lastname']."','".$rawPostData['password']."')");
 print json_encode($conn);

 return dbclose();
?>