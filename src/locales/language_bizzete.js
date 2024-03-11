const translationsEN = {
    matkaDam: "Dam: Enny Joy of Ashanti South Moravia",
    otecSire: "Sire: Bayo Kendy Kaveria",
    dateofbird: "Date of birth: 13.10.2020",
    height: "Height: 63cm",
    weight: "Weight: 37kg",
    dentition: "Full dentition with scissor bite",
    color: "Wheaten color",
    HD: "HD: 0/0",
    ED: "ED: 0/0",
    OCD: "OCD - negative",
    SA: "SA - negative",
    Ridge: "Ridge gene - R/R",
    DM: "DM: M/N",
    JME: "JME: N/n",
    Dlocus: "D-locus: D/D",
    Blocus: "B-locus: B/b",
    Hemofilia: "Haemophilia: A/B - clear",
    Bonitace: "The dog assessment took place in 16.06.2023 - Elite class",
};

const translationsCZ = {
    matkaDam: "Matka: Enny Joy of Ashanti South Moravia",
    otecSire: "Otec: Bayo Kendy Kaveria",
    dateofbird: "Datum narození: 13.10.2020",
    height: " Výška: 63cm",
    weight: "Váha: 37kg",
    dentition: "plnochrupý, nůžkový kus",
    color: "Pšeničná barva",
    HD: "HD: 0/0",
    ED: "ED: 0/0",
    OCD: "OCD - negativní",
    SA: "SA - negativní",
    Ridge: "Ridge gene - R/R",
    DM: "DM: M/N",
    JME: "JME: N/n",
    Dlocus: "D-locus: D/D",
    Blocus: "B-locus: B/b",
    Hemofilia: "Hemofilie: A/B - čistá",
    Bonitace: "Bonitace byla 16.06.2023 - Elitní třída",
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
