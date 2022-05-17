class Page{
    constructor(){
        this.list = [];
    }
    initpage = () => {
    }
    startInstanceList = () => {
        var service = localStorage.getItem('branch')
        var titleheight = undefined;
        if (canvas.width > 700) {
            titleheight = canvas.height*0.23;
        } else {
            titleheight = canvas.height*0.40;
        }
        // TITLE
        this.list.push(new Titletext(
            (canvas.width/2),
            titleheight,
            (canvas.width),
            "Helvetica",
            (canvas.width*0.04),
            "Physician Mpages"
        ));
        this.list.push(new Ntext(
            (canvas.width/2),
            (canvas.height*0.5),
            (canvas.width),
            "Helvetica",
            (canvas.width*0.015),
            `From the details you have entered, the chosen service is requires a Physician's Assessment to determine classification.`,
            "center"
        ));
        let btntext = new Buttontext(
            (canvas.width/2),
            (3*canvas.height/4)+7,
            200,
            "Helvetica",
            20,
            "Select Service",
            '221,221,221'
        );
        this.list.push(btntext)
        this.list.push(new GuiButton1(
            (canvas.width/2)-(200/2),
            (3*canvas.height/4)-(50/2),
            200,
            50,
            "221,221,221",
            "select.html",
            btntext
        ));
        this.list.push(new Ntext(
            (canvas.width/2),
            (canvas.height*0.6),
            (canvas.width),
            "Helvetica",
            "oblique " + (canvas.width*0.013),
            `All Follow Up Orders will inherit the classification determined by the Mpages questionnaire.`,
            "center"
        ));
        return this.list;
    }

    action = () => {
        if (this.list[3].hovering()) {
            this.list[3].click = true;
            this.list.forEach(element => {
                element.delete();
            });
        }
    }

}