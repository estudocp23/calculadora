// Captura o elemento HTML com o id 'display' e guarda na variável 'display'
const display = document.getElementById('display');

/**
 * Função para adicionar números ou operadores no visor
 * @param {string} input - Valor do botão clicado (ex: '5', '+', '.')
 */
function appendValue(input) {
  // Pega o valor atual do visor e concatena (junta) o novo valor digitado no final
  display.value += input;
}

/**
 * Função para limpar todo o visor (Acionada pelo botão 'C')
 */
function clearDisplay() {
  // Substitui todo o texto do visor por uma string vazia
  display.value = '';
}

/**
 * Função para apagar apenas o último caractere digitado (Acionada pelo botão '⌫')
 */
function deleteChar() {
  // slice(0, -1) corta a string mantendo do primeiro caractere (0) até o penúltimo (-1)
  display.value = display.value.slice(0, -1);
}

/**
 * Função para resolver a conta exibida no visor (Acionada pelo botão '=')
 */
function calculate() {
  // O bloco 'try' tenta executar a operação. Se a conta for válida, funciona normalmente.
  try {
    // eval(): Avalia e executa a string do visor como código matemático em JS (ex: "5+5" vira 10)
    display.value = eval(display.value);
  } 
  // Caso a conta seja inválida (ex: o usuário digitou "5++*"), o código entra no 'catch'
  catch (error) {
    display.value = 'Erro'; // Escreve a palavra 'Erro' no visor
    
    // setTimeout: Programa uma pausa de 1.5 segundos (1500 milissegundos) antes de limpar o visor
    setTimeout(() => {
      clearDisplay(); // Chama a função que limpa a tela
    }, 1500);
  }
}