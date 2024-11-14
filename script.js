
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');

    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
        content.style.marginLeft = '0';
    } else {
        sidebar.style.left = '0';
        content.style.marginLeft = '250px';
    }
}


 // JavaScript to handle scroll-triggered animations
 document.addEventListener("DOMContentLoaded", () => {
    const animatedSections = document.querySelectorAll(".animated-section");

    function revealSection() {
        animatedSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight * 0.8) { // Adjust threshold as needed
                section.classList.add("active");
            }
        });
    }

    // Initialize on scroll
    window.addEventListener("scroll", revealSection);
    revealSection(); // Trigger on load
});
