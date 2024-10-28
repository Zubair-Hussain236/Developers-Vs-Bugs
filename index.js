let score = 0;
const startButton = document.getElementById("startButton");
const scoreDisplay = document.getElementById("scoreDisplay");
const bugArea = document.getElementById("bugArea");

function createBug() {
    const bug = document.createElement("div");
    bug.classList.add("bug");

    // Simulated error message as a bug
    bug.textContent = `Error: Unexpected Token!`;

    // Random position within the bug area
    bug.style.top = `${Math.random() * (bugArea.offsetHeight - 30)}px`;
    bug.style.left = `${Math.random() * (bugArea.offsetWidth - 100)}px`;

    // Event listener for squashing the bug
    bug.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        bug.remove();
        setTimeout(createBug, Math.max(500 - score * 20, 100)); // Increasing difficulty
    });

    bugArea.appendChild(bug);
}

startButton.addEventListener("click", () => {
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    bugArea.innerHTML = ''; // Clear any existing bugs
    createBug();
});
