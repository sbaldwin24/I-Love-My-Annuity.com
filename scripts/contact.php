<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if(!empty($_POST['contactname']) && !empty($_POST['contactemail']) && !empty($_POST['contactphone']) && !empty($_POST['contactzip']) && !empty($_POST['contactage']) && !empty($_POST['contactinvestment'])) {
	$to = "sterling.baldwin@gmail.com, contact@ilovemyannuity.com, ilovemyannuity@gmail.com"; 
	$body = "\nName: {$_POST['contactname']}\nEmail: {$_POST['contactemail']}\nPhone: {$_POST['contactphone']}\nZip: {$_POST['contactzip']}\nAge: {$_POST['contactage']}\nInvestment: {$_POST['contactinvestment']}\n\n";
	mail($to, "Lead from ILoveMyAnnuity.com", $body, "sterling.baldwin@gmail.com"); // E-Mail subject here.
    }
}
?>


