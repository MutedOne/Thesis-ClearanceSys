<?php
include '../database.php';
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET");


$rawPostData = json_decode(file_get_contents("php://input"),true);
$str='';
foreach ($rawPostData as $key => $value) {
    if($value !='' && $key != 'id' && $key != 'password'  ){
        $str .= ' '.$key.' = '."'".$value."' ,";
    }
}

 $conn =query(" update student set ".rtrim($str, ",")." where id=".$rawPostData['id']);
  print json_encode($conn);

 
 return dbclose();
?>