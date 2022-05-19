class Page{
    constructor(){
        this.list = [];
    }
    initpage = () => {}
    startInstanceList = () => {
        var titleheight = undefined;
        if (canvas.width > 700) {
            titleheight = canvas.width*0.23;
        } else {
            titleheight = canvas.width*0.25;
        }
        var startbuttonheight = undefined;
        if (canvas.height > 746) {
            startbuttonheight = canvas.height/2;
        } else {
            startbuttonheight = 4*canvas.height/6;
        }
        // // TITLE
        // this.list.push(new LeftPanel(
        // ));
        this.list.push(new Qpanel(
        ));
        return this.list;
    }

    action = () => {
    }

}