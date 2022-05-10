class Page{
    constructor(){
        this.list = [];
    }
    initpage = () => {
        switch (localStorage.getItem('branch')) {
            case "CAMHS":
                if(localStorage.getItem('in-out-patient') == 'true'
                    && localStorage.getItem('ageReq') == 'true'){
                    location.href = 'sole.html';
                } else {
                    location.href = 'preferred.html';
                }
                break;
            default:
                break;
        }
    }
    startInstanceList = () => {
        var titleheight = undefined;
        if (canvas.width > 700) {
            titleheight = canvas.width*0.23;
        } else {
            titleheight = canvas.width*0.25;
        }
        // TITLE
        this.list.push(new Titletext(
            (canvas.width/2),
            titleheight,
            (canvas.width*0.75),
            "Helvetica",
            (canvas.width*0.04),
            "Loading..."
        ));
        return this.list;
    }

    action = () => {
    }

}