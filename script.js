
// display card
const showCardBtn = document.getElementById('show-card-btn');
const closeBtn = document.getElementById('close-btn');
const cardContainer = document.getElementById('card-container');

showCardBtn.addEventListener('click', function() {
  cardContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  cardContainer.style.display = 'none';
});



// função para atualizar a informação
function atualizarInfo(){

//Verificar o valor de cada select.
//Sistemas
let valorSistemas = document.querySelector('.select1')

console.log(valorSistemas)

let valorSi = valorSistemas.options[valorSistemas.selectedIndex].value
let textSi = valorSistemas.options[valorSistemas.selectedIndex].text

console.log(valorSi, textSi)

//Governaca

let valorGovernaca = document.querySelector('.select2')

console.log(valorGovernaca)

let valorGove = valorGovernaca.options[valorGovernaca.selectedIndex].value
let textGove = valorGovernaca.options[valorGovernaca.selectedIndex].text

console.log(valorGove, textGove)

//adm
let valorAdm = document.querySelector('.select3')

console.log(valorAdm)

let valorAd = valorAdm.options[valorAdm.selectedIndex].value
let textAd = valorAdm.options[valorAdm.selectedIndex].text

console.log(valorAd, textAd)



//^^ Fim da verificação


//realiza a troca a cada x minutos

let variavelNome = document.querySelector('.nomeDoColab')

let trocaDeNome = variavelNome.innerText = textSi

console.log(trocaDeNome)
console.log(variavelNome)

trocaDeNome = variavelNome.innerText = textAd

console.log(trocaDeNome)
console.log(variavelNome)

//^^Finaliza a troca.

// Declare the variables
trocaDeNome = [textSi, textAd, textGove]
let intervalTime = 0.05 * 60 * 1000; // 3 minutes in milliseconds
let originalText = trocaDeNome[0]; // save the original text value
let loopCount = 0; // initialize loop count
let valorNovo =''
let equipe = document.querySelector('.equipe')
let imagem = document.querySelector('.imagemTrocada')

// Function to change the value of the text variable
function changeText() {
  loopCount++;
  if (loopCount % trocaDeNome.length === 0) {
    text = originalText;
    console.log("Text reset to: " + text);
    valorNovo = text
    console.log(valorNovo)
    console.log(imagem)
    // insira o if de mudança de nome aqui 
    if (valorNovo === 'Erick'){
      equipe.innerText = 'Administrativa'
      variavelNome.innerText = valorNovo
      imagem.src =`./src/images/${valorNovo}.jpg`
    } else if((valorNovo === 'Lu')){
      equipe.innerText = 'de Governança'
      variavelNome.innerText = valorNovo
      imagem.src =`./src/images/${valorNovo}.jpg`
    } else if((valorNovo === 'Wian')){
      equipe.innerText = 'de Sistemas'
      variavelNome.innerText = valorNovo
      imagem.src =`./src/images/${valorNovo}.jpg`
    }
    //Finalização do if de mudança de nome
 
  } else {
    text = trocaDeNome[loopCount % trocaDeNome.length];
    console.log("Text changed to: " + text); 
    valorNovo = text
    console.log(valorNovo)
    console.log(imagem)
    // insira o if de mudança de nome aqui 
    if (valorNovo === 'Erick'){
      equipe.innerText = 'Administrativa'
      variavelNome.innerText = valorNovo
      imagem.src =`./src/images/${valorNovo}.jpg`
    } else if((valorNovo === 'Lu')){
      equipe.innerText = 'de Governança'
      variavelNome.innerText = valorNovo
      imagem.src =`./src/images/${valorNovo}.jpg`
    } else if((valorNovo === 'Wian')){
      equipe.innerText = 'de Sistemas'
      variavelNome.innerText = valorNovo
      imagem.src =`./src/images/${valorNovo}.jpg`
    }
    //Finalização do if de mudança de nome
  }
}

// Set an interval to call the changeText function every 3 minutes
let interval = setInterval(changeText, intervalTime);

// Set a timeout to stop the loop after 10 minutes
let timeout = setTimeout(function() {
  clearInterval(interval);
  console.log("Loop stopped");
  // Change the text variable again
  originalText = trocaDeNome[0];
  loopCount = 0;
  interval = setInterval(changeText, intervalTime);
}, 0.30 * 60 * 1000); // 10 minutes in milliseconds







//
//Realizar a troca de acordo com a informação do nome
//console.log(equipe)

if (valorNovo === 'Erick'){
  equipe.innerText = 'Administrativa'
  variavelNome.innerText = valorNovo
  imagem.src =`./src/images/${valorNovo}.jpg`
} else if((valorNovo === 'Lu')){
  equipe.innerText = 'de Governança'
  variavelNome.innerText = valorNovo
  imagem.src =`./src/images/${valorNovo}.jpg`
} else if((valorNovo === 'Wian')){
  equipe.innerText = 'de Sistemas'
  variavelNome.innerText = valorNovo
  imagem.src =`./src/images/${valorNovo}.jpg`
}

else{
  console.log('opa')
}

}

//inicio calendario
const date = new Date()
const dia = date.getDate()

console.log(dia)

const dataFeriasInicial = 10
const dataFeriasFinal = 15

let el = document.querySelector('.number-days');
for(i = 1; i <= 31; i++){
   /* if(i = ferias1){
        `<span class="day-selected-ferias">${i}</span>`
    }else{
*/
    
   if( i == dia ) {
    el.innerHTML += `<span class="day-selected">${i}</span>`
   }else{
    if(i < dataFeriasInicial){
        el.innerHTML += `<span>${i}</span>`
    }else if(i <= dataFeriasFinal ){
        el.innerHTML+=`<span class="day-selected-ferias">${i}</span>`
    }else{
   el.innerHTML += `<span>${i}</span>`}
}
}


//fim-calendario


//week

const showCardBtnSemana = document.getElementById('show-card-btn-semana');
const closeBtnSemana = document.getElementById('close-btn-semana');
const cardContainerSemana = document.getElementById('card-container-semana');

showCardBtnSemana.addEventListener('click', function() {
  cardContainerSemana.style.display = 'block';
});

closeBtnSemana.addEventListener('click', function() {
  cardContainerSemana.style.display = 'none';
});


function atualizarSemana(){
  /*
 let semanaBe = document.getElementsByClassName('.semanaCheiaBe')
 let semanaCheiaBe = semanaBe.value
 console.log(semanaBe.value)
 console.log(semanaCheiaBe)
*/
let checkedValue = document.querySelector('.semanaCheiaBe:checked').value;
let SemanaPintada = document.querySelector('.SCB')
console.log(SemanaPintada)
if(checkedValue == 'semanaCheiaBe'){

  //EU NÃO CONSIGO FAZER ESSE BACKGROUND-COLOR FUNCIONAR AJUDA AI DEUS
  SemanaPintada.innerHTML+=`<td class="tg-c3ow SCB"'>CLIA</td>`
}
}