document.getElementById("btnCancelar").onclick = function () {
    location.href = "/HTML/inicio.html";
}

function iniciar() {
    Swal.fire({
        title: 'Sesion iniciada!',
        text: 'Ha iniciado sesion correctamente!',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
    }).then((result) => {
        let correo = document.getElementById("txtCorreo").value;
        let password = document.getElementById("txtPassword").value;

        if (correo == "sc805036@gmail.com" && password == "123456") {
            location.href = "/HTML/inicioVendedor.html";
        } else if (correo == "andres@gmail.com" && password == "123456") {
            location.href = "/HTML/inicioUsuario.html";
        }
    })
}