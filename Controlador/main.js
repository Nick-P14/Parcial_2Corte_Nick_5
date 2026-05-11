
let estudiantes = JSON.parse(localStorage.getItem('estudiantes')) || [];


function crearEstudiante() {
    const id = document.getElementById('documentoId').value;
    const nombre = document.getElementById('nombreId').value;
    const nota = parseFloat(document.getElementById('apellidoId').value); 
    const modalidad = document.getElementById('modalidadId').value;
    const programa = "Ingeniería"; 

    let nuevoEstudiante;

    if (modalidad === "presencial") {
        nuevoEstudiante = new Presencial("A-101", id, nombre, programa, nota, 'P');
    } else {
        nuevoEstudiante = new Virtual("Canvas", id, nombre, programa, nota, 'V');
    }

    estudiantes.push(nuevoEstudiante);
    guardarYMostrar();
    document.querySelector('form').reset();
}

function guardarYMostrar() {
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
    renderizarTabla();
}

function renderizarTabla() {
    const tablaBody = document.getElementById('tablaEstudiantesBody');
    const promedioSpan = document.getElementById('promedioGrupo');
    
    if (!tablaBody) return; 

    tablaBody.innerHTML = '';
    let sumaNotas = 0;

    estudiantes.forEach(est => {

        const notaDef = est.notaDefinitiva; 
        sumaNotas += notaDef;

        tablaBody.innerHTML += `
            <tr>
                <td>${est.idEstudiante}</td>
                <td>${est.nombreCompleto}</td>
                <td>${est.modalidadPrograma}</td>
                <td>${est.notaFinal}</td>
                <td><strong>${notaDef.toFixed(2)}</strong></td>
            </tr>
        `;
    });

    const promedio = estudiantes.length > 0 ? (sumaNotas / estudiantes.length) : 0;
    promedioSpan.innerText = promedio.toFixed(2);
}

window.onload = renderizarTabla;
