function addPoints(team, point){
    const teamPoints=document.getElementById(`points-${team}`)
    let currentPoints=Number(teamPoints.textContent)
    currentPoints+=point
    teamPoints.textContent=currentPoints
}

function newGame(){
    document.getElementById("points-a").textContent="0"

    document.getElementById("points-b").textContent="0"
}

