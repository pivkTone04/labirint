let play = document.querySelector('#mute_music');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');

let power_volume=100;

let All_song = [{
    path: "music/song.mp3"
}];

let j=0;

//let autoplay=0;
//let playing_song=false;

let index_no = 0;
let track = document.getElementById('audio');

function load_track(index_no) {
	track.src = All_song[index_no].path;
	track.load();
}
load_track(index_no);

function mute_play_song(){
    if(j==0){
        playsong();
        j=1;
    }
    else{
        pausesong();
        j=0;
    }
}

function playsong(){   
    

    track.play();
    track.volume = power_volume/100;
    volume_show.innerHTML = power_volume;
    //Playing_song = true;
        
    document.getElementById("mute_music").classList.replace("cMute_music_play","cMute_music_mute");
}

function pausesong() {
	track.volume = 0;
   
    

    //track.pause();
	//Playing_song = false;

    document.getElementById("mute_music").classList.replace("cMute_music_mute","cMute_music_play");
}

console.log (recent_volume.value);

function volume_change(value) {
    
    //track.play();
	    
    
        power_volume = value
        volume_show.innerHTML = value

        if(j!=0)
        track.volume = value / 100;
        //document.getElementById("mute_music").classList.replace("cMute_music_play","cMute_music_mute");
        //j=1;
    
}

const rangeInputs=
document.querySelectorAll('input[type="range"]')