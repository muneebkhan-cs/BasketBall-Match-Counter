let homeCount = 0
let guestCount = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")


let winnerStatus = document.getElementById("statusWinner")

function addOnepoint(){
    homeCount += 1
    homeScore.textContent = homeCount
}
function addTwopoint(){
    homeCount += 2
    homeScore.textContent = homeCount
}
function addThreepoint(){
    homeCount += 3
    homeScore.textContent = homeCount
}
function addOnepointGuest(){
    guestCount += 1
    guestScore.textContent = guestCount
}
function addTwopointGuest(){
    guestCount += 2
    guestScore.textContent = guestCount
}
function addThreepointGuest(){
    guestCount += 3
    guestScore.textContent = guestCount
}


function declareWinner(){
    if (homeCount > guestCount)
    {
        let homeWinner = "Home Team Wins"
        winnerStatus.textContent = homeWinner
    }
    else
    {
        let guestWinner = "Guest Team Wins"
        winnerStatus.textContent = guestWinner
    }
}

function scoreReset(){
    guestCount = 0
    homeCount = 0
    homeScore.textContent = homeCount
    guestScore.textContent = guestCount
    winnerStatus.textContent= ""
}
