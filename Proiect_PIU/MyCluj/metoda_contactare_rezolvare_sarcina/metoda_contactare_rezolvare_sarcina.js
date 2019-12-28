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
		$('#anuleaza-button').on('click',function(e) {
			// PREVENT DEFAULT BEHAVIOUR FOR <a/>
			e.preventDefault();
 
			// SAVE PROMISE RETURN
			var res = showPrompt_anulare('Confirmati stergerea datelor introduse?');
			res.then(function(ret) {
				if (ret){
					console.log("here");
					document.getElementById('contactare_email').checked = false;
					document.getElementById('contactare_telefon').checked = false;
				}
			})
		});
	});

function showPrompt_back(msg)
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
		$('#back-button').on('click',function(e) {
			// PREVENT DEFAULT BEHAVIOUR FOR <a/>
			e.preventDefault();
 
			// SAVE PROMISE RETURN
			var res = showPrompt_back('Daca parasiti pagina o sa va pierdeti datele introduse. Confirmati aceasta actiune?');
			res.then(function(ret) {
				if (ret){
					window.location.href = "detalii_sesizare.html";
				}
			})
		});
	});

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

function trimite(){
	if (document.getElementById('contactare_telefon').checked || document.getElementById('contactare_email').checked){
		
		// SAVE PROMISE RETURN
        var res = showPrompt_trimite('Vă mulțumim! Veți fi contactată în cel mai scurt timp!');
        res.then(function(ret) {
            if (ret){
                window.location.href = "index.html";
            }
        });
	}
}

$(function(){
    $('#contactare_telefon').click(function() {
		if($('#contactare_telefon').is(':checked')) {
			document.getElementById('contactare_email').checked = false;
		}
	});
	$('#contactare_email').click(function() {
		if($('#contactare_email').is(':checked')) {
			document.getElementById('contactare_telefon').checked = false;
		}
	});
});
