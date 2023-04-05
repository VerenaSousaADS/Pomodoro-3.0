import Controls from "./controls.js";
import Sound from "./sounds.js";
import Timer from "./timer.js"
import Events from "./events.js"

import{
    buttonCoffeeShop,
    buttonFireplace,
    buttonForest,
    buttonRain,
    buttonPlay,
    buttonStop,
    minutesDisplay, 
    secondsDisplay
}from "./elements.js"

const controls = Controls({
    buttonCoffeeShop,
    buttonFireplace,
    buttonForest,
    buttonRain,
    buttonPlay,
    buttonStop,
})

const timer = Timer ({
    minutesDisplay, 
    secondsDisplay,
    resetTimer: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})