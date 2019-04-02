"use strict";

const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let calendarSpanElement = document.querySelector("#calendar-month span");

const months = [
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
];

document.addEventListener("DOMContentLoaded", event => {
	initialize();
});

function initialize() {
	showCalendar(currentMonth, currentYear);
	setClickWeeks();
}

function nextMonth() {
	currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
	currentMonth = (currentMonth + 1) % 12;
	showCalendar(currentMonth, currentYear);
}

function previousMonth() {
	currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
	currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
	showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
	calendarSpanElement.innerHTML = months[month] + " " + year;
	// Get the day of the week (-1 to start on Monday)
	let firstDayOfWeek = new Date(year, month).getDay() - 1;

	let calendarWeeksElement = document.getElementById("calendar-weeks");
	calendarWeeksElement.innerHTML = "";

	let dayNum = 1;
	for (let weekIndex = 0; weekIndex < 6; weekIndex++) {
		let weekDivElement = document.createElement("div");
		weekDivElement.classList.add("calendar-week");

		for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
			if (weekIndex === 0 && dayIndex < firstDayOfWeek) {
				let daySpanElement = document.createElement("span");
				daySpanElement.classList.add("calendar-day");
				weekDivElement.appendChild(daySpanElement);
			} else if (dayNum > getDaysInMonth(month, year)) {
				break;
			} else {
				let daySpanElement = document.createElement("span");
				daySpanElement.classList.add("calendar-day");
				daySpanElement.innerHTML = dayNum;

				if (
					dayNum === today.getDate() &&
					year === today.getFullYear() &&
					month === today.getMonth()
				) {
					weekDivElement.classList.add("selected");
				}
				weekDivElement.appendChild(daySpanElement);
				dayNum++;
			}
		}
		calendarWeeksElement.appendChild(weekDivElement);
	}
}

function getDaysInMonth(month, year) {
	return 32 - new Date(year, month, 32).getDate();
}

function setClickWeeks() {
	let calendarWeeks = document.querySelectorAll(
		"#calendar-weeks .calendar-week"
	);
	calendarWeeks.forEach(week => {
		week.addEventListener("click", event => {
			setSelectedWeek(calendarWeeks, week);
			setWeekEventsList(calendarWeeks, week);
		});
	});
}

function setSelectedWeek(weeks, week) {
	weeks.forEach(week => {
		week.classList.remove("selected");
	});

	week.classList.add("selected");
}

function setWeekEventsList(weeks, week) {
	let weekEventsList = document.querySelectorAll("#list .week-events");
	
	if (week == weeks[0]) {
		weekEventsList[0].classList.remove("hidden");
		weekEventsList[1].classList.add("hidden");
	} else if (week == weeks[1]) {
		weekEventsList[0].classList.add("hidden");
		weekEventsList[1].classList.remove("hidden");
	}
}

function setFilter() {
	
}
