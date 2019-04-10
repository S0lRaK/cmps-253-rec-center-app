"use strict";

function togglePopUp() {
	const profileElement = document.getElementById("profile");

	profileElement.hasAttribute("hidden")
		? profileElement.removeAttribute("hidden")
		: profileElement.setAttribute("hidden", "");
}

function toggleOption(divId) {
    stopEventPropagation;
    
	const options = document.querySelectorAll("#profile .option");

	options.forEach(option => {
		option.id == divId
			? option.classList.remove("hidden")
			: option.classList.add("hidden");
	});
}

function stopEventPropagation() {
	if (!e) var e = window.event;
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();
}
