$(document).ready(() => {

    $('#back-button').on('click', function () {
        window.location.href = '../Pagina_start/pagina_start.html'
    });

});

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