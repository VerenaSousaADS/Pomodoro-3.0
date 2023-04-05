export default function Controls({
    buttonCoffeeShop,
    buttonFireplace,
    buttonForest,
    buttonRain,
    buttonStop,
    buttonPlay
}){

// timer

function play(){
    buttonPlay.classList.add('hide')
    buttonStop.classList.remove('hide')
}

function stop(){
    buttonStop.classList.add('hide')
    buttonPlay.classList.remove('hide')
}

function reset(){
    buttonPlay.classList.add('hide')
    buttonStop.classList.remove('hide')
}


// sounds

function soundForest(){
    buttonForest.classList.contains('active')
    ? buttonForest.classList.remove('active')
    : buttonForest.classList.add('active')
}
function soundRain(){
    buttonRain.classList.contains('active')
    ? buttonRain.classList.remove('active')
    : buttonRain.classList.add('active')
}
function soundCoffeeShop(){
    buttonCoffeeShop.classList.contains('active')
    ? buttonCoffeeShop.classList.remove('active')
    : buttonCoffeeShop.classList.add('active')
}
function soundFireplace(){
    buttonFireplace.classList.contains('active')
    ? buttonFireplace.classList.remove('active')
    : buttonFireplace.classList.add('active')
}

return {
    soundForest,
    soundCoffeeShop,
    soundFireplace,
    soundRain,
    play,
    stop,
    reset
}

}