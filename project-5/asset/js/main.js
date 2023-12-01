function signup(e){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    var user = {
        username : username,
        email : email,
        password : password,
    }

    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    alert("dang ky thanh cong");
}

function login(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(user == null){
        alert("Vui long nhap username password");
    }else if(username = data.username && email == data.email && password == data.password){
        alert("dang nhap thanh cong");
        window.location.href = "indexLogin.html";
    }else{
        alert("dang nhap that bai")
    }
}