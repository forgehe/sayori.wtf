function playVid(){
var vid = document.getElementById("bgvid");
	vid.play();
    if(vid.muted) {
        vid.muted = false;
    }
// There is no muting the meme train CHOOO CHOOOO
};

window.onload = function() {
    var backgroundAudio=document.getElementById("bgvid");
    backgroundAudio.volume=0.7;
}

/*

       _           _     __  __             _ _         
      | |         | |   |  \/  |           (_) |        
      | |_   _ ___| |_  | \  / | ___  _ __  _| | ____ _ 
  _   | | | | / __| __| | |\/| |/ _ \| '_ \| | |/ / _` |
 | |__| | |_| \__ \ |_  | |  | | (_) | | | | |   < (_| |
  \____/ \__,_|___/\__| |_|  |_|\___/|_| |_|_|_|\_\__,_|

*/