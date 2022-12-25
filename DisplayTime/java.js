
    let today = new Date();
    let day = today.getDay();
    let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.write("Today is " + dayList[day] + ".");
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    document.write(`Current time is: ${hour}:${minutes}:${seconds}.`)
    if (hour >5 && hour <12) {
        document.write('Good morning beautiful')
    }
    else if (hour >12 && hour < 20) {
        document.write('Good day to you, sir!')
    }
    else if (hour >20 && hour<24) {
        document.write("It's a fine evening, isn't it")
    }
    
