<?php
$errors = '';
$myemail = 'osasosawaye44@yahoo.com';//<-----Put Your email address here.
if(empty($_POST['myname'])  || 
   empty($_POST['myemail']) || 
   empty($_POST['myphone'])  ||
   empty($_POST['mymessage']))
{
    $errors .= "\n Error: all fields are required";
}
 
$name = $_POST['myname']; 
$email_address = $_POST['myemail']; 
$phone_number = $_POST['myphone']; 
$message = $_POST['mymessage']; 
 
if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}
//compose and send email
if( empty($errors))
 
{
 
$to = $myemail;
 
$email_subject = "Contact form submission: $name";
 
$email_body = "You have received a new message. ".
 
" Here are the details:\n Name: $name \n Phone number: $phone_number \n".
 
"Email: $email_address\n Message: \n $message";
 
$mail = mail($to,$email_subject,$email_body,"");
if($mail){
  echo "Thank you for contacting me. Will get back to you as soon as possible";
  header('Location: ../HTML/index.html');
  
}else{
  echo "Mail sending failed."; 
}
}
?>