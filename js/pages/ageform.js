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
        }; //TODO - ADD ANIMATIONS TO TEXTBOX, ADD 
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
            "Enter your age"
        ));
        // CONTINUE BUTTON TEXT
        let btntext = new Buttontext(
            (canvas.width/2),
            (4*(canvas.height/5))+7,
            200,
            "Helvetica",
            20,
            "Continue" 
        );
        console.log(btntext);
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
        return this.list;
    }
    
    action = () => {
        let button = this.list[2]
        if (button.hovering()){
            this.list.forEach(element => {
                element.delete()
                localStorage.setItem('clientAge',
                    document.getElementById("in-text").value
                    );
                $("#in-text").css('opacity', 1).slideUp('slow').animate(
                  { opacity: 0 },
                  { queue: false, duration: 'slow' }
                );
            });
        }
    }

}