/***
 * Player enter name alert
 */
function enterName() {
    let user = prompt('Enter your name and become a Veg Head!');
    if (user != null) {
        document.getElementById('user-name').innerHTML =
            "Hi " + user + ", I'm Tommy Tomato. Can you help me match my veggie friends to their names?"
    }
};

/***
 * Name game section
 */
const gameSection = document.getElementById('game-section');

/***
 * Generate card image data
 */
const imgData = () => [{
        imgSrc: "./assets/images/audrey-aubergine.jpg",
        name: "aubergine"
    },
    {
        imgSrc: "./assets/images/audrey-text.jpg",
        name: "aubergine"
    },
    {
        imgSrc: "./assets/images/brenda-broccoli.jpg",
        name: "broccoli"
    },
    {
        imgSrc: "./assets/images/brenda-text.jpg",
        name: "broccoli"
    },
    {
        imgSrc: "./assets/images/caroline-carrot.jpg",
        name: "carrot"
    },
    {
        imgSrc: "./assets/images/caroline-text.jpg",
        name: "carrot"
    },
    {
        imgSrc: "./assets/images/lisa-lettuce.jpg",
        name: "lettuce"
    },
    {
        imgSrc: "./assets/images/lisa-text.jpg",
        name: "lettuce"
    },
    {
        imgSrc: "./assets/images/oliver-onion.jpg",
        name: "onion"
    },
    {
        imgSrc: "./assets/images/oliver-text.jpg",
        name: "onion"
    },
    {
        imgSrc: "./assets/images/peter-potato.jpg",
        name: "potato"
    },
    {
        imgSrc: "./assets/images/peter-text.jpg",
        name: "potato"
    },
];
/***
 * Randomize for game cards
 */
const randomize = () => {
    const cardData = imgData();
    cardData.sort(() => Math.random() - 0.5)
    return cardData;
};
/***
 * Generate game cards
 * Add imgs to cards
 * Attach cards to game section
 */
const cardGenerate = () => {
    const cardData = randomize();
    cardData.forEach((item, index) => {
        const card = document.createElement('div');
        const front = document.createElement('img');
        const back = document.createElement('div');
        card.classList = 'card';
        front.classList = 'front';
        back.classList = 'back';
        front.src = item.imgSrc;
        card.setAttribute('name', item.name);
        gameSection.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkMatch(e);
        });
    });
};

/***
 * Player lives counter
 */
const livesLeftNo = document.getElementById('lives');
let livesLeft = 8;
livesLeftNo.textContent = livesLeft;

/***
 * Check toggled cards for match
 * Game logic
 */
const checkMatch = (e) => {
    const selectedCard = e.target;
    selectedCard.classList.add('selected');
    const turnedCards = document.querySelectorAll('.selected');
    const toggleCard = document.querySelectorAll('.toggleCard');
    if (turnedCards.length === 2) {
        if (turnedCards[0].getAttribute('name') === turnedCards[1].getAttribute('name')) {
            turnedCards.forEach((card) => {
                card.classList.remove('selected');
                card.style.pointerEvents = "none";
            });
        } else {
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
    if (toggleCard.length === 12) {
        newGame("You did it! Thanks, from your friends The Veg Heads!");
    }
};
/***
 * Restarting game
 */
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

/***
 * Random facts button
 */
let factsBtn = document.getElementById('facts-button');
let btnOutput = document.getElementById('facts-text');

let facts = [
    "Most vegetables need warm weather to grow, but spinach, carrots, and turnip can grow in chilly weather.",
    "The part of the broccoli you eat is actually the flowers that haven’t opened yet.",
    "Vegetables were first harvested by humans in 10,000 BCE. That’s a really really really long time ago.",
    "A tomato is actually a fruit! But you probably shouldn’t put it in a fruit salad.",
    "Vegetables are filled with vitamins and nutrients that keep you healthy.",
    "You need to have at least 5 portions of fruit and veg a day. Everyday!",
    "It doesn’t matter how they are, fresh, frozen, or tinned, they’re all healthy and delicious!",
    "There are over 1000 types of vegetables that humans can eat. I don’t think we can name them all!",
    "Potatoes have been grown in space!",
    "Humans share 60% of our DNA with bananas.",
    "When cranberries are ripe, they bounce.",
    "Not all oranges are orange. If they are grown in cooler climates, they can be yellow, or even green.",
    "Figs have more calcium than milk.",
    "Durian fruit is so smelly it is banned in parts of Asia.",
    "Apples, pears, cherries, and plums are from the same plant family as roses.",
    "Strawberries are not really berries because they have their seeds on the outside.",
    "The largest of the dinosaurs were vegetarians!",
];

factsBtn.addEventListener('click', function () {
    const randomFacts = facts[Math.floor(Math.random() * facts.length)]
    btnOutput.innerHTML = randomFacts;
});