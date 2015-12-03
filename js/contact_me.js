/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */
$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // something to have when submit produces an error ?
            // Not decided if I need it yet
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var namepublic = document.getElementById("namepublic").value;
            var email = $("input#email").val();
            var emailpublic = document.getElementById("emailpublic").value;
            var title = document.getElementById("title").value;
            var webpage = $("textarea#webpage").val();
            var image = $("textarea#image").val();
            var age = $("textarea#age").val();
            var cost = $("input#cost").val();
            var startdate = $("input#startdate").val();
            var enddate = $("input#enddate").val();
            var starthour = $("input#starthour").val();
            var endhour = $("input#endhour").val();
            var location = $("textarea#location").val();
            var description = $("textarea#description").val();
            var otherinfo = $("textarea#otherinfo").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "./bin/signup.php",
                type: "POST",
                data: {
                    name: name,
                   	namepublic: namepublic,
                   	email: email,
                   	emailpublic: emailpublic,
                   	title: title,
                   	webpage: webpage,
                   	image: image,
                   	age: age,
                   	cost: cost,
                   	startdate: startdate,
                   	enddate: enddate,
                   	starthour: starthour,
                   	endhour: endhour,
                   	location: location,
                   	description: description,
                   	otherinfo: otherinfo,
                    
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your project has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $$('#success > .alert-danger').append("<strong>Sorry " + name + " it seems that my mail server is not responding...</strong> Could you please email me directly to <a href='mailto:me@example.com?Subject=Message_Me from myprogrammingblog.com;>cise@cnu.edu</a> ? Sorry for the inconvenience!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
