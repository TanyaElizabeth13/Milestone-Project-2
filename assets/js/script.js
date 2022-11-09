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

cardGenerate();