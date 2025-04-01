const generate_button = document.getElementById("generate");

function fetchUser() {
	showSpinner();
	fetch("https://randomuser.me/api/")
		.then((response) => response.json())
		.then((data) => {
			hideSpinner();
			showUser(data.results[0]);
		});
}

function showUser(user) {
	const userPart = document.querySelector("#user");

	if (user.gender === "female") {
		document.body.style.backgroundColor = "dodgerblue";
	} else {
		document.body.style.backgroundColor = "pink";
	}

	userPart.innerHTML = `
    <div class="flex justify-between">
					<div class="flex">
						<img
							class="w-48 h-48 rounded-full mr-8"
							src="${user.picture.large}"
						/>
						<div class="space-y-3">
							<p id="name" class="text-xl">
								<span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
							</p>
							<p id="email" class="text-xl">
								<span class="font-bold">Email: </span>
								${user.email}
							</p>
							<p id="phone" class="text-xl">
								<span class="font-bold">Phone: </span>
								${user.cell}
							</p>
							<p id="location" class="text-xl">
								<span class="font-bold">Location: </span>
								${user.location.city}, ${user.location.country}
							</p>
							<p id="age" class="text-xl">
								<span class="font-bold">Age: </span> ${user.dob.age}
							</p>
						</div>
					</div>
				</div>
                `;
}

function showSpinner() {
	document.querySelector(".spinner").style.display = "block";
}

function hideSpinner() {
	document.querySelector(".spinner").style.display = "";
}

generate_button.addEventListener("click", fetchUser);
