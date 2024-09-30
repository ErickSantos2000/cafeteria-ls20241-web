// Importa a função getProdutos do módulo localStorage.js para obter os produtos armazenados.
import { getProdutos } from './localStorage.js';

// Função para criar a tabela com os produtos.
export const criandoTabela = () => {
  // Obtém os produtos do localStorage.
  const produtos = getProdutos();
  // Seleciona o corpo da tabela onde os produtos serão inseridos.
  const corpoTabela = document.getElementById('corpoTabela');

  // Verifica se o corpo da tabela existe antes de tentar inserir dados.
  if (corpoTabela) {
    // Preenche o corpo da tabela com os itens formatados usando a função ItensNaTabela.
    corpoTabela.innerHTML = produtos.map((produto, indice) => ItensNaTabela(produto, indice + 1)).join('');
  }
};

// Função para formatar cada item da tabela.
const ItensNaTabela = (item, indice) => `
  <tr>
    <td>${indice}</td> <!-- Número do índice do item -->
    <td>${item.titulo}</td> <!-- Título do produto -->
    <td>${item.descricao}</td> <!-- Descrição do produto -->
    <td>${item.alt}</td> <!-- Legenda do produto -->
    <td>
      <img src='${item.imagemUrl}' class="card-img-top" alt="${item.alt}" width='100'> <!-- Imagem do produto -->
    </td>
    
  </tr>`;
