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

            let transobjs = 0;
            instanceList.forEach((instanceobj, i) => {

                // Delete all objects that are both: At state=2 (to be deleted) and already invisible.
                if (instanceobj.state == 2){
                    transobjs++;
                    if (instanceobj.opacity <= 0.001) {
                            instanceList.splice(i,1);
                    } 
                } 
                
                // Draw all objects
                instanceobj.draw();
            });

            // On the Select page, if the transitions have finished (no more objects at state=2), update page.
            //  If there are still transitions, page.transition will be/stay true.
            //  But if there are no more objects and page.transition is still true, run the new page objects and make page.transition false
            //  This makes the pagefunctions run only once every transition stage, making it impossible to make multiple transitions while one is still running 
            if (pagecontent.name == 'select'){
                if (transobjs > 0) {
                    pagecontent.transition = true;
                } else {
                    if(pagecontent.transition == true){
                        pagecontent.pagefuncs[pagecontent.page-1]()
                    }
                    pagecontent.transition = false;
                }
            }
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