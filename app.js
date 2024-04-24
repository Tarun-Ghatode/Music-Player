
let playBtn = document.getElementById('play-btn');
let progress = document.getElementById('progress');
let songList = document.getElementById('song-list');

let songs = [
    {
        name:'song1',
        id:1
    },
    {
        name:'song2',
        id:2
    },
    {
        name:'song3',
        id:3
    },
    {
        name:'song4',
        id:4
    },
    {
        name:'song5',
        id:5
    },
    {
        name:'song6',
        id:6
    },
    {
        name:'song7',
        id:7
    },
];

let audio = new Audio('./assets/song1.mp3');

// show the song list in the Ul

for(let song of songs){
    let li = document.createElement('li');
    li.innerText = song.name;
    li.setAttribute('id' , song.id);
    li.classList.add('song-item');
    songList.append(li);

}

// change play button icon and play song

playBtn.addEventListener('click', ()=>{
    audio.paused ? audio.play() : audio.pause();
    if(playBtn.children[0].classList.contains('fa-play')){
        playBtn.children[0].classList.remove('fa-play');
        playBtn.children[0].classList.add('fa-pause');
    }
    else{
        playBtn.children[0].classList.remove('fa-pause');
        playBtn.children[0].classList.add('fa-play');
    }
})

// current time ke hisaab se range chale

audio.addEventListener('timeupdate' , function(){
    let currentProgress = audio.currentTime * 100 / audio.duration;

    progress.value = currentProgress;
})

// drag karne se gana chale

progress.addEventListener('change' , function(){
    let updatedTime = audio.duration * progress.value / 100;
    audio.currentTime = updatedTime;
})

// btn dabao gaana chalao pratyogita(contest)

songList.addEventListener('click', (event)=>{
    let songId = event.target.getAttribute('id');
    audio.src = `./assets/song${songId}.mp3`;
    audio.currentTime = 0;

    audio.play();
    playBtn.children[0].classList.add('fa-pause');
    playBtn.children[0].classList.remove('fa-play');
})