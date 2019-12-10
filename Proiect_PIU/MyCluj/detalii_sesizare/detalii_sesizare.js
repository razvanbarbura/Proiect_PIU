
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


function addComent(){
    var messages = document.getElementById("messageList");
    var mesaj =  document.getElementById("comment");
    if(mesaj.value.length > 0)
    {
        messages.innerHTML += "<li>" + "Mircea: "+ mesaj.value + "</li>";
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
        var res = showPrompt('Doriti sa parasiti pagina. Confirmati aceasta actiune?');
        res.then(function(ret) {
            if (ret){
                window.location.href = "index.html";
            }
        })
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
	  center:new google.maps.LatLng(46.769892, 23.610656),
	  zoom:16,
	};
	var map = new google.maps.Map(document.getElementById("googlemap"),mapProp);

	var contentString = null;
	
	// Pin 1 (parcari)
	contentString = '<h1>Parcare neregulamentara</h1>'+
						 '<p>Un individ a parcat in fata statiei de tramvai.</p>';
	var marker1 = createPin(map, 46.769892, 23.610656, 'Parcare neregulamentara', contentString, "images/parcari.png", "parcari");
}
