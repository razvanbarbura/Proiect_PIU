window.onload = init;


message_error= document.getElementById("eroare-mesaj");
email_error= document.getElementById("eroare-email");


function init(){
    document.getElementById("mesaj").onblur = validateMessage;
    document.getElementById("email").onblur = validateEmail;
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


$(function() {
  // HANDLE open-dialog CLICK
  $('#buton-anuleaza4').on('click',function(e) {
      // PREVENT DEFAULT BEHAVIOUR FOR <a/>
      e.preventDefault();

      // SAVE PROMISE RETURN
      var res = showPrompt('Confirmati stergerea datelor introduse?');
      res.then(function(ret) {
          if (ret){
              document.getElementById("detalii").innerHTML = "";
          }
      })
  });
});



function submitForm() {
    
       if ((validateEmail() == true) &&   (validateMessage() == true)) {
       // showPrompt_trimite('Selectati raspunsul la intrebare.');
        var res = showPrompt_trimite('Email trimis cu succes!');
        res.then(function(ret) {
            if (ret){
              window.location.href = "index.html";
            }
        })
     
       
        return false; 
      } else if ((validateEmail() == true) &&   (validateMessage() == false)) {
        message_error.innerHTML ="Mesajul este obligatoriu !"  
        email_error.innerHTML ="" ;   
        return false; 
      } 

      else{
        return false;
      }
  }



  function showPrompt(msg)
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
 


function showPrompt_trimite(msg)
{
  // CREATE A Promise TO RETURN
  var p = new Promise(function(resolve, reject) {;
    var dialog = $('<div/>', {class: 'popup'})
      .append(
        $('<p/>').html(msg)
      )
      .append(
        $('<div/>', {class: 'text-right'})
          .append($('<button/>', {class: 'btn btn-primary'}).css('margin-left', '32%').html('Ok').on('click', function() {
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
        var res = showPrompt('Confirmati stergerea datelor introduse?');
        res.then(function(ret) {
            if (ret){
                document.getElementById("eroare-mesaj").innerHTML = "";
                document.getElementById("eroare-email").innerHTML = "";
                document.getElementById('email').value = '';
                document.getElementById('mesaj').value = 'Salut te invit sa folosesti aplicatia My Cluj. Aici este un link: www.mycluj.ro';
            }
        })
    });
});


$(function() {
    // HANDLE open-dialog CLICK
    $('#back-button').on('click',function(e) {
        // PREVENT DEFAULT BEHAVIOUR FOR <a/>
        e.preventDefault();

        // SAVE PROMISE RETURN
        var res = showPrompt('Daca parasiti pagina o sa va pierdeti datele introduse. Confirmati aceasta actiune?');
        res.then(function(ret) {
            if (ret){
                window.location.href = "index.html";
            }
        })
    });
});


