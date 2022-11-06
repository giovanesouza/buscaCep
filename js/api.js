// CAMPO PARA INSERIR/BUSCAR O CEP
const campoCep = document.querySelector('#cep');

const rua = document.querySelector('#rua');
const complemento = document.querySelector('#complemento');
const bairro = document.querySelector('#bairro');
const estado = document.querySelector('#estado');
const cidade = document.querySelector('#cidade');


campoCep.addEventListener("keyup", infoEvento => {
    const cep = infoEvento.target.value;
   
    fetch(`https://viacep.com.br/ws/${cep}/json`)
  
    .then(respostaServer => {
        return respostaServer.json();
    })
    
    .then(dadosCep => {
        console.log(dadosCep);      
        rua.innerHTML = dadosCep.logradouro;
        complemento.innerHTML = dadosCep.complemento;
        bairro.innerHTML = dadosCep.bairro;
        estado.innerHTML = dadosCep.uf;
        cidade.innerHTML = dadosCep.localidade;

    })
})

// LINK API VIA CEP - https://viacep.com.br/