// const questionsData = require('../data/data.json');
// import { questionsData } from '../data/data.json';

const questions = [
	{
		id: 1,
		content: "Jaka jest największa planeta w Układzie Słonecznym?",
		goodAnswer: "Jowisz",
		answers: ["Jowisz", "Merkury", "Ziemia"]
	},
	{
		id: 2,
		content: "Słońce jest: ",
		goodAnswer: "gwiazdą",
		answers: ["gwiazdą", "planetoidą", "planetą"]
	},
	{
		id: 3,
		content: "Która planeta ma największy wulkan?",
		goodAnswer: "Mars",
		answers: ["Mars", "Jowisz", "Ziemia"]
	},
	{
		id: 4,
		content: "Na której planecie panuje najwyższa temperatura?",
		goodAnswer: "na Wenus",
		answers: ["na Wenus", "na Saturnie", "na Merkurym"]
	},
	{
		id: 5,
		content: "Która planeta w Układzie Słonecznym jest najmniejsza?",
		goodAnswer: "Merkury",
		answers: ["Merkury", "Uran", "Mars"]
	},
	{
		id: 6,
		content: "Z ilu planet składa się Układ Słoneczny?",
		goodAnswer: "8",
		answers: ["8", "9", "10"]
	},
	{
		id: 7,
		content: "Pluton jest: ",
		goodAnswer: "planetą karłowatą",
		answers: ["planetą karłowatą", "planetą", "księżycem"]
	},
	{
		id: 8,
		content: "Ile księżyców ma Mars",
		goodAnswer: "2",
		answers: ["2", "4", "1"]
	},
	{
		id: 9,
		content: "Która planeta znajduje się najbliżej Słońca?",
		goodAnswer: "Merkury",
		answers: ["Merkury", "Wenus", "Ziemia"]
	},
	{
	    id: 10,
		content: "Która planeta obraca się w przeciwnym kierunku niż pozostałe?",
		goodAnswer: "Wenus",
		answers: ["Wenus", "Saturn", "Ziemia"]
	},
	{
		id: 11,
		content: "Deimos to księżyc:",
		goodAnswer: "Marsa",
		answers: ["Marsa", "Jowisza", "Urana"]
	},
	{
		id: 12,
		content: "Na której planecie znajduje się Wielka Czerwona Plama?",
		goodAnswer: "na Jowiszu",
		answers: ["na Jowiszu", "na Marsie", "na Neptunie"]
	}
];

// get DOM elements
const startButton = document.querySelector('.start-button');
const quizDescription = document.querySelector('.quiz-description');

const questionContent = document.querySelector('.question__content');
const answersButtons = document.querySelectorAll('.answers__button');
const answersWrapper = document.querySelector('.answers');

const planets = document.querySelectorAll('.planet');
const spaceship = document.querySelector('.spaceship');
const overlay = document.querySelector('.overlay');
const modals = document.querySelectorAll('.modal');
const modalCloseButtons = document.querySelectorAll('.modal__close-button');
const okButton = document.querySelector('.ok-button');

const randomQuestion = () => {
    const questionIndex = Math.floor(Math.random() * questions.length);
    const question = questions[questionIndex];
    return question;
};

// initial parameters
let result = 0;
let activePlanetIndex = 0;
let activeQuestion = randomQuestion();
let playerName;
let wrongAnswersNumber = 0;
let firstQuiz = true;

const startFirstQuiz = () => {
	quizDescription.classList.add('hidden');
	updateResults();
	document.querySelector('.results').classList.remove('hidden');
	restartSpaceship();
	spaceship.classList.add('run');
	setTimeout(createQuestion(), 2000); // dlaczego nie działa opóźnienie?
	startButton.classList.add('moved');
}

const newQuiz = () => {
	hidePlanets();
	result = 0;
	wrongAnswersNumber = 0;
	updateResults();
	activePlanetIndex = 0;
	restartSpaceship();
	spaceship.classList.add('run');
	activeQuestion = randomQuestion();
	setTimeout(createQuestion(), 2000); // dlaczego nie działa opóźnienie?
	startButton.classList.add('moved');
};


const finishQuiz = () => {
	questionContent.innerHTML = '';
	answersWrapper.classList.add('hidden');
	startButton.classList.remove('moved');
	setTimeout(() => showModal('final'), 1000);
}

const checkAnswer = (e) => {
	const answer = e.target.innerText;
	if (answer === activeQuestion.goodAnswer) {
		result += 1;
		showPlanet();
		activePlanetIndex += 1;
	} else {
		console.log("uuups!");
		wrongAnswersNumber += 1;
	}
	updateResults();
	activeQuestion = randomQuestion();
	setNewQuestion();
};

const setNewQuestion = () => {
	if (result < 8) {
		setTimeout(() => createQuestion(), 500);
	} else finishQuiz();
}

const createQuestion = () => {
	questionContent.innerHTML = activeQuestion.content;
	const answers = activeQuestion.answers;
	answersWrapper.classList.remove('hidden');

	for (let i = 0; i < answers.length; i++) {
		const button = answersButtons[i];
		const answer = answers[i];
		button.innerHTML = answer;
		button.addEventListener('click', checkAnswer);
	};
};

const updateResults = () => {
	document.querySelector('.correct-answers-number span').innerHTML = result;
	document.querySelector('.wrong-answers-number span').innerHTML = wrongAnswersNumber;
}

const showPlanet = () => {
    planets[activePlanetIndex].classList.add('visible');
};

const hidePlanets = () => {
    planets.forEach((planet) => {
        planet.classList.remove('visible');
    });
};

function restartSpaceship() {
	spaceship.style.animation = 'none';
	spaceship.offsetHeight; /* trigger reflow */
	spaceship.style.animation = null;
}

const setPlayerName = () => {
	playerName = document.querySelector('.player-name-input').value.trim();
	if (playerName.length > 10) {
		playerName = playerName.slice(0, 10);
	}
	document.querySelector('.spaceship__numbers').innerHTML = playerName;
	document.querySelector('.player-name-output').innerHTML = playerName;
}

const showModal = (modal) => {
	overlay.classList.remove('hidden');
	document.getElementById(modal).classList.remove('hidden');
}
const closeModals = () => {
	overlay.classList.add('hidden');
	modals.forEach((modal) => {
		modal.classList.add('hidden');
	});
}

startButton.addEventListener('click', () => {
	if (firstQuiz) {
		firstQuiz = false;
		showModal('player-name');
	} else newQuiz();
});

// closing modals
modalCloseButtons.forEach((button) => {
	button.addEventListener('click', closeModals);
});
overlay.addEventListener('click', function(e) {
	if (e.target === this) {
		closeModals();
	}
});

okButton.addEventListener('click', () => {
	setPlayerName();
	closeModals();
	startFirstQuiz();
})





