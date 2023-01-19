let homeScore = 0;
let guestScore = 0;

homeEl = document.getElementById("home-el");
guestEl = document.getElementById("guest-el");


function homePoints1() {

    homeScore += 1;
    homeEl.textContent = homeScore;


}

function homePoints2() {

    homeScore += 2;
    homeEl.textContent = homeScore;


}

function homePoints3() {

    homeScore += 3;
    homeEl.textContent = homeScore;


}

function guestPoints1() {
    guestScore += 1;
    guestEl.textContent = guestScore;


}

function guestPoints2() {
    guestScore += 2;
    guestEl.textContent = guestScore;


}

function guestPoints3() {
    guestScore += 3;
    guestEl.textContent = guestScore;


}

function gameReset() {

    homeEl.textContent = homeScore = 0;
    guestEl.textContent = guestScore = 0;

}