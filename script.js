window.onload = function() {
    var vid = document.getElementById('bgvid');
    vid.volume = 0.7;
    vid.loop = false;
}



function volumeChange(change) {
    var vid = document.getElementById("bgvid"); 
    if (change == true) {
        console.log("up "+ vid.volume);
        vid.volume = Math.min(vid.volume + 0.05);
        document.getElementById("volumePercentage").textContent= Math.round(vid.volume*100);
    } else {
        console.log("down "+ vid.volume);
        vid.volume = Math.min(vid.volume - 0.05);
        document.getElementById("volumePercentage").textContent= Math.round(vid.volume*100);
    }
    
}

function toggleLoop() {
	var vid = document.getElementById("bgvid"); 
	if (vid.loop != true) {
		vid.loop = true;
		document.getElementById("loopIcon").style.background = "#EC9A1A";
		vid.play();
	} else {
		vid.loop = false;
		document.getElementById("loopIcon").style.background = "#4A4A4A";
	}
}


function videoSelect(husbando, videoNum){
var vid = document.getElementById("bgvid");
        if (husbando == "aikuro") {
            if (videoNum == 1) {
                $("#bgvid").attr('src', 'aikuro/amv.mp4');
                vid.play();
            } else if (videoNum == 2) {
                $("#bgvid").attr('src', 'aikuro/demod.mp4');
                vid.play();
            } else {
                $("#bgvid").attr('src', 'aikuro/reveal.mp4');
                vid.play();
            }
        } else if (husbando == "levi") {
            $("#bgvid").attr('src', 'levi/dropit.mp4');
            vid.play();
        
        } else if (husbando == "cena") {
            $("#bgvid").attr('src', 'cena/dropit.mp4');
            vid.play();
        } else if (husbando == "yuri") {
            $("#bgvid").attr('src', 'yuri/ED.webm');
            vid.play();
        }
};