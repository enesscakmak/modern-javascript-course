const add_item = document.getElementById("add-btn");
const item_list_ul = document.getElementById("item-list");
const remove_button = document.getElementsByClassName("remove-item");

item_list_ul.addEventListener("click", function (e) {
	e.preventDefault();
	console.log(e.target.parentElement.parentElement);

	if (e.target.closest("button").classList.contains("btn")) {
		const ul = document.getElementById("item-list");
		const li = document.createElement("li");
		const button = document.createElement("button");
		const i = document.createElement("i");

		button.classList.add("remove-item", "btn-link", "text-red");
		i.classList.add("fa-solid", "fa-xmark");

		li.textContent = document.getElementById("item-input").value;
		li.appendChild(button);
		button.appendChild(i);
		ul.appendChild(li);
	}
	if (e.target.closest("button").classList.contains("remove-item")) {
		e.target.closest("li").remove();
	}
});

console.log(remove_button);
