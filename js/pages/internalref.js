class Page{
    constructor(){
        this.list = [];
        this.fontsize = canvas.width/30;
        this.niculevel = undefined;
        this.drop1open = false;
        this.drop2open = false;
        this.from = "From...";
        this.to = "To...";
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
            "Internal Referral"
        ));
        
        let lv12btn = new Buttontext(
            (canvas.width/2)-100-(300/2),
            (4*canvas.height/10)+32,
            200,
            "Helvetica",
            14,
            this.from,
            '53,144,133'
        );
        let lv34btn = new Buttontext(
            (canvas.width/2)+100+(300/2),
            (4*canvas.height/10)+32,
            200,
            "Helvetica",
            14,
            this.to,
            '53,144,133'
        );
        this.list.push(new GuiButton2(
            (canvas.width/2)-(300+100),
            4*canvas.height/10,
            300,
            50,
            "221,221,221",
            'decider.html',
            lv12btn
        ));
        this.list.push(new GuiButton2(
            (canvas.width/2)+100,
            4*canvas.height/10,
            300,
            50,
            "221,221,221",
            'decider.html',
            lv34btn
        ));
        this.list.push(new Rightbutton(
            (canvas.width/2)-15,
            (4*canvas.height/10)+10,
        ));
        this.list.push(new Ntext(
            canvas.width/2,
            3.3*canvas.height/10,
            canvas.width,
            'Helvetica',
            this.fontsize,
            "Please choose service referred from...",
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
        let fromdrops = () => {
            let drop1 = new Buttontext(
                (canvas.width/2)-100-(300/2),
                (5*canvas.height/10)+32,
                200,
                "Helvetica",
                14,
                "Sole Services",
                '221,221,221'
            );
            this.list.splice(9,0,new GuiButton1(
                (canvas.width/2)-(300+100),
                5*canvas.height/10,
                300,
                50,
                "221,221,221",
                'decider.html',
                drop1
            ));
            this.list.splice(10,0,drop1);
        }
        let todrops = () => {
            let drop1 = new Buttontext(
                (canvas.width/2)+100+(300/2),
                (5*canvas.height/10)+32,
                200,
                "Helvetica",
                14,
                "Developmental Pediatrics",
                '221,221,221'
            );
            this.list.splice(9,0,new GuiButton1(
                (canvas.width/2)+100,
                5*canvas.height/10,
                300,
                50,
                "221,221,221",
                'decider.html',
                drop1
            ));
            this.list.splice(10,0,drop1);
        }
        let replacedrop1 = () => {
            let lv12btn = new Buttontext(
                (canvas.width/2)-100-(300/2),
                (4*canvas.height/10)+32,
                200,
                "Helvetica",
                14,
                this.from,
                '53,144,133'
            );
            this.list.splice(2,1, new GuiButton2(
                (canvas.width/2)-(300+100),
                4*canvas.height/10,
                300,
                50,
                "221,221,221",
                'decider.html',
                lv12btn
            ));
            this.list.splice(6,1,lv12btn);
        }
        let replacedrop2 = () => {
            let lv12btn = new Buttontext(
                (canvas.width/2)+(100+300/2),
                (4*canvas.height/10)+32,
                200,
                "Helvetica",
                14,
                this.to,
                '53,144,133'
            );
            this.list.splice(3,1, new GuiButton2(
                (canvas.width/2)+(100),
                4*canvas.height/10,
                300,
                50,
                "221,221,221",
                'decider.html',
                lv12btn
            ));
            this.list.splice(7,1,lv12btn);
        }
        let closedrop1 = () => {
            try {
                if (this.list[9].hovering()){
                    this.from = "Sole Service";
                    replacedrop1();
                    this.to = "To...";
                    replacedrop2();
                }
                this.list.splice(9,2);
                this.drop1open = false;
            } catch {console.log("Dropdown closed");}
            try {
                this.list.splice(9,2);
            } catch (error) {}
        }
        let closedrop2 = () => {
            try {
                if (this.list[9].hovering()){
                    this.to = "Developmental Pediatrics";
                    replacedrop2();
                }
                this.list.splice(9,2);
                this.drop2open = false;
            } catch {console.log("Dropdown closed");}

            if (this.from != "From..." && this.to != "To...") {
                try {
                    this.list.splice(9,2);
                } catch (error) {
                    
                }
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
            }
        }

        if (!this.drop1open){
            if (this.list[2].hovering()) {
                if (this.drop2open) {
                    closedrop2();
                }
                this.drop1open = true;
                fromdrops();
                console.log('open drop1');
            }
        } else {
            try {
                if (this.list[2].hovering()) {
                    this.drop1open = false;
                }
            } catch {console.log("no list[2]");}
            closedrop1();
        }

        if (!this.drop2open){
            if (this.list[3].hovering()) {
                todrops();
                this.drop2open = true;
            }
        } else {
            try {
                if (this.list[3].hovering()) {
                    this.drop2open = false;
                }
            } catch {console.log("no list[3]");}
            closedrop2();
        }

        if (this.list[8].hovering()){
            this.list[8].click = true;
            this.list[8].delete();
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