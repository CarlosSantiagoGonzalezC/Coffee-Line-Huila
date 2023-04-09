document.getElementById("btnCancelar").onclick = function () {
    location.href = "/HTML/inicio.html";
}

function iniciar() {
    Swal.fire(
        'Sesion iniciada!',
        'Ha iniciado sesion correctamente!',
        'success'
    )
    
    let correo = document.getElementById("txtCorreo").value;
    let password = document.getElementById("txtPassword").value;

    if (correo == "sc805036@gmail.com" && password == "123456") {
        setTimeout(function(){
            location.href = "/HTML/inicioVendedor.html";
        }, 3000)
    } else if (correo == "andres@gmail.com" && password == "123456"){
        setTimeout(function(){
            location.href = "/HTML/inicioUsuario.html";
        }, 3000)
    }
    
}