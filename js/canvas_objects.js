//BACKGROUND LINE ANIMATION
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
    console.log(x1, y1 ,x2, y2);
    return lineArray;
}

//Gather Objects from page js
pagecontent = new Page();
var instanceList = pagecontent.startInstanceList();