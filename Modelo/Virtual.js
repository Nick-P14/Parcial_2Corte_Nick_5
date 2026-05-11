class Virtual extends Estudiante {
    
    constructor(plataforma, idEstudiante, nombreCompleto, programa, notaFinal, modalidadPrograma){

        super( idEstudiante, nombreCompleto, programa, notaFinal, modalidadPrograma);
        this.plataforma;
        this.bonificacion = 0.3;
        this.notaDefinitiva = this.notaDefinitiva()
    }

    notaDefinitiva(){
        return this.notaFinal +  this.bonificacion;
    }
}