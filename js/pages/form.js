class Page{
    constructor(){
        this.list = [];
    }
    initpage = () => {
        if (canvas.width <= canvas.height+(canvas.width/7)) {
            let leftpanel = document.getElementById("left-panel")
            leftpanel.style.display = "none";

            var outcomescrn = document.getElementById("outcome-scrn");
            var outcome = document.getElementById("outcome");
            var outcomesub = document.getElementById("outcome-sub");
            var qbox = document.getElementById("q");
            var qheader = document.getElementById("q-panel-header");
            var qbody = document.getElementById("q-panel1");

            outcomescrn.style.left = "50%";
            outcomescrn.style.transform = "translateX(-50%)";
            outcomescrn.style.borderBottom = "2px rgba(255,255,255,0.4) solid";
            outcomescrn.style.overflow = "auto";
            outcomescrn.style.justifyContent = "flex-start";
            qbox.style.left = "50%";
            qbox.style.width = "85%";
            qbox.style.paddingLeft = "3.5%";
            qbox.style.paddingTop = "3.5%";
            qbox.style.transform = "translateX(-50%)";
            qheader.style.fontSize = "1.6em";
            outcome.style.fontSize = "1.6em";
            outcome.style.width = "60%";
            outcome.style.marginBottom = "0px";
            outcomesub.style.fontSize = "1em";
            qbody.style.width = "88%";
            qbody.style.fontSize = "1rem";
            qbody.style.borderTop = "solid 1px #ddd";
            qbody.style.borderBottom = "solid 1px #ddd";
            qbody.style += "-webkit-overflow-scrolling: auto";
            qbody.style.width = "92%";

            document.getElementById('content2').innerHTML += `
                <a id="mobile-backbtn" onclick="goHome()"><</a>
            `

            
            
        } else {
            var qbody = document.getElementById("q-panel1");
            qbody.style.fontSize = "1.2vw";
            
            let leftpanelBtns = document.getElementsByClassName("panel-btn");
            
            for (let i = 0; i < leftpanelBtns.length; i++) {
                const btn = leftpanelBtns[i];
                
                if (btn.innerText == sessionStorage.getItem('branch')){
                    btn.style.backgroundColor = "#cdc";
                    break;
                }
            }
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