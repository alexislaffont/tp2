class escuela{
    nombre_curso: string

    constructor(nombre_curso:string){
        this.nombre_curso = nombre_curso 
          
    }

    imprimir(){
        console.log(this.nombre_curso)
    }
}
class alumno extends escuela{
    alumn_name: string

    constructor(nombre_curso:string,alumn_name:string){
        super(nombre_curso)
        this.alumn_name=alumn_name
    }

    imprimir(){
        console.log(this.alumn_name,this.nombre_curso)
    }
}
let curso_1:escuela= new escuela("Lengua")
let curso_2:escuela=new escuela("Matematicas")
let alumn_1:alumno=new alumno("Matematica","Juan")
let alumn_2:alumno=new alumno("Matematica","Pablo")
let alumn_3:alumno=new alumno("Lengua","Raul")
let alumn_4:alumno=new alumno("Lengua","Arturo")
alumn_1.imprimir()
alumn_2.imprimir()
alumn_3.imprimir()
alumn_4.imprimir()
