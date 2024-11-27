// Adicione aqui a lógica JavaScript para as funcionalidades desejadas, como:
// - Validação de formulário
// - Envio de dados para um servidor
// - Interação com os botões de login social
// - etc.

// Seu JavaScript
// Selecionando os elementos pelo ID
const inputNome = document.getElementById('usuario');
const inputEmail = document.getElementById('senha');

// Acessando o valor dos inputs
console.log('Nome de usuário:', inputNome.value);
console.log('Senha:', inputEmail.value);

// Adicionando um evento de mudança
inputNome.addEventListener('change', () => {
  console.log('Novo valor do nome:', inputNome.value);
});