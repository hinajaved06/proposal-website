// ================================
// GET ELEMENTS
// ================================

const countdownScreen =
    document.getElementById("countdown-screen");

const introScreen =
    document.getElementById("intro-screen");

const letterScreen =
    document.getElementById("letter-screen");

const finalScreen =
    document.getElementById("final-screen");

const countdownNumber =
    document.getElementById("countdown");

const openLetterButton =
    document.getElementById("open-letter");

const yesButton =
    document.getElementById("yes-btn");

const maybeButton =
    document.getElementById("maybe-btn");

const music =
    document.getElementById("background-music");


// ================================
// SCREEN CHANGE
// ================================

function showScreen(screen) {

    countdownScreen.classList.remove("active");
    introScreen.classList.remove("active");
    letterScreen.classList.remove("active");
    finalScreen.classList.remove("active");

    screen.classList.add("active");
}


// ================================
// COUNTDOWN
// ================================

let count = 3;

countdownNumber.textContent = count;

const countdownTimer = setInterval(() => {

    count--;

    if (count > 0) {

        countdownNumber.textContent = count;

    } else {

        clearInterval(countdownTimer);

        countdownNumber.textContent = "❤️";

        setTimeout(() => {

            showScreen(introScreen);

        }, 1000);
    }

}, 1000);


// ================================
// OPEN LETTER + MUSIC
// ================================

openLetterButton.addEventListener("click", () => {

    showScreen(letterScreen);

    music.volume = 0.5;

    music.play()
        .then(() => {

            console.log("Music started!");

        })
        .catch((error) => {

            console.log("Music error:", error);

        });

});


// ================================
// YES BUTTON
// ================================

yesButton.addEventListener("click", () => {

    showScreen(finalScreen);

    createConfetti();

});


// ================================
// MAYBE BUTTON
// ================================

maybeButton.addEventListener("click", () => {

    maybeButton.textContent = "Think again 🥺";

    maybeButton.style.transform = "scale(1.05)";

    setTimeout(() => {

        maybeButton.textContent = "Maybe... 🥺";

        maybeButton.style.transform = "scale(1)";

    }, 1500);

});


// ================================
// CONFETTI
// ================================

function createConfetti() {

    const container =
        document.getElementById("confetti-container");

    container.innerHTML = "";

    for (let i = 0; i < 100; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add("confetti");

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        container.appendChild(piece);

    }

}
