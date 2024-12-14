let projectImage = document.querySelector("#projectImage");

let pl1 = document.querySelector("#pl1");
pl1.addEventListener("mouseover", function changeImage(event) {
	event.preventDefault();
	projectImage.style.backgroundImage =
		"linear-gradient( to right, rgba(0, 204, 255, 0.2) 0%, transparent 50%, transparent 100%), url(/src/weatherApp.png)";
});

let pl2 = document.querySelector("#pl2");
pl2.addEventListener("mouseover", function changeImage(event) {
	event.preventDefault();
	projectImage.style.backgroundImage =
		"linear-gradient( to right, rgba(0, 214, 255, 0.3) 0%, transparent 50%, transparent 100%), url(/src/clock.png)";
});

let pl3 = document.querySelector("#pl3");
pl3.addEventListener("mouseover", function changeImage(event) {
	event.preventDefault();
	projectImage.style.backgroundImage =
		"linear-gradient( to right, rgba(0, 224, 255, 0.3) 0%, transparent 50%, transparent 100%), url(/src/podcast.png)";
});

let pl4 = document.querySelector("#pl4");
pl4.addEventListener("mouseover", function changeImage(event) {
	event.preventDefault();
	projectImage.style.backgroundImage =
		"linear-gradient( to right, rgba(0, 234, 255, 0.2) 0%, transparent 50%, transparent 100%), url(/src/recipe.png)";
});
