function registrar() {
    Swal.fire(
        'Registro correcto!',
        'Se ha registrado a Coffee Line Huila como usuario!',
        'success'
    )
    
    setTimeout(function(){
        location.href = "/HTML/inicioSesion.html";
    }, 3000)
}

document.getElementById("btnCancelar").onclick = function () {
    location.href = "/HTML/inicio.html";
}