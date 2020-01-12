var marker;

function handleEvent(event) {
   document.getElementById("location").value = event.latLng;
}

function addMarker(latLng, map) 
{
	if(marker) // Only 1 marker
	{
		marker.setPosition(latLng);
		document.getElementById("location").value = latLng;
	}
	else 
	{
		marker = new google.maps.Marker({
		  position: latLng,
		  map: map,
		  draggable: true
		});
		document.getElementById("location").value = latLng;
		
		marker.addListener('drag', handleEvent); // Dragging event
		marker.addListener('dragend', handleEvent); // Place event
  }
}

function myMap() 
{
	var mapProp= {
	  center:new google.maps.LatLng(46.776738, 23.604607),
	  zoom:14,
	};
	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

	map.addListener('click', function(e) {
    console.log(e);
    addMarker(e.latLng,map);
  });
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function startTime(){
	n =  new Date();
	y = n.getFullYear();
	m = n.getMonth() + 1;
	d = n.getDate();
	h = n.getHours();
	min = n.getMinutes();
	s = n.getSeconds();
	min = checkTime(min);
	s = checkTime(s);
	document.getElementById("date").innerHTML = m + "/" + d + "/" + y + " " + h + ":" + min + ":" + s;
	var t = setTimeout(startTime, 500);
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
          .append($('<button/>', {class: 'btn btn-cancel'}).css({"margin-right": "50px", "weight": "10%"}).html('Nu').on('click', function() {
            $('.overlay').remove();
            // RESOLVE Promise TO false
            resolve(false);
          }))
          .append($('<button/>', {class: 'btn btn-primary'}).css('weight', '10%').html('Da').on('click', function() {
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
		$('.anuleaza').on('click',function(e) {
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
	if (document.getElementById('location').value === '' || document.getElementById('descriere_sesizare').value === '' || document.getElementById('categorii').value === 'Selecteaza_categoria'){
		var res = showPrompt_trimite('Nu ati introdus toate datele necesare. Va rugam sa verificati daca ati introdus locatia, descrierea sesizarii si categoria sesizarii.');
	}
	else {
		window.location.href = "index.html";
	}
}

window.onload = function(){
	startTime();
	var fileupload = document.getElementById("FileUpload1");
	var fileupload2 = document.getElementById("FileUpload2");
	var fileupload3 = document.getElementById("FileUpload3");
    var image = document.getElementById("cam");
    var image2 = document.getElementById("cam2");
    var image3 = document.getElementById("cam3");
    image.onclick = function () {
        fileupload.click();
    };
	image2.onclick = function () {
        fileupload2.click();
    };
	image3.onclick = function () {
        fileupload3.click();
    };
	
    fileupload.onchange = function () {
        var fileName = fileupload.value.split('\\')[fileupload.value.split('\\').length - 1];
        image.setAttribute("src", "images/" + fileName);
    };
	
	fileupload2.onchange = function () {
        var fileName = fileupload2.value.split('\\')[fileupload2.value.split('\\').length - 1];
        image2.setAttribute("src", "images/" + fileName);
    };
	
	fileupload3.onchange = function () {
        var fileName = fileupload3.value.split('\\')[fileupload3.value.split('\\').length - 1];
        image3.setAttribute("src", "images/" + fileName);
    };
}