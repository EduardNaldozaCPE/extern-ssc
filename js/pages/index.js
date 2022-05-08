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
        // START BUTTON TEXT
        let btntext = new Buttontext(
            (canvas.width/2),
            (startbuttonheight)+7,
            200,
            "Helvetica",
            20,
            "Select Service" 
        );
        this.list.push(btntext)
        //START BUTTON FRAME
        this.list.push(new GuiButton1(
            (canvas.width/2)-(200/2),
            startbuttonheight-(50/2),
            200,
            50,
            "#fff",
            "select.html",
            btntext
        ));
        // TITLE
        this.list.push(new Titletext(
            (canvas.width/2),
            titleheight,
            (canvas.width*0.75),
            "Helvetica",
            (canvas.width*0.04),
            "SIDRA SERVICE CLASSIFICATION APP"
        ));
        return this.list;
    }

    action = () => {
        if (this.list[1].hovering()) {
            this.list[2].delete();
            this.list[1].delete();
            this.list[0].delete();
        }
    }

}