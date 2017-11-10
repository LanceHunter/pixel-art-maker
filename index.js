(function () {
  let board = document.getElementById('board');
  let pallete = document.getElementById('pallete');
  let current = document.getElementById('current');
  let brush = false;

  let theColor = '';

  for (i=0; i<2000; i++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.id = `pixel${i}`;
    board.appendChild(pixel);
  }

  palette.addEventListener('click', selectColor);
  board.addEventListener('click', changeColor);
  board.addEventListener('mousedown', brushColor);


  function brushColor() {
    board.addEventListener('mouseover', startBrush);
  }

  function startBrush(event) {
    board.addEventListener('mouseup', endBrush);
    let square = document.getElementById(event.target.id);
//    console.log("1 " + square.id);
    if (theColor && (square !== board)) {
      square.style.backgroundColor = theColor;
      square.style.borderColor = theColor;
    }
    if (theColor === 'white') {
      square.style.borderColor = 'silver';
    }
    board.style.backgroundColor = 'silver';
  }

  function endBrush() {
    board.style.backgroundColor = 'silver';
    board.style.borderColor = 'silver';
    console.log('This is over.');
    board.removeEventListener('mouseover', startBrush);
  }

  function selectColor() {
    let newColor = event.target.id;
    if (event.target.id !== 'pallete') {
      theColor = event.target.id;
      current.style.backgroundColor = theColor;
    }
  }

  function changeColor() {
    let square = document.getElementById(event.target.id);
    if (theColor) {
      square.style.backgroundColor = theColor;
      square.style.borderColor = theColor;
    }
    if (theColor === 'white') {
      square.style.borderColor = 'silver';
    }
  }

})();
