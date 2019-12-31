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
          .append($('<button/>', {class: 'btn btn-cancel'}).css('margin-right', '15px').html('Nu').on('click', function() {
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

//////////////////////////////////////////////////// pagina monitorizare 1

$(function() {
    // HANDLE open-dialog CLICK
    $('#button-anuleaza').on('click',function(e) {
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


$(function() {
    // HANDLE open-dialog CLICK
    $('#button-continua').on('click',function(e) {
				window.location.href = "monitorizare_personal_detalii.html";
	})
});


//////////////////////////////////////////////////////////////////////   pagina detalii


$(function() {
    // HANDLE open-dialog CLICK
    $('#back-button').on('click',function(e) {
        // PREVENT DEFAULT BEHAVIOUR FOR <a/>
        e.preventDefault();

        // SAVE PROMISE RETURN
        var res = showPrompt('Confirmati aceasta actiune?');
        res.then(function(ret) {
            if (ret){
              window.history.back();
            }
        })
    });
});


$(function() {
    // HANDLE open-dialog CLICK
    $('#ok-button').on('click',function(e) {
				window.location.href = "monitorizare_personal2.html";
	})
});



//////////////////////////////////////////// monitorizare 2

function validateMaterial() {
  var messaje = document.getElementById("textarea1");
  if (messaje.value.length > 0) {
      return true;
  }
  else {
     // material_error.innerHTML ="Materialele trebuie specificate !"      
      return false;
  }
}


function validateMagazin() {
  var messaje = document.getElementById("magazin");
  if (messaje.value.length > 0) {
      return true;
  }
  else {
    //  magazin_error.innerHTML ="Magazinul/Depozitul trebuie specificat !"      
      return false;
  }
}

function submitMaterialForm() {
   // debugger;
  if ((document.getElementById("magazin").value.length>0 ) &&   (document.getElementById("textarea1").value.length>0)) {

   window.location.href = "monitorizare_personal3.html";
  return true; 
 } else {
  showPrompt_trimite('Nu ati introdus toate datele necesare. Va rugam sa verificati daca ati completat toate campurile.');
  return false; 
}
}


$(function() {
  // HANDLE open-dialog CLICK
  $('#buton-anuleaza2').on('click',function(e) {
      // PREVENT DEFAULT BEHAVIOUR FOR <a/>
      e.preventDefault();

      // SAVE PROMISE RETURN
      var res = showPrompt('Confirmati stergerea datelor introduse?');
      res.then(function(ret) {
          if (ret){
              document.getElementById("eroare-material").innerHTML = "";
              document.getElementById("eroare-magazin").innerHTML = "";
              document.getElementById('textarea1').value ="";
              document.getElementById('magazin').value = "";
          }
      })
  });
});


$(function() {
  // HANDLE open-dialog CLICK
  $('#buton-inapoi2').on('click',function(e) {
      // PREVENT DEFAULT BEHAVIOUR FOR <a/>
      e.preventDefault();

      // SAVE PROMISE RETURN
      var res = showPrompt('Daca parasiti pagina o sa va pierdeti datele introduse. Confirmati aceasta actiune?');
      res.then(function(ret) {
          if (ret){
            window.history.back();
          }
      })
  });
});

//////////////////////////////////////////// monitorizare 3



$(function() {
  // HANDLE open-dialog CLICK
  $('#buton-renunta3').on('click',function(e) {
      // PREVENT DEFAULT BEHAVIOUR FOR <a/>
      e.preventDefault();

      // SAVE PROMISE RETURN
      var res = showPrompt('Daca parasiti pagina veti renunta la aceasta activitate. Confirmati aceasta actiune?');
      res.then(function(ret) {
          if (ret){
            window.location.href = "index.html";
          }
      })
  });
});


$(function() {
  // HANDLE open-dialog CLICK
  $('#buton-continua3').on('click',function(e) {
      window.location.href = "monitorizare_personal4.html";
})
});



///////////////////////////// monitorizare 4



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


function trimite(){
	if (document.getElementById('nu').checked || document.getElementById('da').checked){
		
		// SAVE PROMISE RETURN
        var res = showPrompt_trimite('Finalizati operatia?');
        res.then(function(ret) {
            if (ret){
                window.location.href = "index.html";
            }
        });
  }
  else{
    showPrompt_trimite('Selectati raspunsul la intrebare.');
  }
} 