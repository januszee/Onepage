<?php
if (isset($_POST['email'])) {

    $to = "przykladowy.mail@domena.pl";
    $name_surname = strip_tags(trim($_POST['name-surname'] ?? ''));
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $subject = strip_tags(trim($_POST['subject'] ?? ''));
    $message = strip_tags(trim($_POST['message'] ?? ''));

    if (!$email || empty($message)) {
        exit('Wprowadzone dane są niepoprawne.');
    }

    $headers = "From: $name_surname <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $ok = mail($to, $subject, $message, $headers, "-f$email");

    if ($ok) {
        echo "Wiadomość została wysłana.";
    } else {
        echo "Wystąpił błąd.";
    }
}


