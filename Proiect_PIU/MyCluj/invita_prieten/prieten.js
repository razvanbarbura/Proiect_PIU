$(document).ready(() => {

    $('#back-button').on('click', function () {
        window.location.href = '../MyCluj/index.html'
     
    });

});

window.onload =init 

message_error= document.getElementById("eroare-mesaj");
email_error= document.getElementById("eroare-email");



function init(){

  //  document.getElementById("friend-form").onreset = resetForm;
    document.getElementById("friend-form").onsubmit = submitForm;
}


function validateEmail() {
    var email = document.getElementById("email");
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email.value)) {
        return true;
    }
    else if (email.value.length === 0){
        email_error.innerHTML ="Emailul este obligatoriu!"   ; 
        return false;
    }
    else{
        email_error.innerHTML ="Adresa de email incorecta!" ;   
        return false;
    }

}


function validateMessage() {
    var messaje = document.getElementById("mesaj");
    if (messaje.value.length > 0) {
        return true;
    }
    else {
        message_error.innerHTML ="Mesajul este obligatoriu !"      
        return false;
    }
}


function resetForm() {
    document.getElementById("eroare-mesaj").innerHTML = "";
    document.getElementById("eroare-email").innerHTML = "";
}


function submitForm() {
    
       if ( validateEmail() == true &&   validateMessage() ==true ) {
        return true; 
      } else {
        return false; 
      }
  }



  function showPrompt_anulare(msg)
{
  // CREATE A Promise TO RETURN
  var p = new Promise(function(resolve, reject) {;
    var dialog = $('<div/>', {class: 'popup'})
      .append(
        $('<p/>').html(msg)
      )
      .append(
        $('<div/>', {class: 'text-right'})
          .append($('<button/>', {class: 'btn btn-cancel'}).css('margin-right', '50px').html('Nu').on('click', function() {
            $('.overlay').remove();
            // RESOLVE Promise TO false
            resolve(false);
          }))
          .append($('<button/>', {class: 'btn btn-primary'}).html('Da').on('click', function() {
            $('.overlay').remove();
            // RESOLVE Promise TO true
            resolve(true);
          }))
      );
      
    var overlay = $('<div/>', {class: 'overlay'})
      .append(dialog);
    $('body').append(overlay);
    $(dialog).animate({top: '15%'}, 1000);
  });
  
  // RETURN THE Promise
  return p;
}
 

$(function() {
    // HANDLE open-dialog CLICK
    $('#anuleaza').on('click',function(e) {
      
        // PREVENT DEFAULT BEHAVIOUR FOR <a/>
        e.preventDefault();

        // SAVE PROMISE RETURN
        var res = showPrompt_anulare('Confirmati stergerea datelor introduse?');
        res.then(function(ret) {
            if (ret){
                document.getElementById('cam').setAttribute('src', 'images/camera_icon.jpg');
                document.getElementById('cam2').setAttribute('src', 'images/camera_icon.jpg');
                document.getElementById('cam3').setAttribute('src', 'images/camera_icon.jpg');
                document.getElementById('location').value = '';
                document.getElementById('descriere_sesizare').value = '';
                document.getElementById('categorii').value = 'Selecteaza_categoria';
            }
       })
    });
});