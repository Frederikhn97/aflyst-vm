// ---------- HOVED ----------

const head = document.querySelector("#hotspothovede");
const arm = document.querySelector("#hotspotarm");
const skulder = document.querySelector("#hotspotskulder");

console.log(head);

head.addEventListener("mouseover", mouseOverHead);

head.addEventListener("mouseout", mouseOutHead);
head.addEventListener("click", clickHead);

function mouseOverHead() {
  console.log("mouseOverHead");
  head.style.fill = "blue";
}
function mouseOutHead() {
  console.log("mouseOutHead");
  head.style.fill = "red";
}

function clickHead() {
  console.log("clickHead");

  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");

  document.querySelector("#requirement").addEventListener("animationend", cleanup);

  document.querySelector(".info-text h2").textContent = "Hoved";
  document.querySelector(".info-text p").textContent = "";
  document.querySelector("#efficiency").innerHTML = "<h3>Aktiviteter og fællesskab i VM’s ånd</h3><p>Selvom VM er aflyst, kan du stadig mærke boldens glæde. Deltag i “Fællesfodbold for pensionister” – et hyggeligt miniturneringsformat med blandede hold, korte kampe og masser af grin. Her handler det ikke om at vinde, men om at få frisk luft, motion og fællesskab. </p>";
  document.querySelector("#requirement").innerHTML = "<h3></h3><p>Sådan deltager du:<br>• Mød op i parken hver tirsdag kl. 10<br>• Alle niveauer er velkomne<br>• Kampe spilles i “VM-format” med grupper og finaler<br>• Kaffe og medaljer efter kampen</p>";
}

// ---------- ARM ----------

console.log(arm);

arm.addEventListener("mouseover", mouseOverArm);
arm.addEventListener("mouseout", mouseOutArm);
arm.addEventListener("click", clickArm);

function mouseOverArm() {
  console.log("mouseOverArm");
  arm.style.fill = "blue";
}

function mouseOutArm() {
  console.log("mouseOutArm");
  arm.style.fill = "red";
}
function clickArm() {
  console.log("clickArm");

  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");

  document.querySelector("#requirement").addEventListener("animationend", cleanup);

  document.querySelector(".info-text h2").textContent = "Arm";
  document.querySelector(".info-text p").textContent = "";
  document.querySelector("#efficiency").innerHTML = "<h3>Aktiviteter og fællesskab i VM’s ånd</h3><p>Når kampene udebliver, står fællesskabet klar. Deltag i vores VM-quiz, hvor du kan teste din viden om alt fra bolden i ’82 til dommerdramaer.<br>Eller nyd en hyggelig fællesspisning, hvor dagens tema altid er sport – og dessertens navn er “Guldmedalje”.<br>For de mere stille stunder byder vi på bridge og kaffe i klubhuset.</p>";
  document.querySelector("#requirement").innerHTML = "<h3></h3><p>• Mandag: VM-quiz i forsamlingshuset<br>• Onsdag: Fællesspisning “Middag med Messi”<br>• Fredag: Bridge-turnering med præmier<br>• Lørdag: Kaffe og småkager – ingen offside!</p>";
}

// ---------- SKULDER ----------

console.log(document.querySelector("#hotspotskulder"));

document.querySelector("#hotspotskulder").addEventListener("mouseover", mouseOverShoulder);

document.querySelector("#hotspotskulder").addEventListener("mouseout", mouseOutShoulder);

document.querySelector("#hotspotskulder").addEventListener("click", clickShoulder);

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

  document.querySelector("#requirement").addEventListener("animationend", cleanup);

  document.querySelector(".info-text h2").textContent = "Skulder";
  document.querySelector(".info-text p").textContent = "";
  document.querySelector("#efficiency").innerHTML = "<h3>Replays og nostalgi</h3><p>Selvom bolden ikke ruller i år, kan du stadig mærke magien. Dyk ned i vores samling af gamle VM-finaler, legendariske mål og dokumentarer.<br>Start med klassikeren “Danmark – Europamestre 1992” og mærk stoltheden igen. Lav popcorn, tænd for fjernsynet – og lad stemningen vende tilbage.</p>";
  document.querySelector("#requirement").innerHTML = "<h3></h3><p>Se nu:<br>• VM-finalen 1986 – Maradona magi<br>• Danmark mod Nigeria, 1998<br>• Dokumentar: “Miraklet i Sverige – EM ’92”<br>• YouTube: “De sjoveste fodbolduheld”</p>";
}

function cleanup() {
  console.log("cleanup");
  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#requirement").classList.remove("fadeIn");
}
