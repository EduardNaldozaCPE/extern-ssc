class Page{
    constructor(){
        this.list = [];
        this.page = 1;
        this.servicelist = {
            name:[
                "CAMHS", "Genetics", "ENT", 
                "Plastic Surgery", "Dermatology", "Gynecology", 
                "NICU","Emergency Services", ""
            ],
            url:[
                "camhsform.html", "ageform.html", "ageform.html", 
                "ageform.html", "ageform.html", "gyneform.html", 
                "nicuform.html", "index.html", ""
            ]
        };
        this.servicelist2 = {
            name:[
                "Adolescent Medicine", "Rehab medicine",
                "Allergy Immunology", "Neonatal Surgery",
                "Endocrinology", "Neurosurgery",
                "Gastroenterology", "Ophthalmology",
                "Cardiology", "Orthopedics",
                "Hematology/Oncology", "Transplant",
                "Nephrology", "Urology",
                "Infectious disease", "Peri/Post Natal Mental Health",
                "Pulmonology", "Rheumatology"
            ],
            url:"sole.html"
        };
        this.servicelist3 = {
            name:[
                "Adult Services",
                "Obstetrics",
                "Dev Peds",
                "Rep Meds (IVF)",
                "Aesthetics"
            ],
            url:"sole.html"
        };
        this.count = 0;
        this.boxheight = 50;
        this.boxwidth = canvas.width/4.5;
        this.fontsize = ((this.boxwidth+this.boxheight)/2)/10;
        this.botboxheight = 50;
        this.botboxwidth = canvas.width/4;
        this.bottext = "More";
        this.btntext = new Buttontext(
            ((2*canvas.width)/4),
            (canvas.height/3)+(4*canvas.height/8)+7,
            this.boxwidth,
            "Helvetica",
            this.fontsize,
            "More",
            '53,144,133'
        );
    }
    initpage = () => {}
    startInstanceList = () => {
        var subheight = undefined;
        if (canvas.width > 780) {
            subheight = canvas.width*0.15;
        } else {
            subheight = 2*canvas.height/6;
        }

        //MORE BUTTON
        this.list.push(new GuiButton2(
            ((2*canvas.width)/4)-((canvas.width/4.5)/2),
            (canvas.height/3)+(4*canvas.height/8)-(50/2),
            this.boxwidth,
            this.boxheight,
            "221,221,221",
            "",
            this.btntext
            ));
        this.list.push(this.btntext);
    
        this.list.push(new Titletext(
            (canvas.width/4),
            subheight,
            (canvas.width*0.75),
            "Helvetica",
            (canvas.width*0.04),
            "Select Service"
        ));

        //Add page1() objects
        this.page1();

        return this.list;
    }
    
    action = () => {
        //When clicking on a service, click = true, and start to delete specific object
        this.list.forEach(element => {
            if (element.name == "GuiButton1"){
                if (element.hovering()) {
                    element.click = true;
                    localStorage.setItem('branch',element.partner.msg);
                    element.delete();
                }
            }
        });

        if (this.list[0].hovering()) { //CLICK BOTTOM BUTTON
            switch (this.page) {
                case 1: 
                //Delete Previous items, canvas_anim will remove the objects from the array
                    for (let i=3; i<=18; i++){
                        this.list[i].delete()
                    }
                //Change white button text to "More"
                    this.btntext.msg = "More";
                    this.list.splice(1,1,this.btntext)
                    this.page = 2;
                //Add page2() objects
                    this.page2();
                    break;


                case 2:
                //Delete Previous items, canvas_anim will remove the objects from the array
                    this.list[3].delete()
                    this.list[4].delete()
                    for (let i=5; i<=22; i++){
                        this.list[i].delete()
                    }
                //Change white button text to "Back"
                    this.btntext.msg = "Back";
                    this.list.splice(1,1,this.btntext)
                    this.page = 3;
                //Add page1() objects
                    this.page3();
                    break;


                case 3:
                //Delete Previous items, canvas_anim will remove the objects from the array
                    this.list[3].delete();
                    this.list[4].delete();
                    for (let i=5; i<=9; i++){
                        this.list[i].delete();
                    }
                //Change white button text to "More"
                    this.btntext.msg = "More";
                    this.list.splice(1,1,this.btntext)
                    this.page = 1;
                //Add page1() objects
                    this.page1();
                    break;
                default:
                    break;
            }
        }
    }

    page1 = () => {
        this.count = 0;
        for (let row=1; row<=2; row++){
            for (let i=1; i<=3; i++){
                if (canvas.width <= 620){
                    this.fontsize = ((this.boxwidth+this.boxheight)/2)/6;
                } 
                if (canvas.width <= 620){
                    this.servicelist.name.splice(7,1,"Emergency");
                    this.servicelist.name.splice(3,1,"Plastic Surg.");
                }
                let btntext = new Buttontext(
                    ((i*canvas.width)/4),
                    (canvas.height/3)+(row*canvas.height/8)+7,
                    this.boxwidth,
                    "Helvetica",
                    this.fontsize,
                    this.servicelist.name[this.count],
                    '221,221,221'
                );
                this.list.splice(3,0,btntext);

                //BUTTON 1 FRAME (STATE 1)
                this.list.splice(3,0,new GuiButton1(
                    ((i*canvas.width)/4)-((canvas.width/4.5)/2),
                    (canvas.height/3)+(row*canvas.height/8)-(50/2),
                    this.boxwidth,
                    this.boxheight,
                    "221,221,221",
                    this.servicelist.url[this.count],
                    btntext
                ));
                this.count++;
            }
        }
        let btntext1 = new Buttontext(
            ((7*canvas.width)/20),
            (canvas.height/3)+(3*canvas.height/8)+7,
            this.botboxwidth,
            "Helvetica",
            this.fontsize,
            this.servicelist.name[6],
            '221,221,221'
        );
        this.list.splice(3,0,btntext1);

        //BUTTON 1 FRAME (STATE 1)
        this.list.splice(3,0,new GuiButton1(
            ((7*canvas.width)/20)-(this.botboxwidth/2),
            (canvas.height/3)+(3*canvas.height/8)-(50/2),
            this.botboxwidth,
            this.botboxheight,
            "221,221,221",
            this.servicelist.url[6],
            btntext1
        ));
        let btntext2 = new Buttontext(
            ((13*canvas.width)/20),
            (canvas.height/3)+(3*canvas.height/8)+7,
            this.botboxwidth,
            "Helvetica",
            this.fontsize,
            this.servicelist.name[7],
            '221,221,221'
        );
        this.list.splice(3,0,btntext2);

        //BUTTON 1 FRAME (STATE 1)
        this.list.splice(3,0,new GuiButton1(
            ((13*canvas.width)/20)-(this.botboxwidth/2),
            (canvas.height/3)+(3*canvas.height/8)-(50/2),
            this.botboxwidth,
            this.botboxheight,
            "221,221,221",
            this.servicelist.url[7],
            btntext2,
        ));


    }
    page2 = () => {
        let defboxy = undefined;
        if (canvas.width > 780) {
            defboxy = (4.2*canvas.height/6)+20;
        } else {
            defboxy = (4.1*canvas.height/6)+20;
        }
        let defboxw = 3.5*canvas.width/10;
        
        let defboxh = undefined;
        if (canvas.width > 780) {
            defboxh = 0.6*canvas.height/10;
        } else {
            defboxh = 0.8*canvas.height/10;
        }

        this.count = 0;
        let subheight = undefined;
        if (canvas.width > 780) {
            subheight = canvas.width*0.15;
        } else {
            subheight = 2*canvas.height/6;
        }
        if (canvas.width <= 620){
            this.servicelist2.name[15] = "Peri/Post Natal";
        }
        let rowspace = undefined;
        for (let row=1;row<=9;row++){
            if (canvas.width > 780) {
                rowspace = subheight+(0.5+row)*(canvas.height/24);
            } else {
                rowspace = subheight+(0.5+row)*(canvas.height/30);
            }
            for (let i=1;i<=2;i++){
                this.list.push(new Ntext(
                    (1.7+(i*5.5))*(canvas.width/20),
                    rowspace,
                    (canvas.width),
                    "Helvetica",
                    this.fontsize*0.7   ,
                    this.servicelist2.name[this.count],
                    "center"
                ));
                this.count++;
            }
        }

        let txt = new Buttontext(
            ((canvas.width)/2),
            defboxy+(defboxh/2)+(this.fontsize/2),
            defboxw,
            "Helvetica",
            this.fontsize,
            "Any of the above",
            '221,221,221'
        );

        this.list.splice(3,0,new GuiButton1(
            ((canvas.width)/2)-(defboxw/2),
            defboxy,
            defboxw,
            defboxh,
            "221,221,221",
            "sole.html",
            txt,
            () => {}
        ));
        this.list.splice(3,0,txt);
    }
    page3 = () => {
        let defboxy = undefined;
        if (canvas.width > 780) {
            defboxy = (4.2*canvas.height/6)+20;
        } else {
            defboxy = (4.1*canvas.height/6)+20;
        }
        let defboxw = 3.5*canvas.width/10;
        
        let defboxh = undefined;
        if (canvas.width > 780) {
            defboxh = 0.6*canvas.height/10;
        } else {
            defboxh = 0.8*canvas.height/10;
        }

        this.count = 0;
        let subheight = undefined;
        if (canvas.width > 780) {
            subheight = canvas.width*0.15;
        } else {
            subheight = 2*canvas.height/6;
        }
        for (let row=1;row<=5;row++){
            this.list.push(new Ntext(
                (canvas.width/2),
                subheight+(1.4*row*canvas.height/30),
                (canvas.width),
                "Helvetica",
                this.fontsize,
                this.servicelist3.name[this.count],
                "center"
            ));
            this.count++;
        }

        let txt = new Buttontext(
            ((canvas.width)/2),
            defboxy+(defboxh/2)+(this.fontsize/2),
            defboxw,
            "Helvetica",
            this.fontsize,
            "Any of the above",
            '221,221,221'
        );

        this.list.splice(3,0,new GuiButton1(
            ((canvas.width)/2)-(defboxw/2),
            defboxy,
            defboxw,
            defboxh,
            "221,221,221",
            "preferred.html",
            txt,
            () => {}
        ));
        this.list.splice(3,0,txt);
    }
}