'use strict'
let questions = [...initialQuestions];

// get DOM elements
const startButton = document.querySelector('.start-button');
const finishButton = document.querySelector('.finish-button');
const quizDescription = document.querySelector('.quiz-description');

const questionContent = document.querySelector('.question__content');
const answersButtons = document.querySelectorAll('.answers__button');
const answersWrapper = document.querySelector('.answers');
const results = document.querySelector('.results');
const planets = document.querySelectorAll('.planet');
const spaceship = document.querySelector('.spaceship');
const overlay = document.querySelector('.overlay');
const modals = document.querySelectorAll('.modal');
const modalCloseButtons = document.querySelectorAll('.modal__close-button');
const okButton = document.querySelector('.ok-button');

const randomQuestion = () => {
	if (questions.length === 0) {
		questions = [...initialQuestions];
	}
	const questionIndex = Math.floor(Math.random() * questions.length);
	const question = questions[questionIndex];
	questions.splice(questionIndex, 1);

	return question;
};

// initial parameters
let result = 0;
let activePlanetIndex = 0;
let activeQuestion;
let playerName;
let wrongAnswersNumber = 0;
let firstQuiz = true;

const startFirstQuiz = () => {
	quizDescription.classList.add('hidden');
	updateResults();
	results.classList.remove('hidden');
	restartAnimation(spaceship);
	spaceship.classList.add('run');
	activeQuestion = randomQuestion();
	setTimeout(createQuestion(), 2000); // dlaczego nie działa opóźnienie?
	startButton.classList.add('moved');
	finishButton.classList.remove('hidden');
}

const newQuiz = () => {
	questions = initialQuestions;
	hidePlanets();
	result = 0;
	wrongAnswersNumber = 0;
	updateResults();
	activePlanetIndex = 0;
	restartAnimation(spaceship);
	//spaceship.classList.add('run');
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

const resetQuiz = () => {
	quizDescription.classList.remove('hidden');
	questionContent.innerHTML = '';
	answersWrapper.classList.add('hidden');
	startButton.classList.remove('moved');
	finishButton.classList.add('hidden');
	hidePlanets();
	activePlanetIndex = 0;
	firstQuiz = true;
	document.querySelector('.spaceship__numbers').innerHTML = 'SR05F4b-8';
	results.classList.add('hidden');
	document.querySelector('.player-name-input').value = "";
}

function checkAnswer() {
	const answer = this.innerText;
	if (answer === activeQuestion.goodAnswer) {
		result += 1;
		showPlanet();
		activePlanetIndex += 1;
	} else {
		wrongAnswer();
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

const wrongAnswer = () => {
	wrongAnswersNumber += 1;
	const line = document.querySelector('.wrong-answer-line');
	line.classList.add('run');
	setTimeout(() => {
		line.classList.remove('run');
	}, 200);
}

const showPlanet = () => {
	planets[activePlanetIndex].classList.add('visible');
};

const hidePlanets = () => {
    planets.forEach((planet) => {
		planet.classList.remove('visible');
    });
};

function restartAnimation(element) {
	element.style.animation = 'none';
	element.offsetHeight; /* trigger reflow */
	element.style.animation = null;
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

finishButton.addEventListener('click', resetQuiz);

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





