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
function dangnhap(e){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById ("password").value;
    const user = localStorage.getItem(email);
    var data = JSON.parse(user);
    if(user == null){
        alert("vui lòng nhập lại tài khoản")
    }
    else if(  email == data.email && password == data.password ){
        alert("dang nhap thanh cong")
        window.location.href="https://www.facebook.com/"
    }
    else{
        alert("dang nhap that bại")
    }


}