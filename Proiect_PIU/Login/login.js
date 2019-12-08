$(document).ready(() => {

    $('#login-button').on('click', function () {
        let userName = $('#username').val();
        let password = $('#password').val();

        console.log(userName);
        console.log(password);

        if (userName === "Mircea" && password === "mircea") {
            window.location.href = '../Pagina_start/pagina_start.html';
            return false;
        }
        else {
            alert('User sau parola gresita');
        }
    });

});