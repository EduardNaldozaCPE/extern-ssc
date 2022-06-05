//BACKGROUND LINE ANIMATION
class Backline {
    constructor(x1, x2, y1, y2, dx1, dx2, dy1, dy2, colour) {
        this.name = "Backline";
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.dx1 = dx1;
        this.dx2 = dx2;
        this.dy1 = dy1;
        this.dy2 = dy2;
        this.colour = colour;
        this.fresh = true;
    }

    draw = () => {
        c.beginPath();
        c.moveTo(this.x1, this.y1);
        c.lineTo(this.x2, this.y2);
        c.lineWidth = 1;
        c.strokeStyle = this.colour;
        c.stroke();
    };

    update = () => {
        if (this.x1 > innerWidth || this.x1 < 0) {
            this.dx1 = -this.dx1;
        }
        if (this.x2 > innerWidth || this.x2 < 0) {
            this.dx2 = -this.dx2;
        }
        if (this.y1 > innerHeight || this.y1 < 0) {
        }
        if (this.y2 > innerHeight || this.y2 < 0) {
            this.dy2 = -this.dy2;
        }

        this.x1 += this.dx1;
        this.x2 += this.dx2;
        this.y1 += this.dy1;
        this.y2 += this.dy2;
    };
}

function newLineArray() {
    let lineArray = [];
    for (let i=0; i<70; i++){
        var x1 = (canvas.width*Math.random())-1;
        var y1 = (canvas.height*Math.random())-1;
        var x2 = (canvas.width*Math.random())-1;
        var y2 = (canvas.height*Math.random())-1;
        var dx1 = posneg()*Math.random()/3;
        var dx2 = posneg()*Math.random()/3;
        var dy1 = posneg()*Math.random()/3;
        var dy2 = posneg()*Math.random()/3;;
        var colour = `#359085`;
        lineArray.push(new Backline(x1,x2,y1,y2,dx1,dx2,dy1,dy2,colour));
    }
    // console.log(x1, y1 ,x2, y2);
    return lineArray;
}

//Gather Objects from page js
pagecontent = new Page();



// Instantiating Objects in Animation
var pageinit = true;
let frame = 0;
lineArray = newLineArray();

// ANIMATE CANVAS
setInterval(animation,10);  
function animation() {
    if (frame > 100){
        pageloaded = true;
    }
    frame++;
    c.clearRect(0,0,innerWidth,innerHeight);

    // Create Background Lines 
    for (let i=0; i<lineArray.length; i++){
        lineArray[i].draw();
        lineArray[i].update();
    }

    // Initialize additional conditional functions for the page
    if (pageinit){
        pagecontent.initpage();
        pageinit = false;
    }
}

if (location.pathname.endsWith("/extern-ssc/form.html")){
    formQuestions();
}