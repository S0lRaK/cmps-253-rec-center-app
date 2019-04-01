"use strict";

var check = true;
window.onload = setCurrentDateTime;
window.onload = newsCheck;
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
function newsCheck(){
	if(check == true){
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
