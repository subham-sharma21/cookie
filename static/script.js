document.addEventListener("DOMContentLoaded", () => {
    const cookieBtn = document.getElementById("cookie");
    const fortuneBox = document.getElementById("fortune-box");
    const sound = new Audio("/static/sound.wav");
    let isAnimating = false;

    cookieBtn.addEventListener("click", () => {
        // Toggle animation state
        isAnimating = !isAnimating;

        if (isAnimating) {
            // Animate the cookie
            cookieBtn.classList.add("opened");

            // Delay to sync with animation
            setTimeout(() => {
                // Add rotation
                cookieBtn.classList.add("rotate");

                // Play sound
                sound.play();

                // Stop after 2 seconds
                setTimeout(() => {
                    sound.pause();
                    sound.currentTime = 0;
                }, 2000);

                // Show fortune
                fortuneBox.style.display = "block";
            }, 600);
        } else {
            // Reset animations
            cookieBtn.classList.remove("opened", "rotate");
            fortuneBox.style.display = "none";
        }
    });

    document.getElementById("download-btn").addEventListener("click", () => {
        const fortuneBox = document.querySelector("#fortune-box");

        // Ensure fortune box is visible
        fortuneBox.style.display = "block";

        // Wait for a moment to ensure content is rendered
        setTimeout(() => {
            html2canvas(fortuneBox, {
                backgroundColor: "rgb(15, 32, 39)",
                scale: 2,
                useCORS: true,
                logging: true,
                onclone: function (clonedDoc) {
                    clonedDoc.querySelector("#fortune-box").style.display = "block";
                }
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = 'fortune_cookie.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            });
        }, 100);
    });
});
