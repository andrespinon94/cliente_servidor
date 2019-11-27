

document.getElementById("btn_registrar").onclick = function(){register_user()};
document.getElementById("btn_mostrar_usuarios").onclick = function(){show_users()};
document.getElementById("btn_mostrar_libros").onclick = function(){show_books()};

function register_user() { 

var URL = "http://localhost:8888/biblioteca/public/index.php/api/userStore";
var name = document.getElementById("Name").value;
var email = document.getElementById("Email").value ;
var password = document.getElementById("Password").value ;
var datos_usuario = {'name':name,'email':email,'password':password};

$.ajax(URL,{
    type: 'POST',
    data: datos_usuario
}).done(function() {
    alert( "Usuario Registrado");
  });
}


function show_users(){
var URL = "http://localhost:8888/biblioteca/public/index.php/api/show";

$.ajax(URL,{
    type: 'GET',
    success:function(respuesta){
        console.log(respuesta);
    }
});
}

function show_books(){

var URL = "http://localhost:8888/biblioteca/public/index.php/api/books";

$.ajax(URL,{
    type: 'GET',
    success:function(respuesta){
        console.log(respuesta);
    }
});

}
