window.onload = function(){
	
    var prv = document.getElementById("prev");
    var nxt = document.getElementById("next");

    prv.onclick = prev_voucher;
    nxt.onclick = next_voucher;
	
	return false;
}

function next_voucher(){
	var v1 = document.getElementById("first_voucher");
	var v2 = document.getElementById("second_voucher");
	var v3 = document.getElementById("third_voucher");
	var h6 = document.getElementById("xofy");
	
	if(h6.textContent === "1 of 3") {
		v1.style.display = "none";
		v2.style.display = "inline-block";
		v3.style.display = "none";
		h6.innerHTML = "2 of 3";
	}
	else
		if(h6.textContent === "2 of 3") {
			v1.style.display = "none";
			v2.style.display = "none";
			v3.style.display = "inline-block";
			h6.innerHTML = "3 of 3";
		}
        else
            if(h6.textContent === "1 of 2") {
                v1.style.display = "none";
                v2.style.display = "inline-block";
                v3.style.display = "none";
                h6.innerHTML = "2 of 2";
            }
			
	console.log("next");
	console.log(h6.textContent);
		return false;

}

function prev_voucher(){
	var v1 = document.getElementById("first_voucher");
	var v2 = document.getElementById("second_voucher");
	var v3 = document.getElementById("third_voucher");
	var h6 = document.getElementById("xofy");
	
	if(h6.textContent === "3 of 3") {
		v1.style.display = "none";
		v2.style.display = "inline-block";
		v3.style.display = "none";
		h6.innerHTML = "2 of 3";
	}
	else
		if(h6.textContent === "2 of 3") {
			v1.style.display = "inline-block";
			v2.style.display = "none";
			v3.style.display = "none";
			h6.innerHTML = "1 of 3";
		}
        else
            if(h6.textContent === "2 of 2") {
                v1.style.display = "inline-block";
                v2.style.display = "none";
                v3.style.display = "none";
                h6.innerHTML = "1 of 2";
            }
		
	console.log("prev");
	console.log(h6.textContent);
	return false;
}

$(function() {
		// HANDLE open-dialog CLICK
		$('.anuleaza').on('click',function(e) {
			// PREVENT DEFAULT BEHAVIOUR FOR <a/>
			e.preventDefault();
 
			// SAVE PROMISE RETURN
			var res = showPrompt_anulare('Scaneaza voucherul!');
			var v1 = document.getElementById("first_voucher");
            var v2 = document.getElementById("second_voucher");
            var v3 = document.getElementById("third_voucher");
            var h6 = document.getElementById("xofy");

            v1.style.display = "none";
            v2.style.display = "inline-block";
            v3.style.display = "none";
            h6.innerHTML = "2 of 2";
            
		});
	});

function showPrompt_anulare(msg)
{
  // CREATE A Promise TO RETURN
  var p = new Promise(function(resolve, reject) {;
    var dialog = $('<div/>', {class: 'popup'})
      .append(
        $('<p/>').html(msg)
      )
      .append(
        $('<div/>').css({"display": "block", "text-align": "center"})
          .append($('<img src="images/world_class_qr.png" alt="" />')).append('<br>')
          .append($('<button/>', {class: 'btn btn-cancel'}).html('Inapoi').css({"display": "block", "padding-right": "5px", "padding-left": "5px", "text-align": "center"}).on('click', function() {
            $('.overlay').remove();
            // RESOLVE Promise TO false
            resolve(false);
          }))
      );
      
    var overlay = $('<div/>', {class: 'overlay'})
      .append(dialog);
    $('body').append(overlay);
    $(dialog).animate({top: '15%'}, 1000);
  });
};

$(function() {
		// HANDLE open-dialog CLICK
		$('.back').on('click',function(e) {
			// PREVENT DEFAULT BEHAVIOUR FOR <a/>
			e.preventDefault();
 
			// SAVE PROMISE RETURN
			var res = showPrompt_back('Daca parasiti pagina o sa va pierdeti datele introduse. Confirmati aceasta actiune?');
			res.then(function(ret) {
				if (ret){
					window.location.href = "index.html";
				}
			})
		});
	});

function filtrare(){
	var v1 = document.getElementById("first_voucher");
	var v2 = document.getElementById("second_voucher");
	var v3 = document.getElementById("third_voucher");
	var f1 = document.getElementById("copy1");
	var f2 = document.getElementById("copy2");
	var f3 = document.getElementById("copy3");
	var f4 = document.getElementById("copy4");
	var h6 = document.getElementById("xofy");
    var rvn = document.getElementById("revendica");

	if(f1.checked === true) {
		v1.style.display = "inline-block";
        v2.style.display = "none";
		v3.style.display = "none";
		h6.innerHTML = "1 of 1";
	}
	else
		if(f2.checked === true) {
			v1.style.display = "none";
			v2.style.display = "none";
			v3.style.display = "inline-block";
			h6.innerHTML = "1 of 1";
            revendica.disabled = false;
		}
        else
            if(f3.checked === true) {
                v1.style.display = "none";
                v2.style.display = "inline-block";
                v3.style.display = "none";
                h6.innerHTML = "1 of 1";
                revendica.disabled = false;
            }
            else
                if(f4.checked === true) {
                    v1.style.display = "none";
                    v2.style.display = "none";
                    v3.style.display = "inline-block";
                    h6.innerHTML = "1 of 1";
                    revendica.disabled = true;
                }
                else
                {
                    v1.style.display = "inline-block";
                    v2.style.display = "none";
                    v3.style.display = "none";
                    h6.innerHTML = "1 of 3";
                    revendica.disabled = false;
                }
		
	console.log("prev");
	console.log(h6.textContent);
	return false;
}
