<?php

$recepient = "stativka291@gmail.com";
$sitename = "Название сайта";

if (isset($_POST["group1"])) {
    $name = trim($_POST["group1"]);
    $karkas = trim($_POST["group2"]);
    $dostavka = trim($_POST["group3"]);
    $oplata = trim($_POST["group4"]);

    $pagetitle = "Новая заявка с сайта \"$sitename\"";
    $message = "Имя: $name\Karkas: $karkas \dostavka:$dostavka \Oplata$oplata";
    mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
} else if (isset($_POST["group5"])) {
    $name = trim($_POST["group5"]);
    $karkas = trim($_POST["group6"]);
    $dostavka = trim($_POST["group7"]);
    $oplata = trim($_POST["group8"]);

    $pagetitle = "Новая заявка с сайта \"$sitename\"";
    $message = "Имя: $name\Karkas: $karkas \dostavka:$dostavka \Oplata$oplata";
    mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
} else if (isset($_POST["group9"])) {
    $name = trim($_POST["group9"]);
    $karkas = trim($_POST["group10"]);
    $dostavka = trim($_POST["group11"]);
    $oplata = trim($_POST["group12"]);

    $pagetitle = "Новая заявка с сайта \"$sitename\"";
    $message = "Имя: $name\Karkas: $karkas \dostavka:$dostavka \Oplata$oplata";
    mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
}