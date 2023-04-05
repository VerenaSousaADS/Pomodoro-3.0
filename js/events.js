import{
    buttonCoffeeShop,
    buttonFireplace,
    buttonForest,
    buttonRain,
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonMinus
}from "./elements.js"


export default function({
    controls,
    timer,
    sound
}){

// Events

buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countdown()
    sound.pressButton()
})

buttonStop.addEventListener('click', function(){
    controls.stop()
    timer.hold()
    sound.pressButton()
})

buttonPlus.addEventListener('click', function(){
    controls.reset()
    timer.plus()
    sound.pressButton()
})
buttonMinus.addEventListener('click', function(){
   controls.reset()
   timer.minus()
   sound.pressButton()
})
 

buttonForest.addEventListener('click', function() {
    sound.pressButton()
    controls.soundForest()
    sound.audioForest()
})

buttonRain.addEventListener('click', function() {
    sound.pressButton()
    controls.soundRain()
    sound.audioRain()
})

buttonCoffeeShop.addEventListener('click', function() {
    sound.pressButton()
    controls.soundCoffeeShop()
    sound.audioCoffeeShop()
})

buttonFireplace.addEventListener('click', function() {
    sound.pressButton()
    controls.soundFireplace()
    sound.audioFireplace()
})


}