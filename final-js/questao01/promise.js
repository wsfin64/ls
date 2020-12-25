// UTILIZE O INDEX.HTML PARA VISUALIZAR A PROMISE NO CONSOLE DO NAVEGADOR

const entrada = document.querySelector('#entrada-idade');
const btn = document.querySelector('#btn-busca');

function getIdade(){
    return new Promise(function(resolve, reject){
        let idade = parseInt(entrada.value);

        if (idade >= 18){
            resolve('Você é maior que 18 anos');
        }else{
            reject(Error('Você é menor de idade'));
        }
    })
}


btn.addEventListener('click', function() {
    setInterval(function(){
    getIdade().then(response => {
        console.log('Sucesso :', response);
    }, error => {
        console.log('Falha: ', error);
    }).catch((error) => {
        console.log(error);
    });
}, 2000)
});

