(function () {
    let endTime = prompt("Enter end Timer");
    let tick_tick = setInterval(displaytimer, 1000);

    function displaytimer() {
        if(endTime == 0){
            alert("Timer end!!!");
            clearInterval(tick_tick);
        }
        console.log(endTime--);
    }
})();
