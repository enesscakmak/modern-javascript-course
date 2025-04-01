// const joke_button = document.getElementById("joke-btn");
// const joke_text = document.getElementById("joke");

// joke_button.addEventListener("click", function (e) {
// 	fetch("https://api.chucknorris.io/jokes/random")
// 		.then((response) => response.json())
// 		.then((data) => replace_joke(data))
// 		.catch((error) => console.error("Error:", error));
// });

// function replace_joke(joke) {
// 	joke_text.textContent = joke.value;
// }

//course version ↓

const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

const generateJoke = () => {
	const xhr = new XMLHttpRequest();

	xhr.open("GET", "https://api.chucknorris.io/jokes/random");

	xhr.onreadystatechange = function () {
		if (this.readyState === 4) {
			if (this.status === 200) {
				jokeEl.innerHTML = JSON.parse(this.responseText).value;
			} else {
				jokeEl.innerHTML = "Something went wrong";
			}
		}
	};
};

jokeBtn.addEventListener("click", generateJoke);

document.addEventListener("DOMContentLoaded", generateJoke);
