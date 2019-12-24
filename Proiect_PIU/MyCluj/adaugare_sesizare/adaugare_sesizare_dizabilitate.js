$(document).ready(function(){
  $("#back-button").hover(function(){
    responsiveVoice.speak('Back button');
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
  
  $("#googleMap").hover(function(){
	responsiveVoice.speak('Add a location pin on the map');
  });
  
  $("#calendar").hover(function(){
	responsiveVoice.speak('Current date ' + document.getElementById("date").innerHTML);
  });
  
  $("#location").hover(function(){
	responsiveVoice.speak('Location ' + document.getElementById("location").value);
  });
  
  $("#tipS").hover(function(){
	responsiveVoice.speak('Type of the situation ' + document.getElementById("categorii").value);
  });
  
  $("#descriere_sesizare").hover(function(){
	responsiveVoice.speak('Describe what is the situation about. Your description: ' + document.getElementById("descriere_sesizare").value);
  });
  
  $("#anuleaza").hover(function(){
	responsiveVoice.speak('Cancel the situation');
  });
  
  $("#trimite").hover(function(){
	responsiveVoice.speak('Send situation');
  });
  
  $("#poza").hover(function(){
	responsiveVoice.speak('Add some photos from your gallery');
  });
  
});