$(document).ready(function () {
    $("#signup-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 4,
                maxlength: 10
            },
            email: {
                required: true,
                email: true,
            },
            subject: {
                required: true,
                minlength: 8
            },
            message: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            name: {
                required: "Enter name",
                minlength: "Enter at least 4 characters",
                maxlength: "Name must not exceed 10 characters"
            },
            email: {
                required: "Enter email id",
                email: "Enter a valid email address"
            },
            subject: {
                required: "Enter subject",
                minlength: "Enter at least 8 characters"
            },
            message: {
                required: "Enter message",
                minlength: "Enter at least 8 characters"
            }
        }
    });
});