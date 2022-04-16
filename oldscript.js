const pageContainerAdd = document.getElementById('pageContainer');

export default function gerarPagina(address) {
  pageContainerAdd.innerHTML = `<iframe src="${address}" frameborder="0" id="page"></iframe>`;
}
