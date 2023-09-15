function myalert() {
    var user = document.getElementsByClassName("controls")[0].value;
    var password = document.getElementsByClassName("controls")[1].value;

    if (user == "admin" && password == "admin"){
        alert("you have entered correctly.");
    }
    else {
        alert("invalid credentials.");
    }
    
}