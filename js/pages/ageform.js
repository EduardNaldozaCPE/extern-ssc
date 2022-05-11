class Page{
    constructor(){
        this.list = [];
        this.fontsize = canvas.width/30;
    }
    initpage = () => {
        // window.onload = () => {
        //     $("#in-text.hidden").slideDown("slow");
        //     $("#in-text").css('opacity', 0).slideDown('slow').animate(
        //       { opacity: 1 },
        //       { queue: false, duration: 'slow' }
        //     );
        // };
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
        switch (localStorage.getItem('branch')) {
            case 'Genetics':
                this.list.push(new SubtitleText(
                    (canvas.width/2),
                    subheight+(canvas.height*0.06),
                    (canvas.width*0.75),
                    "Helvetica",
                    this.fontsize*1.4,
                    "Genetics"
                ));
                this.list.push(new Tickbox(
                    3.5*canvas.width/5,
                    3*canvas.height/8,
                    30,
                    "#fff",
                    'ageReq'
                ));
                this.list.push(new Ntext(
                    this.textx(),
                    3*canvas.height/8+20,
                    canvas.width,
                    'Helvetica',
                    this.fontsize,
                    'Is this patient below 18 years of age?',
                    'left'
                ));
                this.list.push(new Ntext(
                    this.textx(),
                    4*canvas.height/8+20,
                    canvas.width,
                    'Helvetica',
                    this.fontsize,
                    'Is the patient self-referred?',
                    'left'
                ));
                this.list.push(new Tickbox(
                    3.5*canvas.width/5,
                    4*canvas.height/8,
                    30,
                    "#fff",
                    'selfRef'
                ));
                break;

            case 'ENT':
                this.list.push(new SubtitleText(
                    (canvas.width/2),
                    subheight+(canvas.height*0.06),
                    (canvas.width*0.75),
                    "Helvetica",
                    this.fontsize*1.4,
                    "ENT"
                ));
                this.list.push(new Tickbox(
                    3.5*canvas.width/5,
                    3*canvas.height/8,
                    30,
                    "#fff",
                    'ageReq'
                ));
                this.list.push(new Ntext(
                    this.textx(),
                    3*canvas.height/8+20,
                    canvas.width,
                    'Helvetica',
                    this.fontsize,
                    'Is this patient 3 years old or younger?',
                    'left'
                ));
                this.list.push(new Ntext(
                    this.textx(),
                    4*canvas.height/8+20,
                    canvas.width,
                    'Helvetica',
                    this.fontsize,
                    'Is the patient self-referred?',
                    'left'
                ));
                this.list.push(new Tickbox(
                    3.5*canvas.width/5,
                    4*canvas.height/8,
                    30,
                    "#fff",
                    'selfRef'
                ));
                break;            

            case 'Plastic Surgery':
                this.list.push(new SubtitleText(
                    (canvas.width/2),
                    subheight+(canvas.height*0.06),
                    (canvas.width*0.75),
                    "Helvetica",
                    this.fontsize*1.4,
                    "Plastic Surgery"
                ));
                this.list.push(new Tickbox(
                    3.5*canvas.width/5,
                    3*canvas.height/8,
                    30,
                    "#fff",
                    'ageReq'
                ));
                this.list.push(new Ntext(
                    this.textx(),
                    3*canvas.height/8+20,
                    canvas.width,
                    'Helvetica',
                    this.fontsize,
                    'Is this patient below 18 years of age?',
                    'left'
                ));
                this.list.push(new Ntext(
                    this.textx(),
                    4*canvas.height/8+20,
                    canvas.width,
                    'Helvetica',
                    this.fontsize,
                    'Is the patient self-referred?',
                    'left'
                ));
                this.list.push(new Tickbox(
                    3.5*canvas.width/5,
                    4*canvas.height/8,
                    30,
                    "#fff",
                    'selfRef'
                ));
                let btntext = new Buttontext(
                    (canvas.width/2),
                    (4*(canvas.height/5))+7,
                    200,
                    "Helvetica",
                    20,
                    "Continue" 
                );
                break;
            
            case 'Dermatology':
                this.list.push(new SubtitleText(
                    (canvas.width/2),
                    subheight+(canvas.height*0.06),
                    (canvas.width*0.75),
                    "Helvetica",
                    this.fontsize*1.4,
                    "Dermatology"
                ));
                this.list.push(new Tickbox(
                    3.5*canvas.width/5,
                    3*canvas.height/8,
                    30,
                    "#fff",
                    'ageReq'
                ));
                this.list.push(new Ntext(
                    this.textx(),
                    3*canvas.height/8+20,
                    canvas.width,
                    'Helvetica',
                    this.fontsize,
                    'Is this patient below 3 months of age?',
                    'left'
                ));
                this.list.push(new Ntext(
                    this.textx(),
                    4*canvas.height/8+20,
                    canvas.width,
                    'Helvetica',
                    this.fontsize,
                    'Is the patient self-referred?',
                    'left'
                ));
                this.list.push(new Tickbox(
                    3.5*canvas.width/5,
                    4*canvas.height/8,
                    30,
                    "#fff",
                    'selfRef'
                ));
                break;

        }
        
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
        let button = this.list[7]
        if (button.hovering()){
            button.click = true;
            this.list.forEach(element => {
                element.delete()
            });
        }
        if (this.list[8].hovering()){
            this.list[8].click = true;
            this.list[8].delete();
        }
        switch (localStorage.getItem('branch')) {
            // case 'Genetics':
            //     break;
            // case 'ENT':
            //     break;
            // case 'Plastic Surgery':
            //     break;
            // case 'Dermatology':
            //     break;
            default:
                if (this.list[2].hovering()) {
                    this.list[2].tickToggle()
                }
                if (this.list[5].hovering()) {
                    this.list[5].tickToggle()
                }
                break;
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