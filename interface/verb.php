<?php
    include('./conn.php');

    $user_name = $_REQUEST['userName'];
    $password = $_REQUEST['password'];
    

    $sql = "INSERT INTO `user`(`user_name`, `user_password`) VALUES ('$user_name','$password')";

    $mysqli->query($sql);

    // echo '<script>alert("注册成功");</script>';

    $mysqli->close();

    

?>