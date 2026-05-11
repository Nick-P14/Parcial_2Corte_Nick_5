class Presencial extends Estudiante {
    
    constructor(salon, idEstudiante, nombreCompleto, programa, notaFinal, modalidadPrograma){

        super( idEstudiante, nombreCompleto, programa, notaFinal, modalidadPrograma);
        this.salon;
        this.bonificacion = 0.5;
        this.notaDefinitiva = this.notaDefinitiva()
    }

    notaDefinitiva(){
        return this.notaFinal +  this.bonificacion;
    }
}