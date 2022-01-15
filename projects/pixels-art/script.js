let templateSize = 5;
let templateWidth;
let corSelecionada = 'black';
let colunas = templateSize;
let linhas;
const cor1 = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
const cor2 = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
const cor3 = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
const bBranco = document.getElementById('branco');
const bPreto = document.getElementById('preto');
document.getElementById('preto').classList.add('selected');
const bCor1 = document.getElementById('bCor1');
bCor1.style.backgroundColor = cor1;
const bCor2 = document.getElementById('bCor2');
bCor2.style.backgroundColor = cor2;
const bCor3 = document.getElementById('bCor3');
bCor3.style.backgroundColor = cor3;
const bVQV = document.getElementById('generate-board');

function limparTemplate() {
    const board = document.querySelectorAll('.pixel');
    for (let i = 0; i < board.length; i += 1) {
        board[i].style.background = 'white';
    }
}

limparTemplate();

function removeSelected() {
    document.getElementById('branco').classList.remove('selected');
    document.getElementById('preto').classList.remove('selected');
    document.getElementById('bCor1').classList.remove('selected');
    document.getElementById('bCor2').classList.remove('selected');
    document.getElementById('bCor3').classList.remove('selected');
}

function selectColor(cor) {
    let colorSelected = cor;
    document.getElementById(colorSelected).classList.add('selected');
}

function createPixel() {
    templateWidth = templateSize * 40;
    document.getElementById('pixel-board').style.width = templateWidth + 'px'
    for (let linhas = 0; linhas < templateSize; linhas += 1) {
        let i;
        for (i = linhas * templateSize; i < colunas; i += 1) {
            let novoPixel = '<button class="pixel" onclick = "pintar(' + i + ')" id="' + i + '"> </button>';
            document.getElementById('pixel-board').insertAdjacentHTML('beforeend', novoPixel);
        }
        i = i + templateSize;
        colunas = colunas + templateSize;
    }
}

createPixel();

function pintar(idPixel) {
    const bPixel = document.getElementById(idPixel);
    bPixel.style.backgroundColor = corSelecionada;
}

bBranco.addEventListener('click', () => {
    removeSelected();
    selectColor('branco');
    corSelecionada = 'white';
})

bPreto.addEventListener('click', () => {
    removeSelected();
    selectColor('preto');
    corSelecionada = 'black';
})

bCor1.addEventListener('click', () => {
    removeSelected();
    selectColor('bCor1');
    corSelecionada = cor1;
})

bCor2.addEventListener('click', () => {
    removeSelected();
    selectColor('bCor2');
    corSelecionada = cor2;
})

bCor3.addEventListener('click', () => {
    removeSelected();
    selectColor('bCor3');
    corSelecionada = cor3;
})

bVQV.addEventListener('click', () => {
    document.getElementById('pixel-board').innerHTML = "";
    templateSize = parseInt(document.getElementById("board-size").value);
    if (!templateSize == true) {
        templateSize = false;
        alert("Board inválido!")
        templateSize = 5;
    } else if (templateSize < 5) {
        templateSize = 5;
    } else if (templateSize > 50) {
        templateSize = 50;
    }
    colunas = templateSize;
    createPixel();
})