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
        let remover = 'Remover';

        if (fabricante == '' || modelo == '' || ano == '' || cilindrada == '' || valor == ''){
            alert('Por favor, preencha todos os campos!');
        }else {
            // Criando elemento TR
            let motocicletaTR = document.createElement('tr');
            motocicletaTR.classList.add('motocicleta'); // adicionando a classe


            // Criando elementos TD
            let fabricanteTD = document.createElement('td');
            fabricanteTD.classList.add('info-fabricante');

            let modeloTD = document.createElement('td');
            modeloTD.classList.add('info-modelo');

            let anoTD = document.createElement('td');
            anoTD.classList.add('info-ano');

            let cilindradaTD = document.createElement('td');
            cilindradaTD.classList.add('info-cilindrada');

            let valorTD = document.createElement('td');
            valorTD.classList.add('info-valor');

            let removerTD = document.createElement('td');
            removerTD.classList.add('remover');

            // Associando os valores de entrada aos tds criados
            fabricanteTD.textContent = fabricante;
            modeloTD.textContent = modelo;
            anoTD.textContent = ano;
            cilindradaTD.textContent = cilindrada;
            valorTD.textContent = valor;
            removerTD.textContent = remover;

            // Inserindo os TDs criados à TR
            motocicletaTR.appendChild(fabricanteTD);
            motocicletaTR.appendChild(modeloTD);
            motocicletaTR.appendChild(anoTD);
            motocicletaTR.appendChild(cilindradaTD);
            motocicletaTR.appendChild(valorTD);
            motocicletaTR.appendChild(removerTD);

            // Adicinando o TR à tabela
            let tabelaMotocicletas = document.querySelector('#tabela-motocicletas');
            tabelaMotocicletas.appendChild(motocicletaTR);

        }

    });
