const button = document.getElementById("video-player");
const videoDiv = document.getElementById("video-div");
const width = "382";
const height = "850";
button.addEventListener("click", function () {
  console.log("btn-clicked");
  const video = document.createElement("video");
  video.src = "/assets/WhatsApp Video 2024-09-14 kl. 21.14.45_6aa23317.mp4";
  video.width = width;
  video.height = height;
  video.controls = true;

  videoDiv.innerHTML = "";
  videoDiv.appendChild(video);
});
