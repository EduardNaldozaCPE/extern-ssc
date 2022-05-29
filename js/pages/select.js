class Page{
    constructor(){
        this.list = [];
    }
    initpage = () => {
        if (!(canvas.width <= canvas.height+(canvas.width/7))) {
            
        } else {
            document.getElementById('selectpanel').style.display = 'none';
            mobileUI()
        }

    }
    startInstanceList = () => {

        return this.list;
    }
    
    action = () => {
    }
}