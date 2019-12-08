window.onload =init 

function onBack(){
    window.location.reload()
}


function init(){
    document.getElementById("email").onblur = validateEmail;
    document.getElementById("mesaj").onblur = validateMessage;
    document.getElementById("friend-form").onreset = resetForm;
    document.getElementById("friend-form").onsubmit = submitForm;
}



function validateEmail() {
    var email = document.getElementById("email");
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email.value)) {
        email.classList.remove("wrong-text");
    
        return true;
    }
    else {
        email.classList.add("wrong-text");
      
        return false;
    }
}


function validateMessage() {
    var messaje = document.getElementById("mesaj");
    
    console.log(messaje.value)
    console.log(messaje.value.length)
    if (messaje.value.length > 0) {
        messaje.classList.remove("wrong-text");
        return true;
    }
    else {
        messaje.classList.add("wrong-text");
        return false;
    }
}


function resetForm() {
    document.getElementById("mesaj").classList.remove("wrong-text");
    document.getElementById("email").classList.remove("wrong-text");
    document.getElementById("submitlist").innerHTML = "";
}

function submitForm() {
	
    var submitList = "";
     submitList = !validateEmail() ? submitList + "<li>Email</li>\n" : submitList;
     submitList = !validateMessage() ? submitList + "<li>Mesaj</li>\n" : submitList;
 
       if (submitList === "") {
          submitList = "Mesajul a fost trimis cu succes!";
      } else {
          submitList = "<p class='success-message'>Datele introduse in urmatoarele campuri sunt invalide:</p>\n" + submitList;
      }
      
      document.getElementById("submitlist").innerHTML = submitList;
      return false;      //return false ca sa nu isi dea submit
      // return true;
  }