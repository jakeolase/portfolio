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

document.addEventListener("DOMContentLoaded", function() {
  const projectImages = document.querySelectorAll(".project_img");

  const options = {
    threshold: 0.8,
  };

  const observer = new IntersectionObserver(handleIntersect, options);

  projectImages.forEach(img => {
    observer.observe(img);
  });

  function handleIntersect(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.filter = "none";
        entry.target.style.transform = "scale(1.0)";
      } else {
        entry.target.style.filter = "grayscale()";
        entry.target.style.transform = "scale(0.95)";
      }
    });
  }
});