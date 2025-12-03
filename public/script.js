document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const hackedScreen = document.getElementById('hacked-screen');
    const recoveryScreen = document.getElementById('recovery-screen');
    const prankScreen = document.getElementById('prank-screen');

    const progressBar = document.getElementById('progress-bar');
    const loadingText = document.getElementById('loading-text');
    const recoverBtn = document.getElementById('recover-btn');

    // 1. Start Loading Animation (10 seconds)
    let progress = 0;
    const duration = 10000; // 10 seconds
    const intervalTime = 100;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
        progress += increment;
        progressBar.style.width = `${Math.min(progress, 100)}%`;

        if (progress < 30) loadingText.innerText = "Initializing secure connection...";
        else if (progress < 60) loadingText.innerText = "Loading user preferences...";
        else if (progress < 90) loadingText.innerText = "Finalizing setup...";
        else loadingText.innerText = "Almost there...";

        if (progress >= 100) {
            clearInterval(timer);
            triggerHackedScreen();
        }
    }, intervalTime);

    // 2. Switch to Hacked Screen
    function triggerHackedScreen() {
        loadingScreen.classList.remove('active');
        hackedScreen.classList.add('active');

        // Simulate data stealing text
        const output = document.getElementById('terminal-output');
        const files = ['passwords.txt', 'credit_cards.db', 'browser_history.json', 'private_photos.zip', 'chat_logs.txt'];
        let i = 0;

        const hackInterval = setInterval(() => {
            if (i >= files.length) {
                clearInterval(hackInterval);
                setTimeout(() => {
                    hackedScreen.classList.remove('active');
                    prankScreen.classList.add('active');
                }, 2000);
                return;
            }
            const p = document.createElement('p');
            p.style.color = '#0f0';
            p.style.fontFamily = 'monospace';
            p.innerText = `> Uploading ${files[i]}... 100%`;
            output.appendChild(p);
            i++;
        }, 400);
    }
});
