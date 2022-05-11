class Page{
    constructor(){
        this.list = [];
        this.fontsize = canvas.width/30;
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
            "Child and Adolescent Mental Health Services"
        ));
        this.list.push(new Tickbox(
            3.5*canvas.width/5,
            3*canvas.height/8,
            30,
            "#fff",
            'in-out-patient'
        ));
        let btntext = new Buttontext(
            (canvas.width/2),
            (4*(canvas.height/5))+7,
            200,
            "Helvetica",
            20,
            "Continue" 
        );
        this.list.push(btntext)

        this.list.push(new GuiButton1(
            (canvas.width/2)-(200/2),
            (4*(canvas.height/5))-(50/2),
            200,
            50,
            "#fff",
            'decider.html',
            btntext
        ));
        this.list.push(new Ntext(
            this.textx(),
            3*canvas.height/8+20,
            canvas.width,
            'Helvetica',
            this.fontsize,
            'Is this person an Inpatient?',
            'left'
        ));

        this.list.push(new EmptyObj());

        this.list.push(new Ntext(
            canvas.width/2,
            5*canvas.height/8+20,
            canvas.width,
            'Helvetica',
            `italic ${this.fontsize}`,
            '* only 14 years and under allowed for CAMHS Oupatients',
            'center'
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
        let button = this.list[4]
        if (button.hovering()){
            button.click = true;
            console.log(button.click);
            this.list.forEach(element => {
                element.delete()
            });
        }
        if (this.list[8].hovering()){
            this.list[8].click = true;
            this.list[8].delete();
        }
        if (this.list[2].hovering()) {
            this.list[2].tickToggle();
            if (this.list[2].state == 2) {
                this.list.splice(6,2,new Ntext(
                    this.textx(),
                    4*canvas.height/8+20,
                    canvas.width,
                    'Helvetica',
                    this.fontsize,
                    'Is this patient over 14 years old?',
                    'left'
                ),new Tickbox(
                    3.5*canvas.width/5,
                    4*canvas.height/8,
                    30,
                    "#fff",
                    'ageReq'
                ));

            } else if (this.list[2].state == 1){
                this.list.splice(6,2,new EmptyObj(), 
                    new Ntext(
                        canvas.width/2,
                        5*canvas.height/8+20,
                        canvas.width,
                        'Helvetica',
                        `italic ${this.fontsize}`,
                        '* only 14 years and under allowed for CAMHS Oupatients',
                        'center'
                    ));   
            }
        }
        if (this.list[2].state == 2 && this.list[7].hovering()){
            this.list[7].tickToggle();
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