const global = {
	currentPage: window.location.pathname,
};

function highlightActiveLink() {
	const links = document.querySelectorAll(".nav-link");
	links.forEach((link) => {
		if (link.getAttribute("href") === global.currentPage) {
			link.classList.add("active");
		}
	});
}

async function displayPopularMovies() {
	const { results } = await fetchAPIData("movie/popular");
	results.forEach((movie) => {
		const div = document.createElement("div");
		div.classList.add("card");
		div.innerHTML = `
          <a href="movie-details.html?id=${movie.id}">
            ${
				movie.poster_path
					? `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />`
					: `<img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${movie.title}"
            />`
			}
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
        
        `;

		document.querySelector("#popular-movies").appendChild(div);
	});
}

async function fetchAPIData(endpoint) {
	const API_KEY = "d555f8a0040c55369359f0694fc709ba";
	const API_URL = "https://api.themoviedb.org/3/";

	const response = await fetch(
		`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
	);

	const data = await response.json();

	return data;
}

function init() {
	switch (global.currentPage) {
		case "/js-course/flixx-app/":
		case "/js-course/flixx-app/index.html":
			displayPopularMovies();
			break;
		case "/js-course/flixx-app/shows.html":
			console.log("Shows");
			break;
		case "/js-course/flixx-app/movie-details.html":
			console.log("Movie Details");
			break;
		case "/js-course/flixx-app/tv-details.html":
			console.log("TV Details");
			break;
		case "/js-course/flixx-app/search.html":
			console.log("search");
			break;
		default:
			break;
	}
	highlightActiveLink();
}

document.addEventListener("DOMContentLoaded", init);
