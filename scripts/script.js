let basketball_button = document.getElementById("basketball_button");
basketball_button.addEventListener("click", showBasketBallSchedule);


function showBasketBallSchedule() {
    if (document.getElementById("basketball_schedule").style.display  != "none"){
        document.getElementById("basketball_schedule").style.display  = "none";
        basketball_button.innerText = "Show Schedules"
    }
    else{
        document.getElementById("basketball_schedule").style.display  = "block";
        basketball_button.innerHTML = "Hide Schedules"
}
 
}
let archery_button = document.getElementById("archery_button");
archery_button.addEventListener("click", showArcherySchedule);


function showArcherySchedule() {
    if (document.getElementById("archery_schedule").style.display  != "none"){
        document.getElementById("archery_schedule").style.display  = "none";
        archery_button.innerText = "Show Schedules"
    }
    else{
        document.getElementById("archery_schedule").style.display  = "block";
        archery_button.innerHTML = "Hide Schedules"
}
 
}

let fencing_button = document.getElementById("fencing_button");
fencing_button.addEventListener("click", showFencingSchedule);


function showFencingSchedule() {
    if (document.getElementById("fencing_schedule").style.display  != "none"){
        document.getElementById("fencing_schedule").style.display  = "none";
        fencing_button.innerText = "Show Schedules"
    }
    else{
        document.getElementById("fencing_schedule").style.display  = "block";
        fencing_button.innerHTML = "Hide Schedules"
}
 
}
let golf_button = document.getElementById("golf_button");
golf_button.addEventListener("click", showGolfSchedule);


function showGolfSchedule() {
    if (document.getElementById("golf_schedule").style.display  != "none"){
        document.getElementById("golf_schedule").style.display  = "none";
        golf_button.innerText = "Show Schedules"
    }
    else{
        document.getElementById("golf_schedule").style.display  = "block";
        golf_button.innerHTML = "Hide Schedules"
}
 
}
let vollyball_button = document.getElementById("vollyball_button");
vollyball_button.addEventListener("click", showVollyBallSchedule);


function showVollyBallSchedule() {
    if (document.getElementById("vollyball_schedule").style.display  != "none"){
        document.getElementById("vollyball_schedule").style.display  = "none";
        vollyball_button.innerText = "Show Schedules"
    }
    else{
        document.getElementById("vollyball_schedule").style.display  = "block";
        vollyball_button.innerHTML = "Hide Schedules"
}
 
}


