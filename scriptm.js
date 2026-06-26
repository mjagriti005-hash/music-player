const songs = [
{
    title:"Ya Rabba",
    artist:"kailash Kher",
    src:"song1.mp3",
    cover:"song1.webp",
    
},
{
    title:"Ek Jalak Ko Teri Mai Tarsa hua",
    artist:"Atif Asalam",
    src:"song2.mp3",
    cover:"song2.webp"
    
},
{
    title:"Tu Iss Tarah Se",
    artist:"Mani Dharamkot",
    src:"song3.mp3",
    cover:"song3.webp",
    
}
];

let currentSong = 0;




const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progress = document.getElementById("progress");
const duration = document.getElementById("duration");
const volume = document.getElementById("volume");


const cover = document.getElementById("cover");
function playPause(){
    if(audio.paused){
        audio.play();
        
    }
    else{
        audio.pause();
        
    }
}

loadSong(currentSong);

function loadSong(index){
    audio.src = songs[index].src;
    title.textContent = songs[index].title;
    artist.textContent = songs[index].artist;
    cover.src=songs[index].cover;
}



function nextSong(){
    currentSong++;
    
    if(currentSong >= songs.length){
        currentSong = 0;
    }

    loadSong(currentSong);
    audio.play();
}

function prevSong(){
    currentSong--;

    if(currentSong < 0){
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);
    audio.play();
}

audio.addEventListener("timeupdate",()=>{

    progress.max = audio.duration;

    progress.value = audio.currentTime;

    let current =
    formatTime(audio.currentTime);

    let total =
    formatTime(audio.duration);

    duration.textContent =
    `${current} / ${total}`;
});

progress.addEventListener("input",()=>{
    audio.currentTime = progress.value;
});

volume.addEventListener("input",()=>{
    audio.volume = volume.value;
});

function formatTime(time){

    if(isNaN(time))
    return "00:00";

    let min = Math.floor(time/60);
    let sec = Math.floor(time%60);

    if(sec < 10)
    sec = "0"+sec;

    return `${min}:${sec}`;
}

audio.addEventListener("ended",()=>{
    nextSong();
});