<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,
Authorization, X-Requested-With");
 include('connect.php');
 $data= json_decode(file_get_contents("php://input"));

 $username=$data->username;
 $fullname=$data->fullname;
 $email=$data->email;
 $password=$data->password;
if ($username && $fullname && $email && $password)
{
    $sql="insert into userform(
        username,
        name,
        email,
        password
    )
    value(
        '$username',
        '$fullname',
        '$email',
        '$password'
    )";
    if($connect->query($sql)==true){
        echo "Thêm thành công";
        }
        else{
        echo "Thêm không thành công";
        }
}
?>