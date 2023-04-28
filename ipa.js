
    let ipa = document.querySelectorAll(".ipa");

      for(let i =0; i < ipa.length; i++){
        ipa[i].addEventListener('click', function mudar(){
            ipa[i].innerHTML = 'IPA'
        })
    
      }