const dino = document.createElement('div');
dino.className = 'dino';
document.getElementById('gameArea').appendChild(dino);

const scoreDisplay = document.getElementById('score');

let isJumping = false;
let score = 0;
let obstacleInterval;

function startGame() {
    obstacleInterval = setInterval(createObstacle, 2000);
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !isJumping) {
        isJumping = true;
        jump();
    }
});

function jump() {
    dino.classList.add('jump');
    setTimeout(() => {
        dino.classList.remove('jump');
        isJumping = false;
    }, 400); 
}

function createObstacle() {
    const obstacle = document.createElement('div');
    obstacle.className = 'obstacle';
    document.getElementById('gameArea').appendChild(obstacle);
    
    let hasPassed = false; 

    obstacle.addEventListener('animationend', () => {
        obstacle.remove();
    });

    const obstacleInterval = setInterval(() => {
        const dinoRect = dino.getBoundingClientRect();
        const obstacleRect = obstacle.getBoundingClientRect();

        if (
            dinoRect.x < obstacleRect.x + obstacleRect.width &&
            dinoRect.x + dinoRect.width > obstacleRect.x &&
            dinoRect.y < obstacleRect.y + obstacleRect.height &&
            dinoRect.y + dinoRect.height > obstacleRect.y
        ) {
           
            clearInterval(obstacleInterval);
            alert(`Игра окончена! Ваш счет: ${score}`);
            saveScore(score);
            location.reload();
        }

        
        if (!hasPassed && dinoRect.x + dinoRect.width < obstacleRect.x) {
            score++;
            hasPassed = true; 
            updateScore(); 
        }
    }, 10);
}

function updateScore() {
    scoreDisplay.innerText = score;
}

function saveScore(score) {
    const now = new Date();
    const timestamp = now.toISOString();
    
    fetch('/save-result', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ score, timestamp })
    })
    .then(response => response.text())
    .then(data => console.log(data));
}


startGame();
