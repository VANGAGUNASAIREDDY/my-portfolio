// fun-fact.js

document.addEventListener('DOMContentLoaded', () => {
    const funFactBtn = document.getElementById('funFactBtn');
    let intervalId = null;
    const DURATION = 3000; // Total duration of color changes (e.g., 3 seconds)
    const CHANGE_INTERVAL = 150; // How often the color changes (e.g., every 150ms)

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    if (funFactBtn) {
        funFactBtn.addEventListener('click', () => {
            // If an interval is already running, clear it before starting a new one
            if (intervalId) {
                clearInterval(intervalId);
                document.body.style.backgroundColor = ''; // Reset immediately
            }

            // Disable the button to prevent multiple clicks
            funFactBtn.disabled = true;
            funFactBtn.textContent = 'Having Fun...';

            let startTime = Date.now();

            intervalId = setInterval(() => {
                const elapsed = Date.now() - startTime;

                if (elapsed < DURATION) {
                    document.body.style.backgroundColor = getRandomColor();
                } else {
                    // Stop the interval and reset
                    clearInterval(intervalId);
                    intervalId = null;
                    document.body.style.backgroundColor = ''; // Reset to original CSS background
                    funFactBtn.disabled = false;
                    funFactBtn.textContent = 'Fun Fact!';
                }
            }, CHANGE_INTERVAL);
        });
    }
});