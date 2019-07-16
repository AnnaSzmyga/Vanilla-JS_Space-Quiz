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
const modal = document.querySelector('.overlay');
const modalCloseButton = document.querySelector('.modal__close-button');
const spaceship = document.querySelector('.spaceship');

const randomQuestion = () => {
    const questionIndex = Math.floor(Math.random() * questions.length);
    const question = questions[questionIndex];
    return question;
};

// initial parameters
let result = 0;
let activePlanetIndex = 0;
let activeQuestion = randomQuestion();


const newQuiz = () => {
	quizDescription.classList.add('hidden');
	hidePlanets();
	result = 0;
	activePlanetIndex = 0;
	restartSpaceship();
	spaceship.classList.add('run');
	setNewQuestion();
	startButton.classList.add('moved');
};


const finishQuiz = () => {
	console.log('quiz over!');
	questionContent.innerHTML = '';
	answersWrapper.classList.add('hidden');
	startButton.classList.remove('moved');
	setTimeout(() => showModal(), 1000);
}

const checkAnswer = (e) => {
	const answer = e.target.innerText;
	if (answer === activeQuestion.goodAnswer) {
		console.log("good!");
		result += 1;
		showPlanet();
		activePlanetIndex += 1;
	} else {
		console.log("uuups!");
	}
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

const showModal = () => {
	modal.classList.remove('hidden');
}
const closeModal = () => {
	modal.classList.add('hidden');
}

startButton.addEventListener('click', newQuiz);

// closing modal
modalCloseButton.addEventListener('click', closeModal);
modal.addEventListener('click', function(e) {
	if (e.target === this) {
		closeModal();
	}
});





