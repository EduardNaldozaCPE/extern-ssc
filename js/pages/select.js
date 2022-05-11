class Page{
    constructor(){
        this.list = [];
    }
    initpage = () => {}
    startInstanceList = () => {
        var subheight = undefined;
        if (canvas.width > 780) {
            subheight = canvas.width*0.15;
        } else {
            subheight = 2*canvas.height/6;
        }
        var servicelist = {
            name:[
                "CAMHS", "Genetics", "ENT", 
                "Plastic Surgery", "Dermatology", "Gynecology", 
                "NICU","Emergency Services", "MORE"
            ],
            url:[
                "camhsform.html", "ageform.html", "ageform.html", 
                "ageform.html", "ageform.html", "gyneform.html", 
                "nicuform.html", "index.html", "index.html"
            ]
        };
        let count = 0;
        for (let row=1; row<=3; row++){
            for (let i=1; i<=3; i++){
                let boxheight = 50;
                let boxwidth = canvas.width/4.5;
                let fontsize = ((boxwidth+boxheight)/2)/10;
                if (canvas.width <= 620){
                    fontsize = ((boxwidth+boxheight)/2)/6;
                } 
                if (canvas.width <= 620){
                    servicelist.name.splice(7,1,"Emergency");
                    servicelist.name.splice(3,1,"Plastic Surg.");
                }
                if (count == 8){
                    let btntext = new Buttontext(
                        ((i*canvas.width)/4),
                        (canvas.height/3)+(row*canvas.height/8)+7,
                        boxwidth,
                        "Helvetica",
                        fontsize,
                        servicelist.name[count],
                        '53,144,133'
                    );
    
                    //BUTTON 1 FRAME (STATE 1)
                    this.list.push(new GuiButton2(
                        ((i*canvas.width)/4)-((canvas.width/4.5)/2),
                        (canvas.height/3)+(row*canvas.height/8)-(50/2),
                        boxwidth,
                        boxheight,
                        "221,221,221",
                        servicelist.url[count],
                        btntext
                    ));
                    this.list.push(btntext);
                } else {
                let btntext = new Buttontext(
                    ((i*canvas.width)/4),
                    (canvas.height/3)+(row*canvas.height/8)+7,
                    boxwidth,
                    "Helvetica",
                    fontsize,
                    servicelist.name[count],
                    '221,221,221'
                );
                this.list.push(btntext);

                //BUTTON 1 FRAME (STATE 1)
                this.list.push(new GuiButton1(
                    ((i*canvas.width)/4)-((canvas.width/4.5)/2),
                    (canvas.height/3)+(row*canvas.height/8)-(50/2),
                    boxwidth,
                    boxheight,
                    "221,221,221",
                    servicelist.url[count],
                    btntext
                ));

                }
                count++;
            }
            if (count == 8){
                break;
            }
        }
    
        this.list.push(new Titletext(
            (canvas.width/4),
            subheight,
            (canvas.width*0.75),
            "Helvetica",
            (canvas.width*0.04),
            "Select Service"
        ));
    
        // this.list.push(new Rightbutton(
        //     (canvas.width/2) + canvas.width/3, (canvas.height/2) + canvas.height/3
        // ))
        return this.list;
    }
    
    action = () => {
        this.list.forEach(element => {
            if (element.name == "GuiButton1"){
                if (element.hovering()) {
                    element.click = true;
                    localStorage.setItem('branch',element.partner.msg);
                    element.delete();
                }
            }
        });
    }
}