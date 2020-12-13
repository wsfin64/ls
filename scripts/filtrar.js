let campoFiltro = document.querySelector('#busca-filtro');

campoFiltro.addEventListener('input', function() {
    console.log(this.value);
    let motocicletas = document.querySelectorAll('.motocicleta');

    if (this.value.length > 0){
        for (let i = 0; i < motocicletas.length; i++){
            let motocicleta = motocicletas[i];
            motocicleta.classList.add('invisivel');

            let tdFabricante = motocicleta.querySelector('.info-fabricante');
            let fabricante = tdFabricante.textContent;
            
            
            let tdModelo = motocicleta.querySelector('.info-modelo');
            let modelo = tdModelo.textContent;

            let tdAno = motocicleta.querySelector('.info-ano');
            let ano = tdAno.textContent;

            let tdCilindrada = motocicleta.querySelector('.info-cilindrada');
            let cilindrada = tdCilindrada.textContent;
            
            let expressaoFiltro = new RegExp(this.value, 'i');

            if (expressaoFiltro.test(fabricante) || expressaoFiltro.test(modelo) || expressaoFiltro.test(ano) || expressaoFiltro.test(cilindrada)){
                motocicleta.classList.remove('invisivel');
            }else {
                motocicleta.classList.add('invisivel');
            }


        }
    }else {
        for (let i = 0; i < motocicletas.length; i++){
            let motocicleta = motocicletas[i];
            motocicleta.classList.remove('invisivel');
        }
    }
});
