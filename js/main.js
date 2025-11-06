// ---------- HOVED ----------

console.log(document.querySelector("#hotspothovede"));

document
  .querySelector("#hotspothovede")
  .addEventListener("mouseover", mouseOverHead);

document
  .querySelector("#hotspothovede")
  .addEventListener("mouseout", mouseOutHead);
document.querySelector("#hotspothovede").addEventListener("click", clickHead);

function mouseOverHead() {
  console.log("mouseOverHead");
  document.querySelector("#hotspothovede").style.fill = "blue";
}
function mouseOutHead() {
  console.log("mouseOutHead");
  document.querySelector("#hotspothovede").style.fill = "red";
}

function clickHead() {
  console.log("clickHead");

  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");

  document
    .querySelector("#requirement")
    .addEventListener("animationend", cleanup);

  document.querySelector(".info-text h2").textContent = "Hoved";
  document.querySelector(".info-text p").textContent =
    "Her kan du læse om hovedområdet og dets betydning.";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Info</h3><p>Hovedet styrer hele reaktionen.</p>";
}

// ---------- ARM ----------

console.log(document.querySelector("#hotspotarm"));

document
  .querySelector("#hotspotarm")
  .addEventListener("mouseover", mouseOverArm);
document.querySelector("#hotspotarm").addEventListener("mouseout", mouseOutArm);
document.querySelector("#hotspotarm").addEventListener("click", clickArm);

function mouseOverArm() {
  console.log("mouseOverArm");
  document.querySelector("#hotspotarm").style.fill = "blue";
}

function mouseOutArm() {
  console.log("mouseOutArm");
  document.querySelector("#hotspotarm").style.fill = "red";
}
function clickArm() {
  console.log("clickArm");

  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");

  document
    .querySelector("#requirement")
    .addEventListener("animationend", cleanup);

  document.querySelector(".info-text h2").textContent = "Arm";
  document.querySelector(".info-text p").textContent =
    "Armen repræsenterer handling og samarbejde.";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Effektivitet</h3><p>Armen udfører arbejdet – klar til indsats.</p>";
}

// ---------- SKULDER ----------

console.log(document.querySelector("#hotspotskulder"));

document
  .querySelector("#hotspotskulder")
  .addEventListener("mouseover", mouseOverShoulder);

document
  .querySelector("#hotspotskulder")
  .addEventListener("mouseout", mouseOutShoulder);

document
  .querySelector("#hotspotskulder")
  .addEventListener("click", clickShoulder);

function mouseOverShoulder() {
  console.log("mouseOverShoulder");
  document.querySelector("#hotspotskulder").style.fill = "blue";
}
function mouseOutShoulder() {
  console.log("mouseOutShoulder");
  document.querySelector("#hotspotskulder").style.fill = "red";
}
function clickShoulder() {
  console.log("clickShoulder");

  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");

  document
    .querySelector("#requirement")
    .addEventListener("animationend", cleanup);

  document.querySelector(".info-text h2").textContent = "Skulder";
  document.querySelector(".info-text p").textContent =
    "Skulderen står for støtte og balance.";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Detaljer</h3><p>Skulderen holder sammen på systemet.</p>";
}

function cleanup() {
  console.log("cleanup");
  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#requirement").classList.remove("fadeIn");
}
