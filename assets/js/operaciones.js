
var cantidadPartidas = () =>{
  var numeroPartidas = document.getElementById("partidas").value; 
  document.getElementById("numeroPartidas").innerHTML = parseInt(numeroPartidas); 

  console.log(numeroPartidas)
}



function elegirPiedra() {

  var humanoEligePiedra = document.getElementById("piedra");
  
  console.log("Humano elige piedra") 
}

function elegirPapel() {

  var humanoEligePapel = document.getElementById("papel");
  
  console.log("Humano elige papel") 
}

function elegirTijera() {

  var humanoEligeTijera = document.getElementById("tijera");
  
  console.log("Humano elige tijera") 
}

var x = Math.floor(Math.random()*3);

if (x === 0) {
   var tiradaMaquina = "piedra";
   var tiradaMaquinaPiedra="piedra"
} else if (x === 1){
  var tiradaMaquina = "papel";
  var tiradaMaquinaPapel="papel"
}else if (x === 2){
  var tiradaMaquina = "tijera";
  var tiradaMaquinaTijera="tijera"
}

console.log("Máquina elige " + tiradaMaquina);

document.getElementById('jugadaMaquina').innerHTML = tiradaMaquina;

if (humanoEligePiedra === true) {

  if (humanoEligePiedra === tiradaMaquinaPiedra) {
    console.log("Ambos eligen piedra, empate"); 

  } if (humanoEligePiedra === tiradaMaquinaPapel) {
    console.log("Haz elegido Piedra y la Máquina eligió papel, tú ganas"); 

  } else (humanoEligePiedra === tiradaMaquinaTijera); {
    console.log("Haz elegido Piedra y la Máquina eligió tijera, la Maquina gana"); 
  }
} 


if (humanoEligePapel === true) {

  if (humanoEligePapel === tiradaMaquinaPiedra) {
    console.log("Haz elegido Papel y la Máquina eligió piedra, tú ganas"); 

  } if (humanoEligePapel === tiradaMaquinaPapel) {
    console.log("Ambos eligen papel, empate"); 

  } else (humanoEligePapel === tiradaMaquinaTijera); {
    console.log("Haz elegido papel y la Maquina eligió tijera, la Máquina gana"); 
  }
} 


if (humanoEligeTijera === true) {

  if (humanoEligeTijera === tiradaMaquinaPiedra) {
    console.log("Haz elegido tijera y la Máquina eligió piedra, la Máquina gana"); 

  } if (humanoEligeTijera === tiradaMaquinaPapel) {
    console.log("Haz elegido tijera y la Máquina eligió papel, tú ganas"); 

  } else (hhumanoEligeTijera === tiradaMaquinaTijera); {
     console.log("Ambos eligen papel, empate"); 
  }
} 


