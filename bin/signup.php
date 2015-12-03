<?php


$name = $_POST['name'];
$namepublic = $_POST['namepublic'];
$email= $_POST['email'];
$emailpublic = $_POST['emailpublic'];
$title = $_POST['title'];
$webpage = $_POST['webpage'];
$image = $_POST['image'];
$age = $_POST['age'];
$cost = $_POST['cost'];
$startdate = $_POST['startdate'];
$enddate = $_POST['enddate'];
$starthour = $_POST['starthour'];
$endhour = $_POST['endhour'];
$location = $_POST['location'];
$description = $_POST['description'];
$otherinfo = $_POST['otherinfo'];
$date = new DateTime();
$date = $date->format("m/d/y");

$xml = simplexml_load_file('file.xml');

$name = htmlentities($name, ENT_COMPAT, 'UTF-8', false);
$age = htmlentities($age, ENT_COMPAT, 'UTF-8', false);
$email = htmlentities($email, ENT_COMPAT, 'UTF-8', false);
$title = htmlentities($title, ENT_COMPAT, 'UTF-8', false);
$webpage = htmlentities($webpage, ENT_COMPAT, 'UTF-8', false);
$image = htmlentities($image, ENT_COMPAT, 'UTF-8', false);
$cost = htmlentities($cost, ENT_COMPAT, 'UTF-8', false);
$startdate = htmlentities($startdate, ENT_COMPAT, 'UTF-8', false);
$enddate = htmlentities($enddate, ENT_COMPAT, 'UTF-8', false);
$starthour = htmlentities($starthour, ENT_COMPAT, 'UTF-8', false);
$endhour = htmlentities($endhour, ENT_COMPAT, 'UTF-8', false);
$location = htmlentities($location, ENT_COMPAT, 'UTF-8', false);
$description = htmlentities($description, ENT_COMPAT, 'UTF-8', false);
$date = htmlentities($date, ENT_COMPAT, 'UTF-8', false);







if (($emailpublic == "Unpublic") and ($namepublic =="Unpublic")){
 $condition = "neither";
 }else if (($emailpublic == "Unpublic") and ($namepublic =="Public")){
 $condition = "nameonly";
 }else if (($emailpublic == "Public") and ($namepublic =="Unpublic")){
 $condition = "emailonly";
 } else {
 $condition = "both";
 } 

$condition = htmlentities($condition, ENT_COMPAT, 'UTF-8', false);

$count = count($xml)+1;
$count = htmlentities($count, ENT_COMPAT, 'UTF-8', false);
$program = $xml->addChild('program');
$program->addAttribute('id', $count);
$program->addChild('date', $date);
$program->addChild('name', $name);
$program->addChild('email', $email);
$program->addChild('title', $title);
$program->addChild('webpage', $webpage);
$program->addChild('age', $age);
$program->addChild('cost', $cost);
$program->addChild('startdate', $startdate);
$program->addChild('enddate', $enddate);
$program->addChild('starthour', $starthour);
$program->addChild('endhour', $endhour);
$program->addChild('image', $image);
$program->addChild('location', $location);
$program->addChild('description', $description);
$program->addChild('condition', $condition);
$program->addChild('status','pending');
//the data

$to      = 'cise@cnu.edu';
$subject = "Project $count New Project Submission at $date";
$message = "Project ID: $count
Activity webpage: $webpage
Contact name: $name
Contact email: $email
Project title: $title
Project image link: $image
Participant age: $age
Cost for this activity : $cost
Activity start date: $startdate
Activity end date: $enddate
Activity start hour: $starthour
Activity end hour: $endhour
The activity location information: $location
Activity's description: $description.
Other information: $otherinfo
Visit this webpage to accept this project: http://www.pcs.cnu.edu/~Phu.Quach/cise/permission.html"; 
$headers = "From: $email" . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

$rawdata = "$date
$name    | $namepublic  
$email   | $emailpublic
$webpage
$title 
$cost    
$startdate     | $enddate 
$starthour     | $endhour 
$location                  |
$description               |
$otherinfo                 |
\n";




//open the file and choose the mode

$fh = fopen("users.txt", "a");

fwrite($fh, $rawdata);




//close the file

fclose($fh);

$dom = new DOMDocument('1.0');
$dom->formatOutput = true;
$dom->preserveWhiteSpace = true;
$dom->loadXML($xml->asXML(), LIBXML_NOBLANKS);
$dom->save('file.xml');

return true;			
?>




