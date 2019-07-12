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
const questionElement = document.getElementById('question');
const startButton = document.querySelector('.start-button');
const planets = document.querySelectorAll('.planet');

// initial parameters
// let showQuestion = false;
let result = 0;
let activePlanetIndex = 0;


const newQuiz = () => {
    hidePlanets();
    result = 0;
    // showQuestion = true;
    setNewQuestion();
};

const finishQuiz = () => {
    console.log('quiz over!');
    // showQuestion = false;
}

const randomQuestion = () => {
    const questionIndex = Math.floor(Math.random() * questions.length);
    const question = questions[questionIndex];
    return question;
};

const checkAnswer = (question, answer) => {
	if (answer === question.goodAnswer) {
		console.log("good!");
		result += 1;
		showPlanet();
		activePlanetIndex += 1;
	} else {
		console.log("uuups!");
	}
	document.querySelector('.question__wrapper').remove();
	setNewQuestion();
};

const setNewQuestion = () => {
	if (result < 8) {
		const question = randomQuestion();
		createQuestion(question);
	} else finishQuiz();
}

const createQuestion = (question) => {
    // if (showQuestion) {

            // create wrapping div
            const questionWrapper = document.createElement('div');
            questionWrapper.classList.add("question__wrapper");
            questionElement.appendChild(questionWrapper);

            // create <p> element with question content
            const questionContent = document.createElement('p');
            questionContent.classList.add("question__content");
            questionContent.innerHTML = question.content;
            questionWrapper.appendChild(questionContent);

            // create wrapping div for answers
            const answersWrapper = document.createElement('div');
            answersWrapper.classList.add("answers");
            questionWrapper.appendChild(answersWrapper);

            // create buttons for answers
            const answers = question.answers;
            answers.forEach((answer) => {
                const answerButton = document.createElement('div');
                answerButton.classList.add("answer__button");
                answerButton.innerHTML = answer;
                answersWrapper.appendChild(answerButton);

                answerButton.addEventListener('click', () => checkAnswer(question, answer));
                    // if (answer === question.goodAnswer) {
                    //     console.log("good!");
                    //     result += 1;
                    //     showPlanet();
                    //     activePlanetIndex += 1;
                    // } else {
                    //     console.log("uuups!");
                    // }
                    // questionWrapper.remove();
                    // if (result < 8) {
                    //     setNewQuestion();
                    // } else finishQuiz();
            });
    // }
};

const showPlanet = () => {
    planets[activePlanetIndex].classList.add('visible');
};

const hidePlanets = () => {
    planets.forEach((planet) => {
        planet.classList.remove('visible');
    });
};

startButton.addEventListener('click', newQuiz);




