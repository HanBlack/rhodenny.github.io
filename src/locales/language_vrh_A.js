const translationsEN = {
    name_breed_A_first_dog: "Amos Adhiambo",
    weight_breed_A_first_dog: "675 g",
    name_breed_A_second_dog: "Alfie Sabiha",
    weight_breed_A_second_dog: "590 g",
    name_breed_A_third_dog: "Agnes Yunna",
    weight_breed_A_third_dog: "580 g",
    name_breed_A_fourth_dog: "Aron Black",
    weight_breed_A_fourth_dog: "605 g",
    name_breed_A_fifth_dog: "Alvin Shadow",
    weight_breed_A_fifth_dog: "550 g",
    name_breed_A_sixth_dog: "Amali Joy",
    weight_breed_A_sixth_dog: "690 g",
    name_breed_A_seventh_dog: "Adwin Badu",
    weight_breed_A_seventh_dog: "510 g",
    title: "Breed A",
    undertitle: "My big wish was to find a medium-sized dog for Enny. That's where my search began. Thanks to a lot of health tests, coat color, physique, and a beautiful little head, Hugo engraved himself in my mind. Already during the first visit, his kind, friendly, and non-conflict nature pleased me a lot and completely convinced me that he is the right one.",
    undertitle_: "Hugo comes from the breeding station Kaweria from the breed A. Visit Hugo's website: <a href='https://www.kaweria.com/'>https://www.kaweria.com</a>",
};

const translationsCZ = {
    name_breed_A_first_dog: "Amos Adhiambo",
    weight_breed_A_first_dog: "675 g",
    name_breed_A_second_dog: "Alfie Sabiha",
    weight_breed_A_second_dog: "590 g",
    name_breed_A_third_dog: "Agnes Yunna",
    weight_breed_A_third_dog: "580 g",
    name_breed_A_fourth_dog: "Aron Black",
    weight_breed_A_fourth_dog: "605 g",
    name_breed_A_fifth_dog: "Alvin Shadow",
    weight_breed_A_fifth_dog: "550 g",
    name_breed_A_sixth_dog: "Amali Joy",
    weight_breed_A_sixth_dog: "690 g",
    name_breed_A_seventh_dog: "Adwin Badu",
    weight_breed_A_seventh_dog: "510 g",
    title: "Vrh A",
    undertitle: "Mým velkým přáním bylo najít pro Enny pejska střední postavy. Tím začalo moje hledání. Hugo se díky spoustě zdravotních testů, barvě srsti, postavě a nádherné hlavičce vryl do mojí mysli. Již při první návštěvě mě moc potěšila jeho milá, přátelská a nekonfliktní povaha a zcela přesvědčila, že je to ten pravý.",
    undertitle_: "Hugo pochází z chovatelské stanice Kaweria z vrhu A. Navštivte webové stránky Huga: <a href='https://www.kaweria.com/'>https://www.kaweria.com</a>",
};

const userLanguage = navigator.language || navigator.userLanguage;
const translations = userLanguage.startsWith("cs") ? translationsCZ : translationsEN;

document.addEventListener('DOMContentLoaded', function () {
    // Apply translations to the HTML elements
    Object.keys(translations).forEach((key) => {
        const element = document.getElementById(key);
        if (element) {
            element.innerHTML = translations[key];
        }
    });
});