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


document.addEventListener('DOMContentLoaded', () => {
    const countriesData = [
        { countryRank: 1, country: 'AUS', goldMedals: 3, silverMedals: 2, bronzeMedals: 0},
        { countryRank: 2, country: 'CNA', goldMedals: 3, silverMedals: 0, bronzeMedals: 1},
        { countryRank: 3, country: 'KOR', goldMedals: 2, silverMedals: 2, bronzeMedals: 1},
        { countryRank: 4, country: 'USA', goldMedals: 1, silverMedals: 2, bronzeMedals: 2 },
        { countryRank: 5, country: 'FRA',  goldMedals: 1, silverMedals: 2, bronzeMedals: 1},
        { countryRank: 6, country: 'BEL', goldMedals: 1, silverMedals: 0, bronzeMedals: 1},
        { countryRank: 7, country: 'JPN', goldMedals: 1, silverMedals: 0, bronzeMedals: 1 },
        { countryRank: 8, country: 'KAZ', goldMedals: 1, silverMedals: 0, bronzeMedals: 1},
        { countryRank: 9, country: 'GER', goldMedals: 1, silverMedals: 0, bronzeMedals: 0 },
        { countryRank: 10, country: 'HKG', goldMedals: 1, silverMedals: 0, bronzeMedals: 0 }
    ];

    let tableContent = document.getElementById('dynamic-table');

    
    countriesData.forEach(element => {
        
        let tableRow = document.createElement('tr');
     tableRow.innerHTML = ` <td>${element.countryRank}</td><td>${element.country}</td><td>${element.goldMedals}</td> <td>${element.silverMedals}</td> <td>${element.bronzeMedals}</td>`;
        tableContent.appendChild(tableRow);
    });
});