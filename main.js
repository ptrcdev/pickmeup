const jokes = [
    {
        "id": 1,
        "question": "What did one pirate say to the other when he beat him at chess?",
        "answer": "Checkmatey",
        "isSaved": false,
        "isUsed": false
    },
    {
        "id": 2,
        "question": "Why did I quit my job at the coffee shop the other day?",
        "answer": "It was just the same old grind over and over.",
        "isSaved": false,
        "isUsed": false
    },
    {
        "id": 3,
        "question": "Why should you never buy anything that has Velcro with it?",
        "answer": "It's a total rip-off.",
        "isSaved": false,
        "isUsed": false
    },
    {
        "id": 4,
        "question": "What is the most groundbreaking invention of all time?",
        "answer": "The shovel.",
        "isSaved": false,
        "isUsed": false
    },
    {
        "id": 5,
        "question": "Did you hear about the famous Italian chef that recently died?",
        "answer": "He pasta way.",
        "isSaved": false,
        "isUsed": false
    },
    {
        "id": 6,
        "question": "What kind of music do astronauts listen to?",
        "answer": "Neptunes.",
        "isSaved": false,
        "isUsed": false
    },
    {
        "id": 7,
        "question": "What do you call Santa’s little helpers?",
        "answer": "Subordinate clauses.",
        "isSaved": false,
        "isUsed": false
    },
    {
        "id": 8,
        "question": "What’s the difference between a hippo and a zippo?",
        "answer": "One is extremely big and heavy, and the other is a little lighter.",
        "isSaved": false,
        "isUsed": false
    },
    {
        "id": 9,
        "question": "Where did Captain Hook get his hook?",
        "answer": "From the second-hand store.",
        "isSaved": false,
        "isUsed": false
    },
    {
        "id": 10,
        "question": "Why did Shakespeare’s wife leave him?",
        "answer": "She got sick of all the drama.",
        "isSaved": false,
        "isUsed": false
    },
    {
        "id": 11,
        "question": "Why should you never write with a dull pencil?",
        "answer": "It's pointless.",
        "isSaved": false,
        "isUsed": false
    },
    {
        "id": 12,
        "question": "How do you get a job at the moisturizer factory?",
        "answer": "Apply daily.",
        "isSaved": false,
        "isUsed": false
    },
    {
        "id": 13,
        "question": "Why did the scarecrow win an award?",
        "answer": "Because he was outstanding in his field.",
        "isSaved": false,
        "isUsed": false
    },
    {
        "id": 14,
        "question": "Did you hear about the cheese factory that exploded in France?",
        "answer": "There was nothing left but de Brie.",
        "isSaved": false,
        "isUsed": false
    },
    {
        "id": 15,
        "question": "What do you get when you cross a snowman with a vampire?",
        "answer": "Frostbite",
        "isSaved": false,
        "isUsed": false
    }
]

let currJoke;

function saveJoke() {
    alert("coming soon!");
}

function randomizeJoke() {
    // Reset the view answer button.
    document.getElementById('see-answer').innerHTML = "Check the answer!";
    document.getElementById('see-answer').style['text-decoration'] = 'underline';
    document.getElementById('see-answer').style.color = "midnightblue";
    
    let len = jokes.length;
    let random = Math.floor(Math.random() * len);
    let joke = jokes[random];

    if (joke.isUsed) {
        randomizeJoke();
    } else {
        jokes[random].isUsed = true;
        // Display the joke
        const displayJokeElement = document.getElementById("joke");
        displayJokeElement.innerHTML = jokes[random].question ;
        currJoke = jokes[random];
    }
    
}

function showAnswer() {
    const answerPlaceholder = document.getElementById("see-answer");
    answerPlaceholder.innerHTML = currJoke.answer;
    answerPlaceholder.style["text-decoration"] = "none";
    answerPlaceholder.style.color = "black";
    currJoke = {};
}

randomizeJoke();