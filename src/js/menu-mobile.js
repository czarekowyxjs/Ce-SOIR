const btn = document.querySelector("#menu-btn");
const nav = document.querySelector(".nav");
const navLi = document.querySelectorAll('.nav ul li');

btn.addEventListener('click', () => {
	btn.classList.toggle("active");
	nav.classList.toggle("visible");
	document.body.classList.toggle("overflow-hidden");

	navLi.forEach((item) => {
		item.addEventListener('click', () => {
			btn.classList.remove("active");
			nav.classList.remove("visible");
			document.body.classList.remove("overflow-hidden");
		}, false);
	});

}, false);
