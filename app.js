
document.getElementById("btn_registrar").onclick = function(){register_user()};
document.getElementById("btn_mostrar_usuarios").onclick = function(){show_users()};
document.getElementById("btn_mostrar_libros").onclick = function(){show_books()};
document.getElementById("btn_login").onclick = function(){login()};

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

function login(){
var URL = "http://localhost:8888/biblioteca/public/index.php/api/login"
var email = document.getElementById("email_login").value ;
var password = document.getElementById("password_login").value ;
var datos_login = {'email':email,'password':password};

$.ajax(URL,{
    type:'POST',
    data: datos_login,
    success: function(response) {
        console.log('success')
        sessionStorage.setItem('token', response.token);
      }
}).done(function(){
    alert("logged in");
  });
}

/*function get_token(){

    $.ajax({
        url: "aqui quizas valla la siguiente ruta que regresa un token???",
        type: 'GET',
        // Fetch the stored token from localStorage and set in the header
        headers: {"Authorization": localStorage.getItem('token')}
      });
}*/


function show_users(){
var URL = "http://localhost:8888/biblioteca/public/index.php/api/show";

$.ajax(URL,{
    type: 'GET',
    success:function(respuesta){
        console.log(respuesta);
        var userlist = document.getElementById("user_list").value;
        $.each(respuesta.data,function(index,user){
            userlist.append(

            '<div>'
            + '<p>' + user.name +'</p>'
            + '<p>' + user.email +'</p>'
            + '</div>'
            );
        });
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
