const translationsEN = {
    matkaDam: "Dam: Enny Joy of Ashanti South Moravia",
    otecSire: "Sire: Adhiambo Kaweira",
    dateofbird: "Date of birth: 26.03.2019",
    height: "Height: 63cm",
    weight: "Weight: 38kg",
    dentition: "Full dentition with scissor bite",
    color: "Wheaten color",
};

const translationsCZ = {
    matkaDam: "Matka: Enny Joy of Ashanti South Moravia",
    otecSire: "Otec: Adhiambo Kaweira",
    dateofbird: "Datum narození: 26.03.2019",
    height: " Výška: 69cm",
    weight: "Váha: 44kg",
    dentition: "plnochrupý, nůžkový kus",
    color: "Pšeničná barva",
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
