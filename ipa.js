

   let ipa = document.querySelectorAll(".ipa");
   let numero = 0
   console.log(typeof numero)

if(numero % 2 == 0){
  
  for(let i =0; i < ipa.length; i++){
    ipa[i].addEventListener('click',function mudarIpa(){
      if(numero % 2 == 0){
        ipa[i].innerHTML = 'IPA'
        console.log(ipa[i])
        numero++
        console.log(numero)
      }else {
        ipa[i].innerHTML = 'Banco'
        console.log(ipa[i])
        numero++
        console.log(numero)
      }

     })
  } 
}