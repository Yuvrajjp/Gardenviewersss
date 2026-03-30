// script.js

// Smooth scrolling navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button animations
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.classList.add('animate');
    });
    button.addEventListener('mouseout', () => {
        button.classList.remove('animate');
    });
});

// Scroll-triggered animations
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});
sections.forEach(section => {
    observer.observe(section);
});

// Animated progress bars
const progressBars = document.querySelectorAll('.progress-bar');
progressBars.forEach(bar => {
    const value = bar.getAttribute('data-value');
    bar.style.width = `${value}%`;
});

// Ripple effect on buttons
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);

        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});
