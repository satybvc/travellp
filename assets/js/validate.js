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
            address: {
                required: true,
                minlength: 5
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
            address: {
                required: "Please enter your address",
                minlength: "Address must be at least 5 characters long"
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
            //const form = document.getElementById('leadForm');
            const scriptURL = 'https://script.google.com/macros/s/AKfycbx3p4EbV2bb6QoJVfahoIYsG1NLjgKBOQxhlsN48VZ0c8v8d5e-RigRTqgzmH7B4xf5/exec';
            form.addEventListener('submit', e => {
                e.preventDefault()
                fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                    .then(response => {alert("Thank you! your form is submitted successfully."); })
                    .then(() => { 
                        window.location.reload(); 
                        console.error('Suceess!', response);
                    })

                    .catch(error => console.error('Error!', error.message))
            })
        }
    });
});
