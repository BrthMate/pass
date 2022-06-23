<?php
require_once("db.php");
require_once("function.php");

$lastName = mysqli_real_escape_string($conn, $_POST['lastName']);
$firstName = mysqli_real_escape_string($conn, $_POST['firstName']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$date = mysqli_real_escape_string($conn, $_POST['date']);
$repassword = mysqli_real_escape_string($conn, $_POST['re-password']);
$password = mysqli_real_escape_string($conn, $_POST['password']);


if(!EmptyInputsRegist($email,$password,$lastName,$firstName,$date,$repassword)){
    echo "All input fields are required!";
    exit();
}

if(validEmail($email)){
    echo "$email is not a valid email!";
    exit();
}

if(userIsExist($conn,$email,$password,"regist")){
    echo "$email - This email already exist!";
    exit();
}

if(passwordIsCorrect($password,$repassword)){
    echo "passwords are not match";
    exit();
}

regist($email,$password,$lastName,$firstName,$date,$repassword,$conn);
