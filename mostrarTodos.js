function mostrarTodos() {
    //Verificar o valor de cada select.
    //Sistemas
    let valorSistemas = document.querySelector(".select1");
  
    console.log(valorSistemas);
  
    let valorSi = valorSistemas.options[valorSistemas.selectedIndex].value;
    let textSi = valorSistemas.options[valorSistemas.selectedIndex].text;
  
    console.log(valorSi, textSi);
  
    //Governaca
  
    let valorGovernaca = document.querySelector(".select2");
  
    console.log(valorGovernaca);
  
    let valorGove = valorGovernaca.options[valorGovernaca.selectedIndex].value;
    let textGove = valorGovernaca.options[valorGovernaca.selectedIndex].text;
  
    console.log(valorGove, textGove);
  
    //adm
    let valorAdm = document.querySelector(".select3");
  
    console.log(valorAdm);
  
    let valorAd = valorAdm.options[valorAdm.selectedIndex].value;
    let textAd = valorAdm.options[valorAdm.selectedIndex].text;
  
    console.log(valorAd, textAd);

    //teste
    let valorBelisa = 'Belisa';
    let valorBruno = 'Bruno';
    let valorGabriel = 'Gabriel';
    let valorErick = 'Erick';
    let valorIuri = 'Iuri';
    let valorLarissa = 'Larissa';
    let valorGraziela = 'Graziela';
    let valorLuciana = 'Luciana';
    let valorWian = 'Wian';
    let valorVini = 'Vini';

  
    let variavelNome = document.querySelector(".nomeDoColab");
  
    let trocaDeNome = (variavelNome.innerText = textSi);
  
    console.log(trocaDeNome);
    console.log(variavelNome);
  
    trocaDeNome = variavelNome.innerText = textAd;
  
    console.log(trocaDeNome);
    console.log(variavelNome);
  
    //^^Finaliza a troca.
  
    // Declare the variables
    trocaDeNome = [valorBelisa,valorBruno,valorGabriel,valorErick,valorIuri,valorLarissa ,valorGraziela,valorLuciana ,valorWian,valorVini
    ];
    let intervalTime = 0.05 * 60 * 1000; // 3 minutes in milliseconds
    let originalText = trocaDeNome[0]; // save the original text value
    let loopCount = 0; // initialize loop count
    let valorNovo = "";
    let equipe = document.querySelector(".equipe");
    let imagem = document.querySelector(".imagemTrocada");
  
    // Function to change the value of the text variable
    function changeText() {
      loopCount++;
      if (loopCount % trocaDeNome.length === 0) {
        text = originalText;
        console.log("Text reset to: " + text);
        valorNovo = text;
        console.log(valorNovo);
        console.log(imagem);
        // insira o if de mudança de nome aqui
        if (valorNovo === "Erick") {
          equipe.innerText = "Administrativa";
          variavelNome.innerText = valorNovo;
          imagem.src = `./src/images/${valorNovo}.jpg`;
        } else if (valorNovo === "Luciana") {
          equipe.innerText = "de Governança";
          variavelNome.innerText = valorNovo;
          imagem.src = `./src/images/${valorNovo}.jpg`;
        } else if (valorNovo === "Wian") {
          equipe.innerText = "de Sistemas";
          variavelNome.innerText = valorNovo;
          imagem.src = `./src/images/${valorNovo}.jpg`;
        } else if (valorNovo === "Belisa") {
          equipe.innerText = "Administrativa";
          variavelNome.innerText = valorNovo;
          imagem.src = `./src/images/${valorNovo}.jpg`;
        } else if (valorNovo === "Bruno") {
          equipe.innerText = "de Sistemas";
          variavelNome.innerText = valorNovo;
          imagem.src = `./src/images/${valorNovo}.jpg`;
        } else if (valorNovo === "Gabriel") {
          equipe.innerText = "de Sistemas";
          variavelNome.innerText = valorNovo;
          imagem.src = `./src/images/${valorNovo}.jpg`;
        } else if (valorNovo === "Graziela") {
          equipe.innerText = "de Governança";
          variavelNome.innerText = valorNovo;
          imagem.src = `./src/images/${valorNovo}.jpg`;
        } else if (valorNovo === "Iuri") {
          equipe.innerText = "de Sistemas";
          variavelNome.innerText = valorNovo;
          imagem.src = `./src/images/${valorNovo}.jpg`;
        } else if (valorNovo === "Larissa") {
          equipe.innerText = "de Governança";
          variavelNome.innerText = valorNovo;
          imagem.src = `./src/images/${valorNovo}.jpg`;
        } else if (valorNovo === "Vini") {
          equipe.innerText = "de Sistemas";
          variavelNome.innerText = valorNovo;
          imagem.src = `./src/images/${valorNovo}.jpg`;
        }
        //Finalização do if de mudança de nome
      } else {
        text = trocaDeNome[loopCount % trocaDeNome.length];
        console.log("Text changed to: " + text);
        valorNovo = text;
        console.log(valorNovo);
        console.log(imagem);
        // insira o if de mudança de nome aqui
        if (valorNovo === "Erick") {
          equipe.innerText = "Administrativa";
          variavelNome.innerText = valorNovo;
          imagem.src = `./src/images/${valorNovo}.jpg`;
        } else if (valorNovo === "Luciana") {
          equipe.innerText = "de Governança";
          variavelNome.innerText = valorNovo;
          imagem.src = `./src/images/${valorNovo}.jpg`;
        } else if (valorNovo === "Wian") {
          equipe.innerText = "de Sistemas";
          variavelNome.innerText = valorNovo;
          imagem.src = `./src/images/${valorNovo}.jpg`;
        } else if (valorNovo === "Belisa") {
          equipe.innerText = "Administrativa";
          variavelNome.innerText = valorNovo;
          imagem.src = `./src/images/${valorNovo}.jpg`;
        } else if (valorNovo === "Bruno") {
          equipe.innerText = "de Sistemas";
          variavelNome.innerText = valorNovo;
          imagem.src = `./src/images/${valorNovo}.jpg`;
        } else if (valorNovo === "Gabriel") {
          equipe.innerText = "de Sistemas";
          variavelNome.innerText = valorNovo;
          imagem.src = `./src/images/${valorNovo}.jpg`;
        } else if (valorNovo === "Graziela") {
          equipe.innerText = "de Governança";
          variavelNome.innerText = valorNovo;
          imagem.src = `./src/images/${valorNovo}.jpg`;
        } else if (valorNovo === "Iuri") {
          equipe.innerText = "de Sistemas";
          variavelNome.innerText = valorNovo;
          imagem.src = `./src/images/${valorNovo}.jpg`;
        } else if (valorNovo === "Larissa") {
          equipe.innerText = "de Governança";
          variavelNome.innerText = valorNovo;
          imagem.src = `./src/images/${valorNovo}.jpg`;
        } else if (valorNovo === "Vini") {
          equipe.innerText = "de Sistemas";
          variavelNome.innerText = valorNovo;
          imagem.src = `./src/images/${valorNovo}.jpg`;
        }
        //Finalização do if de mudança de nome
      }
    }
  
    // Set an interval to call the changeText function every 3 minutes
    let interval = setInterval(changeText, intervalTime);
  
    // Set a timeout to stop the loop after 10 minutes
    let timeout = setTimeout(function () {
      clearInterval(interval);
      console.log("Loop stopped");
      // Change the text variable again
      originalText = trocaDeNome[0];
      loopCount = 0;
      interval = setInterval(changeText, intervalTime);
    }, 0.3 * 60 * 1000); // 10 minutes in milliseconds
  
    //
    //Realizar a troca de acordo com a informação do nome
  
    if (valorNovo === "Erick") {
      equipe.innerText = "Administrativa";
      variavelNome.innerText = valorNovo;
      imagem.src = `./src/images/${valorNovo}.jpg`;
    } else if (valorNovo === "Luciana") {
      equipe.innerText = "de Governança";
      variavelNome.innerText = valorNovo;
      imagem.src = `./src/images/${valorNovo}.jpg`;
    } else if (valorNovo === "Wian") {
      equipe.innerText = "de Sistemas";
      variavelNome.innerText = valorNovo;
      imagem.src = `./src/images/${valorNovo}.jpg`;
    } else if (valorNovo === "Belisa") {
      equipe.innerText = "Administrativa";
      variavelNome.innerText = valorNovo;
      imagem.src = `./src/images/${valorNovo}.jpg`;
    } else if (valorNovo === "Bruno") {
      equipe.innerText = "de Sistemas";
      variavelNome.innerText = valorNovo;
      imagem.src = `./src/images/${valorNovo}.jpg`;
    } else if (valorNovo === "Gabriel") {
      equipe.innerText = "de Sistemas";
      variavelNome.innerText = valorNovo;
      imagem.src = `./src/images/${valorNovo}.jpg`;
    } else if (valorNovo === "Graziela") {
      equipe.innerText = "de Governança";
      variavelNome.innerText = valorNovo;
      imagem.src = `./src/images/${valorNovo}.jpg`;
    } else if (valorNovo === "Iuri") {
      equipe.innerText = "de Sistemas";
      variavelNome.innerText = valorNovo;
      imagem.src = `./src/images/${valorNovo}.jpg`;
    } else if (valorNovo === "Larissa") {
      equipe.innerText = "de Governança";
      variavelNome.innerText = valorNovo;
      imagem.src = `./src/images/${valorNovo}.jpg`;
    } else if (valorNovo === "Vini") {
      equipe.innerText = "de Sistemas";
      variavelNome.innerText = valorNovo;
      imagem.src = `./src/images/${valorNovo}.jpg`;
    } else {
      console.log("opa");
    }
  }