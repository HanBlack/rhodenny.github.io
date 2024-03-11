// locales/language_header.js

const headerEN = {
    about_us: "ABOUT US",
    our_dogs: "OUR DOGS",
    puppies: "PUPPIES",
    stud_dogs: "STUD DOGS",
    Documents: "DOCUMENTS",
    contact: "CONTACT",
};

const headerCZ = {
    about_us: "O NÁS",
    our_dogs: "NAŠI PSI",
    puppies: "ŠTĚŇATA",
    stud_dogs: "KRYCÍ PSI",
    Documents: "DOKUMENTY",
    contact: "KONTAKT",
};

// Get the Accept-Language header from the request
const userLanguageHeader = Astro.request.headers.get('accept-language');

// Set a default language (e.g., English)
const defaultLanguage = 'en';

// Determine the user's preferred language
const userLanguage = userLanguageHeader && userLanguageHeader.startsWith('cs') ? 'cs' : defaultLanguage;

// Select the appropriate language file
const header = userLanguage === 'cs' ? headerCZ : headerEN;

// Apply translations to the HTML elements
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('[data-translation-key]');
    elements.forEach((element) => {
        const headerKey = element.getAttribute('data-translation-key');
        if (headerKey && header[headerKey]) {
            element.textContent = header[headerKey];
        }
    });
});
