<?php
$con = mysqli_connect('localhost','root','');

mysqli_select_db($con,'ph');

$email = $_POST['email'];
$user = $_POST['user'];
$password = $_POST['password'];

$s = "select * from ud where user = '$user'";
$result = mysqli_query($con,$s);
$num = mysqli_num_rows($result);

if($num==1)
{
    echo "username already taken";
}
else{
    $register = "INSERT INTO `ud` (`email`, `user`, `password`) VALUES ('$email','$user','$password')";
    mysqli_query($con,$register);
    session_start();
    header('location:login.php');
}
?>