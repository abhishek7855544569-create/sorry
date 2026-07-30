document.getElementById("sorryBtn").addEventListener("click", function() {
    document.getElementById("hiddenMessage").style.display = "block";

    this.innerText = "❤️ sorry ❤️";
});
const container = document.getElementById("sorryRain");

for(let i = 0; i < 80; i++){

    const sorry = document.createElement("div");
    sorry.classList.add("sorry");

    const emojis = ["❤️","🥺","😭","💖","🌹"];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    sorry.innerHTML = "SORRY MADAM JI " + emoji;

    sorry.style.left = Math.random() * 100 + "vw";
    sorry.style.fontSize = (15 + Math.random() * 25) + "px";
    sorry.style.animationDuration = (4 + Math.random() * 8) + "s";
    sorry.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(sorry);
}
