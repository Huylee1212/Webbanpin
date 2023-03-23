function dangki(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById ("password").value;
    var password2 =document.getElementById("password2").value;
    const user = {
        username: username,
        email:email,
        password: password,
        password2:password2,

    };
    if(password!=password2){
        alert("Mật khẩu không trùng khớp vui lòng nhập lại!")
    }else{
        var json = JSON.stringify(user);
        localStorage.setItem(username,json);
        window.location.href="/LoGin/dangnhap.html"
    }
  
}
function dangnhap(e){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById ("password").value;

    const user = localStorage.getItem(email);
    let data = JSON.parse(user);
    
    if(user == null){
        alert("vui lòng nhập lại tài khoản")
    }
    else if(  email == data.email && password == data.password ){
        alert("dang nhap thanh cong")

        let currentUser = JSON.stringify(data);
        localStorage.setItem('currentUser', currentUser);
        localStorage.getItem('currentUser')

        window.location.href="/index.html"
    }
    else{
        alert("dang nhap that bại")
    }
}
