document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel-item");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    const modals = document.querySelectorAll(".modal");
    const moreBtns = document.querySelectorAll(".more-btn");
    const closeBtns = document.querySelectorAll(".close");

    let angle = 0;
    let currentIndex = 0;

    // Function to rotate the carousel
    function rotateCarousel(direction) {
        const itemsCount = items.length;
        if (direction === "next") {
            angle -= 60;
            currentIndex = (currentIndex + 1) % itemsCount;
        } else if (direction === "prev") {
            angle += 60;
            currentIndex = (currentIndex - 1 + itemsCount) % itemsCount;
        }
        carousel.style.transform = `rotateY(${angle}deg)`;
    }

    // Next and Previous button functionality
    next.addEventListener("click", () => rotateCarousel("next"));
    prev.addEventListener("click", () => rotateCarousel("prev"));

    // Modal functionality
    moreBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const target = e.target.getAttribute("data-target");
            const modal = document.getElementById(target);
            modal.style.display = "block";
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.closest(".modal").style.display = "none";
        });
    });

    // Close the modal if the user clicks outside of it
    window.onclick = function(event) {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    };
});