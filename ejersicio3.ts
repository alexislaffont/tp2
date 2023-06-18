class cuenta_bancaria{
    fondo:number
    constructor(fondo:number){
        this.fondo=fondo
    }
    imprimir(){
        console.log(`El total de su cuenta es ${this.fondo}`)
    }

    depositar(deposito:number){
        if (deposito<500000){
            this.fondo= this.fondo + deposito
            console.log(`Deposito realizado con exito. Fondo actual: ${this.fondo}`)}
        else{
            console.log("No se puede depositar un monto superior a 500000")
        }
    }
    extraer(extraccion:number){
        if (extraccion>100000){
            console.log("No se puede realizar una extraccion mayor a 100000")
            console.log("Por favor coloque un monto menor")
        }
        else{
            if (extraccion > this.fondo){
                console.log("No se dispone de ese saldo en la cuenta bancaria")
            }
        
            else{
                this.fondo= this.fondo - extraccion
                console.log(`Extraccion realizada con exito. Fondo actual: ${this.fondo}`)
            }
        }
    }
}
let deposito_inicial= 50000
let cuenta_1: cuenta_bancaria
if (deposito_inicial<500000){
    cuenta_1=new cuenta_bancaria(deposito_inicial)
    cuenta_1.imprimir()
    cuenta_1.depositar(50000)
    cuenta_1.extraer(200000)
    }
else{
    console.log("El deposito inical no puede superar los 500000")
}
