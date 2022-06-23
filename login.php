<?php
require_once("db.php");
require_once("function.php");
$email = mysqli_real_escape_string($conn, $_POST['email']);
$password = mysqli_real_escape_string($conn, $_POST['password']);

if(!EmptyInputs($email,$password)){
    echo "All input fields are required!";
    exit();
}

if(!userIsExist($conn,$email,$password,"login")){
    echo "$email - This email not Exist!";
    exit();
}
