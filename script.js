const randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const userGuess = Number(document.getElementById("guess").value);
    const result = document.getElementById("result");

    if (userGuess === randomNumber) {
        result.textContent = "🎉 Correct! You guessed the number.";
    } else if (userGuess > randomNumber) {
        result.textContent = "📉 Too high! Try again.";
    } else {
        result.textContent = "📈 Too low! Try again.";
    }
}
