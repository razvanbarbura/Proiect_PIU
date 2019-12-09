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