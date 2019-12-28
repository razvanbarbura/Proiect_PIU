$(document).ready(function(){
  $("#back-button").hover(function(){
    responsiveVoice.speak('Back button');
  });
  
  $('#remember').on('click',function(e) {
	responsiveVoice.speak('Speaking page activated');
  });
  
  $("#deconectare").hover(function(){
	responsiveVoice.speak('Disconect from your account');
  });
  
  $("#menuLogo").hover(function(){
	responsiveVoice.speak('Menu');
  });
  
  $("#mainMenu").hover(function(){
	responsiveVoice.speak('Main Menu');
  });
  
  $("#cautareSesizare").hover(function(){
	responsiveVoice.speak('Find a situation');
  });
  
  $("#adaugaSesizare").hover(function(){
	responsiveVoice.speak('Add a situation');
  });
  
  $("#invita").hover(function(){
	responsiveVoice.speak('Invite a friend');
  });
  
  $("#vouchere").hover(function(){
	responsiveVoice.speak('See all your vouchers');
  });
  
  $("#settings").hover(function(){
	responsiveVoice.speak('Settings');
  });
});

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
		responsiveVoice.speak('Are you sure you want to leave the settings page?');
        // PREVENT DEFAULT BEHAVIOUR FOR <a/>
        e.preventDefault();

        // SAVE PROMISE RETURN
        var res = showPrompt('Confirmati parasirea paginii?');
        res.then(function(ret) {
            if (ret){
                window.location.href = "index.html";
            }
        })
    });
});

$(function(){
    $('#notificare').click(function() {
        if(!$(this).is(':checked')) {
			console.log("unckecked");
			document.getElementById('notificare_pop_up').checked = false;
			document.getElementById('notificare_email').checked = false;
			document.getElementById('notificare_pop_up').disabled = true;
			document.getElementById('notificare_email').disabled = true;
		}
		else {
			console.log("ckecked");
			document.getElementById('notificare_pop_up').disabled = false;
			document.getElementById('notificare_email').disabled = false;
			$('#notificare_pop_up').click(function() {
				if($('#notificare_pop_up').is(':checked')) {
					document.getElementById('notificare_email').checked = false;
				}
			});
			$('#notificare_email').click(function() {
				if($('#notificare_email').is(':checked')) {
					document.getElementById('notificare_pop_up').checked = false;
				}
			});
		}
    });
});
