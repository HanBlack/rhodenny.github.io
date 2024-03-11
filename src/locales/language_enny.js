const translationsEN = {
    matkaDam: "Dam: Ashanti South Moravia",
    otecSire: "Sire: Kifahari Kuzaa Eros Dahabu",
    dateofbird: "Date of birth: 25.06.2015",
    height: "Height: 65cm",
    weight: "Weight: 38kg",
    dentition: "Full dentition with scissor bite",
    color: "Wheaten color",
    HD: "HD: A/A",
    ED: "ED: 0/0",
    OCD: "OCD - negative",
};

const translationsCZ = {
    matkaDam: "Matka: Ashanti South Moravia",
    otecSire: "Otec: Kifahari Kuzaa Eros Dahabu",
    dateofbird: "Datum narození: 25.06.2015",
    height: " Výška: 65cm",
    weight: "Váha: 38kg",
    dentition: "plnochrupý, nůžkový kus",
    color: "Pšeničná barva",
    HD: "HD: A/A",
    ED: "ED: 0/0",
    OCD: "OCD - negativní",
};

const userLanguage = navigator.language || navigator.userLanguage;
const translations = userLanguage.startsWith("cs") ? translationsCZ : translationsEN;

document.addEventListener('DOMContentLoaded', function () {
    // Apply translations to the HTML elements
    Object.keys(translations).forEach((key) => {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translations[key];
        }
    });
});
