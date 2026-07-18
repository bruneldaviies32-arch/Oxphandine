/*==================================================
        JOYEUX ANNIVERSAIRE HOUÉFA ❤️
==================================================*/


/*==============================
        IMAGES
==============================*/

const photos = [

"IMG_20260717_185506.png",
"IMG_20260717_185817.png",
"IMG_20260717_185834.png",
"IMG_20260717_185855.png",
"IMG_20260717_185912.png",
"IMG_20260717_185931.png",
"IMG_20260717_190010.png",
"IMG_20260717_190053.png",
"IMG_20260717_190108.png",
"IMG_20260717_190122.png",
"IMG_20260717_190153.png",
"IMG_20260717_190205.png",
"IMG_20260717_190238.png",
"IMG_20260717_190256.png",
"IMG_20260717_190312.png",
"IMG_20260717_190327.png",
"IMG_20260717_190404.png",
"IMG_20260717_190525.png",
"IMG_20260717_190554.png"

];


/*==============================
        TON TEXTE
==============================*/

const story = [

"Ton premier souffle a marqué le début d'une histoire magnifique.",

"Aujourd'hui, cette histoire célèbre une année de plus...",

"Une année de sourires...",

"De défis relevés...",

"D'instants précieux...",

"Tu illumines la vie de ceux qui croisent ton chemin.",

"Et tu illumines particulièrement la mienne.",

"Alors aujourd'hui...",

"Je voulais simplement te rappeler une chose...",

"Tu es une personne exceptionnelle.",

"Et tu mérites tout le bonheur du monde."

];


/*==============================
        ELEMENTS HTML
==============================*/

const slideshow = document.getElementById("slideshow");

const storyText = document.getElementById("storyText");

const music = document.getElementById("music");

const startBtn = document.getElementById("startBtn");

const startScreen = document.getElementById("startScreen");

const stars = document.getElementById("stars");

const videoSection = document.getElementById("videoSection");

const video = document.getElementById("birthdayVideo");

const birthdaySection = document.getElementById("birthdaySection");

const continueSection = document.getElementById("continueSection");

const continueBtn = document.getElementById("continueBtn");

const loveSection = document.getElementById("loveSection");


/*==============================
        VARIABLES
==============================*/

let photoIndex = 0;

let textIndex = 0;
/*==============================
    PHOTO ALEATOIRE
==============================*/

function randomPhoto(){

photoIndex++;

if(photoIndex>=photos.length){

photoIndex=0;

}

slideshow.style.opacity=0;

setTimeout(()=>{

slideshow.style.backgroundImage=
`url("${photos[photoIndex]}")`;

slideshow.style.opacity=1;

},1200);

}

setInterval(randomPhoto,9000);
