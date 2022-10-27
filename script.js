
//message js retour formulaire//

const message = "Merci pour votre message nous vous répondrons dans les plus brefs délais.";
let contact = document.querySelector("#contactForm")

console.log(contact);


contact.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("log");

    alert(message);
    });

const moveNav = document.querySelectorAll(".li");
const query = document.querySelector(".frites")
query.addEventListener("mouseover", () => {
    console.log("coca")
})
console.log(moveNav)
for (const itemNav of moveNav) {
    itemNav.addEventListener(`mouseover`, function () {
        console.log("mouseOver")
        itemNav.classList.add("navJS");
    });
    itemNav.addEventListener(`mouseleave`, function () {
        console.log('mouseLeave')
        itemNav.classList.remove("navJS");
    });
}











