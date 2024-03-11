const translationsEN = {
    name_breed_A: "Breed A",
    name_breed_B: "Breed B",
    breed_A_description: "On March 26, 2019, 7 standard puppies were born. 2 girls, 5 boys.",
    breed_B_description: "On October 13, 2020, 6 standard and one non-standart (3 crowns) puppies were born. There are 4 females and 3 males.",
    puppies: "Breeds",
    readmore: "Read More",
    readmore_: "Read More",

};

const translationsCZ = {
    name_breed_A: "Vrh A",
    name_breed_B: "Vrh B",
    breed_A_description: "26.3.2019 se narodilo 7 standartních štěňátek. 2 holky, 5 kluků",
    breed_B_description: "13.10.2020 - se narodilo 6 standartních a 1 nestandart (3 korunky) štěňátek. 4 holky a 3 kluci.",
    puppies: "Štěňata",
    readmore: "Více zde",
    readmore_: "Více zde",

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
