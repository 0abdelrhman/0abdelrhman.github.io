// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
    const sections = document.querySelectorAll("section");

    searchInput.addEventListener("input", function() {
        const query = searchInput.value.toLowerCase();
        
        sections.forEach(section => {
            const items = section.querySelectorAll("ul li");
            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(query)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});