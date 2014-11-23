<?php
$errors = '';
$myemail = 'osasosawaye44@yahoo.com';//<-----Put Your email address here.
if(empty($_POST['fullname'])  || 
   empty($_POST['email']) || 
   empty($_POST['phone'])  ||
   empty($_POST['message']))
{
    $errors .= "\n Error: all fields are required";
}
 
$name = $_POST['fullname']; 
$email_address = $_POST['email']; 
$phone_number = $_POST['phone']; 
$message = $_POST['message']; 
 
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
 
" Here are the details:\n Name: $name \n Phone nnumber: $phone_number \n".
 
"Email: $email_address\n Message \n $message";
 
$headers = "From: $myemail\n";
 
$headers .= "Reply-To: $email_address";
 
$mail = mail($to,$email_subject,$email_body,$headers);

if($mail){
  echo "Thank you for using our mail form";
}else{
  echo "Mail sending failed."; 
}

header('Location: ../HTML/index.html');

 
}

?>