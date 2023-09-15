var hr = 0;
var min = 0;
var sec = 0;
var msec = 0;
var timerId = null;


function start(){
    if(timerId!=null){
        clearInterval(timerId);
    }
    timerId=setInterval("stopwatch()", 10);
}

function stop(){
    clearInterval(timerId);
}

function reset(){
    clearInterval(timerId);
    hr=0;
    min=0;
    sec=0;
    msec=0
    document.getElementById("timeDisplay").innerHTML="00 : 00 : 00 : 00";
}

function stopwatch(){
    msec++;
    if(msec==100){
        msec=0;
        sec++;
        if(sec==60){
            sec=0;
            min++;
            if(min==60){
                min=0;
                hr++;
            }
        }
    }
    let h = hr<10 ? `0${hr}` : hr; 
    let m = min<10 ? `0${min}` : min; 
    let s = sec<10 ? `0${sec}` : sec; 
    let ms = msec<10 ? `0${msec}` : msec; 

    document.getElementById("timeDisplay").innerHTML=`${h} : ${m} : ${s} : ${ms}`;

}