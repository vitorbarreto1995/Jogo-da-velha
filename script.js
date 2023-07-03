//c-132

const textoUsuarioX = "Usuário X: ";
const textoUsuarioO = "Usuário O:";

let jogadorAtual = {}; 
let jogadas = []; 
let emJogo = false; 

let jogo ={
    jogada1: document.querySelector(".tictactoe1"),
    jogada2: document.querySelector(".tictactoe2"),
    jogada3: document.querySelector(".tictactoe3"),
    jogada4: document.querySelector(".tictactoe4"),
    jogada5: document.querySelector(".tictactoe5"),
    jogada6: document.querySelector(".tictactoe6"),
    jogada7: document.querySelector(".tictactoe7"),
    jogada8: document.querySelector(".tictactoe8"),
    jogada9: document.querySelector(".tictactoe9")
}

var opcoes = {
    divOpcoesJogo : document.querySelector(".opcoesJogo"),
    usuarioX : document.getElementById("usuario-x"),
    usuarioO : document.getElementById("usuario-o"),
    btnJogar : document.getElementById("btnPlay")
};

var painel = {
    painelOpcoesJogo: document.querySelector(".painel"),
    nomeX: document.getElementById("playerX"),
    nomeO: document.getElementById("playerO"),
    pontosX: document.getElementById("playerXPoints"),
    pontosO: document.getElementById("playerOPoints"),
    nomeProximoJogador: document.getElementById("nextPlayer")
};
 
let jogadorX = {
    nome:"",
    valor:"",
    pontos: 0
} 

let jogadorO ={
    nome:"",
    valor:"",
    pontos: 0
}



//Capturando os eventos de click.
opcoes.btnJogar.addEventListener("click", () =>{

        jogadorX.nome = opcoes.usuarioX.value;
        jogadorO.nome = opcoes.usuarioO.value;

        if(!jogadorX.nome || !jogadorO.nome){
            window.alert("Iniciar o jogo");
            return;
        }

        //Manipular nomes.
        painel.nomeX.textContent = textoUsuarioX + jogadorX.nome;
        painel.nomeO.textContent = textoUsuarioO + jogadorO.nome;

        jogadorAtual = jogadorX;
        painel.nomeProximoJogador.textContent = jogadorAtual.nome;
        emJogo = true;

        //Esconder as opções e mostrar painel.
        opcoes.divOpcoesJogo.classList.add("hide");
        painel.painelOpcoesJogo.classList.remove("hide"); 

});

jogo.jogada1.addEventListener("click", (e)=>{
    jogada(e, 1);
});

jogo.jogada1.addEventListener("click", (e)=>{
    jogada(e, 2);
});

jogo.jogada1.addEventListener("click", (e)=>{
    jogada(e, 3);
});

jogo.jogada1.addEventListener("click", (e)=>{
    jogada(e, 4);
});

jogo.jogada1.addEventListener("click", (e)=>{
    jogada(e, 5);
});

jogo.jogada1.addEventListener("click", (e)=>{
    jogada(e, 6);
});

jogo.jogada1.addEventListener("click", (e)=>{
    jogada(e, 7);
});

jogo.jogada1.addEventListener("click", (e)=>{
    jogada(e, 8);
});

jogo.jogada1.addEventListener("click", (e)=>{
    jogada(e, 9);
});

//Criando as functions do programa, ou seja, as ações dos objetos.
function validarJogada(){
    let valor = jogadorAtual.valor;

    if( _estrategia_1(valor) || 
        _estrategia_2(valor) ||
        _estrategia_3(valor) ||
        _estrategia_4(valor) ||
        _estrategia_5(valor) ||
        _estrategia_6(valor) ||
        _estrategia_7(valor) ||
        _estrategia_8(valor) 
    ){
        return true;
    }else{
        return false;
    }
   
}

function _estrategia_1(valor){
    return (jogadas[1] == valor && jogadas[2] == valor && jogadas[3] == valor);
}

function _estrategia_2(valor){
    return (jogadas[4] == valor && jogadas[5] == valor && jogadas[6] == valor);
}

function _estrategia_3(valor){
    return (jogadas[7] == valor && jogadas[8] == valor && jogadas[9] == valor);
}

function _estrategia_4(valor){
    return (jogadas[1] == valor && jogadas[4] == valor && jogadas[7] == valor);
}

function _estrategia_5(valor){
    return (jogadas[2] == valor && jogadas[5] == valor && jogadas[8] == valor);
}

function _estrategia_6(valor){
    return (jogadas[3] == valor && jogadas[6] == valor && jogadas[9] == valor);
}

function _estrategia_7(valor){
    return (jogadas[1] == valor && jogadas[5] == valor && jogadas[9] == valor);
}

function _estrategia_8(valor){
    return (jogadas[3] == valor && jogadas[5] == valor && jogadas[7] == valor);
}

function _marcarJogada(e, indice){
    e.target.textContent = jogadorAtual.valor;
    jogadas[indice] = jogadorAtual.valor;
}

function jogada(e, indice){

    if(!emJogo || e.target.textContent){
        return;
    }

    _marcarJogada(e, indice);

    if(validarJogada()){

        setTimeout(() =>{
            //alert(`Parabéns, jogador ${jogadorAtual.nome} acaba de marcar ponto`);
            _atualizarPainel();
            _reiniciarJogo();
        }, 100)

        return;
    }

    if(jogadas.filter(e =>e).length == 9){

        setTimeout(() =>{
            window.alert("Deu velha ...");
            _reiniciarJogo();
        },100)

        return;
    }


//Continuar jogando.
jogadorAtual = (jogadorAtual == jogadorX) ? jogadorO : jogadorX;

painel.nomeProximoJogador.textContent = jogadorAtual.nome;

}

function _reiniciarJogo(){

    jogadas = [];
    jogo.jogada1.textContent = "";
    jogo.jogada2.textContent = "";
    jogo.jogada3.textContent = "";
    jogo.jogada4.textContent = "";
    jogo.jogada5.textContent = "";
    jogo.jogada6.textContent = "";
    jogo.jogada7.textContent = "";
    jogo.jogada8.textContent = "";
    jogo.jogada9.textContent = "";
}

function _atualizarPainel(){

    jogadorAtual.pontos += 1;

    if(jogadorAtual.valor == "X"){
        painel.pontosX.textContent = jogadorAtual.pontos;
    }else{
        painel.pontosO.textContent = jogadorAtual.pontos;
    }

    jogadorAtual = (jogadorAtual == jogadorX) ? jogadorO : jogadorX;
    painel.nomeProximoJogador.textContent = jogadorAtual.nome;
}







