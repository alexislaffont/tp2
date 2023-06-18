class auto {
    marca: string;
    modelo: string;
    potencia: number;
    vel_max: number;

    constructor(marca:string, modelo:string, potencia: number, vel_max:number){
        this.marca= marca
        this.modelo= modelo
        this.potencia= potencia
        this. vel_max= vel_max
    }

    imprimir(){
        console.log(`El vehiculo ${this.marca} modelo ${this.modelo} con una potencia de ${this.potencia}CV y con una velocidad maxima de ${this.vel_max}]`)
    }

    calcular_tiempo(distance:number){
        
        let vel: number = this.vel_max
        let tiempo: number = distance / vel
        let x :number = Math.trunc(tiempo)
        let y :number = Math.trunc(60 *(tiempo - Math.trunc(tiempo)))
        console.log(`Tardaria en recorrer ${distance}: ${x} horas ${y} minutos`)

    }
      
    }

let auto_1: auto= new auto("Ferrari","Italia 458",600,325)
auto_1.imprimir()
auto_1.calcular_tiempo(100)
let auto_2: auto=new auto("Mclaren","P1",737,350) 
auto_2.imprimir()
auto_2.calcular_tiempo(100)
let auto_3: auto=new auto("Renault","Logan",115,171)
auto_3.imprimir()
auto_3.calcular_tiempo(100)
let auto_4:auto=new auto("Peugeot","508",120,210)
auto_4.imprimir()
auto_4.calcular_tiempo(100)
let auto_5:auto=new auto("Audi","R8",620,331)
auto_5.imprimir()
auto_5.calcular_tiempo(100)
   


