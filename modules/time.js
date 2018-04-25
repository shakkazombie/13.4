var os = require('os');
process.stdin.setEncoding('utf8');

function getUptime() {
    var uptime = os.uptime();
    var uptimeRounded = Math.round(uptime);
    var uptimeMinutes = Math.floor(uptimeRounded / 60);
    var uptimeSeconds = uptimeRounded - (uptimeMinutes * 60);
    console.log('Uptime: ' + uptimeMinutes + " min " + uptimeSeconds + " sec");
}

function getFormatTime(time) {
    var hours = Math.floor(time/60);
    var second = (time % 60).toFixed(0);
    console.log(hours + " hours " + minutes + "minutes" + seconds + "seconds.");
}
                
exports.getFormatTime = time;
exports.getUptime = getUptime;
