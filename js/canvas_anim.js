lineArray = newLineArray();
// Instantiating Objects in Animation
var pageinit = true;
function animation(frame) {
    frame++;
    frame_floored = Math.floor(frame/30);
    requestAnimationFrame(animation);
    c.clearRect(0,0,innerWidth,innerHeight);
    
    // Create Background Lines 
    for (let i=0; i<lineArray.length; i++){
        lineArray[i].draw();
        lineArray[i].update();
    }
    if (pageinit){
        pagecontent.initpage();
    }
    pageinit = false;
    //Animate canvas states
    if (pageState == 0) {
        if(frame_floored >= 15){
            //Draw each instance in the list.
            instanceList.forEach((instanceobj, i) => {
                // Delete all objects that are both at state=2 (to be deleted), and is already invisible.
                if (instanceobj.state == 2 && instanceobj.opacity < 0.1){
                    instanceList.splice(i,1);
                }
                // Draw all objects
                instanceobj.draw();
            });
        }
    } else {
        console.log("Loading next page");
    }
}


//ONCLICK
canvas.addEventListener('click', () => {
    pagecontent.action();
});

// Running Animation
animation(0);