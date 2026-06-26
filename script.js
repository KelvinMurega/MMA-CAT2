const video = document.getElementById("wildlifeVideo");
const button = document.getElementById("toggleButton");

button.addEventListener("click", () => {

    if (video.style.display === "none") {

        video.style.display = "block";
        video.play();

        button.textContent = "🌿 Hide Video";

    } else {

        video.pause();
        video.style.display = "none";

        button.textContent = "▶ Show & Play Video";

    }

});