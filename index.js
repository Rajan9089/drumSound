// detecting button press

var numberOfDrumButton=document.querySelectorAll(".drum").length;
for (var i=0;i< numberOfDrumButton;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        
        // console.log(this.innerHTML);
        // console.log(this);
        this.style.color="#d604da";
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
     /*   switch (buttonInnerHTML) {
            case "w":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case "a":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case "s":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case "d":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            case "j":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            case "k":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case "l":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            default: console.log(buttonInnerHTML);
                
        }
        */
});
}

/*
document.addEventListener("keydown",function(){
    alert("Key is pressed!");
});
*/

// detecting keyboard press

document.addEventListener("keydown",function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});


function makeSound(Key) {
    switch (Key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default: console.log(buttonInnerHTML);
            
    }
}

function buttonAnimation(currentkey) {
    var activeButton= document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout( function() {
        activeButton.classList.remove("pressed");
    } , 100 );

}























// document.querySelector("button").addEventListener("click",function(){
//     alert("I got clicked!");
// })

// function handleClick(){
//     alert("I got clicked!");
// }

// document.querySelectorAll("button")[0].addEventListener("click",function(){
//     alert("I got clicked!");
// })



// var numberOfDrumButton=document.querySelectorAll(".drum").length;
// for (var i=0;i< numberOfDrumButton;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//     alert("I got clicked!");
// })
// }


