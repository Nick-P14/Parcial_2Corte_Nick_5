class Presencial extends Estudiante {
    constructor(salon, idEstudiante, nombreCompleto, programa, notaFinal, modalidadPrograma) {
        super(idEstudiante, nombreCompleto, programa, notaFinal, modalidadPrograma);
        this.salon = salon;
        this.bonificacion = 0.5;
    }

    calcularNotaDefinitiva() {
        return this.notaFinal + this.bonificacion;
    }
}