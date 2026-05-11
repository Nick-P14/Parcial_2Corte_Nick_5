function reconstruirEstudiantes(datos) {
    return datos.map(est => {
        if (est.modalidadPrograma === 'P') {
            return new Presencial(est.salon, est.idEstudiante, est.nombreCompleto, est.programa, est.notaFinal, est.modalidadPrograma);
        } else {
            return new Virtual(est.plataforma, est.idEstudiante, est.nombreCompleto, est.programa, est.notaFinal, est.modalidadPrograma);
        }
    });
}

let estudiantes = reconstruirEstudiantes(JSON.parse(localStorage.getItem('estudiantes')) || []);

function crearEstudiante() {
    const id = document.getElementById('documentoId').value;
    const nombre = document.getElementById('nombreId').value;
    const nota = parseFloat(document.getElementById('notaId').value);
    const modalidad = document.getElementById('modalidadId').value;
    const programa = document.getElementById('programa').value;

    if (!id || !nombre || isNaN(nota)) {
        alert('Por favor complete todos los campos correctamente.');
        return;
    }

    let nuevoEstudiante;
    if (modalidad === "presencial") {
        nuevoEstudiante = new Presencial("A-101", id, nombre, programa, nota, 'P');
    } else {
        nuevoEstudiante = new Virtual("AulaWeb", id, nombre, programa, nota, 'V');
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
        const notaDef = est.calcularNotaDefinitiva();
        sumaNotas += notaDef;

        tablaBody.innerHTML += `
            <tr>
                <td>${est.idEstudiante}</td>
                <td>${est.nombreCompleto}</td>
                <td>${est.modalidadPrograma === 'P' ? 'Presencial' : 'Virtual'}</td>
                <td>${est.notaFinal.toFixed(2)}</td>
                <td><strong>${notaDef.toFixed(2)}</strong></td>
            </tr>
        `;
    });

    const promedio = estudiantes.length > 0 ? (sumaNotas / estudiantes.length) : 0;
    promedioSpan.innerText = promedio.toFixed(2);
}

window.onload = renderizarTabla;