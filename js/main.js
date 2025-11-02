// ---------- HOVED ----------

// Tjek at elementet findes
console.log(document.querySelector("#hotspothovede"));

// Lyt efter når musen går over elementet
document
  .querySelector("#hotspothovede")
  .addEventListener("mouseover", mouseOverHead);

// Funktion der kører når musen går over elementet
function mouseOverHead() {
  console.log("mouseOverHead");
  document.querySelector("#hotspothovede").style.fill = "blue"; // farve når musen er over
}

// Lyt efter når musen forlader elementet
document
  .querySelector("#hotspothovede")
  .addEventListener("mouseout", mouseOutHead);

// Funktion der kører når musen går væk
function mouseOutHead() {
  console.log("mouseOutHead");
  document.querySelector("#hotspothovede").style.fill = "red"; // farve når musen går væk
}

// Lyt efter klik på elementet
document.querySelector("#hotspothovede").addEventListener("click", clickHead);

// Funktion der kører når man klikker
function clickHead() {
  console.log("clickHead");
  document.querySelector(".info-text h2").textContent = "Hoved";
  document.querySelector(".info-text p").textContent =
    "Her kan du læse om hovedområdet og dets betydning.";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Info</h3><p>Hovedet styrer hele reaktionen.</p>";
}
// ---------- ARM ----------

// Tjek at elementet findes
console.log(document.querySelector("#hotspotarm"));

// Lyt efter når musen går over elementet
// ---------- ARM ----------

// Lyt efter når musen går over elementet
document
  .querySelector("#hotspotarm")
  .addEventListener("mouseover", mouseOverArm);

// Funktion der kører når musen går over elementet
function mouseOverArm() {
  console.log("mouseOverArm");
  document.querySelector("#hotspotarm").style.fill = "blue"; // farve når musen er over
}

// Lyt efter når musen forlader elementet
document.querySelector("#hotspotarm").addEventListener("mouseout", mouseOutArm);

// Funktion der kører når musen går væk
function mouseOutArm() {
  console.log("mouseOutArm");
  document.querySelector("#hotspotarm").style.fill = "red"; // farve når musen går væk
}

// Lyt efter klik på elementet
document.querySelector("#hotspotarm").addEventListener("click", clickArm);

// ---------- SKULDER ----------

// Tjek at elementet findes
console.log(document.querySelector("#hotspotskulder"));

// Lyt efter når musen går over elementet
document
  .querySelector("#hotspotskulder")
  .addEventListener("mouseover", mouseOverShoulder);

// Funktion der kører når musen går over elementet
function mouseOverShoulder() {
  console.log("mouseOverShoulder");
  document.querySelector("#hotspotskulder").style.fill = "blue"; // farve når musen er over
}

// Lyt efter når musen forlader elementet
document
  .querySelector("#hotspotskulder")
  .addEventListener("mouseout", mouseOutShoulder);

// Funktion der kører når musen går væk
function mouseOutShoulder() {
  console.log("mouseOutShoulder");
  document.querySelector("#hotspotskulder").style.fill = "red"; // farve når musen går væk
}

// Lyt efter klik på elementet
document
  .querySelector("#hotspotskulder")
  .addEventListener("click", clickShoulder);
