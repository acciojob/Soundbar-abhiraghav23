document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.getElementById("buttons");
    let currentAudio = null;

    buttons.addEventListener("click", (event) => {
        const button = event.target;

        if (button.classList.contains("btn") && !button.classList.contains("stop")) {
            const soundName = button.getAttribute("data-sound");
            if (currentAudio) {
                currentAudio.pause();
            }
            currentAudio = new Audio(`sounds/${soundName}.mp3`);
            currentAudio.play();
        } else if (button.classList.contains("stop")) {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
                currentAudio = null;
            }
        }
    });
});

