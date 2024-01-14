<?php
function setup(){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "clearancesys";
    
    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);
    return $conn;
}

    
function query($query){

    // Check connection
    if (setup()->connect_error) {
        die("Connection failed: " . setup()->connect_error);
    }
    $res = setup()->query($query);
    if($res == true){
        if(str_contains($query, 'select')){
            $selres= $res->fetch_all(MYSQLI_ASSOC);
            if($selres!=null){
                return $selres;
            }else{
                return [];
            }
        }else{
            return $res;
        }
    }
    
}

function dbclose(){
   return setup()->close();
}


// Perform your database operations here

// Close connection
// $conn->close();
?>
