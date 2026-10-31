
/*var audioplayer = document.getElementById("audio-player");
// var playBtn = document.getElementById("play-btn");
// var pauseBtn = document.getElementById("pause-btn"); */
/*var timer = document.getElementById("timer");
var toggle = document.getElementById("toggle-btn");
var pgbar = document.getElementById("progress-bar");
*/
 

 /* function startMusic(){
audioplayer.play();
}  */
 /*function pauseMusic(){
    audioplayer.pause();
} */ 

/* function currentTime(){
    timer.textContent =  `Current: ${formatTime((audioplayer.currentTime))} / ${formatTime((audioplayer.duration))}`;
    pgbar.min = 0; 
    pgbar.max = audioplayer.duration;
    pgbar.value = audioplayer.currentTime;
    console.log(audioplayer.duration);
}
function formatTime(seconds){
    var minutes = Math.floor(seconds/60);
    var remainingSeconds = Math.floor(seconds%60);
    return `${String(minutes).padStart(2,"0")}:${String(remainingSeconds).padStart(2,"0")}`;
}
function toggleMusic(){
    if(audioplayer.paused === true){
        audioplayer.play()
        toggle.innerHTML = "Pause"
    }else{
        audioplayer.pause();
        toggle.innerHTML = "Play"
    }
}
function resetTime(){

        toggle.innerHTML = "Play";
    
}
function changeProgress(){
        audioplayer.currentTime = pgbar.value;
} */
/* playBtn.addEventListener("click",startMusic);
pauseBtn.addEventListener("click",pauseMusic); */
/* audioplayer.addEventListener("timeupdate",currentTime);
toggle.addEventListener("click",toggleMusic);
audioplayer.addEventListener("ended",resetTime);
pgbar.addEventListener("input",changeProgress);
 */



//Updated-AI

var containers = document.querySelectorAll(".container");

containers.forEach(function(container){

    var audioplayer = container.querySelector(".audio-player");
    var timer = container.querySelector(".timer");
    var toggle = container.querySelector(".toggle-btn");
    var pgbar = container.querySelector(".progress-bar");

    function currentTime(){
        timer.textContent =
        `Current: ${formatTime(audioplayer.currentTime)} / ${formatTime(audioplayer.duration || 0)}`;

        pgbar.min = 0;
        pgbar.max = audioplayer.duration || 0;
        pgbar.value = audioplayer.currentTime;
    }

    function formatTime(seconds){
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = Math.floor(seconds % 60);

        return `${String(minutes).padStart(2,"0")}:${String(remainingSeconds).padStart(2,"0")}`;
    }

    function toggleMusic(){

        if(audioplayer.paused){

            document.querySelectorAll(".audio-player").forEach(function(audio){
                if(audio !== audioplayer){
                    audio.pause();
                }
            });

            document.querySelectorAll(".toggle-btn").forEach(function(btn){
                if(btn !== toggle){
                    btn.textContent = "Play";
                }
            });

            audioplayer.play();
            toggle.textContent = "Pause";

        }else{

            audioplayer.pause();
            toggle.textContent = "Play";

        }
    }

    function resetTime(){
        toggle.textContent = "Play";
    }

    function changeProgress(){
        audioplayer.currentTime = pgbar.value;
    }

    audioplayer.addEventListener("timeupdate", currentTime);
    toggle.addEventListener("click", toggleMusic);
    audioplayer.addEventListener("ended", resetTime);
    pgbar.addEventListener("input", changeProgress);

});