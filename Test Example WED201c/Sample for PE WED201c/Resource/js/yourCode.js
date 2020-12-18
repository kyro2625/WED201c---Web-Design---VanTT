function Show() {
    var a = document.getElementById("mytext")
    var b = document.getElementById("myform");
    if (a.innerHTML== " Hide Register Form ") {
       a.innerHTML = " Show Resiger Form ";
       b.style.display = "none";
    } else {
        a.innerHTML  = " Hide Register Form ";
        b.style.display = "block";
        document.getElementById("t1").setAttribute("required")
    }

    
}

function checkForm() {
    if (document.getElementById("t1").value.length = 0) {
        alert("Should not be blank");
        return false;
    }
}

