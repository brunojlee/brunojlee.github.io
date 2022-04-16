import React, { Component } from 'react';

export default class ProjectLink extends Component {
  render() {
    const { projectLink } = this.props;
    return <iframe src={projectLink} frameborder="0" id="page"></iframe>;
  }
}

const pageContainerAdd = document.getElementById('pageContainer');

function gerarPagina(address) {
  pageContainerAdd.innerHTML = `<iframe src="${address}" frameborder="0" id="page"></iframe>`;
}
