// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btnModalEditar");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("cancelar")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

span2.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function guardar() {
    Swal.fire(
        'Datos de la finca/empresa guardados!',
        'Se han guardado los datos correctamente!',
        'success'
    )

    setTimeout(function () {
        document.getElementById("formAgregar").style.display = "none";
        document.getElementById("infoEmpresa").style.display = "block";;
    }, 3000)
}

document.getElementById("btnVolver").onclick = function () {
    location.href = "/HTML/inicioVendedor.html";
}

function actualizar() {
    Swal.fire(
        'Datos actualizados!',
        'Se han actualizado los datos correctamente!',
        'success'
    )
}