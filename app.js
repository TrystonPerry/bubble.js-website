for(let i = 0; i < bubbles.length; i++){
  let c = randomColor();
  bubbles[i].style.background = 'rgb(' + c.r + ',' + c.g + ',' + c.b + ')';
}


let copyRegular = () => copyStr('<script src="https://www.trystonperry.com/bubble.js/dl/bubble.js"></script>');
let copyMinified = () => copyStr('<script src="https://www.trystonperry.com/bubble.js/dl/bubble.min.js"></script>');

function copyStr(str) {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

function randomColor() {
  let c = {};
  c.r = Math.floor(Math.random() * (256 - 0) + 0);
  c.g = Math.floor(Math.random() * (256 - 0) + 0);
  c.b = Math.floor(Math.random() * (256 - 0) + 0);
  return c;
}