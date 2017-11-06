(function () {
  let board = document.getElementById('board');
  let pallete = document.getElementById('pallete');
  let theColor = '';

  for (i=0; i<4; i++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.id = `pixel${i}`;
    pixel.innerText = `Pixel: ${i}`;
    board.appendChild(pixel);
  }

  palette.addEventListener('click', selectColor);
  board.addEventListener('click', changeColor);

  function selectColor() {
    let newColor = event.target.id;
    if (event.target.id !== 'pallete') {
      theColor = event.target.id;
    }
  }

  function changeColor() {
    let square = document.getElementById(event.target.id);
    if (theColor) {
      square.setAttribute("style", `background-color: ${theColor};`);
    }
  }

})();