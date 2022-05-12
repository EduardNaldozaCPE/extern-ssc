class Page{
    constructor(){
        this.list = [];
        this.fontsize = canvas.width/30;
        this.niculevel = undefined;
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
            "Questionaire"
        ));
        this.list.push(new SubtitleText(
            (canvas.width/2),
            subheight+(canvas.height*0.06),
            (canvas.width*0.75),
            "Helvetica",
            this.fontsize*1.4,
            "Newborn Intensive Care Unit"
        ));
        
        let lv12btn = new Buttontext(
            (canvas.width/2),
            (4*canvas.height/10)+32,
            200,
            "Helvetica",
            14,
            "NICU Level 1 / 2",
            '53,144,133'
        );
        let lv34btn = new Buttontext(
            (canvas.width/2),
            (5*canvas.height/10)+32,
            200,
            "Helvetica",
            14,
            "NICU Level 3 / 4",
            '53,144,133'
        );
        this.list.push(new GuiButton2(
            (canvas.width/2)-(300/2),
            4*canvas.height/10,
            300,
            50,
            "221,221,221",
            'decider.html',
            lv12btn
        ));
        this.list.push(new GuiButton2(
            (canvas.width/2)-(300/2),
            5*canvas.height/10,
            300,
            50,
            "221,221,221",
            'decider.html',
            lv34btn
        ));
        this.list.push(new Ntext(
            canvas.width/2,
            3.3*canvas.height/10,
            canvas.width,
            'Helvetica',
            this.fontsize,
            "Please choose NICU Level (before upgrade/downgrade)",
            'center'
        ));
        
        this.list.push(lv12btn);
        this.list.push(lv34btn);

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
        let conditionbox = (q) => {
            this.list.push(new Tickbox(
                3.5*canvas.width/5,
                5*canvas.height/8,
                30,
                "221,221,221",
                'up-down-graded'
            ));
            this.list.push(new Ntext(
                this.textx(),
                5*canvas.height/8+20,
                canvas.width,
                'Helvetica',
                this.fontsize,
                q,
                'left'
            ));
        }
        
        if (this.list[7].hovering()){
            this.list[7].click = true;
            this.list[7].delete();
        }

        try{
            if (this.niculevel != undefined){
                if (this.list[9].hovering()){
                    localStorage.setItem('niculvl', this.niculevel);
                    this.list[9].click = true;
                    this.list.forEach(element => {
                        element.delete()
                    });
                }
        }} catch {console.log('Create niculvl')}

        if (this.list[2].hovering()){
            if (this.niculevel == undefined){
                createConBtn();
            }
            try{
                this.list.splice(10,2);
            } catch {}
            conditionbox('Has NICU Level been upgraded to Level 3 & 4');
            this.niculevel = 0;
            this.list[2].opacity = 1;
            this.list[3].opacity = 0.5;
        }
        if (this.list[3].hovering()){
            if (this.niculevel == undefined){
                createConBtn();
            }
            try{
                this.list.splice(10,2);
            } catch {}
            conditionbox('Has NICU Level been downgraded to Level 1 & 2');
            this.niculevel = 1;
            this.list[2].opacity = 0.5;
            this.list[3].opacity = 1;
        }

        if (this.list.length == 12){
            if (this.list[10].hovering()){
                this.list[10].tickToggle();
            }
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