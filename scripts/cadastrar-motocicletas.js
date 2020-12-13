// Verificando os campos de entrada de dados do formulário
const botaoCadastrar = document.querySelector('#botao-cadastrar');
    botaoCadastrar.addEventListener('click', (event) => {
        event.preventDefault();  // previnindo o reset da página

        let form = document.querySelector('#entradas');

        let fabricante = form.fabricante.value;
        let modelo = form.modelo.value;
        let ano = form.ano.value;
        let cilindrada = form.cilindrada.value;
        let valor = form.valor.value;

        if (fabricante == '' || modelo == '' || ano == '' || cilindrada == '' || valor == ''){
            alert('Por favor, preencha todos os campos!');
        }else {
            // Criando elemento TR
            let motocicletaTR = document.createElement('tr');
            motocicletaTR.classList.add('motocicleta'); // adicionando a classe


            // Criando elementos TD
            let fabricanteTD = document.createElement('td');
            let modeloTD = document.createElement('td');
            let anoTD = document.createElement('td');
            let cilindradaTD = document.createElement('td');
            let valorTD = document.createElement('td');

            // Associando os valores de entrada aos tds criados
            fabricanteTD.textContent = fabricante;
            modeloTD.textContent = modelo;
            anoTD.textContent = ano;
            cilindradaTD.textContent = cilindrada;
            valorTD.textContent = valor;

            // Inserindo os TDs criados à TR
            motocicletaTR.appendChild(fabricanteTD);
            motocicletaTR.appendChild(modeloTD);
            motocicletaTR.appendChild(anoTD);
            motocicletaTR.appendChild(cilindradaTD);
            motocicletaTR.appendChild(valorTD);

            // Adicinando o TR à tabela
            let tabelaMotocicletas = document.querySelector('#tabela-motocicletas');
            tabelaMotocicletas.appendChild(motocicletaTR);

        }

    });
