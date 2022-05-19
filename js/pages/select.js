class Page{
    constructor(){
        this.name = "select";
        this.list = [];
        this.transition = false;
        this.page = 1;
        this.alphabetical = false;
        this.chosenLetter = undefined;
        this.pagefuncs = [this.page1,this.page2,this.page3];
        this.servicelist = [
            {
                name:[
                    "Adolescent Medicine", "Adult Services", "Aesthetics", 
                    "Allergy Immunology", "Ancillary Services", "CAMHS", 
                    "Cardiology","Dental Surgery", "Dermatology",
                    "Developmental Pediatrics", "ENT", "Emergency Services", 
                ],
                url:[
                    "test.html", "test.html", "test.html", 
                    "test.html", "test.html", "test.html", 
                    "test.html", "emergetestncy.html", "test.html",
                    "test.html", "test.html", "test.html", 
                ]
            }, {
                name:[
                    "Endocrinology", "Gastroenterology", "General Pediatrics", 
                    "General Surgery","Genetics", "Gynecology",
                    "Hematology/Oncology", "Infectious Disease", "Maternal Fetal Medicine", 
                    "NICU", "Neonatal Surgery", "Nephrology", 
                ],
                url:[
                    "ageform.html", "ageform.html", "gyneform.html", 
                    "nicuform.html", "emergency.html", "obstetrics.html",
                    "camhsform.html", "ageform.html", "ageform.html", 
                    "ageform.html", "ageform.html", "gyneform.html", 
                ]
            }, {
                name:[
                    "Neurology","Neurosurgery", "Obstetrics",
                    "Ophthalmology", "Orthopedics", "Peri/Post Natal Mental Health", 
                    "Plastic Surgery", "Pulmonology", "Rehab Medicine", 
                    "Reproductive Medicine","Rheumatology", "Transplant"
                ],
                url:[
                    "nicuform.html", "emergency.html", "obstetrics.html",
                    "camhsform.html", "ageform.html", "ageform.html", 
                    "ageform.html", "ageform.html", "gyneform.html", 
                    "nicuform.html", "emergency.html", "obstetrics.html"
                ]
            }, {
                name:[
                    "Urology"
                ],
                url:[
                    "sole.html"
                ]
            }, 
        ];
        this.servicelist_alpha = {
                name:[
                    "Adolescent Medicine", "Adult Services", "Aesthetics", "Allergy Immunology", "Ancillary Services", "CAMHS", "Cardiology", "Dental Surgery", "Dermatology", "Developmental Pediatrics", "ENT", "Emergency Services", "Endocrinology", "Gastroenterology", "General Pediatrics", "General Surgery", "Genetics", "Gynecology", 
                    "Hematology/Oncology", "Infectious Disease", "Maternal Fetal Medicine", "NICU", "Neonatal Surgery", "Nephrology", "Neurology", "Neurosurgery", "Obstetrics", "Ophthalmology", "Orthopedics", "Peri/Post Natal Mental Health", "Plastic Surgery", "Pulmonology", "Rehab Medicine", "Reproductive Medicine", "Rheumatology", "Transplant", "Urology"
                ],
                url:[]
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
            (7*canvas.height/8)+7,
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
            subheight = canvas.height*0.25;
        } else {
            subheight = 2*canvas.height/6;
        }

        this.list.push(new PageFilter(
            ((canvas.width)/4)-((canvas.width/4.5)/2)+6,
            11*canvas.height/30
        ));
        this.showPageNav();
        
        this.list.push(new Titletext(
            (canvas.width/4),
            subheight,
            (canvas.width*0.75),
            "Helvetica",
            (canvas.width*0.04),
            "Select Service"
        ));

        if (canvas.width <= 620){
            this.fontsize = ((this.boxwidth+this.boxheight)/2)/6;
        }

        this.newPage();
        this.setPageIndicator();

        return this.list;
    }
    
    action = () => {
        if (this.list[0].hovering()){
            console.log(this.list[0].getLetter());
            if (this.list[0].getLetter() == "CLEAR"){
                this.alphabetical = false;
                this.chosenLetter = undefined;
                this.list.splice(8,this.servicelist[this.page-1].name.length*2);
                this.page = 1;
                this.newPage();
                this.setPageIndicator();
            } else {
                this.alphabetical = true;
                this.chosenLetter = this.list[0].getLetter();
                this.list.splice(8,this.servicelist[this.page-1].name.length*2);

                let alphab_list = [];
                this.servicelist_alpha.name.forEach(item => {
                    if (item[0] == this.chosenLetter){
                        alphab_list.push(item);
                    }
                });
                if (alphab_list.length != 0) {
                    let count = 1;
                    for (let row=1;row<=3;row++){
                        for (let i=1; i<=3; i++){
                            let btn = new Buttontext(
                                ((i*canvas.width)/4),
                                (canvas.height/3)+(row*canvas.height/9)+7,
                                this.boxwidth,
                                "Helvetica",
                                this.fontsize,
                                alphab_list[count-1],
                                '221,221,221'
                            );
                            this.list.splice(8+(count*2), 0, new GuiButton1(
                                ((i*canvas.width)/4)-((canvas.width/4.5)/2),
                                (canvas.height/3)+(row*canvas.height/9)-(50/2),
                                this.boxwidth,
                                this.boxheight,
                                "221,221,221",
                                "",
                                btn
                                ), btn);
                            count++;
                            if (count > alphab_list.length){break;}
                        }
                        if (count > alphab_list.length){break;}
                    }
                }
            }
        }
        
        if (!this.alphabetical) {
            if (this.list[1].hovering()){
                this.list.splice(8,this.servicelist[this.page-1].name.length*2);
                if (this.page == this.servicelist.length){
                    this.page = 1;
                } else {
                    this.page++;
                }
                this.newPage();
                this.setPageIndicator();
            }
            if (this.list[2].hovering()){
                this.list.splice(8,this.servicelist[this.page-1].name.length*2);
                if (this.page == 1){
                    this.page = this.servicelist.length;
                } else {
                    this.page--;
                }
                this.newPage();
                this.setPageIndicator();
            }
        }

        this.list.forEach((element, i) => {
            // btn = undefined;
            if (element.name === "GuiButton1" && element.state == 1) {
                if (element.hovering()){
                    console.log(this.list[i+1].msg);
                    localStorage.setItem('branch',this.list[i+1].msg)
                    pageState = 1;
                    location.href = "html/test.html";
                }
            }
            
        });
    }
    newPage = () => {
        let count = 1;
        for (let row=1; row<=4; row++){
            for (let i=1; i<=3; i++){
                let btn = new Buttontext(
                    ((i*canvas.width)/4),
                    (canvas.height/3)+(row*canvas.height/9)+7,
                    this.boxwidth,
                    "Helvetica",
                    this.fontsize,
                    this.servicelist[this.page-1].name[count-1],
                    '221,221,221'
                );
                this.list.splice(8+(count*2), 0, new GuiButton1(
                    ((i*canvas.width)/4)-((canvas.width/4.5)/2),
                    (canvas.height/3)+(row*canvas.height/9)-(50/2),
                    this.boxwidth,
                    this.boxheight,
                    "221,221,221",
                    this.servicelist[this.page-1].url[count-1],
                    btn
                    ), btn);
                count++;
                if (count > this.servicelist[this.page-1].name.length){
                    break;
                }
            }
            if (count > this.servicelist[this.page-1].name.length){
                break;
            }
        }
    }
    setPageIndicator = () => {
        for (let i=3;i<=6;i++){
            this.list[i].setOff();
        }
        this.list[this.page+2].setOn();
    }
    showPageNav = () => {
        this.list.push(new Rightbutton(
            15*canvas.width/25,
            (7*canvas.height/8)-(50/2),
            30,
            ""
        ));
        this.list.push(new Leftbutton(
            10*canvas.width/25,
            (7*canvas.height/8)-(50/2),
            30,
            ""
        ));
        this.list.push(new PageIndicator(
            11*canvas.width/25,
            (7*canvas.height/8)-(50/2)+15,
        ));
        this.list.push(new PageIndicator(
            12*canvas.width/25,
            (7*canvas.height/8)-(50/2)+15,
        ));
        this.list.push(new PageIndicator(
            13*canvas.width/25,
            (7*canvas.height/8)-(50/2)+15,
        ));
        this.list.push(new PageIndicator(
            14*canvas.width/25,
            (7*canvas.height/8)-(50/2)+15,
        ));
    }
}