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
  
  // Avançar para a próxima pergunta
  indicePerguntaAtual++; // Incrementa o índice da pergunta atual
  if (indicePerguntaAtual < perguntas.length) {
      exibirPerguntaAtual(); // Exibe a próxima pergunta
  } else {
      alert('Você respondeu todas as perguntas.'); // Exibe um alerta quando todas as perguntas foram respondidas
      // Se todas as perguntas foram respondidas, realizar a operação com as respostas
     
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
//variuaveis do primeiro grafico - respiraçao
var numResp = todasRespostas[5] + todasRespostas[6] + todasRespostas[8];//coeficiente total de respiraçao
var indicaResp, respiraGrafico;//declarando o numero que vai no indicador de respiracao e o que vai pro grafico
var respiracao = numResp;//respracao vai pro indicador, e o num resp é o numero obtido nos inputs

if (respiracao <= 2 ) {//mesmo outupt da proxima condicao
  indicaResp = "Respiração em equilibrio";//o indicar de texto
  respiraGrafico = numResp;
}// o grafico vai receber o ponto numerico que veio dos inputs
  else if (2< respiracao <=6) {//redundante, como isso aqui fica na real?
    indicaResp = "Respiração em desajuste";
  respiraGrafico = numResp;
  console.log("Bloco 2: Respiração em desajuste"); // Adicionando console.log() no segundo bloco

  }
  else if (respiracao >= 7) {
    indicaResp = "Respiração em hiperdesajuste";//condicional que muda
    respiraGrafico = numResp;
    console.log("Bloco 3: Respiração em hiperdesajuste"); // Adicionando console.log() no terceiro bloco

  }
console.log(indicaResp, respiraGrafico)//excrever no console pra teste


//variavel hidratacao

var numHidrat = todasRespostas[10] + todasRespostas[13] + todasRespostas[16];//coeficiente total de hidrataçao
var indicaHidrat, HidratGrafico;//declarando o numero que vai no indicador de hidrataçao e o que vai pro grafico
var hidratacao = numHidrat;//hidrataçao vai pro indicador, e o numHirat é o numero obtido nos inputs
//condicional 
if (hidratacao <= 2){
  indicaHidrat = "Hidratação em equilíibrio] ";
  HidratGrafico = numHidrat;
}

else if (hidratacao >= 7){
  indicaHidrat = "Hidratação em hiperdesajuste";
  HidratGrafico= numHidrat;
}
else{//condicional correta permite 3 intervalos
  indicaHidrat = "Hidratação em desajuste";
  HidratGrafico= numHidrat;
}
console.log(indicaHidrat, HidratGrafico);

//variavel alimentacao

var numAlimento = todasRespostas[21] + todasRespostas[22] + todasRespostas[26];//coeficiente total de alimentacao
var indicaAlimento, alimentoGrafico;//declarando o numero que vai no indicador de alimentacao e o que vai pro grafico
var alimentacao = numAlimento;//alimentacao vai pro indicador, e o numAlimento é o numero obtido nos inputs
//condicional 
if (alimentacao <= 2){
  indicaAlimento = "Alimentação em equilíibrio] ";
  alimentoGrafico = numAlimento;
}
else if (alimentacao >= 7){
  indicaAlimento = "Alimentação em hiperdesajuste";
  alimentoGrafico= numAlimento;
}
else{//condicional correta permite 3 intervalos
  indicaAlimento = "Alimentação em desajuste";
  alimentoGrafico= numAlimento;
}
console.log(indicaAlimento, alimentoGrafico);

//variavel alimentacao

var numSexo = todasRespostas[27] + todasRespostas[28] + todasRespostas[31];//coeficiente total 
var indicaSexo, sexoGrafico;//declarando o numero que vai no indicador que vai pro grafico
var sexo = numSexo;// vai pro indicador, e o numAlimento é o numero obtido nos inputs
//condicional 
if (sexo <= 2){
  indicaSexo = "Sexualidade em equilíibrio] ";
  sexoGrafico = numSexo;
}

else if (sexo >= 7){
  indicaSexo = "Sexualidade em hiperdesajuste";
  sexoGrafico= numSexo;
}
else {//condicional correta permite 3 intervalos
  indicaSexo = "Sexualidade em desajeste";
  sexoGrafico = numSexo;
}
console.log(indicaSexo, numSexo);

//variavel sono

var numSono = todasRespostas[37] + todasRespostas[38] + todasRespostas[42];//coeficiente total 
var indicaSono, sonoGrafico;//declarando o numero que vai no indicador que vai pro grafico
var sono = numSono;// vai pro indicador, e o numAlimento é o numero obtido nos inputs
//condicional 
if (sono <= 2){
  indicaSono = "Sono em equilíibrio] ";
  sonoGrafico = numSono;
}

else if (sono >= 7){
  indicaSono = "Sono em hiperdesajuste";
  sonoGrafico= numSono;
}
else {//condicional correta permite 3 intervalos
  indicaSono = "Sono em desajuste";
  sonoGrafico = numSono;
}
console.log(indicaSono, numSono);

//variavel dejetos

var numDejetos = todasRespostas[44] + todasRespostas[45] + todasRespostas[48];//coeficiente total 
var indicaDejeto, dejetoGrafico;//declarando o numero que vai no indicador que vai pro grafico
var dejeto = numDejetos;// vai pro indicador, e o numAlimento é o numero obtido nos inputs
//condicional 
if (sono <= 2){
  indicaDejeto = "Excreção em equilíibrio] ";
  dejetoGrafico = numDejetos;
}

else if (sono >= 7){
  indicaDejeto = "Excreção em hiperdesajuste";
  dejetoGrafico= numDejetos;
}
else {//condicional correta permite 3 intervalos
  indicaDejeto = "Excreção em desajuste";
  dejetoGrafico = numDejetos;
}
console.log(indicaDejeto, numDejetos);

//variavel corpo
var numCorpo = todasRespostas[54] + todasRespostas[55] + todasRespostas[58];//coeficiente total 
var indicaCorpo, corpoGrafico;//declarando o numero que vai no indicador que vai pro grafico
var corpo = numCorpo;// vai pro indicador, e o numAlimento é o numero obtido nos inputs
//condicional 
if (sono <= 2){
  indicaCorpo = "Corpo em equilíibrio] ";
  corpoGrafico = numCorpo;
}

else if (sono >= 7){
  indicaCorpo = "Corpo em hiperdesajuste";
  corpoGrafico= numCorpo;
}
else {//condicional correta permite 3 intervalos
  indicaCorpo = "Corpo em desajuste";
  corpoGrafico = numCorpo;
}
console.log(indicaCorpo, numCorpo);
