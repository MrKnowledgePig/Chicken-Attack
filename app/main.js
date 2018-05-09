'use strict';

window.onload = function () {
  // console.log('ready');
  document.addEventListener('keydown', function (key) {
    // console.log('key', key);
    switch (key.keyCode) {
      case 38: // key ArrowUp
        arrowUp();
        break;

      case 40: // key ArrowDown
        arrowDown();
        break;

      case 37: // key Arrowleft
        arrowLeft();
        break;

      case 39: // key ArrowRight
        arrowRight();
        break;

      case 87: // key Up
        Up();
        break;

      case 83: // key Down
        Down();
        break;

      case 65: // key left
        Left();
        break;

      case 68: // key Right
        Right();
        break;
    }
  });
};

function arrowUp() {
  var hero = document.getElementById('hero');
  console.log('arrowUp', hero.offsetTop);
  hero.style.top = (hero.offsetTop - 3) + 'px';
}

function arrowDown() {
  var hero = document.getElementById('hero');
  console.log('arrowDown', hero.offsetTop);
  hero.style.top = (hero.offsetTop + 3) + 'px';
}

function arrowLeft() {
  var hero = document.getElementById('hero');
  console.log('arrowleft', hero.offsetLeft);
  hero.style.left = (hero.offsetLeft - 3) + 'px';
}

function arrowRight() {
  var hero = document.getElementById('hero');
  console.log('arrowRight', hero.offsetLeft);
  hero.style.left = (hero.offsetLeft + 3) + 'px';

}

function Up() {
  var villain = document.getElementById('villain');
  console.log('Up', villain.offsetTop);
  villain.style.top = (villain.offsetTop - 3) + 'px';
}

function Down() {
  var villain = document.getElementById('villain');
  console.log('Down', villain.offsetTop);
  villain.style.top = (villain.offsetTop + 3) + 'px';
}

function Left() {
  var villain = document.getElementById('villain');
  console.log('left', villain.offsetLeft);
  villain.style.left = (villain.offsetLeft - 3) + 'px';
}

function Right() {
  var villain = document.getElementById('villain');
  console.log('Right', villain.offsetLeft);
  villain.style.left = (villain.offsetLeft + 3) + 'px';

}



