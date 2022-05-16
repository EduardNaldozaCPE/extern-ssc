class Page{
    constructor(){
        this.list = [];
        this.fontsize = canvas.width/30;
        this.niculevel = undefined;
        this.drop1open = false;
        this.drop2open = false;
        this.from = "From...";
        this.to = "To...";
        this.fromlist = ['Adult Mental Health Services','Adult Congenital Heart Disease', 'Sole Service','Obstetrics'];
        this.tolist = [
            ["Obstetrics"],
            ["Obstetrics"],
            ["Developmental Pediatrics"],
            ['Diabetic New','Endocrinology New', 'Physiotherapy New', "Internal Medicine", "Adult Cardiology New"]
        ]
        this.dropstart = 9;
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
        let toi = undefined;
        this.fromlist.forEach((element,i) => {
            if (element==this.from){
                toi = i;
            }
        });
        let fromdrops = (optionslist) => {
            optionslist.forEach((element, i) => {
                let drop1 = new Buttontext(
                    (canvas.width/2)-100-(300/2),
                    ((5+i)*canvas.height/10)+32,
                    200,
                    "Helvetica",
                    14,
                    element,
                    '221,221,221'
                );
                this.list.splice(this.dropstart+i,0,new GuiButton1(
                    (canvas.width/2)-(300+100),
                    (5+i)*canvas.height/10,
                    300,
                    50,
                    "221,221,221",
                    'decider.html',
                    drop1
                ));
                this.list.push(drop1);
            });
        }
        let todrops = (optionslist) => {
                optionslist.forEach((element,i) => {
                    let drop1 = new Buttontext(
                        (canvas.width/2)+100+(300/2),
                        ((5+i)*canvas.height/10)+32,
                        200,
                        "Helvetica",
                        14,
                        element,
                        '221,221,221'
                    );
                    this.list.splice(this.dropstart+i,0,new GuiButton1(
                        (canvas.width/2)+100,
                        (5+i)*canvas.height/10,
                        300,
                        50,
                        "221,221,221",
                        'decider.html',
                        drop1
                    ));
                    this.list.push(drop1);
                });
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
            this.to = "To..."
            replacedrop2()
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

            if (this.dropstart==11 && this.to == "To..."){
                this.list.splice(9,2)
                this.dropstart = 9;
            }

            if (this.from != "From..." && this.to != "To..."){
                let btntext = new Buttontext(
                    (canvas.width/2),
                    (4*(canvas.height/5))+7,
                    200,
                    "Helvetica",
                    20,
                    "Continue",
                    '221,221,221'
                );
                this.list.splice(9,0,btntext)
        
                this.list.splice(9,0,new GuiButton1(
                    (canvas.width/2)-(200/2),
                    (4*(canvas.height/5))-(50/2),
                    200,
                    50,
                    "221,221,221",
                    'decider.html',
                    btntext
                ));
                this.dropstart = 11;
            }
        }
        let closedrop1 = () => {
            this.list.splice(this.dropstart,this.fromlist.length*2);
            this.drop1open = false;
        }
        let closedrop2 = () => {
            this.list.splice(this.dropstart,this.tolist[toi].length*2);
            this.drop2open = false;
        }

        if (!this.drop1open){ 
            if (this.list[2].hovering()) {              // OPEN "FROM" BOX
                if (this.drop2open) {                   // IF "TO" BOX IS OPEN, CLOSE IT
                    closedrop2();
                }
                this.drop1open = true;
                fromdrops(this.fromlist);
                console.log('open drop1');
            }
        } else {                                        // IF "FROM" BOX IS ALREADY OPEN
            this.list.forEach((element,i) => {          // Check for element clicked and replace from drop
                try{
                    // console.log(this.list[i+this.fromlist.length].msg, this.fromlist[i-this.dropstart]);
                    if (element.hovering() && this.list[i+this.fromlist.length].msg == this.fromlist[i-this.dropstart] && i>=this.dropstart) {
                        this.from = this.fromlist[i-this.dropstart];
                        if (this.list.length >= this.fromlist.length*2 + this.dropstart)
                        {
                            this.list.splice(this.dropstart,2);
                        }
                        replacedrop1();
                    }
                } catch {}
            });
            closedrop1();
        }

        if (this.from != 'From...'){                    // WHEN "FROM" HAS ALREADY BEEN SELECTED, ENABLE "TO" BOX
            if (!this.drop2open){                       // WHEN "TO" BOX IS NOT OPEN
                if (this.list[3].hovering()) {          // WHEN "TO" BOX IS CLICKED, OPEN BOX
                    todrops(this.tolist[toi]);
                    this.drop2open = true;
                }
            } else {                                    // WHEN "TO" BOX IS OPEN, CLOSE BOX
                this.list.forEach((element,i) => {          // Check for element clicked and replace "to" drop
                    try{
                        // console.log(element.hovering() && this.list[i+this.tolist[toi].length].msg == this.tolist[toi][i-this.dropstart] && i>=this.dropstart);
                        if (element.hovering() && this.list[i+this.tolist[toi].length].msg == this.tolist[toi][i-this.dropstart] && i>=this.dropstart) {
                            this.to = this.tolist[toi][i-this.dropstart];
                            replacedrop2();
                            closedrop2();
                        }
                    } catch {}
                });
                closedrop2();
            }
        }
        

        if (this.list[8].hovering()){
            this.list[8].click = true;
            this.list[8].delete();
        }

        if (this.dropstart == 11){
            if (this.list[9].hovering()){
                localStorage.setItem('internalref_from',this.from);
                localStorage.setItem('internalref_to',this.to);
                this.list[9].click = true;
                this.list[9].delete();
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