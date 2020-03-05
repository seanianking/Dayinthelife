

$(document).ready(function () {

    let plannerEl = $('#planner')

    //Displays current day and local time
    var itIsTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
    $("#itIsTime").text(itIsTime);



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
        plannerEl.append(`<div class="row no-gutters">
        <div class="col-sm-1 rounded hour">${timeSlots[i].time}</div>
        <textarea class="col-sm-9 rounded input" id="${i}" data-value="${timeSlots[i].value}">${savedText}</textarea>
        <div class="col-sm-1 justify-content-center btn"><i class ="fas fa-share fa-2x"></i></div>
        </div></div>`);
    };

    //Button function to save user's input to localStorage
    $('.btn').click(function () {
        var inputText = $(this).parent().find("textarea").val();
        var hour = $(this).parent().find("textarea").attr("id");
        localStorage.setItem(hour, inputText);
    });

    // if/else if/else statement for textarea background color
    function styleTime() {
        //uses moment.js to find the current hour
        rightNow = parseInt(moment().format("H"));
        //creates input variable as an object
        var timeClass = $('.input');


        //start of for loop to determine the current time and sorts 
        //which class to be added to each textarea
        for (var i = 0; i<timeClass.length; i++) {
            //targets the input object just created
            var currentHour = $(timeClass[i]);
            if (currentHour.attr('data-value') > rightNow) {
                currentHour.addClass('future')
            } else if (currentHour.attr('data-value') < rightNow) {
                currentHour.addClass('past')
            } else (currentHour.addClass('present'))
        }
        console.log (timeClass);
        console.log ($(timeSlots[i]));
        console.log (timeClass.attr('data-value'));
        console.log (rightNow);
    };
    
    styleTime();
})