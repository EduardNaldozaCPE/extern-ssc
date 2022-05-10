class Page{
    constructor(){
        this.list = [];
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
        var subheight = undefined;
        if (canvas.width > 780) {
            subheight = canvas.width*0.15;
        } else {
            subheight = 2*canvas.height/6;
        }
        this.list.push(new Titletext(
            (canvas.width/2),
            subheight,
            (canvas.width*0.75),
            "Helvetica",
            (canvas.width*0.04),
            "Questionaire"
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
            1.5*canvas.width/5,
            3*canvas.height/8+20,
            canvas.width,
            'Helvetica',
            '15',
            'Is this person an Inpatient?',
            'left'
        ));

        this.list.push(new EmptyObj());

        this.list.push(new Ntext(
            canvas.width/2,
            5*canvas.height/8+20,
            canvas.width,
            'Helvetica',
            'italic 12',
            '* only 14 years and under allowed for CAMHS Oupatients',
            'center'
        ));


        return this.list;
    }
    
    action = () => {
        let button = this.list[3]
        if (button.hovering()){
            this.list.forEach(element => {
                element.delete()
            });
        }
        if (this.list[1].hovering()) {
            this.list[1].tickToggle();
            if (this.list[1].state == 2) {
                // this.list[2].disable();
                this.list.splice(5,2);
                this.list.push(new Ntext(
                    1.5*canvas.width/5,
                    4*canvas.height/8+20,
                    canvas.width,
                    'Helvetica',
                    '15',
                    'Is this patient over 14 years old?',
                    'left'
                ));
                this.list.push(new Tickbox(
                    3.5*canvas.width/5,
                    4*canvas.height/8,
                    30,
                    "#fff",
                    'ageReq'
                ));

            } else if (this.list[1].state == 1){
                this.list.splice(5,2);
                this.list.splice(5,0,new EmptyObj(), 
                    new Ntext(
                        canvas.width/2,
                        5*canvas.height/8+20,
                        canvas.width,
                        'Helvetica',
                        'italic 12',
                        '* only 14 years and under allowed for CAMHS Oupatients',
                        'center'
                    ));   
            }
        }
        if (this.list[1].state == 2 && this.list[6].hovering()){
            this.list[6].tickToggle();
        }
    }

}