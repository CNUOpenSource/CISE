$(document).ready(function()
{
  $.ajax({
    type: "GET",
    url: "bin/file.xml",
    dataType: "xml",
    success: parseXml
  });
});

function parseXml(xml)
{
  $("#main").html("<ul id='table' data-role='listview' data-inset='true'></ul>");
  $(xml).find("item").each(function()
  {
    $("#table").append("<li><a href='"+$(this).find("location").text()+"'><img src='"+$(this).find("image").text()+"'/><h2>"+$(this).find("title").text()+"</h2><p>"+$(this).find("title").text()+"</p></a></li>");
  });  
}