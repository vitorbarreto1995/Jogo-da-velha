
//Declarando variáveis e objetos utilizados para o jogo.
const textoUsuarioX = "Usuário X: ";
const textoUsuarioO = "Usuário O:";

let jogadorAtual = {}; //tem essa sintaxe de {} pois é apenas uma senquência de strings.
let jogadas = []; //já essa sintaxe de [] é de um vetor.
let emJogo = false; //valor booleano.
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
} // Já essa sintaxe é claramente de um objeto pois contém parâmetros e valores.
 
let jogadorX = {
    nome:"",
    valor:"",
    pontos: 0
} // mais um exemplo de objeto

let jogadorO ={
    nome:"",
    valor:"",
    pontos: 0
}

var opcoes = {
    divOpcoesJogo : document.querySelector(".opcoesJogo"),
    usuarioX : document.getElementById("jogadorX"),
    usuarioO : document.getElementById("jogadorO"),
    btnJogar : document.getElementById("btnPlay")
};

var painel = {
    painelOpcoesJogo: document.querySelector(".painel"),
    nomeX: document.getElementById("playerX"),
    nomeO: document.getElementById("playerO"),
    pontosX: document.getElementById("pointsPlayerX"),
    pontosO: document.getElementById("pointsPlayerO"),
    nomeProximoJogador: document.getElementById("nextPlayer")
};

//Capturando os eventos de click.
opcoes.btnJogar.addEventListener("click", () =>{

        jogadorX.nome = opcoes.usuarioX.value;
        jogadorO.nome = opcoes.usuarioO.value;

        if(!jogadorX.nome || !jogadorO.nome){
            window.alert("Iniciar o jogo");
            return;
        }

        //Manipular nomes.
        painel.nomeX.textContent = textoUsuarioX + jogador.nome;
        painel.nomeO.textContent = textoUsuarioO + jogador.nome;

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









