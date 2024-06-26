 /* jshint esversion: 11 */

 // Makes sure the game starts, once the game.html website is fully loaded 
 document.addEventListener("DOMContentLoaded", function () {

    // Random question gets created and first question + answers gets loaded
        randomQuestions(questions);
        let questionsAsked = 0;
        startGame(questionsAsked);
    
    // Start timer for game, which calls the end game function when time is over
        setTimeout(function() {
            endQuiz();
        }, 100000);

    // starts countdown for time remaining shown whilst playing and for calculation of score   
        setInterval(updateTime, 1000);
    
    // Logic that listens for a click on one of the answers and then progresses with the next one
        document.querySelector('.answer').addEventListener('click', function (event) {
            let answerId = event.target.id;
            let isCorrect = checkAnswer(answerId, questionsAsked);
    
            if (isCorrect) {
                ++questionsAsked;
                updateCorrectAnswers();
                startGame(questionsAsked);
            } else {
                ++questionsAsked;
                startGame(questionsAsked);
            }
        });
    });
    
    /**
     * The function starts each round of the game, until the maximum of 10 games is
     * reached. Then it will summon the endQuiz() function to end the game.
     */
    function startGame(questionsAsked) {
        if (questionsAsked < 10) {
            updateQuiz(questions[questionsAsked]);
            updateQuestionsAsked(questionsAsked);
        } else {
            endQuiz();
        }
    }
    
    /**
     * When called, the function updates the game with a new question and new answers
     * out of the questions array
     */
    function updateQuiz(question) {
        document.getElementById('question').textContent = question.question;
        document.getElementById('answer1').textContent = question.answer1[0];
        document.getElementById('answer2').textContent = question.answer2[0];
        document.getElementById('answer3').textContent = question.answer3[0];
        document.getElementById('answer4').textContent = question.answer4[0];
    }
    
    /**
     * When called, the function creates a radom array using the Fisher Yates Method
     */
    function randomQuestions(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let random = Math.floor(Math.random() * (i + 1));
            let safe = array[i];
            array[i] = array[random];
            array[random] = safe;
        }
    }
    
    /**
     * Check if the answer is correct and give out a value of true or false
     */
    function checkAnswer(answerId, questionsAsked) {
        let selectedAnswer;
        if (answerId === 'answer1') {
            selectedAnswer = questions[questionsAsked].answer1;
        } else if (answerId === 'answer2') {
            selectedAnswer = questions[questionsAsked].answer2;
        } else if (answerId === 'answer3') {
            selectedAnswer = questions[questionsAsked].answer3;
        } else if (answerId === 'answer4') {
            selectedAnswer = questions[questionsAsked].answer4;
        }
        let isCorrect = selectedAnswer[1];
        return isCorrect;
    }
    
    // Gets called when answer is correct, to update the correct answers by 1
    function updateCorrectAnswers() {
        let correctAnswer = document.getElementById('correct-answers');
        if (correctAnswer) {
        let oldScore = parseInt(correctAnswer.innerHTML);
        let newScore = oldScore + 1;
        correctAnswer.innerHTML = newScore;
        }
    }

    /** 
     *Gets called every second to update the time used by 1 
     */
    function updateTime() {
        let timeRemaining = document.getElementById('time-remaining');
        if (timeRemaining) {
        let oldTime = parseInt(timeRemaining.innerHTML);
        let newTime = oldTime - 1;
        timeRemaining.innerHTML = newTime;
        }
    }
    
    /**
     * Updates the number of questions asked with each round
     */
    function updateQuestionsAsked(questionsAsked) {
        document.getElementById('question-asked').innerHTML = questionsAsked + 1;
    }

    /**
     * Calculate the endscore out of the time used and the number of correct answers
     */
    function calculateScore() {
        let correctAnswers = document.getElementById('correct-answers'); 
        let timeRemaining = document.getElementById('time-remaining');
        
        if (correctAnswers && timeRemaining) {
        let score = parseInt(correctAnswers.innerHTML) * 100 + parseInt(timeRemaining.innerHTML) * 10;

        return score;
        }
    }
    
    /**
     * The function gets called to show the endscreen of the quiz
     */
    function endQuiz() {
        let finalScore = calculateScore();
        document.getElementById('endscreen').innerHTML = `
        <div class="playfield last-screen">
            <div class="text-field"><strong>Your score:</strong> ${finalScore}</div>
            <button onclick="location.href='game.html';"  aria-label="click on the button to
            start a new game">
                Start a new Game
            </button>
            <button onclick="location.href='index.html';" aria-label="click on the button and go back
            to the rules">
                Go to the Rules
            </button>
        </div>`;
    }


// Array of questions for the quiz
const questions = [
    {
        question: 'Who wrote the novel "1984"?',
        answer1: ['George Orwell', true],
        answer2: ['J.K. Rowling', false],
        answer3: ['F. Scott Fitzgerald', false],
        answer4: ['Ernest Hemingway', false],
    },
    {
        question: 'What is the capital city of Australia?',
        answer1: ['Sydney', false],
        answer2: ['Melbourne', false],
        answer3: ['Canberra', true],
        answer4: ['Brisbane', false],
    },
    {
        question: 'What is the chemical symbol for Gold?',
        answer1: ['Gd', false],
        answer2: ['Go', false],
        answer3: ['Ag', false],
        answer4: ['Au', true],
    },
    {
        question: 'In what year was the first iPhone released?',
        answer1: ['2005', false],
        answer2: ['2007', true],
        answer3: ['2008', false],
        answer4: ['2010', false],
    },
    {
        question: 'What is the tallest mountain in the world?',
        answer1: ['K2', false],
        answer2: ['Mount Everest', true],
        answer3: ['Mount Kilimanjaro', false],
        answer4: ['Denali', false],
    },
    {
        question: 'Who painted the "Mona Lisa"?',
        answer1: ['Leonardo da Vinci ', true],
        answer2: ['Michelangelo', false],
        answer3: ['Raphael', false],
        answer4: ['Caravaggio', false],
    },
    {
        question: 'Which planet is known as the "Red Planet"?',
        answer1: ['Venus', false],
        answer2: ['Mars', true],
        answer3: ['Jupiter', false],
        answer4: ['Saturn', false],
    },
    {
        question: "What is the world's largest ocean?",
        answer1: ['Atlantic Ocean', false],
        answer2: ['Indian Ocean', false],
        answer3: ['Pacific Ocean', true],
        answer4: ['Southern Ocean', false],
    },
    {
        question: 'Who came up with the theory of relativity?',
        answer1: ['Edgar Allan Poe', false],
        answer2: ['Albert Einstein', true],
        answer3: ['Galileo Galilei', false],
        answer4: ['Louis Pasteur', false],
    },
    {
        question: 'What is the national bird of the United States?',
        answer1: ['Eagle', true],
        answer2: ['Bald Eagle', false],
        answer3: ['Condor', false],
        answer4: ['Pigeon', false],
    },
    {
        question: 'What language is spoken in Brazil?',
        answer1: ['Spanish', false],
        answer2: ['Portuguese', true],
        answer3: ['English', false],
        answer4: ['French', false],
    },
    {
        question: 'Who directed the movie "Jurassic Park"?',
        answer1: ['Steven Spielberg', true],
        answer2: ['George Lucas', false],
        answer3: ['Michael Bay', false],
        answer4: ['Stanley Kubrick', false],
    },
    {
        question: 'What is sushi traditionally wrapped in?',
        answer1: ['Rice Paper', false],
        answer2: ['Seaweed', true],
        answer3: ['Bamboo', false],
        answer4: ['Lettuce', false],
    },
    {
        question: 'What is the main ingredient in hummus?',
        answer1: ['Potatoes', false],
        answer2: ['Lentils', false],
        answer3: ['Chickpeas', true],
        answer4: ['White Beans', false],
    },
    {
        question: 'Who is the author of the "Harry Potter" series?',
        answer1: ['J.D. Salinger', false],
        answer2: ['Roald Dahl', false],
        answer3: ['Suzanne Collins', false],
        answer4: ['J.K. Rowling', true],
    },
    {
        question: 'How many players are there in a soccer team?',
        answer1: ['6', false],
        answer2: ['11', true],
        answer3: ['9', false],
        answer4: ['4', false],
    },
    {
        question: 'What does a barometer measure?',
        answer1: ['Sound', false],
        answer2: ['Light', false],
        answer3: ['Atmospheric Pressure', true],
        answer4: ['Humidity', false],
    },
    {
        question: 'What is the highest-grossing film of all time?',
        answer1: ['Titanic', false],
        answer2: ['Avatar', false],
        answer3: ['Avengers: Endgame', true],
        answer4: ['Star Wars: The Force Awakens', false],
    },
    {
        question: 'In what decade was the Internet created?',
        answer1: ['1960s', true],
        answer2: ['1970s', false],
        answer3: ['1980s', false],
        answer4: ['1990s', false],
    },
    {
        question: 'How many teeth does an adult human have?',
        answer1: ['28', false],
        answer2: ['32', true],
        answer3: ['30', false],
        answer4: ['26', false],
    },
    {
        question: 'What is the hottest planet in the solar system?',
        answer1: ['Mercury', false],
        answer2: ['Mars', false],
        answer3: ['Venus', true],
        answer4: ['Jupiter', false],
    },
    {
        question: 'Who composed the music for "The Nutcracker"?',
        answer1: ['Mozart', false],
        answer2: ['Beethoven', false],
        answer3: ['Tchaikovsky', true],
        answer4: ['Bach', false],
    },
    {
        question: 'What does NASA stand for?',
        answer1: ['North American Satellite Association', false],
        answer2: ['National Aeronautics and Space Administration ', true],
        answer3: ['National Association of Space Astronauts', false],
        answer4: ['National American Space Association', false],
    },
    {
        question: 'In what year was the United Nations founded?',
        answer1: ['1920', false],
        answer2: ['1945', true],
        answer3: ['1950', false],
        answer4: ['1935', false],
    },
    {
        question: 'What is the strongest muscle in the human body?',
        answer1: ['Biceps', false],
        answer2: ['Quadriceps', false],
        answer3: ['Heart', false],
        answer4: ['Jaw Muscle (Masseter)', true],
    },
    {
        question: 'Who wrote the novel "Pride and Prejudice"?',
        answer1: ['Charlotte Bronte', false],
        answer2: ['Mary Shelley', false],
        answer3: ['Jane Austen', true],
        answer4: ['Emily Dickinson', false],
    },
    {
        question: 'How many bones are there in the adult human body?',
        answer1: ['256', false],
        answer2: ['206', true],
        answer3: ['216', false],
        answer4: ['232', false],
    },
    {
        question: 'What is the loudest animal on Earth?',
        answer1: ['Lion', false],
        answer2: ['Elephant', false],
        answer3: ['Blue Whale', false],
        answer4: ['Sperm Whale ', true],
    },
    {
        question: 'What is the smallest country in the world?',
        answer1: ['Monaco', false],
        answer2: ['Vatican City ', true],
        answer3: ['Malta', false],
        answer4: ['San Marino', false],
    },
    {
        question: 'Who discovered penicillin?',
        answer1: ['Isaac Newton', false],
        answer2: ['Thomas Edison', false],
        answer3: ['Marie Curie', false],
        answer4: ['Alexander Fleming', true],
    },
];

