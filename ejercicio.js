

const crearCuenta = document.getElementById("crear")
const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const contraseña = document.getElementById("contraseña")
const repetirContraseña = document.getElementById("repetirContraseña")
const operacion = document.getElementById("operacion")
const numOperacion = document.getElementById("numOperacion")
const condiciones = document.getElementById("condiciones")


const num1 = Math.floor(Math.random() * 10)
const num2 = Math.floor(Math.random() * 10)
const suma = num1 + num2
numOperacion.textContent = num1 + "+" + num2

inputs = [nombre, correo, contraseña, operacion, condiciones, repetirContraseña]

function validarVacio() {
    let contadorVacio = 0
    let errorVacio = document.getElementById("errorVacio")
    for (input of inputs) {
        if (input.value.trim() === "") {
            contadorVacio+= 1
            input.style.border = "2px solid red"
        }
    }

    if (contadorVacio>0) {
        errorVacio.textContent = "Debe rellenar todas las casillas obligatorias" 
    }
    else {  
        revertirCambiosVisuales(input, errorVacio)
    }

}

function validarContraseña() {
    const errorNumCarecteres = document.getElementById("errorNumCaracteres")
    const errorNoDigitos = document.getElementById("errorNoDigitos")
    let hayError = false
    if (contraseña.value.trim().length < 8 )  {
        cambiosVisuales(contraseña, errorNumCarecteres, ("Contraseña por debajo de 8 caracteres. "))
        hayError = true    
    }
    else {    
        revertirCambiosVisuales(contraseña, errorNumCarecteres)
    }

    if (!contraseña.value.match(/\d/g)) {
        cambiosVisuales(contraseña, errorNoDigitos, ("Debe incluir almenos 1 digito"))
        hayError = true 
    }
    else {
        revertirCambiosVisuales(contraseña, errorNoDigitos)  
    }

    if (!hayError)  {
        contraseña.style.border = "";
    }
    else {
        contraseña.style.border = "2px solid red";
    }
}

function validarRepetirContraseña() {
    const errorContraseñaNoCoincide = document.getElementById("errorContraseñaNoCoincide")
    if (repetirContraseña.value !== contraseña.value) {
        cambiosVisuales(repetirContraseña, errorContraseñaNoCoincide, "Contraseña no coincide")
    }
    else
        revertirCambiosVisuales(repetirContraseña, errorContraseñaNoCoincide)

}

function validarOperacion() {
    const errorOperacion = document.getElementById("errorOperacion")
    const num1 = Math.floor(Math.random() * 10)
    const num2 = Math.floor(Math.random() * 10)
    const suma = num1 + num2

    if (operacion.value.trim() !== suma) {
        cambiosVisuales(operacion, errorOperacion, "Respuesta errónea")
    }
    else {
        revertirCambiosVisuales(operacion, errorOperacion)
    }
}

function cambiosVisuales(casilla, error, mensaje) {
    casilla.style.border = "2px solid red"
    error.textContent = mensaje 
}

function revertirCambiosVisuales(casilla, error) {
    casilla.style.border = "";
    error.textContent = "" 
}

function validarFormulario() {
crearCuenta.addEventListener("click", function() {
    validarVacio()
    validarContraseña()
    validarRepetirContraseña()
    validarOperacion()
})
}
validarFormulario()


