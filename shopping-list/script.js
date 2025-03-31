const add_item = document.getElementById("add-btn");
const item_input = document.getElementById("item-input");
const item_list_ul = document.getElementById("item-list");
const clear_button = document.getElementById("clear");
const filter_item = document.getElementById("filter");

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
	item_list_ul.innerHTML = "";
	localStorage.removeItem("items");
});

filter_item.addEventListener("keyup", function (e) {
	const searchText = e.target.value.toUpperCase();
	const ul_li = document.querySelectorAll("#item-list-li");

	ul_li.forEach(function (li) {
		if (li.textContent.toUpperCase().includes(searchText)) {
			li.computedStyleMap.display = "";
		} else {
			li.style.display = "none";
		}
	});
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
