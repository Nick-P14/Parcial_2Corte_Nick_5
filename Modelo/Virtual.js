class Virtual extends Estudiante {
    constructor(plataforma, idEstudiante, nombreCompleto, programa, notaFinal, modalidadPrograma) {
        super(idEstudiante, nombreCompleto, programa, notaFinal, modalidadPrograma);
        this.plataforma = plataforma;
        this.bonificacion = 0.3;
    }

    calcularNotaDefinitiva() {
        return this.notaFinal + this.bonificacion;
    }
}