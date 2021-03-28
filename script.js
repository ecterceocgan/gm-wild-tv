document.addEventListener("DOMContentLoaded", (event) => {
  const wrapperDiv = document.getElementById("wrapper");
  const timeDiv = document.getElementById("time");
  const dayDiv = document.getElementById("day");
  const dateDiv = document.getElementById("date");
  setInterval(() => {
    const now = moment();
    if (now.hour() >= 6 && now.hour() < 18) {
      timeDiv.innerHTML = now.format("LT");
      dayDiv.innerHTML = now.format("dddd");
      dateDiv.innerHTML = now.format("MMMM D");
    } else {
      timeDiv.innerHTML = "";
      dayDiv.innerHTML = "";
      dateDiv.innerHTML = "";
    }
    const hoursSinceOn = Math.max(now.hour() - 6, 0);
    wrapperDiv.style.marginLeft = `${(hoursSinceOn / 12) * 12}vw`;
  }, 1000);
});
