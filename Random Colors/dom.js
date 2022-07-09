const letters = document.getElementsByClassName('letter');

function randomRGB() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}


setInterval(function(){
    for(let item of letters){
        item.style.color = randomRGB()
    };
}, 500)