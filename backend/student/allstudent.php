<?php
include '../database.php';
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET");


$rawPostData = json_decode(file_get_contents("php://input"),true);

$query = ($_GET);
$str='where';
if(!empty($_GET)){
     $startItem=1;
      $endItem=20;
    foreach ($query as $key => $value) {
        if($value !='' && $key!='page' ){
            $str .= ' '.$key.' like '."'%".$value."%' and";
        }elseif($key=='page'){
          
            if ( $value === 1) {
                $startItem = 1;
                $endItem = 20;
              } else {
                $startItem = ( $value - 1) * 20 + 1;
                $endItem = $startItem + 20 - 1;
              }
              $str .= ' rn > '.$startItem .' and rn<'.$endItem. ' and';
        }
    }

}

 $conn =query(" select * from (select *,  ROW_NUMBER() OVER ( ORDER BY id desc ) rn from student ) as student ".rtrim($str, "and")." order by id desc ;");
 print json_encode($conn);

 
 return dbclose();
?>