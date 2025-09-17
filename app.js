let listaNumSorteados = [];
let numLimite = 100
let numero=gerarNumero();
let tentativa = 1;

function imprimaTexto(tag, texto){
    let titulo = document.querySelector(tag)
    titulo.innerHTML = texto
}

function imprimaMesagen() {
    imprimaTexto('h1','jogo secreto');
    imprimaTexto('p',`escolha um numero de 1 a ${numLimite}`);
}
    imprimaMesagen();
function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numero){
        let pTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mTentativa = `voce ganhou um bolinho >:) com ${tentativa} ${pTentativa}`;

        imprimaTexto('h1','para bens');
        imprimaTexto ('p',mTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numero){
            imprimaTexto('p','o numero e menor ');
        }else{
            imprimaTexto('p','o numero e maior ');
        }
        tentativa ++;
        limpacampo();
    }
}
function gerarNumero() {
   let numEscolhido = parseInt(Math.random()* numLimite + 1);
   let numElementoLista = listaNumSorteados.length;
   if (numElementoLista == numLimite ) {
        listaNumSorteados = [];
   }
   if (listaNumSorteados.includes(numEscolhido)){
    return gerarNumero();
   }else{
    listaNumSorteados.push(numEscolhido);
    return numEscolhido;
   }
}
function limpacampo() {
    chute =document.querySelector('input');
    chute.value = '';
    chute.focus();
}

function reiniciarJogo() {
    numero=gerarNumero();
    limpacampo();
    tentativa=1;
    imprimaMesagen();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}

