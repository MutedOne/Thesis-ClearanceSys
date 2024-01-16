<?php
include '../database.php';
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET");


$rawPostData = json_decode(file_get_contents("php://input"),true);

$query = ($_GET);
$str='where';
if(!empty($_GET)){
     $startItem=0;
      $endItem=20;
    foreach ($query as $key => $value) {
        if($value !='' && $key!='page' ){
            $str .= ' '.$key.' like '."'%".$value."%' and";
        }
    }

}

 $conn =query(" select count(id) as total from student ".rtrim($str, "and").";");
  print json_encode($conn);

 
 return dbclose();
?>