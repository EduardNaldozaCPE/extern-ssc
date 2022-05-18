var canvas = document.querySelector('canvas');
var pageState = 0;

// if (innerWidth < 1550) {
//     canvas.width = window.innerWidth-15;
// } else {
//     canvas.width = 1550
// }
canvas.width = innerWidth-15;
canvas.height = innerHeight-15;
var c = canvas.getContext('2d');

// Mouse Coordinates
var mpos = {
    x:undefined,
    y:undefined
}
canvas.addEventListener('mousemove', (event) => {
    mpos.x = event.x - ((innerWidth-canvas.width)/2);
    mpos.y = event.y;
});

CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    this.beginPath();
    this.moveTo(x+r, y);
    this.arcTo(x+w, y,   x+w, y+h, r);
    this.arcTo(x+w, y+h, x,   y+h, r);
    this.arcTo(x,   y+h, x,   y,   r);
    this.arcTo(x,   y,   x+w, y,   r);
    this.closePath();
    return this;
}

