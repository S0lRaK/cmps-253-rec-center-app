"use strict";

function setButtonActive(event) {
	let button = document.getElementById(event.currentTarget.id);
	button.classList.add("active");
}

/* 
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
*/

function machineSelection() {
	let chosen = document.getElementById("select_options").value;
	if (chosen === "Weight Room") {
		document.getElementById("machine_selection").style.visibility = "visible";
	}
}

function stepByStep() {
	let nextStep = document.getElementById("step1");
	if (nextStep === "next") {
		document.getElementById("step2").style.visibility = "visible";
	}
}