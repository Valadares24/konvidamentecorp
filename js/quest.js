const perguntas = [
    "Quão satisfeito você está com nosso serviço?",
    "Você recomendaria nosso produto/serviço a um amigo?",
    "Como você classificaria a facilidade de uso do nosso site/aplicativo?",
    "Você encontrou o que estava procurando?",
    "Qual é a probabilidade de você voltar a usar nosso serviço?"
  ];
  
  let indicePergunta = 0;
  
  const questionForm = document.getElementById('questionForm');
  const resultadoDiv = document.getElementById('resultado');
  const questionContainer = document.getElementById('questionContainer');
  
  // Função para exibir a próxima pergunta
  function exibirProximaPergunta() {
    if (indicePergunta < perguntas.length) {
      const perguntaAtual = perguntas[indicePergunta];
      const inputField = document.createElement('div');
      inputField.innerHTML = `
        <label for="resposta${indicePergunta}">${perguntaAtual}</label>
        <input type="number" name="resposta${indicePergunta}" min="0" max="3"><br><br>
      `;
      questionContainer.appendChild(inputField);
      indicePergunta++;
    } else {
      questionForm.removeEventListener('submit', handleSubmit);
      questionForm.submit();
    }
  }
  
  // Função de manipulação de envio de formulário
  function handleSubmit(event) {
    event.preventDefault();
  
    // Obter respostas do formulário
    const respostas = [];
    for (let i = 0; i < indicePergunta; i++) {
      respostas.push(parseInt(document.getElementsByName(`resposta${i}`)[0].value));
    }
  
    // Calcular resultado com base nas respostas (pode ser customizado conforme necessário)
    let total = respostas.reduce((acc, curr) => acc + curr, 0);
  
    // Determinar resposta com base no total (pode ser customizado conforme necessário)
    let resultado;
    if (total <= 5) {
      resultado = "Insatisfeito";
    } else if (total <= 10) {
      resultado = "Neutro";
    } else {
      resultado = "Satisfeito";
    }
  
    // Exibir resultado na página
    resultadoDiv.innerHTML = `Obrigado por responder ao questionário. Seu feedback indica que você está ${resultado} com nosso serviço.`;
  }
  
  // Adicionar evento de envio do formulário
  questionForm.addEventListener('submit', handleSubmit);
  
  // Exibir primeira pergunta
  exibirProximaPergunta();
  