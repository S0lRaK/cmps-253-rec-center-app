"use strict";

window.onload = initialize;

//counts the total people in the gym
let totalPeople = 0;
let people = 0;

function initialize() {
	setCurrentDateTime();
	setMeters();
	setGauge();
	newsCheck();
}

function setCurrentDateTime() {
	let months = new Array(
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	);
	let now = new Date();
	let day = now.getDate();
	let month = now.getMonth();
	let currentMonth = months[month];
	let year = now.getFullYear();
	let time = now.toLocaleTimeString();
	now = currentMonth + " " + day + ", " + year + " " + time;
	document.getElementById("date").innerHTML = now;
}

function newsCheck() {
	window.onwheel = moreNews;
}

function onWheel(event) {
	moreNews.off("DOMMouseScroll mousewheel");
}

function moreNews(event) {
	let newsRows = document.querySelectorAll(".newsRow.hidden");

	newsRows.forEach(row => {
		row.classList.remove("hidden");
	});
}

function setMeters() {
	let progressBars = document.querySelectorAll("progress");
	let index = 0;
	for (let bar of progressBars) {
		people = getRandomInt(0, 26);
		bar.value = people;
		totalPeople = totalPeople + people;
		setBarNums(index, people);
		index++;
	}
}

function setBarNums(progressBarIndex, progressBarValue) {
	let progressBarNum;
	switch (progressBarIndex) {
		case 0:
			progressBarNum = document.getElementById("gymNum");
			break;
		case 1:
			progressBarNum = document.getElementById("wRoomNum");
			break;
		case 2:
			progressBarNum = document.getElementById("poolNum");
			break;
		case 3:
			progressBarNum = document.getElementById("sqNum");
			break;
		case 4:
			progressBarNum = document.getElementById("fieldNum");
			break;
	}

	let spanElement = document.createElement("span");
	spanElement.innerText = progressBarValue;
	progressBarNum.append(spanElement);
}

function setGauge() {
	const gauge = document.getElementById("gauge");
	if (totalPeople <= 20) {
		gauge.src = "images/empty.jpg";
	} else if (totalPeople <= 40) {
		gauge.src = "images/empty2.jpg";
	} else if (totalPeople <= 60) {
		gauge.src = "images/half.jpg";
	} else if (totalPeople <= 80) {
		gauge.src = "images/half2.jpg";
	} else if (totalPeople <= 100) {
		gauge.src = "images/full2.jpg";
	} else if (totalPeople > 100) {
		gauge.src = "images/full.jpg";
	}
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
