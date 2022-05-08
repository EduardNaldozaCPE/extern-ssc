var canvas = document.querySelector('canvas');
var pageState = 0;
/* 

PAGE STATES

0   Stable
1   Button 1
2   Button 2
3   Button 3
...

*/

if (innerWidth < 1550) {
    canvas.width = window.innerWidth-15;
} else {
    canvas.width = 1550
}
canvas.height = window.innerHeight-15;
var c = canvas.getContext('2d');

// Mouse Coordinates
var mpos = {
    x:undefined,
    y:undefined
}
canvas.addEventListener('mousemove', (event) => {
    // console.log(currentState);
    if (innerWidth < 1550) {
        mpos.x = event.x;
    } else {
        mpos.x = event.x - ((innerWidth-canvas.width)/2);
    }
    // console.log(event.x - ((innerWidth-canvas.width)/2));
    mpos.y = event.y;
});