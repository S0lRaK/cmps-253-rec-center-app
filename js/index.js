"use strict";

window.onload = initialize;

//counts the total people in the gym
let totalPeople = 0;
let check = true;

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
	if (check == true) {
		window.onwheel = moreNews;
	}
}

function onWheel(event) {
	moreNews.off('DOMMouseScroll mousewheel');	
}

function moreNews(event) {
	let displayRow = document.getElementById("newsR3");
	displayRow.style = true;	
}

function setMeters() {
	let progressBars = document.querySelectorAll("progress");
	for(let bar of progressBars){
		let people = getRandomInt(0, 26);
		bar.value = people;
		totalPeople = totalPeople + people;
	}
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
