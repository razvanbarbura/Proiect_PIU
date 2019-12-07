window.onload = function(){
	var checkbox = document.querySelector("input[name=filtrare2]");
	
	checkbox.addEventListener('change', function() {
    if(!this.checked) {
        window.location.href = "filtrare_sesizari2.html";
    }
});
}