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
	let selectedRoom = document.getElementById("room-selection").value;
	if (selectedRoom === "Weight Room") {
		document.getElementById("machine-selection").classList.remove("hidden");
	}
}
/** 
What is this confusing nonsense, make sure to fix this

function stepByStep() {
	let firstStepBtn = element.getAttribute("data-type");

	let firstStep = document.getElementById("step1");
	if (firstStep === "next") {
		document.getElementById("step2").style.visibility = "visible";
	}
}
*/

function visibility(id) {
	let step = document.getElementById(id);
	if (step.style.visibility == "hidden") {
		step.style.visibility = "visible";
	}
	else
	{
		step.style.visibility = "hidden";
	}
}