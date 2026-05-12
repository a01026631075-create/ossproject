let totalRounds = 0;
let currentRound = 1;
let maxRound = 0;
let availableQuestions = [];
let timeLeft = 7;
let countdown;
let score = 0; // 점수 저장

// 이미지와 정답 매칭 배열
const questions = [
    { img: "img/img1.jpg", answer: "사과" },
    { img: "img/img2.jpg", answer: "바나나" },
    { img: "img/img3.jpg", answer: "포도" },
    { img: "img/img4.jpg", answer: "딸기" },
    { img: "img/img5.jpg", answer: "오렌지" },
    { img: "img/img6.jpg", answer: "수박" },
    { img: "img/img7.jpg", answer: "복숭아" },
    { img: "img/img8.jpg", answer: "레몬" },
    { img: "img/img9.jpg", answer: "체리" },
    { img: "img/img10.jpg", answer: "키위" },
    { img: "img/img11.jpg", answer: "파인애플" },
    { img: "img/img12.jpg", answer: "망고" },
    { img: "img/img13.jpg", answer: "멜론" },
    { img: "img/img14.jpg", answer: "자두" },
    { img: "img/img15.jpg", answer: "블루베리" }
];

function startGame(count) {
    totalRounds = count;
    maxRound = count;
    currentRound = 1;
    score = 0;

    document.getElementById("round-info").textContent = "라운드: " + currentRound + "/" + totalRounds;
    availableQuestions = shuffle(questions).slice(0, maxRound);

    document.getElementById("setup").style.display = "none";
    document.getElementById("game-display").style.display = "block";

    loadQuestion();
    startTimer();
}

function startTimer() {
    const timerElement = document.getElementById('timer');
    if (countdown) clearInterval(countdown);

    timeLeft = 7;
    timerElement.textContent = `남은 시간: ${timeLeft}초`;
    timerElement.style.color = "black";
    timerElement.style.fontWeight = "normal";

    countdown = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `남은 시간: ${timeLeft}초`;

        if (timeLeft < 4) {
            timerElement.style.color = "red";
            timerElement.style.fontWeight = "bold";
        }

        if (timeLeft <= 0) {
            clearInterval(countdown);
            nextRound();
        }
    }, 1000);
}

function nextRound() {
    const roundElement = document.querySelector('#room-info span');
    const timerElement = document.getElementById('timer');

    if (currentRound < maxRound) {
        currentRound++;
        roundElement.textContent = `라운드: ${currentRound}/${maxRound}`;
        loadQuestion();
        startTimer();
    } else {
        endGame();
    }
}

function loadQuestion() {
    const questionArea = document.getElementById("question-area");
    const currentQuestion = availableQuestions[currentRound - 1];
    questionArea.innerHTML = `<img src="${currentQuestion.img}" alt="문제 이미지" style="max-width:100%; height:auto;">`;
}

function endGame() {
    document.getElementById("game-display").style.display = "none";
    document.getElementById("result-display").style.display = "block";

    document.getElementById("final-score").innerHTML = `
        전체 문제 수: ${maxRound}문제 <br>
        맞춘 점수: ${score}점
    `;
}


function shuffle(array) {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// 정답 제출 함수
function submitAnswer() {
    const userAnswer = document.getElementById("user-answer").value.trim();
    const feedbackElement = document.getElementById("feedback");

    if (userAnswer === "") {
        feedbackElement.textContent = "정답을 입력하세요!";
        feedbackElement.style.color = "orange";
        return;
    }

    const currentQuestion = availableQuestions[currentRound - 1];

    if (userAnswer === currentQuestion.answer) {
        score++;
        feedbackElement.textContent = "정답!";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "오답!";
        feedbackElement.style.color = "red";
    }

    document.getElementById("user-answer").value = "";
    clearInterval(countdown);

    setTimeout(() => {
        feedbackElement.textContent = "";
        nextRound();
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    const answerButton = document.getElementById("send-btn");
    const answerInput = document.getElementById("user-answer");

    // 버튼 클릭
    answerButton.addEventListener("click", submitAnswer);

    // 엔터 키 입력
    answerInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            submitAnswer();
        }
    });
});
