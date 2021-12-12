let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Qual o autor da primeira roda de leitura?",
    alternativaA : "Gonçalves Dias",
    alternativaB : "Álvares de Azevedo",
    alternativaC : "Castro Alves",
    correta      : "Gonçalves Dias",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "O movimento do Iluminismo teve inicio em qual pais?",
    alternativaA : "Itália",
    alternativaB : "França",
    alternativaC : "Brasil",
    correta      : "França",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Qual os principais nomes do Romantismo Brasileiro?",
    alternativaA : "Aluísio Azevedo, Álvares de Azevedo, Casimiro de Abreu",
    alternativaB : "Leonardo da Vinci, Michelangelo, Donatello",
    alternativaC : "Jean-Jacques Rousseau, Montesquieu, Adam Smith",
    correta      : "Aluísio Azevedo, Álvares de Azevedo, Casimiro de Abreu",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "O que o Iluminismo defendia?",
    alternativaA : "A intervenção do estado na vida dos cidadãos",
    alternativaB : "Liberdade econômica e política",
    alternativaC : "A privatização de comércios e empresas",
    correta      : "Liberdade econômica e política",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Sobre a Semana da Arte, Assinale a Alternativa Correta",
    alternativaA : "O seu objetivo era renovar o ambiente artístico-cultural",
    alternativaB : "Seguia os padrões  artísticos da época da época",
    alternativaC : "Se inspirava nas academias",
    correta      : "O seu objetivo era renovar o ambiente artístico-cultural",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual artista brasileiro pintou o Abaporu ?",
    alternativaA : "Tarsila do Amaral",
    alternativaB : "Monteiro Lobato",
    alternativaC : "Aleijadinho",
    correta      : "Tarsila do Amaral",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Quem pintou a Capela Sistina?",
    alternativaA : "Aleijadinho",
    alternativaB : "Mestre Valentim",
    alternativaC : "Michelangelo",
    correta      : "Michelangelo",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Quem é o autor do Sítio do Picapau Amarelo?",
    alternativaA : "Andrey Avilla",
    alternativaB : "Monteiro Lobato",
    alternativaC : "Léo Aguiar",
    correta      : "Monteiro Lobato",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "'João foi comprar pão', Qual o sujeito da frase?",
    alternativaA : "Pão",
    alternativaB : "Foi",
    alternativaC : "João",
    correta      : "João",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Quem esculpiu 'Os Doze Profetas'?",
    alternativaA : "Mestre Valentim",
    alternativaB : "Aleijadinho",
    alternativaC : "Mestre Ataíde",
    correta      : "Aleijadinho",
}
// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 4000)
}
