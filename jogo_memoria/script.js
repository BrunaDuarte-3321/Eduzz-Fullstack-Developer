let order = [];
let clickedOrder = [];
let score = 0;
// 0 - verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelectorAll('.blue');
const red = document.querySelectorAll('.red');
const green = document.querySelectorAll('.green');
const yellow = document.querySelectorAll('.yellow');
//Criando ordens aleatorias de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];
  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

// Acende a proxima cor
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, tempo - 250);
  setTimeout(() => {
    element.classList.remove('selected');
  });
};

// Checa se os botoes clicados são os mesmos da order gerada no jogo
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
    nextLevel();
  }
};
//função para o clique do usuário

let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  elementColor(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  });
};

//função que retorna a cor
let createColorElement = (color) => {
  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return blue;
  }
};
//função para proximo nivel do jogo
let nextLevel = () => {
  score++;
  shuffleOrder();
};

//função para game over
let gameOver = () => {
  alert(
    `Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`,
  );
  order = [];
  clickedOrder = [];
  playGame();
};

let playGame = () => {
  alert('Bem vindo ao Gênesis! Iniciando um novo jogo');
  score = 0;
  nextLevel();
};
green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));
// eventos para as cores
green.onClick = () => click(0);
red.onClick = () => click(1);
yellow.onClick = () => click(2);
blue.onClick = () => click(3);
playGame();
