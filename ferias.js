//inicio calendario
const date = new Date();
const dia = date.getDate();

console.log(dia);

const dataFeriasInicial = 10;
const dataFeriasFinal = 15;

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


// let diaInicialFerias = document.getElementById('dataInicialFerias')
//     for(let d =1; d<=31;i++){
//         let opcao = new Option;
//         opcao.text=d
//         opcao.val=d
//         diaInicialFerias[d]= opcao
//     }

// var ddl = document.getElementById('mycontainer').getElementsByTagName("select")[0];
// for (var i = 1; i <= 100; i++) {
//     var theOption = new Option;
//     theOption.text = i;
//     theOption.value = i;
//     ddl.options[i] = theOption;




function atualizarFerias(){
    
let colabDeFerias = document.getElementById('ferias')
console.log(colabDeFerias)

let sortudo = colabDeFerias.options[colabDeFerias.selectedIndex].value;
console.log(sortudo)

let diasFerias = document.getElementById('diasFerias')

let qtdDeDias = diasFerias.options[diasFerias.selectedIndex].value;
console.log(qtdDeDias)

}