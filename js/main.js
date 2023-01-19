console.log('Javascript is online')

const Mudkip = document.querySelector ('#Mudkip');

function logID(){
    console.log('click on this element:',this.id)
}

Mudkip.addEventListener('click', logID);