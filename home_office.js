let limparCampo = document.querySelectorAll(".troca");
//Belisa

let SemanaPintada = document.querySelectorAll(".SCB");
let semanaCheiaBe = document.getElementById("semanaCheiaBe");
let segundaB = document.getElementById("segundaB");
let tercaB = document.getElementById("tercaB");
let quartaB = document.getElementById("quartaB");
let quintaB = document.getElementById("quintaB");
let sextaB = document.getElementById("sextaB");
//Belisa
//Bruno

let SemanaPintadaBruno = document.querySelectorAll(".SCBR");
let semanaCheiaBr = document.getElementById("semanaCheiaBr");
let segundaBr = document.getElementById("segundaBr");
let tercaBr = document.getElementById("tercaBr");
let quartaBr = document.getElementById("quartaBr");
let quintaBr = document.getElementById("quintaBr");
let sextaBr = document.getElementById("sextaBr");
//Bruno
//Erick

let SemanaPintadaErick = document.querySelectorAll(".SCE");
let semanaCheiaE = document.getElementById("semanaCheiaE");
let segundaE = document.getElementById("segundaE");
let tercaE = document.getElementById("tercaE");
let quartaE = document.getElementById("quartaE");
let quintaE = document.getElementById("quintaE");
let sextaE = document.getElementById("sextaE");
//Erick
//Gabriel

let SemanaPintadaGabriel = document.querySelectorAll(".SCG");
let semanaCheiaG = document.getElementById("semanaCheiaG");
let segundaG = document.getElementById("segundaG");
let tercaG = document.getElementById("tercaG");
let quartaG = document.getElementById("quartaG");
let quintaG = document.getElementById("quintaG");
let sextaG = document.getElementById("sextaG");
//Gabriel
//Graziela

let SemanaPintadaGraziela = document.querySelectorAll(".SCGr");
let semanaCheiaGr = document.getElementById("semanaCheiaGr");
let segundaGr = document.getElementById("segundaGr");
let tercaGr = document.getElementById("tercaGr");
let quartaGr = document.getElementById("quartaGr");
let quintaGr = document.getElementById("quintaGr");
let sextaGr = document.getElementById("sextaGr");
//Graziela
//Iuri

let SemanaPintadaIuri = document.querySelectorAll(".SCI");
let semanaCheiaI = document.getElementById("semanaCheiaI");
let segundaI = document.getElementById("segundaI");
let tercaI = document.getElementById("tercaI");
let quartaI = document.getElementById("quartaI");
let quintaI = document.getElementById("quintaI");
let sextaI = document.getElementById("sextaI");
//Iuri
//Larissa

let SemanaPintadaLarissa = document.querySelectorAll(".SCL");
let semanaCheiaL = document.getElementById("semanaCheiaL");
let segundaL = document.getElementById("segundaL");
let tercaL = document.getElementById("tercaL");
let quartaL = document.getElementById("quartaL");
let quintaL = document.getElementById("quintaL");
let sextaL = document.getElementById("sextaL");
//Larissa
//Luciana

let SemanaPintadaLuciana = document.querySelectorAll(".SCLu");
let semanaCheiaLu = document.getElementById("semanaCheiaLu");
let segundaLu = document.getElementById("segundaLu");
let tercaLu = document.getElementById("tercaLu");
let quartaLu = document.getElementById("quartaLu");
let quintaLu = document.getElementById("quintaLu");
let sextaLu = document.getElementById("sextaLu");
//Luciana
//Vini

let SemanaPintadaMarcos = document.querySelectorAll(".SCM");
let semanaCheiaM = document.getElementById("semanaCheiaM");
let segundaM = document.getElementById("segundaM");
let tercaM = document.getElementById("tercaM");
let quartaM = document.getElementById("quartaM");
let quintaM = document.getElementById("quintaM");
let sextaM = document.getElementById("sextaM");
//Vini
//Wian

let SemanaPintadaWian = document.querySelectorAll(".SCW");
let semanaCheiaW = document.getElementById("semanaCheiaW");
let segundaW = document.getElementById("segundaW");
let tercaW = document.getElementById("tercaW");
let quartaW = document.getElementById("quartaW");
let quintaW = document.getElementById("quintaW");
let sextaW = document.getElementById("sextaW");
//Wian

console.log(SemanaPintada);
console.log(limparCampo);
function atualizarSemana() {
  for (let i = 0; i < limparCampo.length; i++) {
    limparCampo[i].innerHTML = `<td class="tg-c3ow"'>CLIA</td>`;
    limparCampo[i].setAttribute("class", "troca");
  }

  //Belisa
  if (semanaCheiaBe.checked == true) {
    SemanaPintada[0].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintada[0].setAttribute("class", "home");
    SemanaPintada[1].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintada[1].setAttribute("class", "home");
    SemanaPintada[2].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintada[2].setAttribute("class", "home");
    SemanaPintada[3].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintada[3].setAttribute("class", "home");
    SemanaPintada[4].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintada[4].setAttribute("class", "home");
    console.log("passou");
  }
  if (segundaB.checked == true) {
    SemanaPintada[0].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintada[0].setAttribute("class", "home");
  }
  if (tercaB.checked == true) {
    SemanaPintada[1].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintada[1].setAttribute("class", "home");
  }
  if (quartaB.checked == true) {
    SemanaPintada[2].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintada[2].setAttribute("class", "home");
  }
  if (quintaB.checked == true) {
    SemanaPintada[3].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintada[3].setAttribute("class", "home");
  }
  if (sextaB.checked == true) {
    SemanaPintada[4].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintada[4].setAttribute("class", "home");
  }
  //Bruno
  if (semanaCheiaBr.checked == true) {
    SemanaPintadaBruno[0].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaBruno[0].setAttribute("class", "home");
    SemanaPintadaBruno[1].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaBruno[1].setAttribute("class", "home");
    SemanaPintadaBruno[2].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaBruno[2].setAttribute("class", "home");
    SemanaPintadaBruno[3].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaBruno[3].setAttribute("class", "home");
    SemanaPintadaBruno[4].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaBruno[4].setAttribute("class", "home");
    console.log("passou");
  }
  if (segundaBr.checked == true) {
    SemanaPintadaBruno[0].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaBruno[0].setAttribute("class", "home");
  }
  if (tercaBr.checked == true) {
    SemanaPintadaBruno[1].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaBruno[1].setAttribute("class", "home");
  }
  if (quartaBr.checked == true) {
    SemanaPintadaBruno[2].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaBruno[2].setAttribute("class", "home");
  }
  if (quintaBr.checked == true) {
    SemanaPintadaBruno[3].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaBruno[3].setAttribute("class", "home");
  }
  if (sextaBr.checked == true) {
    SemanaPintadaBruno[4].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaBruno[4].setAttribute("class", "home");
  }
  //Erick
  if (semanaCheiaE.checked == true) {
    SemanaPintadaErick[0].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaErick[0].setAttribute("class", "home");
    SemanaPintadaErick[1].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaErick[1].setAttribute("class", "home");
    SemanaPintadaErick[2].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaErick[2].setAttribute("class", "home");
    SemanaPintadaErick[3].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaErick[3].setAttribute("class", "home");
    SemanaPintadaErick[4].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaErick[4].setAttribute("class", "home");
    console.log("passou");
  }
  if (segundaE.checked == true) {
    SemanaPintadaErick[0].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaErick[0].setAttribute("class", "home");
  }
  if (tercaE.checked == true) {
    SemanaPintadaErick[1].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaErick[1].setAttribute("class", "home");
  }
  if (quartaE.checked == true) {
    SemanaPintadaErick[2].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaErick[2].setAttribute("class", "home");
  }
  if (quintaE.checked == true) {
    SemanaPintadaErick[3].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaErick[3].setAttribute("class", "home");
  }
  if (sextaE.checked == true) {
    SemanaPintadaErick[4].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaErick[4].setAttribute("class", "home");
  }
  //Gabriel
  if (semanaCheiaG.checked == true) {
    SemanaPintadaGabriel[0].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaGabriel[0].setAttribute("class", "home");
    SemanaPintadaGabriel[1].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaGabriel[1].setAttribute("class", "home");
    SemanaPintadaGabriel[2].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaGabriel[2].setAttribute("class", "home");
    SemanaPintadaGabriel[3].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaGabriel[3].setAttribute("class", "home");
    SemanaPintadaGabriel[4].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaGabriel[4].setAttribute("class", "home");
    console.log("passou");
  }
  if (segundaG.checked == true) {
    SemanaPintadaGabriel[0].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaGabriel[0].setAttribute("class", "home");
  }
  if (tercaG.checked == true) {
    SemanaPintadaGabriel[1].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaGabriel[1].setAttribute("class", "home");
  }
  if (quartaG.checked == true) {
    SemanaPintadaGabriel[2].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaGabriel[2].setAttribute("class", "home");
  }
  if (quintaG.checked == true) {
    SemanaPintadaGabriel[3].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaGabriel[3].setAttribute("class", "home");
  }
  if (sextaG.checked == true) {
    SemanaPintadaGabriel[4].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaGabriel[4].setAttribute("class", "home");
  }
  //Graziela
  if (semanaCheiaGr.checked == true) {
    console.log(semanaCheiaGr)
    SemanaPintadaGraziela[0].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaGraziela[0].setAttribute("class", "home");
    SemanaPintadaGraziela[1].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaGraziela[1].setAttribute("class", "home");
    SemanaPintadaGraziela[2].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaGraziela[2].setAttribute("class", "home");
    SemanaPintadaGraziela[3].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaGraziela[3].setAttribute("class", "home");
    SemanaPintadaGraziela[4].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaGraziela[4].setAttribute("class", "home");
    console.log("passou");
  }
  if (segundaGr.checked == true) {
    SemanaPintadaGraziela[0].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaGraziela[0].setAttribute("class", "home");
  }
  if (tercaGr.checked == true) {
    SemanaPintadaGraziela[1].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaGraziela[1].setAttribute("class", "home");
  }
  if (quartaGr.checked == true) {
    SemanaPintadaGraziela[2].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaGraziela[2].setAttribute("class", "home");
  }
  if (quintaGr.checked == true) {
    SemanaPintadaGraziela[3].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaGraziela[3].setAttribute("class", "home");
  }
  if (sextaGr.checked == true) {
    SemanaPintadaGraziela[4].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaGraziela[4].setAttribute("class", "home");
  }
  //Iuri
  if (semanaCheiaI.checked == true) {
    SemanaPintadaIuri[0].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaIuri[0].setAttribute("class", "home");
    SemanaPintadaIuri[1].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaIuri[1].setAttribute("class", "home");
    SemanaPintadaIuri[2].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaIuri[2].setAttribute("class", "home");
    SemanaPintadaIuri[3].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaIuri[3].setAttribute("class", "home");
    SemanaPintadaIuri[4].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaIuri[4].setAttribute("class", "home");
    console.log("passou");
  }
  if (segundaI.checked == true) {
    SemanaPintadaIuri[0].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaIuri[0].setAttribute("class", "home");
  }
  if (tercaI.checked == true) {
    SemanaPintadaIuri[1].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaIuri[1].setAttribute("class", "home");
  }
  if (quartaI.checked == true) {
    SemanaPintadaIuri[2].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaIuri[2].setAttribute("class", "home");
  }
  if (quintaI.checked == true) {
    SemanaPintadaIuri[3].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaIuri[3].setAttribute("class", "home");
  }
  if (sextaI.checked == true) {
    SemanaPintadaIuri[4].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaIuri[4].setAttribute("class", "home");
  }
  //Larissa
  if (semanaCheiaL.checked == true) {
    SemanaPintadaLarissa[0].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaLarissa[0].setAttribute("class", "home");
    SemanaPintadaLarissa[1].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaLarissa[1].setAttribute("class", "home");
    SemanaPintadaLarissa[2].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaLarissa[2].setAttribute("class", "home");
    SemanaPintadaLarissa[3].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaLarissa[3].setAttribute("class", "home");
    SemanaPintadaLarissa[4].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaLarissa[4].setAttribute("class", "home");
    console.log("passou");
  }
  if (segundaL.checked == true) {
    SemanaPintadaLarissa[0].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaLarissa[0].setAttribute("class", "home");
  }
  if (tercaL.checked == true) {
    SemanaPintadaLarissa[1].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaLarissa[1].setAttribute("class", "home");
  }
  if (quartaL.checked == true) {
    SemanaPintadaLarissa[2].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaLarissa[2].setAttribute("class", "home");
  }
  if (quintaL.checked == true) {
    SemanaPintadaLarissa[3].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaLarissa[3].setAttribute("class", "home");
  }
  if (sextaL.checked == true) {
    SemanaPintadaLarissa[4].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaLarissa[4].setAttribute("class", "home");
  }
  //Luciana
  if (semanaCheiaLu.checked == true) {
    SemanaPintadaLuciana[0].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaLuciana[0].setAttribute("class", "home");
    SemanaPintadaLuciana[1].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaLuciana[1].setAttribute("class", "home");
    SemanaPintadaLuciana[2].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaLuciana[2].setAttribute("class", "home");
    SemanaPintadaLuciana[3].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaLuciana[3].setAttribute("class", "home");
    SemanaPintadaLuciana[4].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaLuciana[4].setAttribute("class", "home");
    console.log("passou");
  }
  if (segundaLu.checked == true) {
    SemanaPintadaLuciana[0].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaLuciana[0].setAttribute("class", "home");
  }
  if (tercaLu.checked == true) {
    SemanaPintadaLuciana[1].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaLuciana[1].setAttribute("class", "home");
  }
  if (quartaLu.checked == true) {
    SemanaPintadaLuciana[2].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaLuciana[2].setAttribute("class", "home");
  }
  if (quintaLu.checked == true) {
    SemanaPintadaLuciana[3].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaLuciana[3].setAttribute("class", "home");
  }
  if (sextaLu.checked == true) {
    SemanaPintadaLuciana[4].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaLuciana[4].setAttribute("class", "home");
  }
  //Marcos
  if (semanaCheiaM.checked == true) {
    SemanaPintadaMarcos[0].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaMarcos[0].setAttribute("class", "home");
    SemanaPintadaMarcos[1].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaMarcos[1].setAttribute("class", "home");
    SemanaPintadaMarcos[2].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaMarcos[2].setAttribute("class", "home");
    SemanaPintadaMarcos[3].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaMarcos[3].setAttribute("class", "home");
    SemanaPintadaMarcos[4].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaMarcos[4].setAttribute("class", "home");
    console.log("passou");
  }
  if (segundaM.checked == true) {
    SemanaPintadaMarcos[0].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaMarcos[0].setAttribute("class", "home");
  }
  if (tercaM.checked == true) {
    SemanaPintadaMarcos[1].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaMarcos[1].setAttribute("class", "home");
  }
  if (quartaM.checked == true) {
    SemanaPintadaMarcos[2].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaMarcos[2].setAttribute("class", "home");
  }
  if (quintaM.checked == true) {
    SemanaPintadaMarcos[3].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaMarcos[3].setAttribute("class", "home");
  }
  if (sextaM.checked == true) {
    SemanaPintadaMarcos[4].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaMarcos[4].setAttribute("class", "home");
  }
  //Wian
  if (semanaCheiaW.checked == true) {
    SemanaPintadaWian[0].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaWian[0].setAttribute("class", "home");
    SemanaPintadaWian[1].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaWian[1].setAttribute("class", "home");
    SemanaPintadaWian[2].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaWian[2].setAttribute("class", "home");
    SemanaPintadaWian[3].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaWian[3].setAttribute("class", "home");
    SemanaPintadaWian[4].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaWian[4].setAttribute("class", "home");
    console.log("passou");
  }
  if (segundaW.checked == true) {
    SemanaPintadaWian[0].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaWian[0].setAttribute("class", "home");
  }
  if (tercaW.checked == true) {
    SemanaPintadaWian[1].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaWian[1].setAttribute("class", "home");
  }
  if (quartaW.checked == true) {
    SemanaPintadaWian[2].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaWian[2].setAttribute("class", "home");
  }
  if (quintaW.checked == true) {
    SemanaPintadaWian[3].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaWian[3].setAttribute("class", "home");
  }
  if (sextaW.checked == true) {
    SemanaPintadaWian[4].innerHTML = `<td class="tg-c3ow"'>Home</td>`;
    SemanaPintadaWian[4].setAttribute("class", "home");
  }

}
