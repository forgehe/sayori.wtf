function playVid(){
    var vid = document.getElementById("bgvid");
    if (vid) {
        vid.play();
        if(vid.muted) {
            vid.muted = false;
        }
    }
// There is no muting the meme train CHOOO CHOOOO
};

function playAudio(){
    var audio = document.getElementById("bgm");
    if (audio) {
        audio.play();
        if(audio.muted) {
            audio.muted = false;
        }
    }
}

window.onload = function() {
    var backgroundAudio=document.getElementById("bgvid");
    backgroundAudio.volume=0.7;

    let playButton = document.getElementById("playbutton");
    playButton.onclick = function(event) {
        console.log("Playing Video and Audio")
        playVid();
        playAudio();
    }
}

/*
       _           _     __  __             _ _         
      | |         | |   |  \/  |           (_) |        
      | |_   _ ___| |_  | \  / | ___  _ __  _| | ____ _ 
  _   | | | | / __| __| | |\/| |/ _ \| '_ \| | |/ / _` |
 | |__| | |_| \__ \ |_  | |  | | (_) | | | | |   < (_| |
  \____/ \__,_|___/\__| |_|  |_|\___/|_| |_|_|_|\_\__,_|

*/