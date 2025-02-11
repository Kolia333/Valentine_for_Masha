
let audio = new Audio("16f5f3b202181c3.mp3"); 
audio.loop = true; 


document.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
    }
}, { once: true }); 


document.getElementById("envelope").addEventListener("click", function() {
    showMessage("Очікуй на подарунок в реальному житті! 🎁💖");
});

document.getElementById("showMessage").addEventListener("click", function() {
    showMessage("Я кохаю тебе більше за все у світі! 💕");
});


function showMessage(text) {
    let message = document.querySelector("#message p");
    let gif = document.querySelector(".gif");

    typeText(text, message);
    gif.classList.add("fade-in");

    createHearts();
}


function typeText(text, element) {
    let i = 0;
    element.innerHTML = "";
    let interval = setInterval(() => {
        element.innerHTML += text[i];
        i++;
        if (i >= text.length) clearInterval(interval);
    }, 100);
}


function createHearts() {
    for (let i = 0; i < 20; i++) { 
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        document.body.appendChild(heart);
        
        let size = Math.random() * 20 + 10;
        heart.style.fontSize = size + "px";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
