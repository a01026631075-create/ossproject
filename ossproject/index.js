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
    { img: "img/img1.jpg", answer: ["마리오", "슈퍼마리오"]},
    { img: "img/img2.jpg", answer: ["젤다의전설","젤다"]},
    { img: "img/img3.jpg", answer: ["메트로이드", "메트로이드"] },
    { img: "img/img4.jpg", answer: ["스플래툰", "스플레툰"]},
    { img: "img/img5.jpg", answer: ["별의커비","커비"] },
    { img: "img/img6.jpg", answer: ["포켓몬", "포캣몬", "포켓몬스터", "포캣몬스터"]},
    { img: "img/img7.jpg", answer: ["스매시브라더스","스메시브라더스"] },
    { img: "img/img8.jpg", answer: "피그민" },
    { img: "img/img9.webp", answer: ["동물의숲","동숲"]},
    { img: "img/img10.jpg", answer: "동키콩" },
    { img: "img/img11.jpg", answer: ["레이튼교수와이상한마을", "레이튼교수"]},
    { img: "img/img12.jpg", answer: "요괴워치"},
    { img: "img/img13.webp", answer: "드래곤퀘스트"},
    { img: "img/img14.jpg", answer: ["파이널판타지", "파판"]},
    { img: "img/img15.jpg", answer: ["스파이더맨게임", "스파이더맨"]},
    { img: "img/img16.jpg", answer: "아스트로봇" },

    // PC게임
    { img: "https://i.ytimg.com/vi/SBML9dmJkxE/maxresdefault.jpg", answer: ["리그오브레전드","리그오브래전드","롤","LOL","lol"]},
    { img: "https://www.krafton.com/wp-content/uploads/2021/06/battle-bg1-min.png", answer: ["배틀그라운드","배그", "베틀그라운드"] },
    { img: "https://image.xportsnews.com/contents/images/upload/article/2020/0707/1594108790522089.jpg", answer: ["발로란트","발로란트","발로"] },
    { img: "img/img20.jpg", answer: ["메이플스토리","메이플","메"]},
    { img: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202211/18/bde34890-427b-4fcd-b938-a692b2198dc4.jpg", answer: ["던전엔파이터","던파"] },
    { img: "img/img22.jpg", answer: ["서든어택","서든"] },
    { img: "https://cdn.gamemeca.com/gmdata/0001/758/836/gm791625_123167899.jpg", answer: ["레포(R.E.P.O.)","레포"] },
    { img: "img/img24.jpg", answer: ["로스트아크","로아"] },
    { img: "https://media.bunjang.co.kr/product/86357598_1_1530373942_w360.jpg", answer: ["피파","피파온라인", "fc온라인"] },
    { img: "https://images.ctfassets.net/h1rqp7q66d54/3yVDlCOrJnXMrb0yS4ea0y/d93ed97030eb7c233384e5a551aeaea7/GTAV_Gen9_MFT_Webstore_Hero_3840x2160_DELIV_opt__1_.jpg", answer: ["GTA","GTA5", "GTA3", "그타", "지티에이"] },
    { img: "https://www.videogameschronicle.com/files/2022/02/sds5.jpg", answer: ["엘든링","앨든링"] },
    { img: "https://sm.ign.com/t/ign_kr/cover/m/minecraft/minecraft_9hhx.600.jpg", answer: ["마인크래프트","마크"]},
    { img: "img/img29.jpg", answer: ["스타크래프트","스타"]},
    { img: "img/img30.jpg", answer: "팰월드"},
    { img: "https://i.namu.wiki/i/HLF818BA17ND4jqwDeTUNQUF1SqBkwARlW5K8U_jo6P031Jrh7QsT1TNocYCqwmpLP8tOWtrOEOuVtIDqNEFWQ.webp", answer: ["오버워치","옵치","알아"] },
    { img: "img/img32.jpg", answer: "마비노기" },
    { img: "https://i.ytimg.com/vi/i_cCiMG-fyg/maxresdefault.jpg", answer: ["카트라이더", "카트"] },
    { img: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=204,height=204,fit=cover,f=auto/5f8d164d8269cffacc89422054b94c70/roblox-logo.png", answer: "로블록스" },


    // 모바일게임
    // { img: "img/img.jpg", answer: ["템플런","탬플런"] }, 수정 필
    { img: "https://flexible.img.hani.co.kr/flexible/normal/384/640/imgdb/resize/2012/0918/00444296501_20120918.webp", answer: "애니팡" },
    { img: "https://i.namu.wiki/i/VgSuAIeIK_qkR0PGFHRyQUMdrHX1jwsiQd3Q2q-h3ZteXe7g4r7uBGARXWmIFtaKoHtDnvwCCkKvQfHbQHvHQw.webp", answer: "쿠키런" },
    { img: "https://image.dongascience.com/Photo/2016/07/14684554927602.jpg", answer: ["포켓몬go","포켓몬고", "포캣몬고"] },
    { img: "https://i.ytimg.com/vi/0fPTjMzh-1w/maxresdefault.jpg", answer: "좀비고" },
    { img: "https://i.namu.wiki/i/BapdA1Ge-Lx9xECCtTbVwn24ZcvkroTatxJTNDnN4IX0HFhLjV93rmO8uqlqhcrQuhxCxlhzSBwaIoibYdWKSQ.webp", answer: "무한의계단"},
    { img: "https://wimg.heraldcorp.com/content/default/2013/02/27/20130227000676_0.jpg", answer: "바운스볼"},
    { img: "img/img42.jpg", answer: ["템플런","탬플런"] },
    { img: "https://db.kookje.co.kr/news2000/photo/2023/0222/20230222.99099006692i2.jpg", answer: "서브웨이서퍼"},
    { img: "https://i.namu.wiki/i/_Z_rXNxtk8cG6D1KsBD02t6GRiCMoLYToSXXDDlEDhuKd5MzJshkYDzr5KUzzw2P3SxACR6u2qeAw6x3J17Faw.webp", answer: "앵그리버드"},
    { img: "https://cdn.gamey.kr/news/photo/201601/1624427_68495_1403.jpg", answer: "포우"},
    { img: "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMjFfMTIz/MDAxNTgyMjU4NzEwNTkz.It31_swi3kDrQiaYbeTRdSk4VvPSZK1TK1-VrylJlqQg.p6lYLLJud7pMl2ar2e2Etew0LLfao5ryKg0WARLEtzsg.JPEG.dpeb011/20200221_130014.jpg?type=w800", answer: ["슈퍼팽귄","슈퍼펭귄"] },
    { img: "https://i.namu.wiki/i/HiWaTw5E7oL7Pi__fHTZW4nVYmrMPLcQIUImJ73oiYHRmDJrX9Is43D3r5PqDZvQqCBuhVN7xT2ipKEJspCE6g.webp", answer: "마피아42" },
    { img: "https://cdn.newspost.kr/news/photo/201301/14128_20148_719.png", answer: "윈드러너"},
    { img: "https://i.namu.wiki/i/3YTjbMfv46w2PBqCKt0JmwvyrbrrmEURyhs9J3zmxDePWkmlQUuBh6KM3VcYlFAv5T7O9UGReI6HKaA6aVCN2w.webp", answer: ["캔디크러쉬사가","캔디크러쉬", "캔디크러시사가", "캔디크러시"] },
    { img: "https://mblogthumb-phinf.pstatic.net/20160305_26/ddihw_1457181791236gqO2Y_JPEG/1.jpg?type=w420", answer: ["클래시로얄", "클로"]},

    
    // 개인적으로 추가
    { img: "img/img51.jpg", answer: ["메탈슬러그","메탈슬러그3"] },
    { img: "img/img52.jpg", answer: ["테일즈런너","테런"] },
    { img: "img/img53.jpg", answer: ["서브노티카", "서브노티카2"] },
    // { img: "img/img54.jpg", answer: [""] },
    // { img: "img/img55.jpg", answer: [""] },
    // { img: "img/img56.jpg", answer: [""] },
    // { img: "img/img57.jpg", answer: [""] },
    // { img: "img/img58.jpg", answer: [""] },
    // { img: "img/img59.jpg", answer: [""] },
    // { img: "img/img60.jpg", answer: [""] },
    { img: "img/img61.webp", answer: ["모두의마블", "모마"] }
];


// 진행바 업데이트 (maxRound 0 방지)
function updateProgress() {
    const progress = maxRound ? (currentRound / maxRound) * 100 : 0;
    const bar = document.getElementById("progress-bar");
    if (bar) bar.style.width = progress + "%";
}

function startGame(count) {
    totalRounds = count;
    maxRound = count;
    currentRound = 1;
    score = 0;

    document.getElementById("round-info").textContent = "라운드: " + currentRound + "/" + totalRounds;
    document.getElementById("current-score").textContent = score;
    availableQuestions = shuffle(questions).slice(0, maxRound);

    document.getElementById("setup").style.display = "none";
    document.getElementById("game-display").style.display = "block";

    loadQuestion();
    startTimer();
    updateProgress(); // 첫 라운드 시작 시 진행바 표시
}

function startTimer() {
    const timerNumber = document.getElementById('timer-number');
    const timerCircle = document.getElementById('timer-circle');
    
    if (countdown) clearInterval(countdown);

    timeLeft = 7;
    if (timerNumber) {
        timerNumber.textContent = timeLeft;
    }
    if (timerCircle) {
        timerCircle.style.background = 'conic-gradient(#000000, #000000)';
    }

    countdown = setInterval(() => {
        timeLeft--;
        if (timerNumber) timerNumber.textContent = timeLeft;

    //     // 시간이 줄어들면서 색상 변화
    //     if (timerCircle) {
    //         if (timeLeft <= 3) {
    //             timerCircle.style.background = 'conic-gradient(#f5576c, #ff0000)';
    //         // } else if (timeLeft <= 5) {
    //         //     timerCircle.style.background = 'conic-gradient(#ffa500, #000000)';
    //         // }
    //     }
    // }
        if (timeLeft <= 0) {
            if (countdown) clearInterval(countdown);
            nextRound();
        }
    }, 1000);
}

function nextRound() {
    const roundElement = document.getElementById('round-info');

    if (currentRound < maxRound) {
        currentRound++;
        if (roundElement) roundElement.textContent = `라운드: ${currentRound}/${maxRound}`;
        loadQuestion();
        startTimer();
        updateProgress();
    } else {
        endGame();
    }
}

function loadQuestion() {
    const questionArea = document.getElementById("question-area");
    const currentQuestion = availableQuestions[currentRound - 1];

    if (!questionArea) return;

    if (!currentQuestion) {
        questionArea.innerHTML = `<p>문제를 불러올 수 없습니다.</p>`;
        return;
    }

    questionArea.innerHTML = `<img src="${currentQuestion.img}" alt="문제 이미지" style="max-width:100%; height:auto;">`;
}

function endGame() {
    if (countdown) clearInterval(countdown);
    document.getElementById("game-display").style.display = "none";
    document.getElementById("result-display").style.display = "block";

    const finalScoreValue = document.getElementById("final-score-value");
    const finalScore = document.getElementById("final-score");
    const resultGrade = document.getElementById("result-grade");
    const resultBar = document.getElementById("result-bar");
    const resultPercent = document.getElementById("result-percent");

    // 최종 점수
    if (finalScoreValue) finalScoreValue.textContent = score;

    // 점수 정보
    const percentage = Math.round((score / maxRound) * 100);
    if (finalScore) {
        finalScore.innerHTML = `
            <strong>전체 문제: ${maxRound}문제</strong> <br>
            <span style="font-size: 20px; font-weight: bold; margin-top: 10px;">맞춘 갯수: ${score}개</span>
        `;
    }

    // 등급 결정
    let grade = "GAME";
    let gradeText = "";
    if (percentage >= 100) {
        grade = "🌟 최고의 게이머!";
        gradeText = "전설적인 점수입니다!";
    } else if (percentage >= 80) {
        grade = "훌륭한 게이머!";
        gradeText = "정말 잘했습니다!";
    } else if (percentage >= 60) {
        grade = "좋은 게이머!";
        gradeText = "더 도전해보세요!";
    } else if (percentage >= 40) {
        grade = "공부 중인 게이머";
        gradeText = "다시 한 번 해보세요!";
    } else {
        grade = "🆕 뉴비 게이머";
        gradeText = "게임을 더 알아가요!";
    }

    if (resultGrade) {
        resultGrade.innerHTML = `<div style="font-size: 48px; margin-bottom: 10px;">${grade}</div><div style="font-size: 14px; color: #000000;">${gradeText}</div>`;
    }

    // 진행바 애니메이션
    if (resultBar) {
        setTimeout(() => {
            resultBar.style.width = percentage + "%";
        }, 200);
    }

    if (resultPercent) {
        resultPercent.textContent = `정답률: ${percentage}%`;
    }
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
    const answerBtn = document.getElementById("send-btn");
    const userInput = document.getElementById("user-answer");
    const feedbackElement = document.getElementById("feedback");

    if (!userInput || !feedbackElement) return;

    const userAnswerRaw = userInput.value.trim();
    if (userAnswerRaw === "") {
        feedbackElement.textContent = "정답을 입력하세요!";
        feedbackElement.style.color = "#ffa500";
        return;
    }

    // 중복 제출 방지
    if (answerBtn) answerBtn.disabled = true;

    const userAnswer = userAnswerRaw.toLowerCase();
    const currentQuestion = availableQuestions[currentRound - 1];

    if (!currentQuestion) {
        feedbackElement.textContent = "문제가 없습니다.";
        if (answerBtn) answerBtn.disabled = false;
        return;
    }

    const answers = Array.isArray(currentQuestion.answer) ? currentQuestion.answer : [currentQuestion.answer];
    const normalizedAnswers = answers.map(a => String(a).trim().toLowerCase());

    const isCorrect = normalizedAnswers.some(a => a === userAnswer);

    if (isCorrect) {
        score++;
        feedbackElement.textContent = "✅ 정답!";
        feedbackElement.style.color = "#4caf50";
        feedbackElement.classList.add("correct");
        
        const scoreEl = document.getElementById("current-score");
        if (scoreEl) scoreEl.textContent = score;
    } else {
        const correctName = answers[0];
        feedbackElement.innerHTML = `<span style="color:red;">❌ 오답!</span>&nbsp;- ${correctName}`;
        feedbackElement.classList.add("incorrect");
    }

    userInput.value = "";
    if (countdown) clearInterval(countdown);

    setTimeout(() => {
        feedbackElement.textContent = "";
        feedbackElement.classList.remove("correct", "incorrect");
        if (answerBtn) answerBtn.disabled = false;
        nextRound();
    }, 1500);
}

document.addEventListener('DOMContentLoaded', () => {
    const answerButton = document.getElementById("send-btn");
    const answerInput = document.getElementById("user-answer");

    if (answerButton) answerButton.addEventListener("click", submitAnswer);
    if (answerInput) {
        answerInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") submitAnswer();
        });
    }
});
