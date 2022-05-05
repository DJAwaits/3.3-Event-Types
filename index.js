const cardList = document.querySelector('.cardList');
const points = document.getElementById('points');
const gameOver = document.getElementById('gameOver');
let blackCard = 1;
let goldCard = 2;
let pointAmount = 0;

buildBoard();

let interval = setInterval(function(){
    addCard(cardList.children.length + 1)//make it start at 1 not 0
}, 5000);

cardList.addEventListener('click', function(e){
    if (e.target.matches('.cardList')){
        return
    }
    if (e.target.classList.contains('active')){
        pointAmount += blackCard;
        points.innerHTML = `Points: ${pointAmount}`;
    }
    if (e.target.classList.contains('inactive')){
        pointAmount += goldCard;
        points.innerHTML = `Points: ${pointAmount}`;
    }
    if (e.target.classList.contains('active')){
        e.target.classList.remove('active');
        e.target.classList.add('inactive');
        return
    }
    e.target.remove();
    let children = cardList.children;
    if (children.length < 1){
        clearInterval(interval);
        points.classList.add('hidden');
        gameOver.classList.remove('hidden');
        gameOver.innerHTML = `Game Over! Total Points: ${pointAmount}`;
    }

});

function addCard(value){
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}

function buildBoard(){
    for (let i=0; i<12; i++){
        addCard('starter');
    }
}


