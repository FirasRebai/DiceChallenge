var image0 = document.querySelectorAll(".img1")[0];
var image1 = document.querySelectorAll(".img1")[1];
function updateImages(){ 
    randomNumber1  = Math.floor(Math.random()*6)+1
    randomNumber2  = Math.floor(Math.random()*6)+1

    image0.setAttribute('src', 'images/dice'+randomNumber1+'.png');
    image1.setAttribute('src', 'images/dice'+randomNumber2+'.png');
    // if player 1 wins.
    if (randomNumber1 > randomNumber2) {
        var refreshText = document.querySelector("h1");
        refreshText.innerHTML = "Player 1 win.";
    }
    // if player 2 wins.
    else if (randomNumber1 < randomNumber2) {
      var refreshText = document.querySelector("h1");
      refreshText.innerHTML = "Player 2 win.";
  }
  // if there was a draw.
    else{
      var refreshText = document.querySelector("h1");
      refreshText.innerHTML = "Draw!";
    }
}
if (sessionStorage.getItem('pageLoadedBefore')) {
    window.onload = updateImages() 
  } else {
    sessionStorage.setItem('pageLoadedBefore', true);
  }
  
