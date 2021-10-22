//pedra = 1
//papel = 2
//tesoura = 3

let tabuleiro = document.getElementById("campo");
let resultado = document.getElementById("resultado");

let computador = "";
let jogador = "";

function jogar(mao) {
  jogador = mao;
  computador = Math.ceil(Math.random() * 3);
  switch (computador) {
    case 1:
      computador = "pedra";
      break;
    case 2:
      computador = "papel";
      break;
    case 3:
      computador = "tesoura";
      break;
  }

  if (jogador === computador) {
    tabuleiro.innerHTML = `<div> <p>você</p> <img src="./imgs/${jogador}.png" alt="" /></div> <div> <p>pc</p> <img src="./imgs/${computador}.png" alt="" /></div>`;
    resultado.innerHTML = "<p>Empate!!</p>";
  }

  if (jogador === "pedra" && computador === "papel") {
    tabuleiro.innerHTML = `<div> <p>você</p> <img src="./imgs/${jogador}.png" alt="" /></div> <div> <p>pc</p> <img src="./imgs/${computador}.png" alt="" /></div>`;
    resultado.innerHTML = "<p>Computador venceu!!</p>";
  }

  if (jogador === "pedra" && computador === "tesoura") {
    tabuleiro.innerHTML = `<div> <p>você</p> <img src="./imgs/${jogador}.png" alt="" /></div> <div> <p>pc</p> <img src="./imgs/${computador}.png" alt="" /></div>`;
    resultado.innerHTML = "<p>Você venceu!!</p>";
  }

  if (jogador === "papel" && computador === "pedra") {
    tabuleiro.innerHTML = `<div> <p>você</p> <img src="./imgs/${jogador}.png" alt="" /></div> <div> <p>pc</p> <img src="./imgs/${computador}.png" alt="" /></div>`;
    resultado.innerHTML = "<p>Você venceu!!</p>";
  }

  if (jogador === "papel" && computador === "tesoura") {
    tabuleiro.innerHTML = `<div> <p>você</p> <img src="./imgs/${jogador}.png" alt="" /></div> <div> <p>pc</p> <img src="./imgs/${computador}.png" alt="" /></div>`;
    resultado.innerHTML = "<p>Computador venceu!!</p>";
  }

  if (jogador === "tesoura" && computador === "pedra") {
    tabuleiro.innerHTML = `<div> <p>você</p> <img src="./imgs/${jogador}.png" alt="" /></div> <div> <p>pc</p> <img src="./imgs/${computador}.png" alt="" /></div>`;
    resultado.innerHTML = "<p>Computador venceu!!</p>";
  }

  if (jogador === "tesoura" && computador === "papel") {
    tabuleiro.innerHTML = `<div> <p>você</p> <img src="./imgs/${jogador}.png" alt="" /></div> <div> <p>pc</p> <img src="./imgs/${computador}.png" alt="" /></div>`;
    resultado.innerHTML = "<p>Você venceu!!</p>";
  }
}
