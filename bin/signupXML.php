<?php


$name = $_POST['name'];

$email= $_POST['email'];

$title = $_POST['title'];


	

$xml = simplexml_load_file('file.xml');

$name = htmlentities($name, ENT_COMPAT, 'UTF-8', false);
$email = htmlentities($email, ENT_COMPAT, 'UTF-8', false);
$title = htmlentities($title, ENT_COMPAT, 'UTF-8', false);

$program = $xml->addChild('program');
$program->addChild('name', $name);
$program->addChild('email', $email);
$program->addChild('title', $title);


$dom = new DOMDocument('1.0');
$dom->formatOutput = true;
$dom->preserveWhiteSpace = true;
$dom->loadXML($xml->asXML(), LIBXML_NOBLANKS);
$dom->save('file.xml');


return true;			
?>




