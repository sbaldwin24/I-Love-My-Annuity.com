<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if(!empty($_POST['contactname']) && !empty($_POST['contactemail']) && !empty($_POST['contactphone']) && !empty($_POST['contactzip']) && !empty($_POST['contactage']) && !empty($_POST['contactinvestment'])) {
	$to = 'sterling.baldwin@gmail.com'; // Your e-mail address here.
	$body = "\nName: {$_POST['contactname']}\nEmail: {$_POST['contactemail']}\n\n\n{$_POST['contactphone']}\n\n{$_POST['contactzip']}\n\n{$_POST['contactage']}\n\n{$_POST['contactinvestment']}\n\n";
	mail($to, "Lead from ILoveMyAnnuity.com", $body, "From: {$_POST['contactemail']}"); // E-Mail subject here.
    }
}
?>