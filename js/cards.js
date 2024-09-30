// Importa a função getProdutos do localStorage.js para obter os produtos.
import { getProdutos } from './localStorage.js';

// Função para criar os cards de produtos.
export const createCards = () => {
  const produtos = getProdutos(); // Obtém os produtos do localStorage.
  const cardsDiv = document.getElementById('cards'); // Seleciona o elemento onde os cards serão exibidos.

  // Verifica se a div dos cards existe.
  if (cardsDiv) {
    // Preenche a div com os cards formatados usando a função createCardItem.
    cardsDiv.innerHTML = produtos.map(createCardItem).join('');
  }
};

// Função para formatar cada item do card.
const createCardItem = (item) => `
  <div class="col m-2">
    <div class="card">
      <img src="${item.imagemUrl}" class="card-img-top" alt="${item.alt}"> <!-- Imagem do produto -->
      <div class="card-body">
        <h5 class="card-title">${item.titulo}</h5> <!-- Título do produto -->
        <p class="card-text">${item.descricao}</p> <!-- Descrição do produto -->
        <a href="#" class="btn btn-primary">Comprar</a> <!-- Botão para comprar -->
      </div>
    </div>
  </div>`;
