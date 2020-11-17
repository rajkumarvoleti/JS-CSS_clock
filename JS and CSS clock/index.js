function setDate(){
    // seconds
    var now = new Date();
    var seconds = now.getSeconds();
    var secondsDegrees = ((seconds/60)*360) + 90;
    $(".second-hand").css("transform", `rotate(${secondsDegrees}deg)`);

    // minutes
    var mins = now.getMinutes() + (seconds/60);
    var minDegrees = ((mins/60)*360) + 90 ;
    $(".minute-hand").css("transform", `rotate(${minDegrees}deg)`);

    //hours
    var hours = now.getHours() + (mins/60) + (seconds/3600);
    var hourDegrees = ((hours/12)*360) + 90;
    $(".hour-hand").css("transform", `rotate(${hourDegrees}deg)`);
}

setInterval(setDate,1000);