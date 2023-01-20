console.log('Javascript is online')

const Mudkip = document.querySelector ('#mudkip');
const Ralts = document.querySelector ('#ralts');
const Jirachi = document.querySelector ('#jirachi');
const Skitty = document.querySelector ('#skitty');
const Pokeball = document.querySelector ('#pokeball');
const Greatball = document.querySelector ('#greatball');
const Ultraball = document.querySelector ('#ultraball');
const Premierball = document.querySelector ('#premierball');
const Masterball = document.querySelector ('#masterball');
const Duskball = document.querySelector ('#duskball');
const Quickball = document.querySelector ('#quickball');
const Diveball = document.querySelector ('#diveball');
const Friendball = document.querySelector ('#friendball');
const Dreamball = document.querySelector ('#dreamball');

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