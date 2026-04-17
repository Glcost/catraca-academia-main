const API_BASE_URL = 'https://backendacademia.vercel.app';
let cpfAtual = '';
const visor = document.getElementById('visor');
const mensagemBox = document.getElementById('mensagem');

function digitar(numero) {
    if (cpfAtual.length < 11) {
        cpfAtual += numero;
        atualizarVisor();
    }
}

function limpar() {
    cpfAtual = '';
    atualizarVisor();
    resetarMensagem();
}

function atualizarVisor() {
    // Formatação simples visual para o CPF
    visor.textContent = cpfAtual;
}

function resetarMensagem() {
    mensagemBox.textContent = '';
    mensagemBox.className = 'mt-4 text-center text-xs font-bold h-4 transition-all uppercase tracking-wider';
}

function exibirMensagem(texto, tipo) {
    mensagemBox.textContent = texto;
    if (tipo === 'sucesso') {
        mensagemBox.classList.add('text-green-500');
    } else if (tipo === 'erro') {
        mensagemBox.classList.add('text-red-500');
    } else if (tipo === 'aviso') {
        mensagemBox.classList.add('text-yellow-500');
    }
}

async function verificarAcesso() {
    if (cpfAtual.length === 0) return;

    visor.innerHTML = '<i class="fas fa-circle-notch fa-spin text-2xl text-zinc-600"></i>';
    resetarMensagem();

    try {
        const resposta = await fetch(`${API_BASE_URL}/clientes/${cpfAtual}`);

        if (resposta.ok) {
            const cliente = await resposta.json();

            if (cliente.status === true) {
                exibirMensagem(`OLÁ, ${cliente.nome.split(' ')[0]}!`, 'sucesso');
                visor.innerHTML = '<span class="text-[#FFD700]"><i class="fas fa-check-circle"></i></span>';
            } else {
                exibirMensagem('PENDÊNCIA FINANCEIRA', 'erro');
                visor.innerHTML = '<span class="text-red-500"><i class="fas fa-times-circle"></i></span>';
            }
        } else if (resposta.status === 404) {
            exibirMensagem('NÃO ENCONTRADO', 'aviso');
            visor.innerHTML = '<span class="text-zinc-600">?</span>';
        } else {
            exibirMensagem('ERRO DE SISTEMA', 'erro');
            visor.innerHTML = '!!!';
        }
    } catch (erro) {
        exibirMensagem('SEM SINAL', 'erro');
        visor.innerHTML = '<i class="fas fa-wifi-slash"></i>';
    }

    setTimeout(() => {
        limpar();
    }, 3000);
}