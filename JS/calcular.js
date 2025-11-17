document.addEventListener("DOMContentLoaded", function(){
    calcularPrecio();
})

//TOMAMOS LOS VALORES DE LOS INPUTS Y EL TEXTO EN QUE SE MOSTRARA EL RESULTADO
const inputPrecio = document.getElementById("inputPrecio");
const inputIVA = document.getElementById("inputIVA");
let textTotal = document.getElementById("precioFinal");

//PARA CAPTURAR EN TIEMPO REAL DEBEMOS TOMAR EL EVENTO "INPUT" Y PASARLO AL METODO
inputPrecio.addEventListener("input", calcularPrecio);
inputIVA.addEventListener("input", calcularPrecio);

function calcularPrecio(){

    //CREAMOS LAS VARIABLES PARA CALCULAR EL PRECIO
    const precio_unitario = parseFloat(inputPrecio.value) || 0;
    let precio_final = 0;

    precio_final = precio_unitario * 1.40;

    if(inputIVA.checked){
        precio_final *= 1.21
    }

    textTotal.innerHTML = "El precio final es: " + precio_final.toFixed(2);
}