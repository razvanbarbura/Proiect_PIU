
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

	//infowindow1.open(map, marker);

	return marker;
}

function myMap() {
	var mapProp= {
	  center:new google.maps.LatLng(46.776738, 23.604607),
	  zoom:15,
	};
	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

	var contentString = null;
	
	// Pin 1 (parcari)
	contentString = '<h1>Parcare neregulamentara</h1>'+
						 '<p>Un individ a parcat in fata statiei de tramvai.</p>';
	var marker1 = createPin(map, 46.776738, 23.604607, 'Parcare neregulamentara', contentString, "../Images/parcari.png", "parcari");
}