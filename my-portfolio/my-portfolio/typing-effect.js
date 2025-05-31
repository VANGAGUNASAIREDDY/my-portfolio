document.addEventListener('DOMContentLoaded', function() {
    const typingTextElement = document.querySelector('.typing-text');
    const phrases = [
        "Computer Science student.",
        "Business Management Student.",
        "Developer.",
        "Student at KL University.",
        "Dual Degree Student."
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; // milliseconds per character (typing)
    const deletingSpeed = 60; // milliseconds per character (deleting)
    const pauseBeforeDelete = 1500; // milliseconds to pause before deleting
    const pauseBeforeType = 500; // milliseconds to pause before typing new phrase

    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            // Deleting text
            typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Typing text
            typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let currentSpeed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentPhrase.length) {
            // Paused at end of phrase, start deleting after pause
            currentSpeed = pauseBeforeDelete;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting, move to next phrase
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            currentSpeed = pauseBeforeType;
        }

        setTimeout(typeWriter, currentSpeed);
    }

    // Start the typing effect when the page loads
    typeWriter();
});