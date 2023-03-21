function dangki(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById ("password").value;
    const user = {
        username: username,
        email:email,
        password: password,

    };
    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    alert(
        "dang ki thanh cong"
    );
}
console.log("object");