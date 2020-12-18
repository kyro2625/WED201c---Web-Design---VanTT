function zoomout(previewPic) {
	document.getElementById('frame').style.backgroundImage = "url('" + previewPic.src + "')";
}

function warning() {
	var a = document.getElementById("yourname").value;
	var b = document.getElementById("email").value;
	var c = document.getElementById("content").value;

	if ((a == "" || a== null) || (b == "" || b== null) || (c == "" || c== null)) {
        alert("This field Should not be blank");
        return false;
	} else if (confirm("Are you sure your information?")) {
		alert("Message sent");
	} 
}