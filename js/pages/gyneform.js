class Page{
    constructor(){
        this.list = [];
        this.fontsize = canvas.width/30;
        this.gyneage = undefined;
    }
    initpage = () => {
        window.onload = () => {
            $("#in-text.hidden").slideDown("slow");
            $("#in-text").css('opacity', 0).slideDown('slow').animate(
              { opacity: 1 },
              { queue: false, duration: 'slow' }
            );
        };
    }
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
            "Gynecology"
        ));
        
        let pedibtn = new Buttontext(
            (canvas.width/2),
            (4*canvas.height/10)+32,
            200,
            "Helvetica",
            14,
            "Pediatrics (4 - 14 Years)",
            '53,144,133'
        );
        let adolbtn = new Buttontext(
            (canvas.width/2),
            (5*canvas.height/10)+32,
            200,
            "Helvetica",
            14,
            "Adolescence (>14 - <18 Years)",
            '53,144,133'
        );
        let adulbtn = new Buttontext(
            (canvas.width/2),
            (6*canvas.height/10)+32,
            200,
            "Helvetica",
            14,
            "Adult (18+ Years)",
            '53,144,133'
        );
        this.list.push(new GuiButton2(
            (canvas.width/2)-(300/2),
            4*canvas.height/10,
            300,
            50,
            "221,221,221",
            'decider.html',
            pedibtn
        ));
        this.list.push(new GuiButton2(
            (canvas.width/2)-(300/2),
            5*canvas.height/10,
            300,
            50,
            "221,221,221",
            'decider.html',
            adolbtn
        ));
        this.list.push(new GuiButton2(
            (canvas.width/2)-(300/2),
            6*canvas.height/10,
            300,
            50,
            "221,221,221",
            'decider.html',
            adulbtn
        ));
        this.list.push(new Ntext(
            canvas.width/2,
            3.3*canvas.height/10,
            canvas.width,
            'Helvetica',
            this.fontsize,
            "Please choose the patient's age range",
            'center'
        ));
        
        this.list.push(pedibtn)
        this.list.push(adolbtn)
        this.list.push(adulbtn)

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
        let createConBtn = () => {
            let btntext = new Buttontext(
                (canvas.width/2),
                (4*(canvas.height/5))+7,
                200,
                "Helvetica",
                20,
                "Continue",
                "221,221,221"
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
        }
        
        if (this.list[9].hovering()){
            this.list[9].click = true;
            this.list[9].delete();
        }

        try{
        if (this.gyneage != undefined){
            if (this.list[11].hovering()){
                localStorage.setItem('gyneAge', this.gyneage);
                this.list[11].click = true;
                this.list.forEach(element => {
                    element.delete()
                });
            }
        }} catch {console.log('Create gyneage')}
        if (this.list[2].hovering()){
            if (this.gyneage == undefined){createConBtn();}
            this.gyneage = 0;
            this.list[2].opacity = 1;
            this.list[3].opacity = 0.5;
            this.list[4].opacity = 0.5;
        }
        if (this.list[3].hovering()){
            if (this.gyneage == undefined){createConBtn();}
            this.gyneage = 1;
            this.list[2].opacity = 0.5;
            this.list[3].opacity = 1;
            this.list[4].opacity = 0.5;
        }
        if (this.list[4].hovering()){
            if (this.gyneage == undefined){createConBtn();}
            this.gyneage = 2;
            this.list[2].opacity = 0.5;
            this.list[3].opacity = 0.5;
            this.list[4].opacity = 1;
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