let listaDeNumerosGerados = [];
let numeroLimite = 100;
function exibirHtmlNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirHtmlNaTela ("h1", "Jogo do número secreto");
    exibirHtmlNaTela ("p", "Escolha um número entre 1 e 100");
}
exibirMensagemInicial ();

function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt (Math.random () * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosGerados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosGerados = [];
    }
    if (listaDeNumerosGerados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio ();
    } else {
        listaDeNumerosGerados.push(numeroEscolhido);
        console.log(listaDeNumerosGerados);
        return numeroEscolhido;
    }
}
let numeroAleatorio = gerarNumeroAleatorio ();

function limpaCampo () {
    let chute = document.querySelector ("input");
    chute.value = "";
}

let tentativa = 1;
function verificarChute () {
    let chute = document.querySelector ("input").value;
    if (chute == numeroAleatorio) {
        document.getElementById ("reiniciar").removeAttribute("disabled");
        let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
        exibirHtmlNaTela ("h1", "Parabéns!");
        exibirHtmlNaTela ("p", `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}`);
    } else {
        if (chute > numeroAleatorio) {
            exibirHtmlNaTela ("p", "O número secreto é menor.");
        } else {
            exibirHtmlNaTela ("p", "O número secreto é maior.");
        }
        tentativa++;
        limpaCampo();
    }
};

function novoJogo () {
    limpaCampo ();
    tentativa = 1;
    exibirMensagemInicial ();
    numeroAleatorio = gerarNumeroAleatorio();
    document.getElementById ("reiniciar").setAttribute("disabled", true);
}