<?php
session_start();
if(!isset($_SESSION['user'])){
    header('location:login.php');
}
$con = mysqli_connect('localhost','root','');

mysqli_select_db($con,'ph');

$email = $_POST['email'];
$user = $_POST['user'];
$password = $_POST['password'];

$s = "select * from ud where user = '$user' && password = '$password'";
$result = mysqli_query($con,$s);
$num = mysqli_num_rows($result);

if($num==1)
{
    $_SESSION['user'] = $user;
    header('location:homepage.php');
}
else{
    header('location:login.php');
}
?>