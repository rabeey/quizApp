 const question = document.getElementById('question');
 const choice = Array.from(document.getElementsByClassName('choice-text'))
 
 let currentQuestion = 0;
 let acceptingAnswers = false;
 let score = 0;
 let availableQuestions = [];
 let questionCounter = 0;

 let questions = [
	 
	 {
	   question: "Who is the first president of Nigeria?",
	   choice1: "Alh Sir Abubakar Tafawa Balewa.",
	   choice2: "General Yakubu Gowon",
	   choice3: "Alhaji Shehu Shagari",
	   choice4: "Dr Nnamdi Azikwe",
	   answer: 3
	},

	 {
	   question: "Who is the India's largest trading partner in Africa?",
	   choice1: "Mauritus",
	   choice2: "Morroco",
	   choice3: "South Africa",
	   choice4: "Nigeria",
	   answer: 4
	},

	 {
	   question: "Nigeria is a member of the following organizations except:",
	   choice1: 'African Union',
	   choice2: 'G-20',
	   choice3: 'G-19',
	   choice4: 'Interpol',
	   answer: 2
	},
	{
		question: "Adamawa state was named after the warrior ____ that conquered the region in the beginning of the 19th century.",
		choice1: 'Modibbo Adama Bin Ardo Hassan',
		choice2: 'Modibbo Adama Bin Usman',
		choice3: 'Modibbo Adama Ardo Hassan',
		choice4: 'Modibbo Adama',
		answer: 1
	 }
  ];

 //CONSTANTS
 
 const questionBonus = 10;
 const maxQuestions = 3;

 startGame = () => {

	 questionCounter = 0;
	 score = 0;
	 availableQuestions = [...questions];
	 getNewQuestions();
}

 getNewQuestions = () => {

	if(availableQuestions.length === 0 || questionCounter >= maxQuestions){
		window.location.assign('/end.html');
	}

	 questionCounter++;
	 const questionIndex = Math.floor(Math.random() * availableQuestions.length);
	 currentQuestion = availableQuestions[questionIndex];
	 question.innerText = currentQuestion.question;

	 choice.forEach(choice => {
		const number = choice.dataset['number'];
		choice.innerText = currentQuestion['choice' + number];

	 })

	 availableQuestions.splice(questionIndex, 1);
	 acceptingAnswers = true;
}

choice.forEach(choice => {
	choice.addEventListener('click', e =>{
		if(!acceptingAnswers) return;

		acceptingAnswers = false;
		const selectedChoice = e.target;
		const selectedAnswer = selectedChoice.dataset['number'];
		getNewQuestions();
	}
	)
})





startGame();
