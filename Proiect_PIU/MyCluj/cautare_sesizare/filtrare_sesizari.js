function showOrUnshow(type, map, marker)
{
	if(type == "asistenta")
	{
		document.querySelector("input[name=filtrare1]").addEventListener('change', function() 
		{
			if(this.checked)
				marker.setMap(map);
			else
				marker.setMap(null);
		});
	} else if(type == "parcari")
	{
		document.querySelector("input[name=filtrare2]").addEventListener('change', function() 
		{
			if(this.checked)
				marker.setMap(map);
			else
				marker.setMap(null);
		});
	} else if(type == "diverse")
	{
		document.querySelector("input[name=filtrare3]").addEventListener('change', function() 
		{
			if(this.checked)
				marker.setMap(map);
			else
				marker.setMap(null);
		});
	} else if(type == "water")
	{
		document.querySelector("input[name=filtrare4]").addEventListener('change', function() 
		{
			if(this.checked)
				marker.setMap(map);
			else
				marker.setMap(null);
		});
	} else if(type == "transport")
	{
		document.querySelector("input[name=filtrare5]").addEventListener('change', function() 
		{
			if(this.checked)
				marker.setMap(map);
			else
				marker.setMap(null);
		});
	} else if(type == "sesizarile_mele")
	{
		document.querySelector("input[name=filtrare6]").addEventListener('change', function() 
		{
			if(this.checked)
				marker.setMap(map);
			else
				marker.setMap(null);
		});
	}
		
}

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
	marker.addListener('click', function() {
	  infowindow1.open(map, marker);
	});
	
	showOrUnshow(type, map, marker);
	
	return marker;
}

function myMap() {
	var mapProp= {
	  center:new google.maps.LatLng(46.771516, 23.596153),
	  zoom:14,
	};
	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
	
	// The location of Pins
	var pin12 = {lat: 46.760773, lng: 23.566139};
	
	var contentString = null;
	
	// Pin 1 (parcari)
	contentString = '<h1>Parcare neregulamentara</h1>'+
						 '<p>Un individ a parcat in fata statiei de tramvai.</p>';
	var marker1 = createPin(map, 46.776738, 23.604607, 'Parcare neregulamentara', contentString, "images/parcari.png", "parcari");
	// Pin 2 (diverse)
	contentString = '<h1>Nefunctionare conducta gaz</h1>'+
						 '<p>Apa calda nu functioneaza in intregul bloc. Posibil o teava s-a spart.</p>';
	var marker2 = createPin(map, 46.770178, 23.599187, 'Nefunctionare conducta gaz', contentString, "images/diverse.png", "diverse");
	// Pin 3 (asistenta)
	contentString = '<h1>Rampa pentru handicapati</h1>'+
						 '<p>In fata la sediul Arotan nu exista rampa pentru persoanele cu probleme. Astazi bunicul meu nu a avut ce face, decat sa se intoarca inapoi acasa.</p>';
	var marker3 = createPin(map, 46.769762, 23.590502, 'Rampa pentru handicapati', contentString, "images/asistenta.png", "asistenta");
	// Pin 4 (diverse)
	contentString = '<h1>Banca rupta</h1>'+
						 '<p>Banca din fata institutului de medicina dentara este rupta.</p>';
	var marker4 = createPin(map, 46.772561, 23.584490, 'Banca rupta', contentString, "images/diverse.png", "diverse", "diverse");
	// Pin 5 (diverse)
	contentString = '<h1>Flori taiate si aruncate pe drum</h1>'+
						 '<p>Florile din zona Piatei sunt rupte si aruncate peste tot pe partea carosabila.</p>';
	var marker5 = createPin(map, 46.779191, 23.591482, 'Flori taiate si aruncate pe drum', contentString, "images/diverse.png", "diverse");
	// Pin 6 (diverse)
	contentString = '<h1>Pana de curent</h1>'+
						 '<p>In tot cartierul nu exista curent.</p>';
	var marker6 = createPin(map, 46.774200, 23.611929, 'Pana de curent', contentString, "images/diverse.png", "sesizarile_mele");
	// Pin 7 (diverse)
	contentString = '<h1>Gunoaie aruncate pe alee</h1>'+
						 '<p>Pe aleea pietonala sunt tot felul de gunoaie aruncate de diferite persoane.</p>';
	var marker7 = createPin(map, 46.787094, 23.604225, 'Gunoaie aruncate pe alee', contentString, "images/diverse.png", "diverse");
	// Pin 8 (parcari)
	contentString = '<h1>Masina parcata pe 2 parcari</h1>'+
						 '<p>Masina B60SCL a parcat pe doua locuri de parcare.</p>';
	var marker8 = createPin(map, 46.756653, 23.617627, 'Masina parcata pe 2 parcari', contentString, "images/parcari.png", "parcari");
	// Pin 9 (parcari)
	contentString = '<h1>Masina parcata in zona interzisa</h1>'+
						 '<p>Masina CJ20FCL a parcat intr-o zona interzisa, astfel drumul catre Piata Cipariu este inaccesibila.</p>';
	var marker9 = createPin(map, 46.769892, 23.610656, 'Masina parcata in zona interzisa', contentString, "images/parcari.png", "parcari");
	// Pin 10 (transport)
	contentString = '<h1>Autobuz mizerabil</h1>'+
						 '<p>Multe piese desprinse din autobuz. Pericol mare de accidentare, si in plus este foarte murdar</p>';
	var marker10 = createPin(map, 46.776783, 23.637229, 'Piese desprinse de pe cladire', contentString, "images/transport.png", "transport");
	// Pin 11 (water)
	contentString = '<h1>Canal infundat</h1>'+
						 '<p>Canalizarea din zona este stricata. Apa nu se mai scurge in canal.</p>';
	var marker11 = createPin(map, 46.779724, 23.573409, 'Canal infundat', contentString, "images/water.png", "water");
	// Pin 12 (water)
	contentString = '<h1>Conducata de apa sparta</h1>'+
						 '<p>Conducta din zona tastenste incontinuu apa. Pericol de alunecare pentru pietoni.</p>';
	var marker12 = createPin(map, 46.760773, 23.566139, 'Conducata de apa sparta', contentString, "images/water.png", "water");

	//marker.setMap(null);
}