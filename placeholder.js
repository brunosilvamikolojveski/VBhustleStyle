const form = document.getElementById("Meuform");
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setitem("mensagem", mensagem);

    window.location.href = "resultado.html";

  });


  const input = document.getElementById("pesquisar");

  const texto = "Pesquisar...";

  let i = 0;

  function digitar () {
    if (i<texto.length) {
        input.placeholder += 
        texto.charAt (i);
        i++;
        setTimeout(digitar, 100); 
    } else{
        setTimeout(()=> {
            input.placeholder = "";
            i = 0;
            digitar();

        }, 1000)
    }


  }
  digitar();
  





  