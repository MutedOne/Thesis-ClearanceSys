<?php
include '../database.php';
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET");


$rawPostData = json_decode(file_get_contents("php://input"),true);


 $conn =query("select  * from student where id=".$rawPostData['id']);
  print json_encode($conn);

 
 return dbclose();
?>