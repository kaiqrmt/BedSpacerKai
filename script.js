// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// ROOMS: edit this list to update the status of each room.
// status can be "occupied", "construction", or "available"
const rooms = [
  { name: "Room 1", status: "occupied" },
  { name: "Room 2", status: "occupied" },
  { name: "Room 3", status: "available" },
  { name: "Room 4", status: "available" },
  { name: "Room 5", status: "available" },
  { name: "Room 6", status: "available" }
];
const labels = { occupied: "Occupied", construction: "Under construction", available: "Available" };

document.getElementById("room-grid").innerHTML = rooms.map(r =>
  `<div class="room ${r.status}"><div class="num">${r.name}</div><div class="status">${labels[r.status]}</div></div>`
).join("");

// Lightbox gallery
const images = Array.from(document.querySelectorAll(".gallery img"));
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let current = 0;

function show(i) {
  current = (i + images.length) % images.length;
  lightboxImg.src = images[current].src;
  lightboxImg.alt = images[current].alt;
}
function openBox(i) { show(i); lightbox.classList.add("open"); lightbox.setAttribute("aria-hidden", "false"); }
function closeBox() { lightbox.classList.remove("open"); lightbox.setAttribute("aria-hidden", "true"); }

images.forEach((img, i) => img.addEventListener("click", () => openBox(i)));
lightbox.querySelector(".close").addEventListener("click", closeBox);
lightbox.querySelector(".prev").addEventListener("click", () => show(current - 1));
lightbox.querySelector(".next").addEventListener("click", () => show(current + 1));
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeBox(); });
document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeBox();
  if (e.key === "ArrowLeft") show(current - 1);
  if (e.key === "ArrowRight") show(current + 1);
});
