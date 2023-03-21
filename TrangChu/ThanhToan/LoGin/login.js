function dangki(e) {
    event.preventDefault()
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    const user = {
        username: username,
        email: email,
        pass: pass,

    };
    console.log(user);
    var json = JSON.stringify(user);
    localStorage.setItem(username, json)
    alert("dang ki thanh cong")

}
