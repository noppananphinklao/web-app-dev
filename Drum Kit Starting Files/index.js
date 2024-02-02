for (var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        makeSound(this.innerHTML)
        makeAnimation(this.innerHTML)
    });
}

addEventListener("keypress", function(event){
    makeSound(event.key)
    makeAnimation(event.key)
})

function makeSound(key){
    var audio;
    switch(key) {
        case 'w': {
            audio = new Audio('sounds/tom-1.mp3').play()
            break;
        }
        case 'a': {
            audio = new Audio('sounds/tom-2.mp3').play()
            break;
        }
        case 's': {
            audio = new Audio('sounds/tom-3.mp3').play()
            break;
        }
        case 'd': {
            audio = new Audio('sounds/tom-4.mp3').play()
            break;
        }
        case 'j': {
            audio = new Audio('sounds/snare.mp3').play()
            break;
        }
        case 'k': {
            audio = new Audio('sounds/crash.mp3').play()
            break;
        }
        case 'l': {
            audio = new Audio('sounds/kick-bass.mp3').play()
            break;
        }
    }
}

function makeAnimation(key) {
    var curretActicatedKey = document.querySelector("."+key);
    curretActicatedKey.classList.add("pressed")
    setTimeout(function(){
        curretActicatedKey.classList.remove("pressed")
    }, 200);

}
