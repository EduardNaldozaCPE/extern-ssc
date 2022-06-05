lineArray = newLineArray();

// Instantiating Objects in Animation
var pageinit = true;
let frame = 0;


// ANIMATE CANVAS
setInterval(animation,8);  
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
    }
    pageinit = false;


    //Animate canvas states
    if (pageState == 0) {
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

        // ADDITIONAL RESOURCES AND CONTACT ICON
        if (location.pathname.endsWith("index.html") || location.pathname.endsWith("/extern-ssc/")){
            let addResIcon_x = canvas.width-(canvas.width/7.4);
            let addResIcon_y = (7.1*canvas.height/8);
            if (mpos.x >= addResIcon_x-15 && mpos.y >= addResIcon_y-15){
                if (mpos.x < addResIcon_x+15 && mpos.y < addResIcon_y+15){ 
                    c.fillStyle = 'rgb(50,50,50,0.7)';               
                    c.fillRect(addResIcon_x-126, (addResIcon_y-86)-20, 124, 84)
                    c.beginPath();
                    c.moveTo(addResIcon_x-2,addResIcon_y-22);
                    c.lineTo(addResIcon_x,addResIcon_y)
                    c.lineTo(addResIcon_x-15,addResIcon_y-22);
                    c.fill();
                    c.drawImage(document.getElementById("mindmap-thumb"),addResIcon_x-124, (addResIcon_y-84)-20, 120, 80);
    
                }
            }

            let contactIcon_x = canvas.width-(canvas.width/6);
            let contactIcon_y = (7.1*canvas.height/8);
            let contactMsg = "For technical inquiries or clarification, Please contact: ApplicationRevenueCycle@sidra.org";
            if (mpos.x >= contactIcon_x-15 && mpos.y >= contactIcon_y-15){
                if (mpos.x < contactIcon_x+15 && mpos.y < contactIcon_y+15){ 
                    c.fillStyle = 'rgb(50,50,50,0.7)';               
                    c.fillRect(contactIcon_x-(contactMsg.length*15/2)-2, (contactIcon_y-70), (contactMsg.length*15/2), 70-22)
                    c.beginPath();
                    c.moveTo(contactIcon_x-2,contactIcon_y-22);
                    c.lineTo(contactIcon_x,contactIcon_y);
                    c.lineTo(contactIcon_x-15,contactIcon_y-22);
                    c.fill();
                    c.fillStyle = 'rgb(255,255,255,1)';
                    c.textAlign =  'center';
                    c.font = "15px Helvetica"
                    c.fillText(contactMsg,
                     contactIcon_x-(contactMsg.length*15/2)+(contactMsg.length*15/2)/2,
                     contactIcon_y-40,
                     canvas.width/2
                    );
    
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

    if (location.pathname.endsWith("index.html")  || location.pathname.endsWith("/extern-ssc/")){

        if (mpos.x >= (canvas.width-(canvas.width/7.4))-15 && mpos.y >= (7.1*canvas.height/8)-15){
            if (mpos.x < (canvas.width-(canvas.width/7.4))+15 && mpos.y < (7.1*canvas.height/8)+15){
                window.open(
                    './mindmap.pdf',
                    '_blank'
                );
            }
        }
        if (mpos.x >= (canvas.width-(canvas.width/6))-15 && mpos.y >= (7.1*canvas.height/8)-15){
            if (mpos.x < (canvas.width-(canvas.width/6))+15 && mpos.y < (7.1*canvas.height/8)+15){
                window.open('mailto:ApplicationRevenueCycle@sidra.org');
            }
        }

    }
});

if (location.pathname.endsWith("/extern-ssc/form.html")){
    formQuestions();
}