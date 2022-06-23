<?php

function EmptyInputs($email,$password){
    if(!empty($email) && !empty($password)){
        return true;
    }
}

function EmptyInputsRegist($email,$password,$lastName,$firstName,$date,$repassword){
    if(!empty($firstName) && !empty($lastName) && !empty($date) && !empty($email) && !empty($password) && !empty($repassword)){
        return true;
    }
}

function userIsExist($conn,$email,$password,$option){
    $sql = "SELECT * FROM users WHERE email = ?";
    
    $stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($stmt, $sql);
    mysqli_stmt_bind_param($stmt,'s', $email );
    mysqli_stmt_execute($stmt);

    $result = mysqli_stmt_get_result($stmt);
    
    if(mysqli_num_rows($result) > 0){
        if($option == "login"){
            Login($result,$password);
        }
        return true;
    }else{
        return false;
    }
}

function validEmail($email){
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        return false;
    }
}

function passwordIsCorrect($password,$repassword){
    if($repassword != $password){
        return false;
    }
}

function Login($sql,$password){
    $row = mysqli_fetch_assoc($sql);
    $user_pass = md5($password);
    $enc_pass = $row['password'];
    if($user_pass === $enc_pass){
        echo "success";
    }else{
        echo "Email or Password is Incorrect!";
    }
}

function regist($email,$password,$lastName,$firstName,$date,$repassword,$conn){
    $encrypt_pass = md5($password);

    $sql ="INSERT INTO users (firstName, lastName, email, password, date) VALUES (?,?,?,?,?)";
    $stmt = mysqli_stmt_init($conn);
    mysqli_stmt_prepare($stmt, $sql);
    mysqli_stmt_bind_param($stmt,'sssss', $firstName,$lastName,$email,$encrypt_pass,$date );

    if(mysqli_stmt_execute($stmt)){
        echo "success";
    }else{
        echo "Something went wrong. Please try again!";
    }
}
