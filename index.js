var drums = document.querySelectorAll(".drum").length;

for( var i = 0; i < drums; i++ )
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        buttonAnimation(this.innerHTML);    
        makeSound(this.innerHTML);
    })
}

document.addEventListener("keydown", function(event){
    
    buttonAnimation(event.key);
    makeSound(event.key);
})

function makeSound(key)
{

    var audio = new Audio('sounds/tom-1.mp3');
        
    switch (key){
        case 'w':
            audio = new Audio('sounds/crash.mp3');
            audio.play();
            
            break;
        case 'a':
            audio = new Audio('sounds/kick-bass.mp3');
            audio.play();

            break;
        case 's':
            audio = new Audio('sounds/snare.mp3');
            audio.play();

            break;
        case 'd':
            audio = new Audio('sounds/tom-1.mp3');
            audio.play();

            break;
        case 'j':
            audio = new Audio('sounds/tom-2.mp3');
            audio.play();

            break;
        case 'k':
            audio = new Audio('sounds/tom-3.mp3');
            audio.play();

            break;
        case 'l':
            audio = new Audio('sounds/tom-4.mp3');
            audio.play();

            break;
    
        default:
            console.log(this.innerHTML);
            break;
    }

}


function buttonAnimation(key)
{
    var button = document.querySelector("." + key);
    button.classList.add("pressed");
    setTimeout(() => {
        button.classList.remove("pressed");        
    }, 100);
}