document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const themeToggle = document.getElementById("themeToggle");
    const themeLabel = document.querySelector(".form-check-label");
    const body = document.getElementById("body");
    //const footer = document.getElementById("footer");

    // Check localStorage for theme preference
    const currentTheme = localStorage.getItem("theme") || "dark";
    setTheme(currentTheme);

    function setTheme(theme) {
        if (theme === "dark") {
            navbar.classList.add("bg-dark");
            navbar.classList.remove("bg-light");
            // footer.classList.add("bg-dark");
            // footer.classList.remove("bg-light");
            body.setAttribute("data-bs-theme", "dark");
            themeLabel.textContent = "Dark Mode";
            themeLabel.classList.add("text-light");
            themeLabel.classList.remove("text-dark");
            themeToggle.checked = true;
        } else {
            navbar.classList.add("bg-light");
            navbar.classList.remove("bg-dark");
            // footer.classList.add("bg-light");
            // footer.classList.remove("bg-dark");
            body.setAttribute("data-bs-theme", "light");
            themeLabel.textContent = "Light Mode";
            themeLabel.classList.add("text-dark");
            themeLabel.classList.remove("text-light");
            themeToggle.checked = false;
        }
        localStorage.setItem("theme", theme);
    }

    // Toggle theme on switch change
    themeToggle.addEventListener("change", function () {
        const newTheme = themeToggle.checked ? "dark" : "light";
        setTheme(newTheme);
    });
});
