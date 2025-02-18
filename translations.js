const translations = {
    "en": "translations/us.json",
    "fr": "translations/fr.json",
    "es": "translations/ar.json"
};

function loadLanguage(language) {
    // Save selected language to localStorage
    localStorage.setItem('language', language);

    fetch(translations[language])
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll("[data-translate]").forEach(el => {
                const key = el.getAttribute("data-translate");
                if (data[key]) {
                    el.innerHTML = data[key];
                }
            });
        })
        .catch(error => console.error("Error loading language file:", error));
}

function changeLanguage(language) {
    loadLanguage(language);
}

// Load saved language from localStorage or default to English
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || "en";
    loadLanguage(savedLanguage);

    // Set the selected value in the dropdown based on the saved language
    document.querySelector('select').value = savedLanguage;
});
