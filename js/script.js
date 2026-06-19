const fadeElements = document.querySelectorAll(".fade-in");

const options = {
    threshold: 0.2
};

const fadeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, options);

fadeElements.forEach(function(element) {
    fadeObserver.observe(element);
});