// ------------------------------------------------------------
// DE HER LINJER ER FRA ET ANDET PROJEKT OG SKAL IKKE KØRES HER
// ------------------------------------------------------------

// document.querySelector(".aktiviteter").classList.add("hide");
// document.querySelector(".ukendt").classList.add("hide");
// document.querySelector("#zombie-type").addEventListener("change", showUkendt);

// function showUkendt() {
//   console.log("showUkendt");
//   if (document.querySelector("#zombie-type").value === "ukendt-zombie") {
//     document.querySelector(".ukendt").classList.remove("hide");
//   }
// }

// ------------------------------------------------------------
// HER STARTER DEN KODE DER RENT FAKTISK SKAL BRUGES
// ------------------------------------------------------------

// find formular og elementer
const form = document.querySelector("#webform");
const tilmeldKnap = document.querySelector(".nyhedsbrev-knap");
const besked = document.querySelector("#tilmeld-besked");

// --- Tilmeld-knap ---
// tilmeldKnap.addEventListener("click", () => {
//   const email = form.email.value.trim();

//   if (!email) {
//     besked.textContent = "Indtast din e-mail først.";
//     besked.style.color = "red";
//   } else if (!email.includes("@")) {
//     besked.textContent = "E-mail skal indeholde @.";
//     besked.style.color = "red";
//   } else {
//     besked.textContent = "Tak! Du er nu tilmeldt nyhedsbrevet.";
//     besked.style.color = "green";
//   }
// });

// // --- Indsend-knap (validering) ---
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (!form.checkValidity()) {
//     form.reportValidity(); // viser browserens standardfejl
//   } else {
//     alert("Formular sendt!");
//     form.reset();
//     besked.textContent = "";
//   }
// });

// const inputNavn = document.querySelector('input[name="navn"]');
// const inputEmail = document.querySelector('input[name="email"]');
// const inputTelefon = document.querySelector('input[name="telefon"]');
// const inputBy = document.querySelector('input[name="by"]');
// const checkboxes = document.querySelectorAll('input[name="aktiviteter"]');

// function updateSummary() {
//   document.getElementById("sum-navn").textContent = inputNavn.value || "–";
//   document.getElementById("sum-email").textContent = inputEmail.value || "–";
//   document.getElementById("sum-telefon").textContent = inputTelefon.value || "–";
//   document.getElementById("sum-by").textContent = inputBy.value || "–";

//   const selected = [...checkboxes].filter((c) => c.checked).map((c) => c.value);

//   document.getElementById("sum-aktiviteter").textContent = selected.length > 0 ? selected.join(", ") : "–";
// }

// [inputNavn, inputEmail, inputTelefon, inputBy].forEach((el) => el.addEventListener("input", updateSummary));

// checkboxes.forEach((cb) => cb.addEventListener("change", updateSummary));
// function updateSummary() {
//   document.getElementById("sum-navn").textContent = inputNavn.value || "–";
//   document.getElementById("sum-email").textContent = inputEmail.value || "–";
//   document.getElementById("sum-telefon").textContent = inputTelefon.value || "–";
//   document.getElementById("sum-by").textContent = inputBy.value || "–";

//   const selected = [...checkboxes].filter((c) => c.checked).map((c) => c.value);

//   const container = document.getElementById("sum-aktiviteter");
//   container.innerHTML = "";

//   if (selected.length === 0) {
//     container.textContent = "–";
//     return;
//   }

//   selected.forEach((activity) => {
//     const badge = document.createElement("span");
//     badge.className = "activity-badge";
//     badge.textContent = activity;
//     container.appendChild(badge);
//   });
// }
// Hent elementer
