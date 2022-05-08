//BACKGROUND LINE ANIMATION
function newLineArray() {
    let lineArray = [];
    for (let i=0; i<50; i++){
        var x1 = (innerWidth*Math.random())-1;
        var y1 = (innerHeight*Math.random())-1;
        var x2 = (innerWidth*Math.random())-1;
        var y2 = (innerHeight*Math.random())-1;
        var dx1 = posneg()*Math.random()/3;
        var dx2 = posneg()*Math.random()/3;
        var dy1 = posneg()*Math.random()/3;
        var dy2 = posneg()*Math.random()/3;
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        // let b = Math.floor(Math.random()*255);
        // var colour = `rgb(${r}, ${g}, ${b})`
        var colour = `#359085`
        lineArray.push(new Backline(x1,x2,y1,y2,dx1,dx2,dy1,dy2,colour))
    }
    return lineArray;
}

//Gather Objects from page js
pagecontent = new Page();
var instanceList = pagecontent.startInstanceList();
console.log(instanceList);
try {
    pagecontent.initpage();
} catch (error) {
    console.log(error);   
}