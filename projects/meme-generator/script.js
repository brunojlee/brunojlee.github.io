let texto = document.getElementById('text-input').value;
let caminhoImagem = document.getElementById('meme-insert');
let imageContainer = document.getElementById('meme-image');


function escreverTexto() {
    texto = document.getElementById("text-input").value
    document.getElementById('meme-text').innerHTML = texto
}


function exibirImagem(event) {
	var image = document.getElementById('meme-image');
	image.src = URL.createObjectURL(event.target.files[0]);
};

function exibirMeme(endereco) {
	var image = document.getElementById('meme-image');
	image.src = endereco;
};