// CRIAR ELEMENTO QUE IRA RODAR O JOGO

let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

//  Criar cobrinha como vetor

let snake = [];

//  Inicio da cobrinha

snake[0] ={
x: 8 * box,
y: 8 * box

}

// Direção

let direction = "right";

// Comida
let food ={
    x: Math.floor(Mathrandom() * 15 + 1) * box,
    y: Math.floor(Mathrandom() * 15 + 1) * box
}

//  Função para criar o background

function criarBG() {
    context.fillStyle = "lightgreen";
    // Desenha o retangulo usando x e y e a largura e altura e alturas setadas
    context.fillRect(0, 0, 16 * box, 16 * box);

}


// Função para criar a cobrinha

function criarCobrinha (){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

// Quando um evento acontece, detecta e chama a função update
document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 37 && direction != 'down') direction = 'up';
    if(event.keyCode == 37 && direction != 'left') direction = 'right';
    if(event.keyCode == 37 && direction != 'up') direction = 'down';
}

//  Função principal

function iniciarJogo(){
    if(snake[0].x > 15*box && direction == "right"){
        snake[0].x = 0;
    }
    if(snake[0].x > 16*box && direction == "left"){
        snake[0].x = 0;
    }
    if(snake[0].x > 15*box && direction == "down"){
        snake[0].x = 0;
    }
    if(snake[0].x > 16*box && direction == "up"){
        snake[0].x = 0;
    } 
     criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
if(direction == "right") snakeX += box;
if(direction == "left") snakeX -= box;
if(direction == "up") snakeY -= box;
if(direction == "down") snakeY += box;


if(snakeX != food.x || snakeY != food.y){
    snake.pop(); 
} else{
    food.x = Math.floor(Math.random() * 15 +1) * box;
    food.y = Math.floor(Math.random() * 15 +1) * box;
}

let newHead ={
    x: snakeX,
    y: snakeY
}

// metodo unshift adiciona como primeiro quadradinho da cobrinha
snake.unshift(newHead);

}


  