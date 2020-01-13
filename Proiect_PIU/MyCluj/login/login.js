$(document).ready(() => {

    $('#login-button').on('click', function () {
        let userName = $('#username').val();
        let password = $('#password').val();

        if (userName === "Mircea" && password === "mircea") {
            window.location.href = 'index.html';
            return false;
        }
        else 
            if (userName === "Alina" && password === "alina") {
                window.location.href = 'index2.html';
                return false;
            }
            else {
                document.getElementById("par").innerHTML="Username sau parola gresita !";
                return false;
            }
    });

});