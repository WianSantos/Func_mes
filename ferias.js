const date = new Date();
const dia = date.getDate();
let mes = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

let nomeDoMes = document.getElementById('nomeDoMes')

nomeDoMes.innerHTML = mes[date.getMonth()]


let fraseFeriasTrocada = document.querySelectorAll('.fraseFeriasTrocada')

let inicioFeriasBruno = new Date("May 15")
let finalFeriasBruno = new Date("May 30")

//let inicioFeriasBelisa = new Date("April 05")
//let finalFeriasBelisa = new Date("April 30")

//let inicioFeriasErick = new Date("January 05")
//let finalFeriasErick = new Date("April 30")

let inicioFeriasGabriel = new Date("July 03")
let finalFeriasGabriel = new Date("July 17")

let inicioFeriasGraziela = new Date("April 03")
let finalFeriasGraziela = new Date("April 17")

let inicioFeriasIuri = new Date("May 14")
let finalFeriasIuri = new Date("May 28")

//let inicioFeriasJustinho = new Date("April 05")
//let finalFeriasJustinho = new Date("April 30")

let inicioFeriasLarissa = new Date("May 15")
let finalFeriasLarissa = new Date("May 30")

let inicioFeriasLuciana = new Date("July 10")
let finalFeriasLuciana = new Date("July 24")

let inicioFeriasVini = new Date("November 27")
let finalFeriasVini = new Date("December 12")

//let inicioFeriasWian = new Date("April 05")
//let finalFeriasWian = new Date("April 30")

console.log(inicioFeriasBruno)
console.log(inicioFeriasBruno.getDate())
console.log(inicioFeriasBruno.getMonth())
console.log(finalFeriasBruno)
console.log(finalFeriasBruno.getDate())

if(date.getMonth() == inicioFeriasBruno.getMonth()){

  dataFeriasInicial = inicioFeriasBruno.getDate();
  dataFeriasFinal = finalFeriasBruno.getDate();
}else if(date.getMonth() == inicioFeriasGraziela.getMonth()){
  dataFeriasInicial = inicioFeriasGraziela.getDate();
  dataFeriasFinal = finalFeriasGraziela.getDate();
}
else if(date.getMonth() == inicioFeriasGabriel.getMonth()){
  dataFeriasInicial = inicioFeriasGabriel.getDate();
  dataFeriasFinal = finalFeriasGabriel.getDate();
}
else if(date.getMonth() == inicioFeriasIuri.getMonth()){
  dataFeriasInicial = inicioFeriasIuri.getDate();
  dataFeriasFinal = finalFeriasIuri.getDate();
}
else if(date.getMonth() == inicioFeriasLarissa.getMonth()){
  dataFeriasInicial = inicioFeriasLarissa.getDate();
  dataFeriasFinal = finalFeriasLarissa.getDate();
}
else if(date.getMonth() == inicioFeriasLuciana.getMonth()){
  dataFeriasInicial = inicioFeriasLuciana.getDate();
  dataFeriasFinal = finalFeriasLuciana.getDate();
}
else if(date.getMonth() == inicioFeriasVini.getMonth()){
  dataFeriasInicial = inicioFeriasVini.getDate();
  dataFeriasFinal = finalFeriasVini.getDate();
}
//else if(date.getMonth() == inicioFeriasGraziela.getMonth()){
//  dataFeriasInicial = inicioFeriasGraziela.getDate();
//  dataFeriasFinal = finalFeriasGraziela.getDate();
//}
//else if(date.getMonth() == inicioFeriasGraziela.getMonth()){
//  dataFeriasInicial = inicioFeriasGraziela.getDate();
//  dataFeriasFinal = finalFeriasGraziela.getDate();
//}
//else if(date.getMonth() == inicioFeriasGraziela.getMonth()){
//  dataFeriasInicial = inicioFeriasGraziela.getDate();
//  dataFeriasFinal = finalFeriasGraziela.getDate();
//}else if(date.getMonth() == inicioFeriasGraziela.getMonth()){
//  dataFeriasInicial = inicioFeriasGraziela.getDate();
//  dataFeriasFinal = finalFeriasGraziela.getDate();}
else{
  console.log('Mes errado')
  dataFeriasInicial = 0;
  dataFeriasFinal = 0;
}

//parabens!
if(date.getMonth() == 0){
  fraseFeriasTrocada[0].innerHTML=''
} else if (date.getMonth() == 1){
  fraseFeriasTrocada[0].innerHTML=''
} else if (date.getMonth() == 2){
  fraseFeriasTrocada[0].innerHTML=''
} else if (date.getMonth() == 3){
  fraseFeriasTrocada[0].innerHTML='Grazi!'
} else if (date.getMonth() == 4){
  fraseFeriasTrocada[0].innerHTML='Bruno e Larissa!'
} else if (date.getMonth() == 5){
  fraseFeriasTrocada[0].innerHTML='Iuri!'
} else if (date.getMonth() == 6){
  fraseFeriasTrocada[0].innerHTML='Gabriel e Luciana!'
} else if (date.getMonth() == 7){
  fraseFeriasTrocada[0].innerHTML=''
} else if (date.getMonth() == 8){
  fraseFeriasTrocada[0].innerHTML=''
} else if (date.getMonth() == 9){
  fraseFeriasTrocada[0].innerHTML='Bruno!'
} else if (date.getMonth() == 10){
  fraseFeriasTrocada[0].innerHTML='Vini!'
} else if (date.getMonth() == 11){
  fraseFeriasTrocada[0].innerHTML='Vini e Gabriel'
}



//inicio calendario

console.log(date.getMonth())
console.log(dia);



let el = document.querySelector(".number-days");
for (i = 1; i <= 31; i++) {
  if (i == dia) {
    el.innerHTML += `<span class="day-selected">${i}</span>`;
  } else {
    if (i < dataFeriasInicial) {
      el.innerHTML += `<span>${i}</span>`;
    } else if (i <= dataFeriasFinal) {
      el.innerHTML += `<span class="day-selected-ferias">${i}</span>`;
    } else {
      el.innerHTML += `<span>${i}</span>`;
    }
  }
}






function atualizarFerias(){
    
let colabDeFerias = document.getElementById('ferias')
console.log(colabDeFerias)

let sortudo = colabDeFerias.options[colabDeFerias.selectedIndex].value;
console.log(sortudo)

let diasFerias = document.getElementById('diasFerias')

let qtdDeDias = diasFerias.options[diasFerias.selectedIndex].value;
console.log(qtdDeDias)

}

