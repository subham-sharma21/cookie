document.addEventListener("DOMContentLoaded", () => {
    const sparkleContainer = document.getElementById("sparkle-container");
    const burstTitle = document.getElementById("burstTitle");

    // 🔥 Sparkle creation function
    function createSparkle(x, y) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        sparkleContainer.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }

    // ✨ Burst on click
    burstTitle.addEventListener("click", () => {
        const rect = burstTitle.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 25; i++) {
            const x = centerX + (Math.random() - 0.5) * 290;
            const y = centerY + (Math.random() - 0.5) * 80;
            createSparkle(x, y);
        }
    });

    // 🐭 Sparkle trail on mousemove
    document.addEventListener("mousemove", (e) => {
        if (Math.random() < 0.5) { // throttle effect
            createSparkle(e.clientX + (Math.random() - 0.5) * 10, e.clientY + (Math.random() - 0.5) * 10);
        }
    });

    // 🎆 Auto-fireworks every few seconds
    setInterval(() => {
        const centerX = window.innerWidth / 2;
        const centerY = burstTitle.getBoundingClientRect().top + 20;
        for (let i = 0; i < 20; i++) {
            const x = centerX + (Math.random() - 0.5) * 300;
            const y = centerY + (Math.random() - 0.5) * 100;
            createSparkle(x, y);
        }
    }, 1000); // every 1 second

    // 🌟 Random background twinkles
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createSparkle(x, y);
    }, 150);
});
