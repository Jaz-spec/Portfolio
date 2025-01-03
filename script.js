let projectImage = document.querySelector("#projectImage");
let projectDescription = document.querySelector("#projectDescription");

//Project descriptions
let weatherApp =
	"WEATHER APP:<br/>I built this using JavaScript React. This has been one of my favorite projects to build as I particularly enjoy building functional and interactive sites. To further improve this project, I'd like to use global states that allow the temperatures on the weekly forecast to be changeable to Fahrenheit. And I'd like to add graphs showing hourly data for precipitation and temperature. ";
let worldClock =
	"WORLD CLOCK:<br/>This was one of my first JavaScript projects and mainly an exercise in API integration and formatting time. I want use this project as a basis to practice building some fun and creative CSS effects.";
let podcastPage =
	"PODCAST PAGE:<br/>This was a competition to build a website showcasing your favorite podcast. The content itself is taken from the original site. I used this as an exercise to create a tidy and responsive website that kept in line with the podcasts branding and style. ";
let recipeGenerator =
	"RECIPE GENERATOR:<br/>This was an exercise in AI prompting, and I really enjoyed the outcome of this site. Like the weather app, I went for a modern and simplistic dark mode design. I often find busy sites overwhelming and difficult to engage with - especially recipe pages. I enjoy building content-focused and simplistic sites as I enjoy interacting with them. ";
let game =
	"A LITTLE ALIEN GAME: <br/>This is the first game I have built and I thoroughly enjoyed it. Whilst I'm not aiming for a career in game development, I have already begun to continue this as a hobby. I plan to work on this game further, first by adding some chaotic elements, perhaps similar to Pacman, the chance to kill the enemy aliens for a set amount of time. I'd also like to add levels to the game and animate the characters.  ";

//setting initial states
projectDescription.innerHTML = weatherApp;
projectImage.style.backgroundImage =
	"linear-gradient( to right, rgba(0, 204, 255, 0.2) 0%, transparent 50%, transparent 100%), url(images/weatherApp.png)";

//event listeners for project list
let pl1 = document.querySelector("#pl1");
pl1.addEventListener("mouseover", function changeImage1(event) {
	event.preventDefault();
	projectImage.style.backgroundImage =
		"linear-gradient( to right, rgba(0, 204, 255, 0.2) 0%, transparent 50%, transparent 100%), url(images/weatherApp.png)";
	projectDescription.innerHTML = weatherApp;
});

let pl2 = document.querySelector("#pl2");
pl2.addEventListener("mouseover", function changeImage2(event) {
	event.preventDefault();
	projectImage.style.backgroundImage =
		"linear-gradient( to right, rgba(0, 214, 255, 0.3) 0%, transparent 50%, transparent 100%), url(images/clock.png)";
	projectDescription.innerHTML = worldClock;
});

let pl3 = document.querySelector("#pl3");
pl3.addEventListener("mouseover", function changeImage3(event) {
	event.preventDefault();
	projectImage.style.backgroundImage =
		"linear-gradient( to right, rgba(0, 224, 255, 0.3) 0%, transparent 50%, transparent 100%), url(images/podcast.png)";
	projectDescription.innerHTML = podcastPage;
});

let pl4 = document.querySelector("#pl4");
pl4.addEventListener("mouseover", function changeImage4(event) {
	event.preventDefault();
	projectImage.style.backgroundImage =
		"linear-gradient( to right, rgba(0, 234, 255, 0.2) 0%, transparent 50%, transparent 100%), url(images/recipe.png)";
	projectDescription.innerHTML = recipeGenerator;
});

let pl5 = document.querySelector("#pl5");
pl5.addEventListener("mouseover", function changeImage5(event) {
	event.preventDefault();
	projectImage.style.backgroundImage =
		"linear-gradient( to right, rgba(0, 234, 255, 0.2) 0%, transparent 50%, transparent 100%), url(images/game.png)";
	projectDescription.innerHTML = game;
});

//changing description for phones
let nextButton = document.querySelector("#descriptionButton");
nextButton.addEventListener("click", changeDescription);

function changeDescription(event) {
	event.preventDefault();
	let firstWord = projectDescription.innerHTML.split(" ");

	switch (firstWord[0]) {
		case "WEATHER":
			projectDescription.innerHTML = worldClock;
			break;
		case "WORLD":
			projectDescription.innerHTML = podcastPage;
			break;
		case "PODCAST":
			projectDescription.innerHTML = recipeGenerator;
			break;
		case "RECIPE":
			projectDescription.innerHTML = game;
			break;
		case "A":
			projectDescription.innerHTML = weatherApp;
	}
}

//preventing a phone opening the game
let mediaQuery = window.matchMedia("(width < 700px)");
if (mediaQuery.matches) {
	pl5.onclick = function (event) {
		alert("Sorry, this only works on desktop");
		return false;
	};
}
