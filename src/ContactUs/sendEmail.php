<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $subject = "Contact Form Submission from " . $data['name'];
    $message = "Name: " . $data['name'] . "\nEmail: " . $data['email'] . "\n\nMessage:\n" . $data['message'];

    $headers = "From: " . $data['email'];

    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo "Email sent successfully.";
    } else {
        http_response_code(500);
        echo "Failed to send email.";
    }
}
?>
