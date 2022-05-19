class Page{
    constructor(){
        this.list = [];
        this.fontsize = canvas.width/30;
    }
    initpage = () => {}

    startInstanceList = () => {
        if (canvas.width > 600) {
            this.fontsize = 15;
        }
        var subheight = undefined;
        if (canvas.width > 780) {
            subheight = canvas.width*0.1;
        } else {
            subheight = 1*canvas.height/6;
        }
        this.list.push(new Titletext(
            (canvas.width/2),
            subheight,
            (canvas.width*0.75),
            "Helvetica",
            this.fontsize*3,
            "Questionnaire"
        ));

        this.list.push(new SubtitleText(
            (canvas.width/2),
            subheight+(canvas.height*0.06),
            (canvas.width*0.75),
            "Helvetica",
            this.fontsize*1.4,
            "Obstetrics"
        ));
        this.list.push(new Tickbox(
            3.5*canvas.width/5,
            3*canvas.height/8,
            30,
            "#fff",
            'internalRef'
        ));
        this.list.push(new Ntext(
            this.textx(),
            3*canvas.height/8+20,
            canvas.width,
            'Helvetica',
            this.fontsize,
            'Has the patient been internally referred to Obstetrics?',
            'left'
        ));
        
        let btntext = new Buttontext(
            (canvas.width/2),
            (4*(canvas.height/5))+7,
            200,
            "Helvetica",
            20,
            "Continue",
            '221,221,221' 
        );
        this.list.push(btntext)

        this.list.push(new GuiButton1(
            (canvas.width/2)-(200/2),
            (4*(canvas.height/5))-(50/2),
            200,
            50,
            "221,221,221",
            'decider.html',
            btntext
        ));
        let backw = () => {
            if (canvas.width > 600) {
                return canvas.width/50;
            } else {
                return canvas.width/20;
            }
        }
        this.list.push(new Leftbutton(
            70,
            canvas.height/20,
            backw(),
            'select.html'
        ));

        return this.list;
    }
    
    action = () => {
        let button = this.list[5]
        if (button.hovering()){
            button.click = true;
            this.list.forEach(element => {
                element.delete()
            });
        }
        if (this.list[6].hovering()){
            this.list[6].click = true;
            this.list[6].delete();
        }

        if (this.list[2].hovering()) {
            this.list[2].tickToggle()
        }
    }
    
    textx = () => {
        if (canvas.width >= 600){
            return (1*canvas.width/5)+(canvas.width/12);
        } else {
            return (1*canvas.width/7);
        }
    }

}