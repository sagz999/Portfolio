
$(document).click(function(){
    $(".navbar-collapse").collapse('hide');
});

$(document).ready(function () { 
    $.validator.addMethod("alpha", function (value, element) {
        return this.optional(element) || value == value.match(/^[a-zA-Z\s]+$/);
    });

    $.validator.addMethod("isEmail", function (value, element) {
        return this.optional(element) || value == value.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i);
    });

    $("#submit-form").validate({
        rules: {
            name: {
                required: true,
                alpha: true,
                minlength: 3

            },
            location: {
                required: true,
                minlength: 3
            },

            emailAddress: {
                required: true,
                email: true,
                isEmail: true
            },

            pnum: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10,
                number: true

            },

            msg: {
                required: true,
                minlength: 10
            }

        },
        messages: {

            name: {
                required: "Enter your full name",
                alpha: "Name must only contain alphabets",
                minlength: "Name must be atleast of 3 characters"

            },

            location: {
                required: "Enter your location",
                minlength: "location must be atleast of 3 characters"
            },

            emailAddress: {
                required: "Enter your E-mail id",
                email: "Invalid E-mail id",
                isEmail: "Invalid E-mail id"
            },

            pnum: {
                required: "Enter your phone number",
                digits: "Invalid phone number",
                minlength: "Phone number must be atleast of 10 digits",
                maxlength: "Phone number cannot exceed 10 digits",
                number: "Invalid phone number"

            },

            msg: {
                required: "Message field must not be blank",
                minlength: "Message too short"
            }

        },
        submitHandler: function (form) {

            $("#submit-form").submit((e) => {
                e.preventDefault()
                $.ajax({
                    url: "https://script.google.com/macros/s/AKfycbxhDr-jgAcpYPTJxmBj886qT084ICRgiS9RQl30/exec",
                    data: $("#submit-form").serialize(),
                    method: "post",
                    success: function (response) {
                        alert("Form submitted successfully")
                        window.location.reload()
                    },
                    error: function (err) {
                        alert("Something Error")

                    }
                })
            })
        }

    })    

})
