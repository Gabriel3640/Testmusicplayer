//variables
let musics = [
{title:'Bury' , artist:'Mire' , genre:'Synthwave', source: 'musics/Bury.mp3', img: 'images/synthwave.jpg'},
{title:'Open The Gates' , artist:'Bloodtone' , genre:'Dark House', source: 'musics/Open The Gates.mp3', img: 'images/dark-house.jpg'},
{title:'GR8' , artist:'Kristoph Galland', genre:'Dark House', source: 'musics/GR8.mp3', img:'images/lion.jpg'}
];

let durationmusic = document.querySelector('.end');
let music = document.querySelector('audio');
let currentimage = document.querySelector('img');
let musicname = document.querySelector('.name h2');
let nameartist = document.querySelector('.name i');
let currentgenre = document.querySelector('.name p');
let indexmusic = 0;

renderMusic(indexmusic);
//events

document.querySelector('.button-play').addEventListener('click', playMusic);

document.querySelector('.button-pause').addEventListener('click', pauseMusic);

music.addEventListener('timeupdate', updateBar);

document.querySelector('.button-forward').addEventListener('click',() => {
    indexmusic++;
    renderMusic(indexmusic);
});

document.querySelector('.button-backward').addEventListener('click',() => {
    indexmusic--;
    renderMusic(indexmusic);
});

//function
function renderMusic(index){
music.setAttribute('src', musics[index].source);
music.addEventListener('loadeddata', () => {
    musicname.textContent = musics[index].title;
    nameartist.textContent = musics[index].artist;
    currentgenre.textContent = musics[index].genre;
    currentimage.src = musics[index].img;
    durationmusic.textContent = secondsForMinutes(Math.floor(music.duration));
});
}

function playMusic(){
    music.play();
    document.querySelector('.button-pause').style.display = 'block';
    document.querySelector('.button-play').style.display = 'none';

}

function pauseMusic(){
    music.pause();
    document.querySelector('.button-play').style.display = 'block';
    document.querySelector('.button-pause').style.display = 'none';
}

function updateBar(){
    let bar = document.querySelector('progress');
    bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    let currenttimer = document.querySelector('.begin');
    currenttimer.textContent = secondsForMinutes(Math.floor(music.currentTime));
}

function secondsForMinutes(seconds){
  let timerminutes = Math.floor(seconds / 60);
  let timerseconds = seconds % 60;
  if (timerseconds < 10){
      timerseconds = '0' + timerseconds;
  }
  return timerminutes+' : '+timerseconds;
}


