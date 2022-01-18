// DISPLAY MESSAGE TO THE USER
function getMessage() {
    let inputMessage = document.getElementById("message").value;

    Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your Message was "' + inputMessage + '"',
        footer: '<a href="">Why do I have this issue?</a>'
    });

    console.log(inputMessage);
    document.getElementById("message").value = "";
    document.getElementById("message").focus();
}