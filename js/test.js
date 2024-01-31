const perguntas = [
  {
    pergunta: "Tenho tido dualidade em respirar em alguns momentos (p. ex. respiração ofegante, falta de ar, sem ter feito nenhum esforço físico)?",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Constantemente, sinto minha respiração acelerar",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Penso que as outras pessoas são mais competentes do que eu.",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Preciso praticar a respiração profunda e compassada ",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Tem dias que são difíceis para eu conseguir me acalmar ",
    respostas:["0", "1", "2", "3"]
  },
  {pergunta: "Eu não consigo beber a quantidade de água necessária por dia",
    respostas:["0", "1", "2", "3"]
  },
  {pergunta: "Tenho um sentimento de incompetência, quando vou realizar algo",
  respostas:["0", "1", "2", "3"]
  },
  {pergunta: "Me sinto desprotegido quando me deparo às dificuldades da vida",
  respostas:["0", "1", "2", "3"]
  },
  {pergunta: "Só bebo água quando realmente sinto sede",
  respostas:["0", "1", "2", "3"]
  },
  {pergunta: "Em alguns momentos, ao me aproximar de algumas pessoas, sinto-me inferior",
  respostas:["0", "1", "2", "3"]
  },
  {pergunta: "Sinto-me inseguro boa parte do tempo",
  respostas:["0", "1", "2", "3"]
  },
  {pergunta: "Chego a passar mais de horas sem beber água ",
  respostas:["0", "1", "2", "3"]
  },
  {pergunta: "Tenho reagido de forma exagerada às situações",
  respostas:["0", "1", "2", "3"]
  },
  {pergunta: "Ando me sentindo triste",
  respostas:["0", "1", "2", "3"]
  },
  {pergunta: "Estou vivendo um momento de muitas preocupações",
  respostas:["0", "1", "2", "3"]
  },
  {pergunta: "Estou muito animado com minhas conquistas",
  respostas:["0", "1", "2", "3"]
  },
  {pergunta: "Deixo de fazer algumas das refeições diárias (café, almoço, janta)",
  respostas:["0", "1", "2", "3"]
  },
  {pergunta: "Não tenho motivação para preparar comida só pra mim",
  respostas:["0", "1", "2", "3"]
  },
  {pergunta: "Não me acho uma pessoa tão boa, quanto as outras pessoas",
  respostas:["0", "1", "2", "3"]
  },
  {pergunta: "Sempre que as adversidades surgem, sinto-me fraco para enfrentar",
  respostas:["0", "1", "2", "3"]
  },
  {pergunta: "Mastigo os alimentos bem rápido; ",
  respostas:["0", "1", "2", "3"]
  },
  {pergunta: "Tenho ficado nervoso com frequência",
  respostas:["0", "1", "2", "3"]
  },
  {pergunta: "Ultimamente, o sexo tem ficado para depois...",
  respostas:["0", "1", "2", "3"]
  },
  {pergunta: "Não considero o sexo algo tão importante assim, para a vida...",
  respostas:["0", "1", "2", "3"]
  },
  {pergunta: "Quando estou sozinho, sinto-me muito indefeso",
  respostas:["0", "1", "2", "3"]
  },
  {pergunta: "Não vejo o porquê de gostarem de mim",
  respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Passo mais de semanas sem praticar sexo",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Ultimamente, tenho me sentido agitado",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Sou uma pessoa muito feliz",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Ando me sentido incomodado com muita coisa",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Sinto um peso nos ombros, estou meio tenso",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "A angústia tem sido constante em minha vida",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Ultimamente, tenho dormido pouco",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Tenho dificuldades para iniciar o sono",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Sempre que surgem novas situações, estou com alguém de confiança para enfrentá-las.",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Me considero uma pessoa chata e desinteressante",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Tenho me sentido incapaz de mudar o rumo da minha vida.",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Tenho tido dificuldades para conseguir dormir 8h por noite",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Tenho achado difícil relaxar",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Constantemente, seguro as necessidades de fazer fezes, urina para depois",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Tenho dificuldades para fazer as necessidades fisiológicas (fezes, urina)",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Tenho pensamentos de que serei rejeitado (a) caso me conheçam mais profundamente, inclusive meus defeitos.",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Quando analiso minha vida, logo penso: Sou um (a) fracassado (a)",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "As vezes me desligo ou me sobrecarrego de tal maneira, que até esqueço que preciso ir ao banheiro fazer as necessidades fisiológicas.",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Tenho sido intolerante com as coisas que me impedem de continuar o que eu estava fazendo",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Ando muito aborrecido com os acontecimentos",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Tenho tido dificuldades em tomar decisões",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Tenho me sentido irritado com frequência",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Tenho uma postura otimista perante a vida",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Sei sobre a importância do exercício físico para o corpo, mas ainda não consegui encaixar na minha rotina...",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Ando tão corrido, que nem tenho tempo para atividade física.",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Já me perguntei: Por que as pessoas irão me amar ou querer ser minhas amigas?",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Penso ter pouco valor como pessoa",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Preciso começar a praticar atividades físicas",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Tenho me sentido um pouco emotivo/sensível demais",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Tenho medo de errar",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Tenho que ser assertivo em tudo o que faço",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Preciso ser mais paciente comigo mesmo",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Ando um pouco desanimado",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Ultimamente, tenho lidado com sentimentos de insegurança",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Tenho me sentido nervoso com o que tem acontecido da vida",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Ando cheio de entusiasmo para lidar com os desafios do dia a dia",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Penso não ser uma pessoa boa o bastante para ser amado (a)",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Em alguns momentos, penso ser uma pessoa prejudicial às outras pessoas",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Me questiono se alguém me ama",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Constantemente, tenho sentimento de que sou insignificante",
    respostas:["0", "1", "2", "3"]
  },
  {
    pergunta: "Já me questionei: Será que mundo não será melhor se eu não existir?",
    respostas:["0", "1", "2", "3"]
  }
];

let indicePerguntaAtual = 0; // Variável para controlar o índice da pergunta atual
let todasRespostas = [];//array que vai armazenar todas as respostas\\

// Função para exibir a pergunta atual na página HTML
function exibirPerguntaAtual() {
  const questionContainer = document.getElementById('questionContainer');
  questionContainer.innerHTML = ''; // Limpa o conteúdo anterior do container

  const perguntaAtual = perguntas[indicePerguntaAtual];
  const perguntaElement = document.createElement('div');
  perguntaElement.textContent = perguntaAtual.pergunta;
  questionContainer.appendChild(perguntaElement);
}

// Chame a função para exibir a primeira pergunta quando a página for carregada
window.onload = exibirPerguntaAtual;

// Função para avançar para a próxima pergunta
function avancarParaProximaPergunta() {
  const inputElement0 = document.getElementById("resposta0");
  const inputElement1 = document.getElementById("resposta1");
  const inputElement2 = document.getElementById("resposta2");
  const inputElement3 = document.getElementById("resposta3");

  // Obter os valores dos inputs e convertê-los para números inteiros
  const valorInteiro0 = parseInt(inputElement0.value);
  const valorInteiro1 = parseInt(inputElement1.value);
  const valorInteiro2 = parseInt(inputElement2.value);
  const valorInteiro3 = parseInt(inputElement3.value);
  //jogando no console
  console.log("Resposta 0:", valorInteiro0);
  console.log("Resposta 1:", valorInteiro1);
  console.log("Resposta 2:", valorInteiro2);
  console.log("Resposta 3:", valorInteiro3);
  
  // Função para armazenar a resposta selecionada pelo usuário
  function armazenarResposta(input) {
    const resposta = parseInt(input.value); // Obtém e converte o valor do input selecionado para um número inteiro
    
    // Adiciona a resposta atual ao array todasRespostas
    todasRespostas.push(resposta);
    
    console.log("Respostas armazenadas:", todasRespostas);
}

  // Avançar para a próxima pergunta
  indicePerguntaAtual++; // Incrementa o índice da pergunta atual
  if (indicePerguntaAtual < perguntas.length) {
      exibirPerguntaAtual(); // Exibe a próxima pergunta
  } else {
      alert('Você respondeu todas as perguntas.'); // Exibe um alerta quando todas as perguntas foram respondidas
      // Se todas as perguntas foram respondidas, realizar a operação com as respostas
      const mediaRespostas = calcularMedia(todasRespostas);
      console.log("Média das respostas:", mediaRespostas);
      // Você pode realizar qualquer operação desejada com as respostas aqui
  }
}  
function voltarParaPerguntaAnterior() {
  if (indicePerguntaAtual > 0) {
    indicePerguntaAtual--; // Decrementa o índice da pergunta atual
    exibirPerguntaAtual(); // Exibe a pergunta anterior
  } else {
    alert('Esta é a primeira pergunta.'); // Exibe um alerta se já estiver na primeira pergunta
  }
}