

document.getElementById("btn").onclick = function(){register_user()};

function register_user() { 

var URL = "http://localhost:8888/biblioteca/public/index.php/api/userStore";
var name = document.getElementById("Name").value;
var email = document.getElementById("Email").value ;
var password = document.getElementById("Password").value ;
var datos_usuario = {'name':name,'email':email,'password':password};


$.ajax(URL,{
    type: 'POST',
    data: datos_usuario
});

}