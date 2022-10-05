<?php
$headers= "MIME-Version: 1.0\r\n";
$headers.= 'Content-Type:text/html; charset="utf-8"'."\n";

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $firstname = $_POST['first_name'];
    $mailFrom = $_POST['mail'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $mailTo = 'jeusebastien@gmail.com';
    $subject = 'Nouveau message sur votre site-web, Sébastien';
    $headers .= 'From: '.$mailFrom;
    $txt='
		<html>
			<body>
				<div align="center">
					<u>Nom de l\'expéditeur : </u>'.$firstname.$name.'<br />
					<u>Mail de l\'expéditeur : </u>'.$mailFrom.'<br />
					<br />
					'.nl2br($message).'
					<br />
					<u>Numéro de l\'expéditeur : </u>'.$phone.'<br />
				</div>
			</body>
		</html>
		';

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
</head>
</html>
