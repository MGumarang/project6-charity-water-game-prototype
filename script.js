// Use Arrays to store questions, answers, and discoveries
let completed = 0;
let score = 0;
const percent = (completed / 25) * 100;
const questions = {

    "Dorm Life": {
        100: {
            question: "which habit saves the most water in a dorm?",
            answers: [
                "Take shorter showers",
                "Leave the sink running",
                "Wash one shirt at a time",
                "Run the dishwasher half full"
            ],
            correct: 0,
            discovery: ""
        },

        200: {
            question: "How much can a 10-minute shower use?",
            answers: [
                "About 2 gallons",
                "About 10 gallons",
                "About 25 gallons",
                "About 50 gallons"
            ],
            correct: 3,
            discovery: "Showerhead flow rates may vary, but continuous streams of water will accumulate into a large waste in water. Practicing shorter showers not only saves time; It saves water."
        },

        300: {
            question: "Leaving the faucet running while brushing your teeth can waste approximately:",
            answers: [
                "1 gallons",
                "4 gallons",
                "10 gallons",
                "20 gallons"
            ],
            correct: 1,
            discovery: ""
        },

        400: {
            question: "You notice someone washing dishes with the water constantly running. Which suggestion would help save water?",
            answers: [
                "Use hotter water",
                "Wash each dish individually",
                "Fill the sink or a basin instead of letting the tap run",
                "Rinse dishes twice"
            ],
            correct: 2,
            discovery: ""
        },

        500: {
            question: "You are leaving the dorms for a four-day weekend. Which action will help prevent the greatest amount of unneccessary water waste while you're away?",
            answers: [
                "Carry a reusable water bottle instead of disposable bottles",
                "Unplug unneccessary appliances",
                "Double-check that faucets are fully turned off, and report any leakes before leaving",
                "Store every leftover food before leaving"
            ],
            correct: 2,
            discovery: "Even if a faucet is only dripping water, the amount of water wasted would amount to gallons if left to drip for a long time. Preventing dripping or leaking water can save far more water than you might expect.\nAround the world, millions of people still spend hours each day collecting water for essential household tasks. Small conservation habits can help us better appreciate the value of clean, accesible water."
        },
    },

    "Technology": {
        100: {
            question: "Manufacturing which device requires large amounts of water?",
            answers: [
                "Smartphone",
                "Notebook",
                "Backpack",
                "Calculator"
            ],
            correct: 0,
            discovery: "Over three thousand gallons of water is used in the manufacturing of one smartphone. Moreover, most electronics are manufactured in regions struggling to access clean water./n Knowing the uses of water in technology is one step closer to becoming knowledgeable in water usage and accessibility."
        },

        200: {
            question: "Why is water used during electronics manufacturing?",
            answers: [
                "To cool equipment",
                "To clean semiconductor wafers",
                "Both A and B",
                "It is not used"
            ],
            correct: 2,
            discovery: ""
        },

        300: {
            question: "What is one benefit of a low-flow showerhead?",
            answers: [
                "It increases water pressure by using more water",
                "It reduces water use while maintaining comfortable water pressure",
                "It only works with cold water",
                "It fills bathtub faster"
            ],
            correct: 1,
            discovery: ""
        },

        400: {
            question: "Why do campuses install motion-sensor faucets?",
            answers: [
                "To make the sinks look modern",
                "To increase water pressure",
                "To make students wash longer",
                "To reduce unnecessary water use"
            ],
            correct: 3,
            discovery: ""
        },

        500: {
            question: "You are buying a reusable water bottle for the semester. Which feature is most helpful for reducing waste throughout the year?",
            answers: [
                "A bright color",
                "A larger logo",
                "A durable bottle that can be used daily and easily refillable on campus",
                "A disposable filter straw"
            ],
            correct: 2,
            discovery: ""
        },
    },

    "Entertainment": {
        100: {
            question: "Watching a movie on your laptop directly uses:",
            answers: [
                "100+ gallons",
                "No household water",
                "50 gallons",
                "10 gallons"
            ],
            correct: 1,
            discovery: "Your laptop may not be consuming water, but data centers and electricity production indirectly impacts water consumption."
        },

        200: {
            question: "Large sport stadiums use water for",
            answers: [
                "Bathrooms",
                "Food preparation",
                "Field maintenance",
                "All of the above"
            ],
            correct: 3,
            discovery: ""
        },

        300: {
            question: "You order a new T-shirt featuring your favorite character, and you promise to yourself to wear the shirt for years. How is clothing connected to water conservation?",
            answers: [
                "Clothing does not use water to make",
                "Water is only used to dye the fabric",
                "Making clothing, especially cotton shirts, require large amounts of water",
                "Shipping clothes uses water"
            ],
            correct: 2,
            discovery: ""
        },

        400: {
            question: "You are deciding how to spend your Friday night. Which activity generally has the smallest direct water footprint",
            answers: [
                "Filling a pool to relax outside",
                "Cooking a meal for yourself",
                "Watching a movie or playing a video game at home",
                "Having a backyard balloon fight"
            ],
            correct: 2,
            discovery: ""
        },

        500: {
            question: "You are buying snacks to eat for a long movie marathon. Which snack is generally the most water-intensive to produce?",
            answers: [
                "Popcorn",
                "Seasoned chips",
                "Mixed nuts",
                "Beef jerky"
            ],
            correct: 3,
            discovery: "While nuts such as almonds can be water-intensive, beef consistently has a very high water footprint among common foods. This is because cattle require gallons of water to maintain, whether for food or processing."
        },
    },

    "Food": {
        100: {
            question: "Which drink usually has the smallest water footprint?",
            answers: [
                "Milk",
                "Bottled juice",
                "Tap water",
                "Soda"
            ],
            correct: 2,
            discovery: ""
        },

        200: {
            question: "You accidentally buy more food than you can eat. Why is saving/storing food better for water conservation?",
            answers: [
                "It keeps the dining hall cleaner",
                "Producing food requires a lot of water, so wasting food also wastes water",
                "It uses less electricity",
                "It helps your meal cool faster"
            ],
            correct: 1,
            discovery: ""
        },

        300: {
            question: "When rinsing fruit, which method uses the least water.",
            answers: [
                "Leave the faucet running",
                "Soak the fruit for ten minutes",
                "Wash it twice",
                "Cleanly rinse the fruit under running water before turning the faucet off as soon as possible"
            ],
            correct: 3,
            discovery: ""
        },

        400: {
            question: "Approximately how many gallons of water are needed to produce one hamburger?",
            answers: [
                "50 gallons",
                "150 gallons",
                "400 gallons",
                "Over 600 gallons"
            ],
            correct: 3,
            discovery: ""
        },

        500: {
            question: "Which meal is generally associated with the larger water footprint?",
            answers: [
                "Vegetable stir-fry with rice",
                "Bean burrito",
                "Pasta with tomato sauce",
                "Cheeseburger with a beef patty"
            ],
            correct: 3,
            discovery: "Every food listed above uses a lot of water to produce, but cheeseburgers use water the most.\nLearning how water is used in the creation of foods helps people recognize their own water footprint, and how much water they are indirectly using up."
        },
    },

    "The World": {
        100: {
            question: "Approximately how many people worldwide lack safely managed drinking water?",
            answers: [
                "Around 50 million",
                "Around 30 million",
                "Around 700 million",
                "None. Everyone has drinkable water"
            ],
            correct: 2,
            discovery: ""
        },

        200: {
            question: "What major benefit comes with easy access to clean water?",
            answers: [
                "Improved health",
                "More time for school",
                "Better economic opportunities",
                "All of the above"
            ],
            correct: 3,
            discovery: ""
        },

        300: {
            question: "How far do some people travel every day to collect water?",
            answers: [
                "A few feet",
                "Up to several miles",
                "Around the block",
                "About two blocks"
            ],
            correct: 1,
            discovery: "There are people that have to walk miles from their homes to the nearest source of water. Even then, the water may not be clean.\nThis is one of many reasons why charity: water strives to provide accessible clean water. It is why being knowledgeable in water accesibility is so important."
        },

        400: {
            question: "Who is most often responsible for collecting water in many communities?",
            answers: [
                "Children and women",
                "Teachers",
                "Doctors",
                "Government workers"
            ],
            correct: 0,
            discovery: ""
        },

        500: {
            question: "What is charity: water's primary mission?",
            answers: [
                "Bring clean and safe drinking water to communities",
                "Bringing awareness to water usage and accessibility",
                "Sell reusable bottles",
                "Protect oceans"
            ],
            correct: 0,
            discovery: ""
        },
    }

}

// Detects which button was clicked
const buttons = document.querySelectorAll(".question-button");
buttons.forEach(button => {
    button.addEventListener ("click", () => {
        openQuestion(button);
    });
});

// Provides function for the "Back" button
const backButton = document.querySelector("#question-screen .back");
if (backButton) {
    backButton.addEventListener("click", finishQuestion);
}

// Changes from Board to Question
function openQuestion(button){
    const category = button.dataset.category;
    const value = button.dataset.value;
    const currentQuestion = questions[category][value];

    const gameBoard = document.getElementById("game-board");
    const questionScreen = document.getElementById("question-screen");

    if (gameBoard && questionScreen) {
        console.log("openQuestion", { category, value, question: currentQuestion.question });
        gameBoard.classList.add("hidden");
        gameBoard.style.display = "none";
        questionScreen.classList.remove("hidden");
        questionScreen.style.display = "block";
    }

    document.getElementById("question-title").textContent = `${category} (${value})`;
    document.getElementById("question-text").textContent = currentQuestion.question;

    const answerButtons = document.querySelectorAll("#answers .answer");
    currentQuestion.answers.forEach((answer, index) => {
        answerButtons[index].textContent = answer;
        answerButtons[index].dataset.index = index;
    });

    answerButtons.forEach((button, index) => {
        button.onclick = () => {
            console.log("answer clicked", { index, answer: currentQuestion.answers[index], correctIndex: currentQuestion.correct });
            if (index === currentQuestion.correct) {
                score += Number(value);
                completed ++;
                console.log("correct answer", { score, completed });
            } else {
                console.log("incorrect answer", { score, completed });
            }
        };
    });
}

// When the "Back" button is pressed
function finishQuestion(){
    const gameBoard = document.getElementById("game-board");
    const questionScreen = document.getElementById("question-screen");

    if (gameBoard && questionScreen) {
        questionScreen.classList.add("hidden");
        questionScreen.style.display = "";
        gameBoard.classList.remove("hidden");
        gameBoard.style.display = "";
    }

    if(completed === 25){
        gameBoard.classList.add("hidden");
        questionScreen.classList.add("hidden");
        victoryScreen.classList.remove("hidden");
    }
}

const progressBarFill = document.getElementById("progressBarFill");
progressBarFill.style.width = percent + "%";