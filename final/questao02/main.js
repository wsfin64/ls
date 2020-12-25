const entrada = document.getElementById('repositorio');
const btn = document.getElementById('buscar');
buscar.addEventListener('click', function() {
     
    let username = entrada.value;
    console.log(username);

    let urlBusca = `https://api.github.com/users/${username}/repos`;

    function getRepositorio(url) {
        fetch(url)
        .then(res => res.json())
        .then(json => showRepositorios(json))
    }
    
    function showRepositorios(repositorio) {
        //console.log(repositorio);
    
        for (let i = 0; i < repositorio.length; i++){
            console.log(repositorio[i].name);

            document.getElementById('quant-repositorio').textContent = `Foram encontrados ${repositorio.length} repositórios`

            let usuario = username;
            let nomeRepositorio = repositorio[i].name
            let linguagem = repositorio[i].language

            //criando elemento tr
            let repositorioTR = document.createElement('tr');
            // adcionar classe se quiser

            // criando elementos td
            let usuarioTD = document.createElement('td');
            let nomeRepositorioTD = document.createElement('td');
            let linguagemTD = document.createElement('td');

            // inserindo os valores nas tds
            usuarioTD.textContent = usuario;
            nomeRepositorioTD.textContent = nomeRepositorio;
            linguagemTD.textContent = linguagem;

            // inserindo os tds na tr
            repositorioTR.appendChild(usuarioTD);
            repositorioTR.appendChild(nomeRepositorioTD);
            repositorioTR.appendChild(linguagemTD);

            // adicionando a tr à tabela
            let tabelaRepositorios = document.getElementById('tabela-repositorios');
            tabelaRepositorios.appendChild(repositorioTR);
        }
    }
    
    getRepositorio(urlBusca);

    
    
});

