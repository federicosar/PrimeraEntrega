let altura = parseInt(prompt("ingrese altura en centimetros"))
let ancho = parseInt(prompt("ingrese ancho en centimetros"))
const porcentajeSeña = (20 / 100)

const multiplicar = (num1, num2) => num1 * num2


let area = multiplicar(altura, ancho)
const tamaño = area

console.log(area)

alert(area + " " + "Cm².")

// let seña = multiplicar(area, porcentajeSeña, )

//     console.log(seña)




// inclucion de arrays a desafio anterior

let array1 = [altura, area, porcentajeSeña, ancho]

console.log(array1)

for (let i = 0; i < array1.length; i++) {

    if (i == 10) {
        continue
    }

    console.log(array1[i])

}

//fin de inclucion de arrays a desafio anterior




let peque = parseInt(3000)
let seña1 = multiplicar(peque, porcentajeSeña)
// console.log(seña1)

let medio = parseInt(6000)
let seña2 = multiplicar(medio, porcentajeSeña)
// console.log(seña2)

let grande = parseInt(9000)
let seña3 = multiplicar(grande, porcentajeSeña)
// console.log(seña3)

let xGrande = parseInt(12000)
let seña4 = multiplicar(xGrande, porcentajeSeña)
// console.log(seña4)

if (area <= 20) {

    console.log("Tamaño pequeño")

    alert("tamaño pequeño" + " " + "seña" + " " + seña1)

} else if (area <= 50) {
    console.log("tamaño mediano")

    alert("tamaño mediano" + " " + "seña" + " " + seña2)

} else if (area <= 200) {
    console.log("tamaño grande")

    alert("tamaño grande" + " " + "seña" + " " + seña3)

} else {
    console.log("tamaño extra grande")

    alert("tamaño extra grande" + " " + "seña" + " " + seña4)

}


//principio de objetos

class moldeTamaños {
    constructor(nombre, altura, ancho, tamaño, ) {
        this.nombre = nombre
        this.altura = altura
        this.ancho = ancho
        this.tamaño = tamaño
    }

    nombrarMedida() {

        //console.log(`Mi medida cuesta ${this.nombre} pesos`)

        console.log(this.nombre)

    }

    seleccionarMedida() {


        if (this.tamaño <= 20 && this.tamaño > 50) {

            alert(`El tamaño es ${this.nombre}`)

        } else if (this.tamaño < 200 && this.tamaño > 50) {

            alert(`El tamaño es ${this.nombre}`)

        } else if (this.tamaño > 200 && this.tamaño < 500) {

            alert(`El tamaño es ${this.nombre}`)

        } else {
            alert(`Fuera de rango`)


        }

    }

}


const peque1 = new moldeTamaños("molde peque", 2, 2, tamaño);

const medio1 = new moldeTamaños("molde medio", 5, 5, tamaño);

const grande1 = new moldeTamaños("molde grande", 10, 10, tamaño);

const xGrande1 = new moldeTamaños("molde extra grande", 20, 20, tamaño);


peque1.nombrarMedida();
medio1.nombrarMedida();
grande1.nombrarMedida();
xGrande1.nombrarMedida();

peque1.seleccionarMedida()
medio1.seleccionarMedida()
grande1.seleccionarMedida()
xGrande1.seleccionarMedida()


let tamañosDelCliente = '';
for (let index = 0; index < 4; index++) {
    let tamaño = new moldeTamaños(
                            prompt("Nombre del cliente"),
                            prompt("altura"),
                            prompt("ancho"),
                            prompt("area"));

    tamañosDelCliente += "tamaño: "+moldeTamaños.nombre+" "+
                         "altura: "+moldeTamaños.altura+""+
                         "ancho: "+moldeTamaños.ancho+""+
                         "area: "+moldeTamaños.tamaño+"\n";


}

console.log(tamañosDelCliente)








//fin de objetos