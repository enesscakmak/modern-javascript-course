const add_item = document.getElementById("add-btn");
const item_input = document.getElementById("item-input");
const item_list_ul = document.getElementById("item-list");
const clear_button = document.getElementById("clear");
const filter_item = document.getElementById("filter");
const ul_li = document.querySelectorAll("li");
let editingItem = null;

window.addEventListener("load", (e) => {
	loadItems();
});

add_item.addEventListener("click", function (e) {
	e.preventDefault();
	const newItem = document.getElementById("item-input").value;
	if (newItem === "") return;

	if (document.getElementById("add-btn").classList.contains("update-btn")) {
		update_item(editingItem);
	} else {
		createListItem(newItem);

		//upddate local storage
		let items = localStorage.getItem("items")
			? JSON.parse(localStorage.getItem("items"))
			: [];

		items.push(newItem);
		localStorage.setItem("items", JSON.stringify(items));
	}
});

clear_button.addEventListener("click", function (e) {
	item_list_ul.innerHTML = "";
	localStorage.removeItem("items");
});

filter_item.addEventListener("keyup", function (e) {
	const searchText = e.target.value.toUpperCase();

	ul_li.forEach((li) => {
		if (li.textContent.toUpperCase().includes(searchText)) {
			li.style.display = "";
		} else {
			li.style.display = "none";
		}
	});
});

document.getElementById("item-list").addEventListener("click", function (e) {
	document.getElementById("item-input").value = e.target.textContent;
	document.getElementById("add-btn").textContent = "Update Item";
	document.getElementById("add-btn").classList.add("update-btn");
	if (e.target.tagName === "LI") {
		editingItem = e.target;
	}
});

function update_item(element) {
	let items = localStorage.getItem("items")
		? JSON.parse(localStorage.getItem("items"))
		: [];

	const oldValue = editingItem.textContent;
	const newValue = document.getElementById("item-input").value;

	let index = items.indexOf(oldValue);
	if (index !== -1) {
		items[index] = newValue;
	}

	localStorage.setItem("items", JSON.stringify(items));

	editingItem.firstChild.textContent = newValue;

	document.getElementById("add-btn").classList.remove("update-btn");
	editingItem = null;
	document.getElementById("add-btn").textContent = "+ Add Item";
	document.getElementById("item-input").value = "";
}

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
	item_list_ul.appendChild(li);

	button.addEventListener("click", function () {
		li.remove();
		removeItemFromStorage(itemText);
	});
}

function removeItemFromStorage(itemText) {
	let items = localStorage.getItem("items")
		? JSON.parse(localStorage.getItem("items"))
		: [];

	items = items.filter((item) => item !== itemText);

	localStorage.setItem("items", JSON.stringify(items));
}

function loadItems() {
	let items = localStorage.getItem("items")
		? JSON.parse(localStorage.getItem("items"))
		: [];

	items.forEach(createListItem);
}
