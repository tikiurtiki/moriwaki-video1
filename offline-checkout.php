<?php

require_once( dirname(__FILE__). '/stripe/init.php');

// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
\Stripe\Stripe::setApiKey
("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");

// Token is created using Stripe.js or Checkout!
// Get the payment token submitted by the form:
$token = $_POST['stripeToken'];
$email = $_POST['stripeEmail'];

// フォームから情報を取得:
try {
  $charge = \Stripe\Charge::create(array(
    "amount" => 50000,
    "description" => "MORIWAKI Video",
    "currency" => "jpy",
    "source" => $token,
    "receipt_email" => $email,
  ));
}catch (\Stripe\Error\Card $e) {
  // 決済失敗時の処理
  die('決済が完了しませんでした');
}

// 決済処理完了後に飛ばすページ
header('Location: /thanks-reserve.html');
exit;

?>