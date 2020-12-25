const imagemSelecionada = document.querySelector('#galeria');
const campoVisualizador = document.querySelector('#visualizador');
imagemSelecionada.addEventListener('click', (event) => {
    let caminho = event.target.src;

    let novaFoto = campoVisualizador.querySelector('img');

    if (caminho == undefined){
        novaFoto.src = '';
        novaFoto.height = null;
    }else{
        novaFoto.src = caminho;
        novaFoto.height = "500";
    }

});