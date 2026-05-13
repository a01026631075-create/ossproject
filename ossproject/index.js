let totalRounds = 0;
let currentRound = 1;
let maxRound = 0;
let availableQuestions = [];
let timeLeft = 7;
let countdown;
let score = 0; // 점수 저장

// 이미지와 정답 매칭 배열
const questions = [
    // 콘솔게임
    { img: "img/img1.jpg", answer: "마리오" },
    { img: "img/img2.jpg", answer: "젤다의전설"},
    { img: "img/img3.jpg", answer: "메트로이드" },
    { img: "img/img4.jpg", answer: ["스플래툰", "스플레툰"]},
    { img: "img/img5.jpg", answer: "별의커비"},
    { img: "img/img6.jpg", answer: ["포켓몬", "포캣몬"]},
    { img: "img/img7.jpg", answer: ["스매시브라더스","스메시브라더스"] },
    { img: "img/img8.jpg", answer: "피그민" },
    { img: "img/img9.jpg", answer: "동물의숲"},
    { img: "img/img10.jpg", answer: "동키콩" },
    { img: "img/img11.jpg", answer: "레이튼교수" },
    { img: "img/img12.jpg", answer: "요괴워치"},
    { img: "img/img13.jpg", answer: "드래곤퀘스트"},
    { img: "img/img14.jpg", answer: ["파이널판타지", "파판"]},
    { img: "img/img15.jpg", answer: ["스파이더맨게임", "스파이더맨"]},
    { img: "img/img16.jpg", answer: "아스트로봇" },

    // PC게임
    { img: "img/img17.jpg", answer: ["리그오브레전드","리그오브래전드","롤","LOL","lol"]},
    { img: "img/img18.jpg", answer: ["배틀그라운드","배그", "베틀그라운드"] },
    { img: "img/img19.jpg", answer: ["발로란트","발로란트"] },
    { img: "img/img20.jpg", answer: ["메이플스토리","메이플"]},
    { img: "img/img21.jpg", answer: ["던전엔파이터","던파"] },
    { img: "img/img22.jpg", answer: ["서든어택","서든"] },
    { img: "img/img23.jpg", answer: ["레포(R.E.P.O.)","레포"] },
    { img: "img/img24.jpg", answer: ["로스트아크","로아"] },
    { img: "img/img25.jpg", answer: ["피파","피파온라인"] },
    { img: "img/img26.jpg", answer: ["GTA","GTA5"] },
    { img: "img/img27.jpg", answer: "엘든링"},
    { img: "img/img28.jpg", answer: "마인크래프트"},
    { img: "img/img29.jpg", answer: "스타크래프트"},
    { img: "img/img30.jpg", answer: "팰월드"},
    { img: "img/img31.jpg", answer: ["오버워치","옵치"] },
    { img: "img/img32.jpg", answer: "마비노기" },
    { img: "img/img33.jpg", answer: "카트라이더" },
    { img: "img/img34.jpg", answer: "로블록스" },


    // 모바일게임
    { img: "img/img35.jpg", answer: "모두의마블"},
    { img: "img/img36.jpg", answer: "애니팡" },
    { img: "img/img37.jpg", answer: "쿠키런" },
    { img: "img/img38.jpg", answer: ["포켓몬go","포켓몬고", "포캣몬고"] },
    { img: "img/img39.jpg", answer: "좀비고" },
    { img: "img/img40.jpg", answer: "무한의계단"},
    { img: "img/img41.jpg", answer: "바운스볼"},
    { img: "img/img42.jpg", answer: ["템플런","탬플런"] },
    { img: "img/img43.jpg", answer: "서브웨이서퍼"},
    { img: "img/img44.jpg", answer: "앵그리버드"},
    { img: "img/img45.jpg", answer: "포우"},
    { img: "img/img46.jpg", answer: ["슈퍼팽귄","슈퍼펭귄"] },
    { img: "img/img47.jpg", answer: "마피아42" },
    { img: "img/img48.jpg", answer: "윈드러너"},
    { img: "img/img49.jpg", answer: "캔디크러쉬사가"},
    { img: "img/img50.jpg", answer: "클래시로얄"}
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
        맞춘 갯수: ${score}개
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

    // 여러 정답 중 하나라도 맞으면 정답 처리
    if (currentQuestion.answer.includes(userAnswer)) {
        score++;
        feedbackElement.textContent = "정답!";
        feedbackElement.style.color = "green";
    } else {
        // answer가 배열일 수도 있으니 첫 번째 값을 대표로 사용
    const correctName = Array.isArray(currentQuestion.answer) 
        ? currentQuestion.answer[0] 
        : currentQuestion.answer;

    // 부모 요소 색상 초기화
    feedbackElement.style.color = "black";

    // 오답!만 빨간색
    feedbackElement.innerHTML = `<span style="color:red;">오답!</span> - ${correctName}`;
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
