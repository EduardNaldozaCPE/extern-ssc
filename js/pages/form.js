class Page{
    initpage = () => {
        // MOBILE VIEW FOR FORM.HTML
        if (canvas.width <= canvas.height+(canvas.width/7)) {

            // REMOVE LEFT SCROLL PANEL
            let leftpanel = document.getElementById("left-panel")
            leftpanel.style.display = "none";
            
            var outcomescrn = document.getElementById("outcome-scrn");
            var outcome = document.getElementById("outcome");
            var outcomesub = document.getElementById("outcome-sub");
            var qbox = document.getElementById("q");
            var qheader = document.getElementById("q-panel-header");
            var qbody = document.getElementById("q-panel1");

            // MOVE OUTCOME SCREEN AND FORM PANEL TO THE MIDDLE OF PAGE
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

            // ADJUSTING FONT SIZING AND ALIGNMENT 
            qheader.style.fontSize = "1.6em";
            outcome.style.fontSize = "1.6em";
            outcome.style.width = "60%";
            outcome.style.marginBottom = "0px";
            outcomesub.style.fontSize = "1em";
            
            document.getElementById("q-panel1").setAttribute('onscroll',"scrollForMore()");
            qbody.style.width = "88%";
            qbody.style.fontSize = "1rem";
            qbody.style.borderTop = "solid 1px #ddd";
            qbody.style.borderBottom = "solid 1px #ddd";
            qbody.style.width = "92%";

            document.getElementById('content2').innerHTML += `
                <a id="mobile-backbtn" onclick="goHome()"><</a>
            `;

            
        } else { // DESKTOP VIEW
            var qbody = document.getElementById("q-panel1");
            qbody.style.fontSize = "1.2vw";
            
            // LOOK FOR THE CURRENTLY SELECTED SERVICE IN THE LEFT NAV PANEL
            // AND CHANGE THE BACKGROUND COLOUR OF THE BUTTON TO HIGHLIGHT IT
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

}