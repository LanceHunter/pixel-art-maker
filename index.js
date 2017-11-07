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

  function startBrush() {
    board.addEventListener('mouseup', endBrush);
    let square = document.getElementById(event.target.id);
    if (theColor) {
      square.style.backgroundColor = theColor;
      square.style.borderColor = theColor;
    }
    if (theColor === 'white') {
      square.style.borderColor = 'silver';
    }
  }

  function endBrush() {
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
