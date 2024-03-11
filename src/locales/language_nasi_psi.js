const translationsEN = {
    name_dog: "Enny Joy of South Moravia",
    name_dog_: "Amali Joy Rhodenny",
    name_dog__: "Bizzete Charlie Rhodenny",
    name_dog4: "Ashanti South Moravia",
    name_dog5: "Kifahari Kuzaa Eros Dahabu",
    name_dog6: "Berlin Mattien Rhodenny",
    readmore: "Read More",
    readmore_: "Read More",
    readmore__: "Read More",
    readmore4: "Read More",
    readmore5: "Read More",
    readmore6: "Read More",
    nasi_psi: "Our dogs"

};

const translationsCZ = {
    name_dog: "Enny Joy of South Moravia",
    name_dog_: "Amali Joy Rhodenny",
    name_dog__: "Bizzete Charlie Rhodenny",
    name_dog4: "Ashanti South Moravia",
    name_dog5: "Kifahari Kuzaa Eros Dahabu",
    name_dog6: "Berlin Mattien Rhodenny",
    readmore: "Více zde",
    readmore_: "Více zde",
    readmore__: "Více zde",
    readmore4: "Více zde",
    readmore5: "Více zde",
    readmore6: "Více zde",
    nasi_psi: "Naši psi"
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
