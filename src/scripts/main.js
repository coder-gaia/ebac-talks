AOS.init();

const eventDate = new Date("dec 12, 2023 19:00:00");
const timeStamp = eventDate.getTime();

const dateCounter = setInterval(() => {
        const now = new Date();
        const currentTimeStamp = now.getTime();

        const eventGap = timeStamp - currentTimeStamp;

        const daysInMs = 1000 * 60 * 60 * 24;
        const hoursInMs = 1000 * 60 * 60;
        const minutesInMs = 1000 * 60;

        const daysToTheEvent = Math.floor(eventGap / daysInMs);
        const hoursToTheEvent = Math.floor((eventGap % daysInMs) / hoursInMs) + now.getHours();
        const minutesToTheEvent = Math.floor((eventGap % hoursInMs) / minutesInMs);
        const secondsToTheEvent = Math.floor((eventGap % minutesInMs) / 1000) ;


        document.getElementById('contador').innerHTML = `${daysToTheEvent}d ${hoursToTheEvent}h ${minutesToTheEvent}m ${secondsToTheEvent}s`

        if(eventGap < 0){
                clearInterval(dateCounter);
                document.getElementById('contador').innerHTML = `Este evento já expirou.`
        }
}, 1000);
