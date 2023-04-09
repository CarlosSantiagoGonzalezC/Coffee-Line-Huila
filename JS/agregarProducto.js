function agregar() {
    Swal.fire(
        'Producto agregado!',
        'Se ha agregado el producto!',
        'success'
    )
}

document.getElementById("btnCancelar").onclick = function () {
    location.href = "/HTML/inicioVendedor.html";
}