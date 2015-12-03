<?php

$id = $_POST['id'];
$permission = $_POST['permission'];

$servers = simplexml_load_file('file.xml');

foreach( $servers->xpath("program[@id='$id']") as $t ) {
  $t->status = "$permission";
}


$servers->asXml('file.xml');
return true;
?>