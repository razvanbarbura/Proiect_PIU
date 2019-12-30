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
    $('#cancel-button').on('click',function(e) {
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
    $('#back-button').on('click',function(e) {
        // PREVENT DEFAULT BEHAVIOUR FOR <a/>
        e.preventDefault();

        // SAVE PROMISE RETURN
        var res = showPrompt('Daca parasiti pagina o sa va pierdeti datele introduse. Confirmati aceasta actiune?');
        res.then(function(ret) {
            if (ret){
                window.location.href = "monitorizare_personal.html";
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
