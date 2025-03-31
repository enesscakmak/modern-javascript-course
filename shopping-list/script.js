const add_item = document.getElementById("add-btn");
const item_input = document.getElementById("item-input");
const item_list_ul = document.getElementById("item-list");
const clear_button = document.getElementById("clear");
const filter_item = document.getElementById("filter");
const ul_li = document.getElementsByTagName("li");

window.addEventListener("load", (e) => {
	loadItems();
});

add_item.addEventListener("click", function (e) {
	e.preventDefault();

	const newItem = document.getElementById("item-input").value;
	if (newItem === "") return;

	createListItem(newItem);

	//upddate local storage
	let items = localStorage.getItem("items")
		? JSON.parse(localStorage.getItem("items"))
		: [];

	items.push(newItem);
	localStorage.setItem("items", JSON.stringify(items));
});

clear_button.addEventListener("click", function (e) {
	console.log("asda");

	while (item_list_ul.childElementCount > 0) {
		item_list_ul.innerHTML = "";
	}
});

filter_item.addEventListener("keyup", function (e) {
	const searchText = e.target.value.toUpperCase();

	for (i = 0; i < ul_li.length; i++) {
		if (ul_li[i].textContent.toUpperCase().indexOf(searchText) !== -1) {
			ul_li[i].style.display = "";
		} else {
			ul_li[i].style.display = "none";
		}
	}
});

function saveLocal() {
	let items = localStorage.getItem("items")
		? JSON.parse(localStorage.getItem("items"))
		: [];

	const newItem = document.getElementById("item-input").value;
	items.push(newItem);

	localStorage.setItem("items", JSON.stringify(items));

	console.log(items);
}

function createListItem(itemText) {
	const li = document.createElement("li");
	li.textContent = itemText;

	// Remove button
	const button = document.createElement("button");
	button.classList.add("remove-item", "btn-link", "text-red");

	const i = document.createElement("i");
	i.classList.add("fa-solid", "fa-xmark");

	button.appendChild(i);
	li.appendChild(button);

	// append to ul
	document.getElementById("item-list").appendChild(li);
}

function loadItems() {
	let items = localStorage.getItem("items")
		? JSON.parse(localStorage.getItem("items"))
		: [];

	items.forEach(createListItem);
}
