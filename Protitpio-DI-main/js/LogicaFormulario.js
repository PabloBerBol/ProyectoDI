/*ARRAY DE USUARIOS*/
var usuarios = [];

var nombre = document.getElementById("fusuario").value;
var contra = document.getElementById("pwd").value;
var contra2 = document.getElementById("pwd2").value;

function comprobar(){

    if(contra != contra2){

        alert("Las contraseñas no coinciden");
    }

    else{


        nuevo();

        alert(" Registrado correctamente" );
    }
}

/*FUNCION PARA AÑADIR USUARIOS*/
function nuevo(){

    var usuario = {

        name : nombre,
        password: pwd
    };

    usuario.push(usuario);

    nuevoUsuario(usuario)
}


/*FUNCION PARA AÑADIR AL ARRAY*/
function nuevo(plist){

    localStorage.setItem("Usuarios", JSON.stringify(plist));
}