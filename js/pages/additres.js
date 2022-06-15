//  PURPOSE *additionalresources.html page-specific js file*
// 
//  - Page class:
//      1. Runs mobileUI() if canvas width is smaller than canvas height.
//      2. Adds mobile "Back" button.
// 
//  - mobileUI:
//      - ** The Mobile UI of this page completely overwrites the "additrespanel" div in additionalresources.html **
//        ** IF CHANGES ARE MADE IN ADDITIONALRESOURCES.HTML, THE SAME CHANGES MUST BE MADE IN THIS PAGE **
//      - Override current styling and content to portrait / mobile-friendly UI 


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

    var content = document.getElementById('additrespanel');
    content.style.display = 'none';
    content.innerHTML ='';
    content.style += "-webkit-overflow-scrolling: auto";
    content.style.overflowY = "auto";
    content.style.flexDirection = "column";
    content.style.fontSize = 'font-size: 3.5vw';
    content.style.top = "20%";
    content.style.bottom = "5%";
    content.style.right = "6.5%";
    content.style.left = "6.5%";
    content.innerHTML =`
    <h3 style="margin-top:10px">Additional Resources</h3>
    <a class="additres-link" href="https://fa-epxn-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/faces/deeplink?objType=WLF_LEARN_LEARNING_ITEM&action=NONE&objKey=learningItemId%3D300000409065223" target="_blank">eLearning module</a><br>
    <a class="additres-link" href="http://sidramedicine.newsweaver.com/sidraflyer/oevoqjzq5xo17wwx8m6rye?email=true&a=5&p=7677373&t=1990805" target="_blank">Classification of Services</a><br>
    <div style="height: 20px;"></div>
    <h3 style="margin-bottom: 12px;">Service Classification Governing Team</h3>
    <ul style='text-align: left;'>
        <li>
            <h4 style="margin-bottom: 8px;">Dr. S Bhasker</h4>
            <p style="margin-top: 0px;">Executive Director of IMT</p>
        </li>
        <li>
            <h4 style="margin-bottom: 8px;">Mr. Abdulrahman Hasna</h4>
            <p style="margin-top: 0px;">Director of Enterprise Applications</p>
        </li>
        <hr>
        <li>
            <h4 style="margin-bottom: 8px">Mr. Hassan Al Amri</h4>
            <p style="margin-top: 0px;margin-bottom: 8px">Chief Financial Officer (Acting)</p>
            <p style="margin-top: 0px;">Executive Director - Finance</p>
        </li>
        <li>
            <h4 style="margin-bottom: 8px;">Dr. Basma Harara</h4>
            <p style="margin-top: 0px;margin-bottom: 8px">Executive Director of Clinical Operations</p>
        </li>
        <li>
            <h4 style="margin-bottom: 8px;">Dr. Ziyad Hijazi</h4>
            <p style="margin-top: 0px;margin-bottom: 8px">Chief Medical Officer</p>
        </li>
    </ul>
    <br>
    <p style="font-style:italic; opacity:0.8">*Recommendations and rules changes must be reviewed and approved by the C-suite Service Classification Governing Team</p>

    `;
}

class Page{
    initpage = () => {
        if (canvas.width <= canvas.height+(canvas.width/7)) {
            mobileUI()
            document.getElementById('content1').innerHTML += `
                <a id="mobile-backbtn" onclick="goBack()"><</a>
            `
        }

    }
}