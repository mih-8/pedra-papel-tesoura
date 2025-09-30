let pontosJogador = 0;
let pontosComputador = 0;

const escolhasMapeamento = {
    'pedra': '🪨 Pedra',
    'papel': '📄 Papel',
    'tesoura': '✂️ Tesoura'
};

const botoesOpcao = document.querySelectorAll('.opcao');
const pontosJogadorDisplay = document.getElementById('pontosJogador');
const pontosComputadorDisplay = document.getElementById('pontosComputador');
const escolhaJogadorDisplay = document.getElementById('escolhaJogador');
const escolhaComputadorDisplay = document.getElementById('escolhaComputador');
const resultadoMensagem = document.getElementById('resultadoMensagem');
const botaoReiniciar = document.getElementById('botaoReiniciar');

function jogar(escolhaJogador) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];

    escolhaJogadorDisplay.textContent = `Você escolheu: ${escolhasMapeamento[escolhaJogador]}`;
    escolhaComputadorDisplay.textContent = `Computador escolheu: ${escolhasMapeamento[escolhaComputador]}`;

    const resultado = determinarVencedor(escolhaJogador, escolhaComputador);

    atualizarPlacar(resultado);
}

function determinarVencedor(jogador, computador) {
    if (jogador === computador) {
        return 'empate';
    } else if (
        (jogador === 'pedra' && computador === 'tesoura') ||
        (jogador === 'papel' && computador === 'pedra') ||
        (jogador === 'tesoura' && computador === 'papel')
    ) {
        return 'jogador';
    } else {
        return 'computador';
    }
}

function atualizarPlacar(resultado) {
    resultadoMensagem.classList.remove('vitoria', 'derrota', 'empate');

    if (resultado === 'jogador') {
        pontosJogador++;
        resultadoMensagem.textContent = 'VOCÊ VENCEU A RODADA!';
        resultadoMensagem.classList.add('vitoria');
    } else if (resultado === 'computador') {
        pontosComputador++;
        resultadoMensagem.textContent = 'Você perdeu a rodada...';
        resultadoMensagem.classList.add('derrota');
    } else {
        resultadoMensagem.textContent = 'Empate!';
        resultadoMensagem.classList.add('empate');
    }

    pontosJogadorDisplay.textContent = pontosJogador;
    pontosComputadorDisplay.textContent = pontosComputador;
}

function reiniciarPlacar() {
    pontosJogador = 0;
    pontosComputador = 0;
    pontosJogadorDisplay.textContent = pontosJogador;
    pontosComputadorDisplay.textContent = pontosComputador;
    
    resultadoMensagem.classList.remove('vitoria', 'derrota', 'empate');
    resultadoMensagem.textContent = 'Placar reiniciado! Faça sua jogada!';
    
    escolhaJogadorDisplay.textContent = 'Você escolheu: -';
    escolhaComputadorDisplay.textContent = 'Computador escolheu: -';
}

botoesOpcao.forEach(botao => {
    botao.addEventListener('click', (event) => {
        const escolha = event.currentTarget.id;
        jogar(escolha);
    });
});

botaoReiniciar.addEventListener('click', reiniciarPlacar);