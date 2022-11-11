//Grab game section
const gameSection = document.getElementById('game-section');

//Generate card images
const imgData = () => [{
        imgSrc: "./assets/images/Audrey-aubergine.jpg",
        name: "aubergine"
    },
    {
        imgSrc: "./assets/images/audrey-text.jpg",
        name: "aubergine"
    },
    {
        imgSrc: "./assets/images/Brenda-broccoli.jpg",
        name: "broccoli"
    },
    {
        imgSrc: "./assets/images/brenda-text.jpg",
        name: "broccoli"
    },
    {
        imgSrc: "./assets/images/Caroline-carrot.jpg",
        name: "carrot"
    },
    {
        imgSrc: "./assets/images/caroline-text.jpg",
        name: "carrot"
    },
    {
        imgSrc: "./assets/images/Lisa-lettuce.jpg",
        name: "lettuce"
    },
    {
        imgSrc: "./assets/images/lisa-text.jpg",
        name: "lettuce"
    },
    {
        imgSrc: "./assets/images/Oliver-onion.jpg",
        name: "onion"
    },
    {
        imgSrc: "./assets/images/oliver-text.jpg",
        name: "onion"
    },
    {
        imgSrc: "./assets/images/Peter-potato.jpg",
        name: "potato"
    },
    {
        imgSrc: "./assets/images/peter-text.jpg",
        name: "potato"
    },
];

//Randomize game cards
const randomize = () => {
    const cardData = imgData();
    cardData.sort(() => Math.random() - 0.5)
    return cardData;
};

//Generate cards 
const cardGenerate = () => {
    const cardData = randomize();
    //Create card html
    cardData.forEach((item, index) => {
        const card = document.createElement('div');
        const front = document.createElement('img');
        const back = document.createElement('div');
        card.classList = 'card';
        front.classList = 'front';
        back.classList = 'back';
        //Add imgs to cards
        front.src = item.imgSrc;
        card.setAttribute('name', item.name);
        //Attach cards to game section
        gameSection.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkMatch(e);
        });
    });
};

// Player lives count
const livesLeftNo = document.getElementById('lives');
let livesLeft = 8;
livesLeftNo.textContent = livesLeft;

//Check selected cards for match
const checkMatch = (e) => {
    console.log(e);
    const selectedCard = e.target;
    selectedCard.classList.add('selected');
    const turnedCards = document.querySelectorAll('.selected');
    const toggleCard = document.querySelectorAll('.toggleCard');
    console.log(turnedCards);

    //Game logic
    if (turnedCards.length === 2) {
        if (turnedCards[0].getAttribute('name') === turnedCards[1].getAttribute('name')) {
            console.log('match');
            turnedCards.forEach((card) => {
                card.classList.remove('selected');
                card.style.pointerEvents = "none";
            });
        } else {
            console.log('no match');
            turnedCards.forEach((card) => {
                card.classList.remove('selected');
                setTimeout(() => card.classList.remove('toggleCard'), 1000);
            });
            livesLeft--;
            livesLeftNo.textContent = livesLeft;
            if (livesLeft === 0) {
                newGame("Oh no! You ran out of lives. Try again!");
            }
        }
    }
    //Game win
    if (toggleCard.length === 12) {
        newGame("You did it! Thanks, from your friends The Veg Heads!");
    }
};

//Restart game 
const newGame = (message) => {
    let cardData = randomize();
    let fronts = document.querySelectorAll('.front');
    let cards = document.querySelectorAll('.card');
    cardData.forEach((item, index) => {
        cards[index].classList.remove('toggleCard');
        cards[index].style.pointerEvents = 'all';
        fronts[index].src = item.imgSrc;
        cards[index].setAttribute('name', item.name);
    });
    livesLeft = 8;
    livesLeftNo.textContent = livesLeft;
    window.alert(message);
};
cardGenerate();

// Random trivia button
let factsBtn = document.getElementById('facts-button');
let btnOutput = document.getElementById('facts-text');

let facts = [
    "Most vegetables need warm weather to grow, but spinach, carrots, and turnip can grow in chilly weather",
    "The part of the broccoli you eat is actually the flowers that haven’t opened yet",
    "Vegetables were first harvested by humans in 10,000 BCE. That’s a really really really long time ago",
    "A tomato is actually a fruit! But you probably shouldn’t put it in a fruit salad",
    "Vegetables are filled with vitamins and nutrients that keep you healthy",
    "You need to have at least 5 portions of fruit and veg a day. Everyday!",
    "It doesn’t matter how they are, fresh, frozen, or tinned, they’re all healthy and delicious!",
    "There are over 1000 types of vegetables that humans can eat. I don’t think we can name them all!",
];

factsBtn.addEventListener('click', function(){
    const randomFacts = facts[Math.floor(Math.random() * facts.length)]
    btnOutput.innerHTML = randomFacts;
    console.log(randomFacts);
});

