// -------------------------------
// FAQ FORMULIER VERSTUREN
// -------------------------------

const form = document.querySelector("#questionForm");
const msg = document.querySelector("#formMsg");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.querySelector("#qname").value.trim();
        const email = document.querySelector("#qemail").value.trim();
        const text = document.querySelector("#qtext").value.trim();

        // HAPPY SCENARIO
        if (name && email && text) {
            msg.style.color = "green";
            msg.textContent = "Je vraag is verzonden! We nemen snel contact op.";
            form.reset();
        }
        // UNHAPPY SCENARIO
        else {
            msg.style.color = "red";
            msg.textContent = "Vul alle velden correct in voordat je verzendt.";
        }
    });
}



// -------------------------------
// GALERIJ – KLIK OM TE VERGROTEN
// -------------------------------

const images = document.querySelectorAll(".gallery img");

if (images.length > 0) {

    // Maak een overlay
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.style.display = "none";
    overlay.innerHTML = `
        <div class="overlay-content">
            <img id="overlay-img" src="" alt="Vergrote afbeelding">
        </div>
    `;
    document.body.appendChild(overlay);

    const overlayImg = document.querySelector("#overlay-img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            overlayImg.src = img.src;
            overlay.style.display = "flex";
        });
    });

    // Klik om overlay te sluiten
    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
    });
}



// -------------------------------
// SMOOTH SCROLL VOOR DE WEBSITE
// -------------------------------

const links = document.querySelectorAll("a[href^='#']");

links.forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});



// -------------------------------
// MENU ACTIEF MAKEN
// -------------------------------

const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});


const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}
