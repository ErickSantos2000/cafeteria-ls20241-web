// Lista inicial de produtos.
export const itens = [
  {
    titulo: 'Café Expresso',
    descricao: 'Café expresso feito com grãos selecionados com máquina profissional.',
    alt: 'Café Expresso',
    imagemUrl: 'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    titulo: 'Prensa Francesa',
    descricao: 'Sabor suave do café selecionado.',
    alt: 'Prensa Francesa',
    imagemUrl: 'https://images.unsplash.com/photo-1444594975920-e69885b357d5?q=80&w=1712&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    titulo: 'Café Filtrado',
    descricao: 'Café filtrado v60 com todas as notas sensoriais.',
    alt: 'Café Filtrado',
    imagemUrl: 'https://images.unsplash.com/photo-1498603536246-15572faa67a6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    titulo: 'Café Verde',
    descricao: 'Café filtrado v60 com todas as notas sensoriais.',
    alt: 'Café Verde',
    imagemUrl: 'https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

// Inicializa produtos no localStorage se não estiverem presentes.
if (!localStorage.getItem('produtos')) {
  localStorage.setItem('produtos', JSON.stringify(itens)); // Armazena a lista inicial no localStorage.
}

// Função para obter produtos do localStorage.
export const getProdutos = () => JSON.parse(localStorage.getItem('produtos'));

// Função para adicionar um novo produto ao localStorage.
export const adicionarProduto = (produto) => {
  const produtos = getProdutos() || []; // Obtém os produtos existentes ou cria uma nova lista.
  produtos.push(produto); // Adiciona o novo produto à lista.
  localStorage.setItem('produtos', JSON.stringify(produtos)); // Armazena a lista atualizada no localStorage.
};
