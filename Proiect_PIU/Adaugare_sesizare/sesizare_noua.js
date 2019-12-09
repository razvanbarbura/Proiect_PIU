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

function anuleaza(){
	window.location.href = "sesizare_noua.html";
}

function trimite(){
	window.location.href = "../Pagina_start/pagina_start.html";
}

function back(){
	window.location.href = "../Pagina_start/pagina_start.html";
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
        image.setAttribute("src", "../Images/" + fileName);
    };
	
	fileupload2.onchange = function () {
        var fileName = fileupload2.value.split('\\')[fileupload2.value.split('\\').length - 1];
        image2.setAttribute("src", "../Images/" + fileName);
    };
	
	fileupload3.onchange = function () {
        var fileName = fileupload3.value.split('\\')[fileupload3.value.split('\\').length - 1];
        image3.setAttribute("src", "../Images/" + fileName);
    };
}

	

