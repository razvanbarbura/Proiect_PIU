
var numberOfLikes = 3;
var numberOfDislikes = 0;
var likePressed = false;
var dislikePressed = false;

function like(){
    likePressed = !likePressed
    var like = document.getElementById("like_number");
    var dislike = document.getElementById("dislike_number");
    if(likePressed){
        if(dislikePressed){
            dislikePressed = false;
            numberOfDislikes-- ;
           
            dislike.innerHTML =""+numberOfDislikes
            
        }
        numberOfLikes++;
    }
    else{
        numberOfLikes--;
    }
    like.innerHTML =""+numberOfLikes

}

function dislike(){
    dislikePressed = !dislikePressed
    var like = document.getElementById("like_number");
    var dislike = document.getElementById("dislike_number");
    if(dislikePressed){
        if(likePressed){
            likePressed = false;
            numberOfLikes-- ;
    
            like.innerHTML =""+numberOfLikes
        }
        numberOfDislikes++;
      
    }
    else{
        numberOfDislikes--;
    }
    dislike.innerHTML =""+numberOfDislikes

}

function initialComment(){
	var messages = document.getElementById("messageList");
	
	var objToday = new Date(),
	weekday = new Array('Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'),
	dayOfWeek = weekday[objToday.getDay()],
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate(),
	months = new Array('Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours(),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes();
	
	var today = curHour + ":" + curMinute + " - " + dayOfWeek + ", " + dayOfMonth + " " + curMonth + " " + curYear;
	var today2 = curHour + ":" + curMinute + " - " + dayOfWeek + ", " + dayOfMonth + " " + curMonth + " " + curYear;

	messages.innerHTML += "<li><img src='./images/Avatar1.PNG' width='25px' height='25px' id='avatar'>" + " <b>Izabela</b> &nbsp;&nbsp;&nbsp;<i>" + today2 + "</i><br>"+ "Am vorbit cu soferul pentru a face o plangere, dar a spus ca trebuie sa sun la sediu. Trăim în așa o societate..." + "</li>";

	messages.innerHTML += "<li><img src='./images/Avatar2.PNG' width='25px' height='25px' id='avatar'>" + " <b>Andrei</b> &nbsp;&nbsp;&nbsp;<i>" + today + "</i><br>"+ "Trebuia sa anuntati soferul." + "</li>";
	
}


function addComent(){
    var messages = document.getElementById("messageList");
    var mesaj =  document.getElementById("comment");
    if(mesaj.value.length > 0)
    {
		var objToday = new Date(),
		weekday = new Array('Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'),
		dayOfWeek = weekday[objToday.getDay()],
		dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate(),
		months = new Array('Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'),
		curMonth = months[objToday.getMonth()],
		curYear = objToday.getFullYear(),
		curHour = objToday.getHours(),
		curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes();
		var today = curHour + ":" + curMinute + " - " + dayOfWeek + ", " + dayOfMonth + " " + curMonth + " " + curYear;

        messages.innerHTML = "<li><img src='./images/Avatar1.PNG' width='25px' height='25px' id='avatar'>" + " <b>Alina</b> &nbsp;&nbsp;&nbsp;<i>" + today + "</i><br>"+ mesaj.value + "</li>" + messages.innerHTML;
        mesaj.value="";
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
 
function showPrompt2(msg)
{
  // CREATE A Promise TO RETURN
  var p = new Promise(function(resolve, reject) {;
    var dialog = $('<div/>', {class: 'popup'})
      .append(
        $('<p/>').html(msg)
      )
      .append(
        $('<div/>', {class: 'text-right'})
          .append($('<button/>', {class: 'btn btn-cancel'}).css({"margin-right": "50px", "weight": "10%"}).html('Ok').on('click', function() {
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
  
  // RETURN THE Promise
  return p;
}
 

$(function() {
    // HANDLE open-dialog CLICK
    $('#back-button').on('click',function(e) {
        // PREVENT DEFAULT BEHAVIOUR FOR <a/>
        e.preventDefault();

        // SAVE PROMISE RETURN
        var res = showPrompt('Doriti sa parasiti pagina. Confirmati aceasta actiune?');
        res.then(function(ret) {
            if (ret){
                window.location.href = "index2.html";
            }
        })
    });
});

$(function() {
    // HANDLE open-dialog CLICK
    $('#saveButton').on('click',function(e) {
        // PREVENT DEFAULT BEHAVIOUR FOR <a/>
        e.preventDefault();

        // SAVE PROMISE RETURN
        var res = showPrompt2('Salvarea statusului/Redirectionarea sesizarii s-a realizat cu succes!');
        res.then(function(ret) {
            if (ret){
                window.location.href = "index2.html";
            }
        })
    });
});

$(function() {
    // HANDLE open-dialog CLICK
    $('#rezolvareButton').on('click',function(e) {
        // PREVENT DEFAULT BEHAVIOUR FOR <a/>
        e.preventDefault();

        window.location.href = "metoda_contactare_rezolvare_sarcina.html";
    });
});

function createPin(map, latitude, longitude, titleContent, content, icon, type)
{
	var pin1 = {lat: latitude, lng: longitude};
	var contentString1 = content;

	var infowindow1 = new google.maps.InfoWindow({
	  content: contentString1
	});

	var marker = new google.maps.Marker({
	  position: pin1,
	  map: map,
	  icon: icon,
	  title: titleContent
	});

	infowindow1.open(map, marker);

	return marker;
}

function myMap() {
	var mapProp= {
	  center:new google.maps.LatLng(46.777904220258044, 23.61159324645996),
	  zoom:16,
	};
	var map = new google.maps.Map(document.getElementById("googlemap"),mapProp);

	var contentString = null;
	
	// Pin 1 (transport)
	contentString = '<h1>Autobuz mizerabil</h1>'+
				    '<p>Autobuzul care circula pe linia 8 este de cele mai multe ori intr-o stare deplorabila</p>';
	var marker1 = createPin(map, 46.777904220258044, 23.61159324645996,  'Mijloc de transport in comun foarte murdar', contentString, "images/transport.png", "transport");
	
	initialComment();
}
