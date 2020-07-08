<?php 
 $name = $_POST['name'];
 $phone = $_POST['phone'];
 $message = $_POST['message'];

 $subject = "=?utf-8?B?".base64_encode("Messages from the site")."?=";
 $headers = "From: $name\r\nReply-to: $name\r\nContent-Type: text/html; chareset=utf-8\r\n";
 $success = mail("info@standreashotel.com", $subject, $message, $headers);

?>