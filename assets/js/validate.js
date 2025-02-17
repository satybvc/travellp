$(document).ready(function () {
    $.validator.addMethod("dateFormat", function(value, element) {
        return this.optional(element) || /^\d{2}\/\d{2}\/\d{4}$/.test(value);
    }, "Please enter a date in the format MM/DD/YYYY.");
    $("#leadForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 15
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Name must be at least 2 characters long"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            phone: {
                required: "Please enter your phone number",
                digits: "Please enter only digits",
                minlength: "Phone number must be at least 10 digits",
                maxlength: "Phone number must not exceed 15 digits"
            },
            message: {
                required: "Please enter your message",
                minlength: "Message must be at least 10 characters long"
            }
        },
        errorPlacement: function (error, element) {
            error.appendTo(element.parent());
        },
        submitHandler: function (form) {
            const scriptURL = 'https://script.google.com/macros/s/AKfycbzgw4NBSztEiNoE3Vf5DF454NMtSgdreVPwplgzuSVgrcTj9mOnend72u85EMAQEkaC/exec';

            // Show Loader
            //$("#siteLoader").show();

            fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form)
            })
            .then(response => response.json()) // Ensure JSON response
            .then(data => {
                console.log("Success:", data);

                // Show success message
                $('#formResponse').html('<p class="text-success mt-2">Thank you! Your form has been submitted successfully.</p>');

                // Hide loader
                $("#siteLoader").hide();

                // Reset the form
                form.reset();
            })
            .catch(error => {
                console.error('Error!', error.message);
                $('#formResponse').html('<p class="text-danger mt-2">Something went wrong. Please try again.</p>');
                $("#siteLoader").hide();
            });

            return false; // Prevent default form submission
        }
    });
    $("#southleadForm").validate({
        rules: {
            flyingfrom:{
                required: true,
                minlength: 3
            },
            flyingto:{
                required: true,
                minlength: 3
            },
            fecha1:{
                required: true,
                dateFormat: true
            },
            fecha2:{
                required: true,
                dateFormat: true
            },
            adult:{
                required: true
            },
            child:{
                required: true,
            },
            classType:{
                required: true,
            },
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 15
            }
           
        },
        messages: {
            flyingfrom: {
                required: "This field is Required",
                minlength: "Flying to must be at least 3 characters long"
            },
            flyingto: {
                required: "This field is Required",
                minlength: "Flying to must be at least 3 characters long"
            },
            fecha1: {
                required: "This field is Required",
                dateFormat: "Please enter a date in the format MM/DD/YYYY."
            },
            fecha2: {
                required: "This field is Required",
               dateFormat: "Please enter a date in the format MM/DD/YYYY."
            },
            adult: {
                required: "This field is Required",
               
            },
            child: {
                required: "This field is Required",
                minlength: "Name must be at least 2 characters long"
            },
            classType: {
                required: "This field is Required",
                email: "Please enter a valid email address"
            },
            name: {
                required: "Please enter your name",
                minlength: "Name must be at least 2 characters long"
            },
            phone: {
                required: "Please enter your phone number",
                digits: "Please enter only digits",
                minlength: "Phone number must be at least 10 digits",
                maxlength: "Phone number must not exceed 15 digits"
            },
          
        },
        errorPlacement: function (error, element) {
            error.appendTo(element.parent());
        },
        submitHandler: function (form) {
            const scriptURL = 'https://script.google.com/macros/s/AKfycbzhOwyv1QU-AWNrAFBDrFI_Ijt9bR3Jvd-X2Gt31pTvxvG-kUfNpxXyScpNgh6NEik8/exec';

            // Show Loader
            //$("#siteLoader").show();

            fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form)
            })
            .then(response => response.json()) // Ensure JSON response
            .then(data => {
                console.log("Success:", data);

                // Show success message
                $('#formResponse').html('<p class="text-success mt-2">Thank you! Your form has been submitted successfully.</p>');

                // Hide loader
                $("#siteLoader").hide();

                // Reset the form
                form.reset();
            })
            .catch(error => {
                console.error('Error!', error.message);
                $('#formResponse').html('<p class="text-danger mt-2">Something went wrong. Please try again.</p>');
                $("#siteLoader").hide();
            });

            return false; // Prevent default form submission
        }
    });

    
});
