$(document).ready(() => {

    $('#login-button').on('click', function () {
        let userName = $('#username').val();
        let password = $('#password').val();

        console.log(userName);
        console.log(password);

        if (userName === "Mircea" && password === "mircea") {
            window.location.href = 'index.html';
            return false;
        }
        else {
            alert('User sau parola gresita');
        }
    });

});