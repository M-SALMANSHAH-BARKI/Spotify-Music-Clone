// console.log('welcome to spotify music');
// initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/Alone - Dj Valka _ Alan Walker Mashup _ (Official Music Video)(MP3_320K).mp3');
let masterPlay = document.getElementById('master-paly')
let porgressBar = document.getElementById("progress-bar")
let gif = document.getElementById('gif')
let mastersongName = document.getElementById('master-song-name');
let songItem = Array.from(document.getElementsByClassName('song-item'))
let songs = [
    { songName: "Alone - Dj Valka  Alan Walker ", filePath: "songs/Alone - Dj Valka _ Alan Walker Mashup _ (Official Music Video)(MP3_320K).mp3", coverPath: "covers/1.jpg" },
    { songName: "Arash - Broken Angel (Lyrics)", filePath: "songs/Arash - Broken Angel (Lyrics) Ft.Helena __ _I_m so lonely_ broken angel_(MP3_160K).mp3", coverPath: "covers/2.jpg" },
    { songName: "Kuruluş Osman Müzikleri - Yen", filePath: "songs/Kuruluş Osman Müzikleri - Yeni Çağ(MP3_320K).mp3", coverPath: "covers/3.jpg" },
    { songName: "Dopamine Dopamine (MP3_160K)", filePath: "songs/Dopamine(MP3_160K).mp3", coverPath: "covers/4.jpg" },
    { songName: "Prvrln   Не с обой(MP3_160K) ", filePath: "songs/Prvrln   Не с тобой(MP3_160K).mp3", coverPath: "covers/5.jpg" },

    { songName: "Alone - Dj Valka  Alan Walker ", filePath: "songs/Alone - Dj Valka _ Alan Walker Mashup _ (Official Music Video)(MP3_320K).mp3", coverPath: "covers/1.jpg" },
    { songName: "Arash - Broken Angel (Lyrics)", filePath: "songs/Arash - Broken Angel (Lyrics) Ft.Helena __ _I_m so lonely_ broken angel_(MP3_160K).mp3", coverPath: "covers/2.jpg" },
    { songName: "Kuruluş Osman Müzikleri - Yen", filePath: "songs/Kuruluş Osman Müzikleri - Yeni Çağ(MP3_320K).mp3", coverPath: "covers/3.jpg" },
    { songName: "Dopamine Dopamine (MP3_160K)", filePath: "songs/Dopamine(MP3_160K).mp3", coverPath: "covers/4.jpg" },
    { songName: "Prvrln   Не с обой(MP3_160K) ", filePath: "songs/Prvrln   Не с тобой(MP3_160K).mp3", coverPath: "covers/5.jpg" },



    // { songName: "This is demo song : 6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    // { songName: "This is demo song : 7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    // { songName: "This is demo song : 8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    // { songName: "This is demo song : 9", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    // { songName: "This is demo song : 10", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]
songItem.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    // console.log(element , i)
})

// audioElement.play();

// playing music handle play/pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }

})
// listen to events 
audioElement.addEventListener('timeupdate', () => {
    // console.log("timeupdate")
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    // console.log(progress)
    porgressBar.value = progress;

    // CT/Duration * 100 = P%             PERCENTAGE GETTING
    // CT = P% * Duration/100             PERCENTAGE TO DURATION
})
porgressBar.addEventListener('change', () => {
    audioElement.currentTime = porgressBar.value * audioElement.duration / 100;
})

const makeallplays = () => {
    Array.from(document.getElementsByClassName('song-item-icon')).forEach((element) => {
        // element.classList.remove(fa-pause-circle)
        // element.classList.add(fa-play-circle)

    })
}

Array.from(document.getElementsByClassName('song-item-icon')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        makeallplays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        // let audioElement = new Audio('songs/1.mp3');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        mastersongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
})
document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
        songIndex = 9;
    }else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
})

