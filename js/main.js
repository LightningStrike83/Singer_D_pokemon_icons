console.log('Javascript is online')

const Mudkip = document.querySelector ('#Mudkip');
const Ralts = document.querySelector ('#Ralts');
const Jirachi = document.querySelector ('#Jirachi');
const Skitty = document.querySelector ('#Skitty');
const Pokeball = document.querySelector ('#Pokeball');
const Greatball = document.querySelector ('#Great_Ball');
const Ultraball = document.querySelector ('#Ultra_Ball');
const Premierball = document.querySelector ('#Premier_Ball');
const Masterball = document.querySelector ('#Master_Ball');
const Duskball = document.querySelector ('#Dusk_Ball');
const Quickball = document.querySelector ('#Quick_Ball');
const Diveball = document.querySelector ('#Dive_Ball');
const Friendball = document.querySelector ('#Friend_Ball');
const Dreamball = document.querySelector ('#Dream_Ball');

function logID(){
    console.log('pokemon:',this.id)
}

function logID2() {
    console.log('pokeball:',this.id)
}

Mudkip.addEventListener('click', logID);
Ralts.addEventListener('click', logID);
Jirachi.addEventListener('click', logID);
Skitty.addEventListener('click', logID);
Pokeball.addEventListener('click', logID2);
Greatball.addEventListener('click', logID2);
Ultraball.addEventListener('click', logID2);
Premierball.addEventListener('click', logID2);
Masterball.addEventListener('click', logID2);
Duskball.addEventListener('click', logID2);
Quickball.addEventListener('click', logID2);
Diveball.addEventListener('click', logID2);
Friendball.addEventListener('click', logID2);
Dreamball.addEventListener('click', logID2);