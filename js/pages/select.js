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
                "","Emergency Services"
            ],
            url:[
                "ageform.html", getRootDir(1)+"index.html", "index.html", 
                "index.html", "index.html", "index.html", 
                "index.html", "index.html"
            ]
        };
        let count = 0;
        for (let row=1; row<=3; row++){
            for (let i=1; i<=3; i++){
                if (count == 6){
                    count++;
                    continue;
                }
                if (count == 8){
                    break;
                }

                let btntext = new Buttontext(
                    ((i*canvas.width)/4),
                    (canvas.height/3)+(row*canvas.height/8)+7,
                    canvas.width/4.5,
                    "Helvetica",
                    20,
                    servicelist.name[count]
                );
                this.list.push(btntext);
                //BUTTON 1 FRAME (STATE 1)
                this.list.push(new GuiButton1(
                    ((i*canvas.width)/4)-((canvas.width/4.5)/2),
                    (canvas.height/3)+(row*canvas.height/8)-(50/2),
                    canvas.width/4.5,
                    50,
                    "#fff",
                    servicelist.url[count],
                    btntext
                ));
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
    
        this.list.push(new Rightbutton(
            (canvas.width/2) + canvas.width/3, (canvas.height/2) + canvas.height/3
        ))
        return this.list;
    }
    
    action = () => {
        this.list.forEach(element => {
            if (element.name == "GuiButton1"){
                if (element.hovering()) {
                    localStorage.setItem('branch',element.partner.msg);
                    element.delete();
                }
            }
        });
    }
}