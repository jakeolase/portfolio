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







const prefix = '<jake> of all trades, master of ';
const skills = [
  'more than one',
  'creativity',
  'logic',
  'html and css',
  'javascript',
  'python',
  'java',
].map(s => `${s}.`);
const delay = 15;
const step = 1;
const tail = 2;
const timeout = 50;

// Select the existing label element by ID
const heroHeading = document.getElementById('hero_heading');

const colors = [
  '#b1b1b1',
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomChar() {
  return String.fromCharCode(Math.random() * (127 - 33) + 33);
}

function getRandomColoredString(n) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < n; i++) {
    const char = document.createElement('span');
    char.textContent = getRandomChar();
    char.style.color = getRandomColor();
    fragment.appendChild(char);
  }
  return fragment;
}

const $ = {
  text: '',
  prefixP: -tail,
  skillI: 0,
  skillP: 0,
  direction: 'forward',
  delay,
  step,
};

function render() {
  const skill = skills[$.skillI];

  if ($.step) {
    $.step--;
  } else {
    $.step = step;
    if ($.prefixP < prefix.length) {
      if ($.prefixP >= 0) {
        $.text += prefix[$.prefixP];
      }
      $.prefixP++;
    } else {
      if ($.direction === 'forward') {
        if ($.skillP < skill.length) {
          $.text += skill[$.skillP];
          $.skillP++;
        } else {
          if ($.delay) {
            $.delay--;
          } else {
            $.direction = 'backward';
            $.delay = delay;
          }
        }
      } else {
        if ($.skillP > 0) {
          $.text = $.text.slice(0, -1);
          $.skillP--;
        } else {
          $.skillI = ($.skillI + 1) % skills.length;
          $.direction = 'forward';
        }
      }
    }
  }

  // Update the content of the existing label element
  heroHeading.textContent = $.text;
  heroHeading.appendChild(getRandomColoredString(
    $.prefixP < prefix.length ?
    Math.min(tail, tail + $.prefixP):
    Math.min(tail, skill.length - $.skillP)));
  setTimeout(render, timeout);
}

// Start the animation after a delay
setTimeout(render, 500);