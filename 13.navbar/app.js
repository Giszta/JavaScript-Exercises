const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
	links.classList.toggle("aaashow-links");
	navToggle.classList.toggle("show-links");
});
