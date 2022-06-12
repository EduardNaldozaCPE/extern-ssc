function mobileUI() {
    let title = document.getElementById("title");
    title.style.fontSize = "1.1rem";
    title.style.left = "50%";
    title.style.top = "6%";
    title.style.transform = "translateX(-50%)";

    let logo = document.getElementById("logo-white");
    logo.style.left = "50%"
    logo.style.transform = "translateX(-50%)"
    logo.style.width = "18%";
    
    let disclaimer = document.getElementById("contact");
    disclaimer.style.top = "91%";
    disclaimer.style.width = "92%";

    function btnlistt(){
        let btnlist = '';
        for (let index = 0; index < servicelist.length; index++) {
            btnlist += `<button class="mobile-panel-btn" onclick="serviceBtn(this)">${servicelist[index]}</button>
`;
        }
        return btnlist;
    }

    document.getElementById("content").innerHTML +=`
    <div id="mobile-panel" style:'opacity: 0'>
        <div id="mobile-panel-filter">
            <a onclick="filterBtn(this)" class="mobile-filter-btn">A</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">B</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">C</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">D</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">E</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">F</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">G</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">H</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">I</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">J</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">K</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">L</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">M</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">N</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">O</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">P</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">Q</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">R</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">S</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">T</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">U</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">V</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">W</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">X</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">Y</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">Z</a>
            <br>
            <input type="button" value="CLEAR" id="mobile-clear-btn" onclick="clearBtn()"></input>
        </div>
        <div id="mobile-panel-scroll">
            ${btnlistt()}
            <div style="height: 5px;"></div>
        </div>
        <div id="mobile-panel-extrabtn">
        <input type="image" src="./images/faq-button.png" alt="" id="additresbtn" onclick='goFAQ("index.html")'  onmouseover="showFaq()" onmouseout="hideFaq()">
            <input type="image" src="./images/contact-button.png" id="contactbtn" onclick='location.href="mailto:ApplicationRevenueCycle@sidra.org"' onmouseover="showContact()" onmouseout="hideContact()">
            <input type="image" src="./images/mindmap-button.png" alt="" id="mindmapbtn" onclick="window.open('./mindmap.pdf','_blank');" onmouseover="showMindMap()" onmouseout="hideMindMap()">
            <input type="image" src="./images/additres-button.png" alt="" id="additresbtn" onclick='goAdditRes("index.html")'  onmouseover="showAdditRes()" onmouseout="hideAdditRes()">
        </div>
    </div>
        `
}

class Page{
    initpage = () => {
        if ((canvas.width <= canvas.height+(canvas.width/7))) {
            document.getElementById('selectpanel').style.display = 'none';
            mobileUI()
        }

    }
}