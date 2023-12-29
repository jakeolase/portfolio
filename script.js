var cursor = document.querySelector('.blob');

function moveCursor(e) {
  var x, y;

  if (e.type === 'mousemove') {
    x = e.clientX;
    y = e.clientY;
  } else if (e.type === 'touchmove') {
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
  }

  cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
}

document.addEventListener('mousemove', moveCursor);
document.addEventListener('touchmove', moveCursor);

