function nombre () {
    const nombreUsuario = prompt("Ingrese su nombre de usuario ")
    console.log ("Su nombre de usuario es " + nombreUsuario)
}

function edad () {
    do {
        edad = parseInt(prompt("Ingrese la edad (La página es para mayores de 18 años)"))
    }
    while (edad <18) {
    alert ("Bienvenido a la página web")
    }
}

function anioDeNacimiento () {
    let anioActual = 2022
    let anioDeNacimiento = anioActual - edad
    console.log ("Usted nació en el año " + anioDeNacimiento)
}

function producto () {
    const cortinas = 7000
    const ventanas = 10000
    const puertas = 20000
    const iva = 21/100
    const opciones = prompt("Elija su producto a cotizar (Puede consultar por cortinas,($7000) ventanas,($10000) o puertas($20000)").toLowerCase()
    console.log ("Usted eligio cotizar " + opciones)
        if (opciones === "cortina" || opciones === "cortinas") {
            let resultadoCortinas = (cortinas * iva) + cortinas
            return alert ("Las cortinas cuestan " + resultadoCortinas + " pesos ")
        }  
        else if  (opciones === "ventana" || opciones === "ventanas") {
            let resultadoVentanas = (ventanas * iva) + ventanas
            return alert ("Las ventanas cuestan " + resultadoVentanas + " pesos ")
        }
        else if  (opciones === "puerta" || opciones === "puertas" ) {
            let resultadoPuertas = (puertas * iva) + puertas
            return alert ("Las puertas cuestan " + resultadoPuertas + " pesos ")
        }
        else {
            return alert ("El producto no ha sido encontrado")
        }
}

nombre()
edad()
anioDeNacimiento()
producto ()

const productos = [
        {
            nombre: "Cortinas black out",
            precio: 7000,
            categoria: "Cortinas",
        },
        {
            nombre: "Cortinas sun screen",
            precio: 12000,
            categoria: "Cortinas",
        },
        {
            nombre: "Ventanas linea herrerro",
            precio: 10000,
            categoria: "Ventanas",
        },
        {
            nombre: "Ventanas linea modena",
            precio: 20000,
            categoria: "Ventanas",
        },
        {
            nombre: "Puertas placa",
            precio: 150000,
            categoria: "Puertas",
        },
        {
            nombre: "Puertas chapa",
            precio: 150000,
            categoria: "Puertas",
        }
]

const encontrar = productos.find((producto ) => producto.nombre === "Puertas chapa")
console.log (encontrar)