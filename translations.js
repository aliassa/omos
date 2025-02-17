const translations = {
    "en": "us.json",
    "ar": "ar.json",
    "fr": "fr.json"
};

function loadLanguage(lang) {
    fetch(translations[lang])
        .then(response => response.json())
        .then(data => {
            document.querySelector('.navbar-brand').textContent = data.home;
            document.querySelector('.nav-item a[href="#about"]').textContent = data.about;
            document.querySelector('.nav-item a[href="#services"]').textContent = data.services;
            document.querySelector('.nav-item a[href="#contact"]').textContent = data.contact;
            document.querySelector('.hero-section h1').textContent = data.welcome_message;
            document.querySelector('.hero-section p').textContent = data.subheading;
            document.querySelector('.btn.btn-primary').textContent = data.explore_services;
            document.querySelector('.text-center h2').textContent = data.about_us;
            document.querySelector('.text-center p').textContent = data.about_paragraph;
            // Add more elements as needed for full translation
        });
}

// Event listener for language change
document.querySelector('.language-switcher select').addEventListener('change', (e) => {
    loadLanguage(e.target.value);
});
