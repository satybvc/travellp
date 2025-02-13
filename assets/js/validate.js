$(document).ready(function () {
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
});
