document.getElementsByClassName("modalEliminar")[0].onclick = function() {
    Swal.fire({
        title: '¿Está seguro de desactivar este producto?',
        text: "Usted está a punto de desactivar este producto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Producto desactivado!',
                'Se ha desactivado el producto!',
                'success'
            )
        }
    })
}