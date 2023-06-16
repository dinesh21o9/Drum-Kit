function playSound(key){
  switch (key){
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "j":
      var kick_base = new Audio('sounds/kick-bass.mp3');
      kick_base.play();
      break;
    case "l":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    default:
      console.log(this.innerHTML);
  }
}

function buttonAnimation(key){
  var activeButton = document.querySelector("." + key);
  
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

  
}

// Mouse click

const btns = document.querySelectorAll("button");
for (const btn of btns) {
  btn.addEventListener("click", function() {
    var key = this.innerHTML;
    playSound(key);
    buttonAnimation(key);
  });
}

// Keyboard click

document.addEventListener("keydown",function(event){
  playSound(event.key);
  buttonAnimation(event.key);
});

