
const tipoCliente = document.forms['clientes'].elements['pessoa'];

// Por padrão a opção pessoa física estara habilitada
document.getElementById('cnpj').disabled = true;

for (cliente in tipoCliente){
    tipoCliente[cliente].onclick = function(){
        
        let clienteSelecionado = this.value;
        console.log(clienteSelecionado);

        if (clienteSelecionado == 'fisica'){
            document.getElementById('cnpj').disabled = true;
            document.getElementById('cpf').disabled = false;
            document.getElementById('data-nascimento').disabled = false;
        }else {
            document.getElementById('cpf').disabled = true;
            document.getElementById('cnpj').disabled = false;
            document.getElementById('data-nascimento').disabled = true;
        }
    }
}


// Permitindo apenas números no cep
function ValidacaoCep(numero){
    let expressaoRegular = /[^0-9.]/;
    expressaoRegular.lastIndex = 0;
    let campo = numero;
    if (expressaoRegular.test(campo.value)) {
        campo.value = '';
    }
}
