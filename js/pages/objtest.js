class Page{
    constructor(){
        this.list = [];
    }
    initpage = () => {}
    startInstanceList = () => {
        //Add Page Objects
        this.list.push(new Tickbox(
            canvas.width/2,
            canvas.height/2,
            30,
            "#fff"
        ));
        return this.list;
    }

    action = () => {
        if (this.list[0].hovering()){
            this.list[0].tick();
        }
    }

}