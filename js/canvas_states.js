class c_page {
    constructor() {
    }
    
    animate = () => {
        
        if(frame_floored >= 15){
            //Draw each instance in the list.
            instanceList.forEach((instanceobj, i) => {
                instanceobj.draw();
            });
        }
    }
}