class Page{
    constructor(){
        this.list = [];
    }
    initpage = () => {
        if (!(canvas.width <= canvas.height+(canvas.width/7))) {
            
        } else {
            mobileUI()
            document.getElementById('content1').innerHTML += `
                <a id="mobile-backbtn" onclick="goHome()"><</a>
            `
        }

    }
}