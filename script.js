document.addEventListener("DOMContentLoaded", function() {
    const confettiContainer = document.querySelector(".confetti-container");

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confettiContainer.appendChild(confetti);
    }

    function getRandomColor() {
        const colors = ["#FF5733", "#FFC300", "#DAF7A6", "#9AECDB", "#C7E9E8", "#F1948A", "#F8C471"];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
});
