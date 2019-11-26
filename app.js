

document.getElementById("btn").onclick = function(){register_user()};

function register_user() { 

var URL = "http://localhost:8888/biblioteca/public/index.php/api/userStore";

//var data = {'email':$('#Email').value,'name':$('#Name').value,'password':$('#Password').value};
var data = {
    'email':$('#Email').value,
    'name':$('#Name').value,
    'password':$('#Password').value
};
// $.ajax
    $.post(URL,data);
console.log($('#Email').value)
/*var name = document.getElementById("Name").value;
console.log(name);  
*/


}