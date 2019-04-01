"use strict";

function setButtonActive(event) {
	let button = document.getElementById(event.currentTarget.id);
	button.classList.add("active");
}

function popup() {
	let type = element.getAttribute("date-type");
	let form = document.getElementsByClassName("confirmation")[0];

	if (type == "next") {
		form.classList.remove("disabled");
		// Populate the order using a fellow function like populate()
	} else {
		form.classList.add("disabled");
	}
}
