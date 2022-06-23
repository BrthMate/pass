<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname ="myDB";

$connToServer = mysqli_connect($servername, $username, $password);
if(!$connToServer){
  //echo "Database connection error".mysqli_connect_error();
}
else{
  if(checkdb($connToServer,$dbname)){
    createTable(connect($servername, $username, $password,$dbname));
  };
  $conn=connect($servername, $username, $password,$dbname);
} 

function checkdb($connToServer,$dbname) {
  if (!mysqli_select_db($connToServer, $dbname)) {
    $sql = "CREATE DATABASE ".$dbname;
    if ($connToServer->query($sql) === true) {
        //echo "Database created successfully";
        return true;
    } else {
        //echo "Error creating database: " . $connToServer->error;
    }
  }
  else{
    //echo "Database is allready exist";
    return false;
  }
}

function createTable($conn){
    $query = "CREATE TABLE users (
      id int(11) AUTO_INCREMENT,
      email varchar(255) NOT NULL,
      password varchar(255) NOT NULL,
      lastName varchar(255) NOT NULL,
      firstName varchar(255) NOT NULL,
      date DATE NOT NULL,
      PRIMARY KEY  (id)
      )";
    mysqli_query($conn, $query);
}

function connect($servername, $username, $password,$dbname){
  $conn=mysqli_connect($servername, $username, $password,$dbname);
  if(!$conn){
    //echo "Database connection error".mysqli_connect_error();
  }else{
    return $conn;
  }
}
