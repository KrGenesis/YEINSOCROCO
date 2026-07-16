function initRevealAnimations() {
    const revealElements = document.querySelectorAll(".reveal:not(.visible)");

    const revealObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

document.addEventListener("DOMContentLoaded", initRevealAnimations);
window.addEventListener("languageChanged", initRevealAnimations);