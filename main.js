const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
{
enunciado: "A energia solar é uma fonte de energia renovável e sustentável que é obtida apartir da
luz do sol. Diante disso: ",
alternativas: [
"Você investiria em energia solar?",
"Você continua com a energia hidreelétrica?",
]
},
{
enunciado: "Pensando em energia renovável e sustentável, e em recursos naturais inesgotáveis",
alternativas: [
"Você pensa na energia solar como renovável e sustentável",
"Acredita que a energia hidreelétrica é uma energia renovável e sustentável",
]
},
{
enunciado: "Refletindo em vantagens entre a energia solar e hidreelétrica ",
alternativas: [
"Acredita nos pontos positivos da energia solar",
"Defende a ideia nas vantagens da energia hidreelétrica",
]
},
];
let atual = 0;
let perguntaAtual;
function mostraPergunta() {
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
mostraAlternativas();
}
function mostraAlternativas() {
for (const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document.createElement("button");
botaoAlternativas.textContent = alternativa;
caixaAlternativas.appendChild(botaoAlternativas);
}
}
mostraPergunta();