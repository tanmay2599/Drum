var countOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < countOfButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var textButton = this.innerHTML;

        makeSound(textButton);

        addButtonAnimation(textButton);

    });
}

document.addEventListener("keydown", function(event) {

    makeSound(event.key);

    addButtonAnimation(event.key);
});


function makeSound(key)

{
    switch (key) {

        case "w":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("kick-bass.mp3");
            kick.play();
            break;

        default:
    }
}

function addButtonAnimation(currentKey) {

    var colorButton = document.querySelector("." + currentKey);

    colorButton.classList.add("pressed");

    setTimeout(function() {
        colorButton.classList.remove("pressed")
    }, 100);

}