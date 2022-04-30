var paciente = document.querySelector("#primeiro-paciente");
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoValido = true
    var alturaValida = true
    
    if (peso <= 0 || peso >= 1000) {
        console.log("Peso invalido")
        pesoValido = false
        tdImc.textContent = "Peso Invalido"
        paciente.style.color = "red"
    }
    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura invalida")
        alturaValida = false
        tdImc.textContent = "Altura invalida"
        paciente.style.color = "red"
    }
    if (alturaValida && pesoValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}