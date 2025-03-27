window.addEventListener("keypress", (e) => {
	const insert = document.getElementById("insert");
	const key = insert.children[0];
	const keyCode = insert.children[1];
	const code = insert.children[2];

	key.innerHTML = `${e.key}<small>e.key</small>`;
	keyCode.innerHTML = `${e.keyCode}<small>e.keyCode</small>`;
	code.innerHTML = `${e.code}<small>e.code</small>`;
});
