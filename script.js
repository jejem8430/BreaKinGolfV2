
//message js retour formulaire//

const message = "Merci pour votre message nous vous répondrons dans les plus brefs délais.";
let contact = document.querySelector("#contactForm")
contact.addEventListener("submit", function (event) {
        event.preventDefault();
    alert(message);
});
    
// mouseNav 
const moveNav = document.querySelectorAll(".navli");
   for (const itemNav of moveNav) {
    itemNav.addEventListener(`mouseover`, function () {
        itemNav.classList.add("navJS");
    });
    itemNav.addEventListener(`mouseleave`, function () {
        itemNav.classList.remove("navJS");
    });
}











