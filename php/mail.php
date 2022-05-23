<?php   
require_once('phpmailer/PHPMailerAutoload.php')
$mail = new PHPMailer;
$mail ->CharSet= 'utf-8';
$name = $_POST['User_name'];
$email= $_POST['User_email']
$question= $_POST['User_question']


$mail->isSMTP();
$mail->Host = 'smtp.mail.ru'
$mail->SMTPAuth = true;
$mail->Username=';';
$mail->Password='';
$mail->smtpSecure='ssl';
$mail->Port = 465;
$mail-> setFrom('');
$mail-> addAddress('');
$mail->isHTML(true);



$mail->Subject = 'Вопрос от пользователя';
$mail->Body   ='' .$name . 'оставил вопрос, его почта ' .$email. '<br> его вопрос:' .$question;
$mail->AltBody = '';

if(!$$mail->send())
{
    echo 'Error';
}
else 'Ваша заявка успешно отправлена'
?> 