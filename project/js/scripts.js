$(document).ready(function() {
    
    
    $("form").each(function() {
        $(this).validate({
            rules: {
                
                "subscribe-email": {
                    required: true,
                    email: true
                },
                "service-email": {
                    required: true,
                    email: true
                },
                
                "name": {
                    required: true
                },
                "email": {
                    required: true,
                    email: true
                },
                "message": {
                    required: true
                }
            },
            messages: {
                "subscribe-email": {
                    required: "Please enter your email",
                    email: "Please enter a valid email address"
                },
                "service-email": {
                    required: "Please enter your email",
                    email: "Please enter a valid email address"
                },
                "name": {
                    required: "Please enter your name"
                },
                "email": {
                    required: "Please enter your email",
                    email: "Please enter a valid email address"
                },
                "message": {
                    required: "Please enter your message"
                }
            },
            submitHandler: function(form) {
                
                alert("Form successfully submitted!");
                form.submit();
            }
        });
    });

    
    
    $("#quote-date").datepicker({
        dateFormat: "mm/dd/yy", 
        minDate: 0, 
        showAnim: "slideDown" 
    });

    
    $(".open-quote-modal").click(function() {
        $("#quote-modal").dialog({
            modal: true,
            width: 400,
            height: 300,
            buttons: {
                "Submit": function() {
                    $(this).dialog("close");
                    alert("Your quote request has been submitted!");
                },
                "Cancel": function() {
                    $(this).dialog("close");
                }
            }
        });
    });
});