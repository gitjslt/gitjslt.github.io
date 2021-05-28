console.log(`
       __    ______   __    _________
      |  |  |   ___| |  |  |___   ___|
      |  |  |  |___  |  |      | |
  _   |  |  |____  | |  |      | |
 | |__|  |   ____| | |  |____  | |
 |_______|  |______| |_______| |_|      .2021
`);
function getRTime() {
    var EndTime = new Date("2021/05/23 15:00:00"); 
    var NowTime = new Date();
    var t = NowTime.getTime() - EndTime.getTime();
    var d = Math.floor(t / 1000 / 60 / 60 / 24);
    var h = Math.floor(t / 1000 / 60 / 60 % 24);
    var m = Math.floor(t / 1000 / 60 % 60);
    var s = Math.floor(t / 1000 % 60);
 
    document.getElementById("d").innerHTML = d + " 天";
    document.getElementById("h").innerHTML = h + " 时";
    document.getElementById("m").innerHTML = m + " 分";
    document.getElementById("s").innerHTML = s + " 秒";
}
setInterval(getRTime, 1000);
