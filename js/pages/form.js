class Page{
    constructor(){
        this.list = [];
    }
    initpage = () => {
        if (canvas.width <= canvas.height+(canvas.width/10)) {
            document.getElementById("left-panel").style.display = "none";

            var outcomescrn = document.getElementById("outcome-scrn");
            var qbox = document.getElementById("q");
            var qheader = document.getElementById("q-panel-header");
            var qbody = document.getElementById("q-panel1");

            outcomescrn.style.left = "50%";
            outcomescrn.style.transform = "translateX(-50%)";
            qbox.style.left = "50%";
            qbox.style.width = "85%";
            qbox.style.paddingLeft = "3.5%";
            qbox.style.paddingTop = "3.5%";
            // qbox.style.height = "58%";
            qbox.style.transform = "translateX(-50%)";
            qheader.style.fontSize = "1.6em";
            qbody.style.width = "88%";

            document.getElementById('content2').innerHTML += `
                <a id="mobile-backbtn" onclick="goHome()">BACK</a>
            `

        }
    }
    startInstanceList = () => {
        var titleheight = undefined;
        if (canvas.width > 700) {
            titleheight = canvas.width*0.23;
        } else {
            titleheight = canvas.width*0.25;
        }
        var startbuttonheight = undefined;
        if (canvas.height > 746) {
            startbuttonheight = canvas.height/2;
        } else {
            startbuttonheight = 4*canvas.height/6;
        }
        return this.list;
    }

    action = () => {
    }

}