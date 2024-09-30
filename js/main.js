// Importa as funções para criar cards, a tabela e adicionar produtos do respectivo módulo.
import { createCards } from './cards.js';
import { criandoTabela } from './tabela.js';
import { adicionarProduto } from './localStorage.js';

// Função para adicionar itens ao localStorage e atualizar a interface.
const adicionarItens = (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário.

  // Coleta os valores dos campos do formulário.
  const campos = {
    titulo: document.getElementById('titulo').value, // Obtém o título
    descricao: document.getElementById('descricao').value, // Obtém a descrição
    alt: document.getElementById('alt').value, // Obtém a legenda
    imagemUrl: document.getElementById('imagemUrl').value, // Obtém a URL da imagem
  };

  // Validação para garantir que todos os campos estejam preenchidos.
  if (Object.values(campos).some(value => !value)) {
    alert('Por favor, preencha todos os campos.'); // Alerta se algum campo estiver vazio.
    return; // Sai da função se a validação falhar.
  }

  // Adiciona o produto ao localStorage e atualiza a interface.
  adicionarProduto(campos);
  createCards(); // Atualiza os cards exibidos.
  criandoTabela(); // Atualiza a tabela exibida.
  document.getElementById('adicaoModal').reset(); // Reseta o formulário.
};

// Inicializa os cards e a tabela ao carregar a página.
createCards();
const form = document.getElementById('adicaoModal'); // Seleciona o formulário de adição.
if (form) {
  form.addEventListener('submit', adicionarItens); // Adiciona um listener para o evento de submissão do formulário.
}

// Verifica se o corpo da tabela existe antes de criar a tabela.
if (document.getElementById('corpoTabela')) {
  criandoTabela(); // Cria a tabela com os produtos existentes.
}
