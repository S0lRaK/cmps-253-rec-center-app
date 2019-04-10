"use strict";

function togglePopUp() {
	const profileElement = document.getElementById("profile");
	const optionElements = document.querySelectorAll(".option");

	profileElement.hasAttribute("hidden")
		? showElement(profileElement, optionElements)
		: hideElement(profileElement, optionElements);
}

function showElement(profileElement, optionElements) {
	profileElement.removeAttribute("hidden");

	setTimeout(function() {
		optionElements.forEach(option => {
			option.classList.add("fade-in");
		});
	});
}

function hideElement(profileElement, optionElements) {
	optionElements.forEach(option => {
		option.classList.remove("fade-in");
	});

	profileElement.setAttribute("hidden", "");
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
