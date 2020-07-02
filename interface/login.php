<?php
    include('./conn.php');

    $user_name = $_REQUEST['userName'];
    $password = $_REQUEST['password'];
    
    $sql = "SELECT `user_name` FROM `user` WHERE user_name = '$user_name' and user_password = '$password'";

    $res = $mysqli->query($sql);

    $row = $res->fetch_assoc();

    $json = json_encode($row);

    echo $json;

    $mysqli->close();

?>