let arrayCarta = [];
let testeVazio = "";
let grupoEstilo = ['newspaper', 'magazine1', 'magazine2', ''];
let grupoTamanho = ['medium', 'big', 'reallybig', ''];
let grupoRotacao = ['rotateleft', 'rotateright', ''];
let grupoInclinacao = ['skewleft', 'skewright', '']
function aleatorizar(idElemento) {
    document.getElementById(idElemento).classList = "";
    document.getElementById(idElemento).classList.add(grupoEstilo[parseInt(Math.random() * (grupoEstilo.length - 1))]);
    document.getElementById(idElemento).classList.add(grupoTamanho[parseInt(Math.random() * (grupoTamanho.length - 1))]);
    document.getElementById(idElemento).classList.add(grupoRotacao[parseInt(Math.random() * (grupoRotacao.length - 1))]);
    document.getElementById(idElemento).classList.add(grupoInclinacao[parseInt(Math.random() * (grupoInclinacao.length - 1))]);
}

function gerarCarta() {
    document.getElementById('carta-gerada').innerHTML = "";
    let valorInput = document.getElementById('carta-texto').value
    arrayCarta = valorInput.split(" ");
    let i = 0;
    testeVazio = arrayCarta.filter(n => n);
    if (testeVazio == "") {
        document.getElementById('carta-gerada').innerHTML = "Por favor, digite o conteúdo da carta.";
        document.getElementById('carta-contador').innerHTML = testeVazio.length;
    } else {
        while (i < arrayCarta.length) {
            let novoQuadro = '<span onclick = "aleatorizar(' + i + ')" id="' + i + '">' + arrayCarta[i] + '</span>';
            document.getElementById('carta-gerada').insertAdjacentHTML('beforeend', novoQuadro);
            document.getElementById(i).classList.add(grupoEstilo[parseInt(Math.random() * (grupoEstilo.length - 1))]);
            document.getElementById(i).classList.add(grupoTamanho[parseInt(Math.random() * (grupoTamanho.length - 1))]);
            document.getElementById(i).classList.add(grupoRotacao[parseInt(Math.random() * (grupoRotacao.length - 1))]);
            document.getElementById(i).classList.add(grupoInclinacao[parseInt(Math.random() * (grupoInclinacao.length - 1))]);
            document.getElementById('carta-contador').innerHTML = testeVazio.length;
            i += 1;
        }
    }
}