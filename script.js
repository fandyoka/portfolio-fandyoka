// =============================
// TYPING ANIMATION
// =============================

const roles = [
    "Software Engineer",
    "IoT Developer",
    "Web Developer"
];

const typingElement = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typingEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent = currentRole.substring(0, charIndex);

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentRole.length) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typingEffect, speed);
}

typingEffect();


// =============================
// DARK MODE
// =============================

const darkBtn = document.getElementById("darkBtn");

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            darkBtn.innerHTML = "☀️ Light Mode";

        } else {

            darkBtn.innerHTML = "🌙 Dark Mode";

        }

    });

}