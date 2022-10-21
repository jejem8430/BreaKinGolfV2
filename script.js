const message = "Merci pour votre message nous vous répondrons dans les plus brefs délais.";
let contact = document.querySelector("#contactForm")

console.log(contact);


contact.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("log");

        alert(message);
    });



