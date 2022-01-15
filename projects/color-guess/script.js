let corAleatoria = '';
let corPremiada = '';
let bolaCerta = '';
let pontos = 0;

function geraCor() {
  let red = parseInt(Math.random() * 255);
  let green = parseInt(Math.random() * 255);
  let blue = parseInt(Math.random() * 255);
  corAleatoria = "(" + String(red) + ", " + String(green) + ", " + String(blue) + ")";    
}

function geraCorPremiada() {
  let red = parseInt(Math.random() * 255);
  let green = parseInt(Math.random() * 255);
  let blue = parseInt(Math.random() * 255);
  corPremiada = "(" + String(red) + ", " + String(green) + ", " + String(blue) + ")";    
}

geraCorPremiada("rgb-color")
document.getElementById("rgb-color").innerHTML = corPremiada;

function pintaBolas() {
  let i = 0
  while (i < 6) {
    geraCor();
    document.getElementById(i).style.backgroundColor = 'rgb' + corAleatoria;
    i += 1;
  }
}

pintaBolas();

function bolaPremiada() {
  bolaCerta = parseInt(Math.random() * 5);
  document.getElementById(bolaCerta).style.backgroundColor = 'rgb' + corPremiada;
}

bolaPremiada();

function reset() {
  geraCorPremiada();
  document.getElementById('rgb-color').innerHTML = corPremiada;
  pintaBolas();
  bolaPremiada();
  document.getElementById('score').innerHTML = pontos;
  document.getElementById('answer').innerHTML = 'Escolha uma cor';
}

function verificaPremio(idElemento) {
  if (document.getElementById(idElemento).style.backgroundColor === 'rgb' + corPremiada) {
    document.getElementById('answer').innerHTML = 'Acertou!';
    pontos += 3;
    document.getElementById('score').innerHTML = pontos;
  } else {
    document.getElementById('answer').innerHTML = 'Errou! Tente novamente';
  }
}
