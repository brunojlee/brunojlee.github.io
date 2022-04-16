let numero = localStorage.getItem('numeroItem');
let nItem;
let completos = document.getElementsByClassName('completed');
let selecionado = document.getElementsByClassName('selecionado');
let listaCaminho = document.getElementById('lista-tarefas');
let listaSalva = localStorage.getItem('tarefas')
document.getElementById('lista-tarefas').innerHTML = listaSalva;
const bCriarTarefa = document.getElementById('criar-tarefa');

bCriarTarefa.addEventListener('click', () => {
    nItem = 'item' + numero;
    let novaTarefa = '<li class="tarefa" style="" id="' + nItem + '"ondblclick = marcar("' + nItem + '")' + ' onclick = pintar("' + nItem + '")' + '>';
    let textoTarefa = document.getElementById("texto-tarefa").value;
    let textoCompleto = novaTarefa + textoTarefa + '</li>';
    document.getElementById('lista-tarefas').insertAdjacentHTML('beforeend', textoCompleto);
    numero = numero + 1;
    document.getElementById('texto-tarefa').value = ''
})

function marcar(item) {
    if (document.getElementById(item).className == 'tarefa completed' || document.getElementById(item).className == 'tarefa completed selecionado') {
        document.getElementById(item).classList.remove('completed');
    } else {
        document.getElementById(item).classList.add('completed');
    }
}

function removeCompleted() {
    while (completos.length > 0) {
        completos[0].remove();
    }
}

function removeSelected() {
    while (selecionado.length > 0) {
        selecionado[0].remove();
    }
}

function limparSelecao() {
    const lista = document.querySelectorAll('.tarefa');
    for (let i = 0; i < lista.length; i += 1) {
        lista[i].style.background = 'transparent';
        lista[i].classList.remove('selecionado');
    }
}

function pintar(item) {
    limparSelecao();
    let tarefaSelecionada = 'rgb(128,128,128)'
    document.getElementById(item).style.background = tarefaSelecionada;
    document.getElementById(item).classList.add('selecionado');
}

function salvarLista() {
    localStorage.clear();
    localStorage.setItem('tarefas', listaCaminho.innerHTML);
    localStorage.setItem('numeroItem', numero);
}

function moveSelectedUp() {
    let up = $(".selecionado")
    up.insertBefore(up.prev());
}

function moveSelectedDown() {
    let down = $(".selecionado")
    down.insertAfter(down.next());
}