/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","bin/file.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;
var nowdate = new Date();
var today = Date.parse(nowdate);


var x=xmlDoc.getElementsByTagName("program");
for (i=0;i<x.length;i++)
  {
	var expiry = Date.parse(x[i].getElementsByTagName("enddate")[0].childNodes[0].nodeValue) + 172800000;
	if((x[i].getElementsByTagName("status")[0].childNodes[0].nodeValue) == "accepted")
	{
	
	if ( (expiry >=today) ) {
  	document.write("<div class='row'><div class='col-lg-12'><h2 class='page-header'>");
  document.write(x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
    document.write("</h2></div>");
  document.write("<div class='col-md-6'><p>");
  document.write(x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue);
  document.write("<br><strong>Cost for activity :</strong> $");
  document.write(x[i].getElementsByTagName("cost")[0].childNodes[0].nodeValue);
  document.write("<br><strong>Start date : </strong>");
  document.write(x[i].getElementsByTagName("startdate")[0].childNodes[0].nodeValue);
  document.write("<br><strong>End date : </strong>");  
  document.write(x[i].getElementsByTagName("enddate")[0].childNodes[0].nodeValue);
  document.write("<br><strong>From </strong> ");
  document.write(x[i].getElementsByTagName("starthour")[0].childNodes[0].nodeValue);
  document.write(" to ");  
  document.write(x[i].getElementsByTagName("endhour")[0].childNodes[0].nodeValue);
  document.write("<br><strong>Age Participant : </strong>");
  document.write(x[i].getElementsByTagName("age")[0].childNodes[0].nodeValue);
  document.write("<br><strong>Location : </strong>");
  document.write(x[i].getElementsByTagName("location")[0].childNodes[0].nodeValue);
  document.write("</p>");
  document.write("<div class='panel panel-default'><div class='panel-heading'>");
  document.write("<h3 class='panel-title'>Contact information </h3></div><div class='panel-body contact-body'>");
  document.write("<p><strong>Webpage: </strong>");
  document.write(x[i].getElementsByTagName("webpage")[0].childNodes[0].nodeValue);
  
  
  if(x[i].getElementsByTagName("condition")[0].childNodes[0].nodeValue =="both"){
  	document.write("<br><strong>Contact name: </strong>");
  	document.write(x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue);
  	document.write("<br><strong>Contact email: </strong>");
  	document.write(x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue);
  }else if(x[i].getElementsByTagName("condition")[0].childNodes[0].nodeValue =="nameonly"){
  	document.write("<br><strong>Contact name: </strong>");
  	document.write(x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue);
  
  }else if(x[i].getElementsByTagName("condition")[0].childNodes[0].nodeValue =="emailonly"){
  	document.write("<br><strong>Contact email: </strong>");
  	document.write(x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue);
  }
  document.write("</p></div></div>");
  
  document.write("</div>");
  document.write("<div class='col-md-6'><img class='img-responsive' src='");
  document.write(x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue);
  document.write("' alt='Project Image'></div>");
  document.write("</div>");
  }
  
  
	}else if(x[i].getElementsByTagName("status")[0].childNodes[0].nodeValue == "permanent")
	{
	document.write("<div class='row'><div class='col-lg-12'><h2 class='page-header'>");
  document.write(x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
  document.write("</h2></div>");
  document.write("<div class='col-md-6'><p>");
  document.write(x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue);
  document.write("<br><strong>Cost for activity :</strong> $");
  document.write(x[i].getElementsByTagName("cost")[0].childNodes[0].nodeValue);
  document.write("<br><strong>Start date : </strong>");
  document.write(x[i].getElementsByTagName("startdate")[0].childNodes[0].nodeValue);
  document.write(" from ");
  document.write(x[i].getElementsByTagName("starthour")[0].childNodes[0].nodeValue);
  document.write(" to ");  
  document.write(x[i].getElementsByTagName("endhour")[0].childNodes[0].nodeValue);
  document.write("<br><strong>End date : </strong>");
  document.write(x[i].getElementsByTagName("enddate")[0].childNodes[0].nodeValue);
  
  document.write("<br><strong>From </strong> ");
  document.write(x[i].getElementsByTagName("starthour")[0].childNodes[0].nodeValue);
  document.write(" to ");  
  document.write(x[i].getElementsByTagName("endhour")[0].childNodes[0].nodeValue);
  document.write("<br><strong>Age Participant : </strong>");
  document.write(x[i].getElementsByTagName("age")[0].childNodes[0].nodeValue);
  document.write("<br><strong>Location : </strong>");
  document.write(x[i].getElementsByTagName("location")[0].childNodes[0].nodeValue);
  document.write("</p>");
  document.write("<div class='panel panel-default'><div class='panel-heading'>");
  document.write("<h3 class='panel-title'>Contact information </h3></div><div class='panel-body contact-body'>");
  document.write("<p><strong>Webpage: </strong>");
  document.write(x[i].getElementsByTagName("webpage")[0].childNodes[0].nodeValue);
  
  
  if(x[i].getElementsByTagName("condition")[0].childNodes[0].nodeValue =="both"){
  	document.write("<br><strong>Contact name: </strong>");
  	document.write(x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue);
  	document.write("<br><strong>Contact email: </strong>");
  	document.write(x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue);
  }else if(x[i].getElementsByTagName("condition")[0].childNodes[0].nodeValue =="nameonly"){
  	document.write("<br><strong>Contact name: </strong>");
  	document.write(x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue);
  
  }else if(x[i].getElementsByTagName("condition")[0].childNodes[0].nodeValue =="emailonly"){
  	document.write("<br><strong>Contact email: </strong>");
  	document.write(x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue);
  }
  document.write("</p></div></div>");
  
  document.write("</div>");
  document.write("<div class='col-md-6'><img class='img-responsive' src='");
  document.write(x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue);
  document.write("' alt='Project Image'></div>");
  document.write("</div>");
  
  
  
	}
  }
