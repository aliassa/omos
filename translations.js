// translations.js
const translations = {
    "en": "translations/us.json",
    "fr": "translations/fr.json",
    "es": "translations/ar.json"
};

function loadLanguage(language) {
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

// Set default language to English
document.addEventListener('DOMContentLoaded', () => {
    loadLanguage("en");
});
