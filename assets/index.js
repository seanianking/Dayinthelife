let plannerEl = $('#planner')

$(document).ready(function () {

    //Displays current day
    var todayIs = moment().format("dddd, MMMM Do");
    $("#itIsTime").text(todayIs);

    // $("#currentDay").text(moment().format("dddd, MMMM Do"));

    //Array for time periods to schedule
    var timeSlots = [
        { time: "9 AM", value: '9' },
        { time: "10 AM", value: '10' },
        { time: "11 AM", value: '11' },
        { time: "12 PM", value: '12' },
        { time: "1 PM", value: '13' },
        { time: "2 PM", value: '14' },
        { time: "3 PM", value: '15' },
        { time: "4 PM", value: '16' },
        { time: "5 PM", value: "17" },
    ];

    //for loop to generate div columns
    for (var i = 0; i < timeSlots.length; i++) {
        savedText = localStorage.getItem(i) || ""
        plannerEl.append(`<div class="row">
        <div class="col-sm-1 hour">${timeSlots[i].time}</div>
        <textarea class="col-sm-10 input" id="${i}" data-value="${timeSlots[i].value}">${savedText}</textarea>
        <div class="col-sm-1 justify-content-center btn"><i class ="far fa-save fa-2x"></i></div>
        </div></div>`);
    };

})