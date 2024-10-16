function MyFunction(){
    var x = document.getElementsByClassName("city");
    for (var i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    document.getElementById("msg").innerHTML = "Have a nice day";
}