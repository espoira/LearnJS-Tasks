
let div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '100px';
div.style.height = '100px';

document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;

div.remove();

alert(scrollWidth);
