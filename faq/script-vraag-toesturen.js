const form = document.querySelector("#questionForm");
const msg = document.querySelector("#formMsg");

let toggle = true; // wisselt tussen happy en unhappy

if (form && msg) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = qname.value.trim();
        const email = qemail.value.trim();
        const text = qtext.value.trim();

        // Lege velden = unhappy
        if (!name || !email || !text) {
            msg.className = "error";
            msg.textContent =
                "❌ Vul alle velden correct in voordat je verzendt.";
            return;
        }

        // HAPPY
        if (toggle) {
            msg.className = "success";
            msg.textContent =
                "✅ Je vraag is verzonden! We nemen snel contact op.";
            form.reset();
        }
        // UNHAPPY
        else {
            msg.className = "error";
            msg.textContent =
                "❌ Het verzenden van uw vraag is niet gelukt. Probeert u het later opnieuw.";
        }

        toggle = !toggle; // wissel scenario
    });
}
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}
