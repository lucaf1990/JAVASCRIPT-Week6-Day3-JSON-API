let spaceForClock = document.getElementById("clock");
let resetTimer = document.querySelector("button");
console.log(resetTimer);
console.log(spaceForClock);

let y = parseInt(sessionStorage.getItem("time")) || 0;
function addTimerToPage() {
  let x = setInterval(() => {
    spaceForClock.innerHTML = y++;
    sessionStorage.setItem("time", y);
  }, 1000);
}
window.onload = addTimerToPage;
function resetCounter() {
  window.sessionStorage.removeItem(addTimerToPage);
}
resetTimer.onclick = resetCounter;
