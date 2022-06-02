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

    let content = document.getElementById('additrespanel')
    content.style.display = 'block';
    content.innerHTML ='';
    content.style += "-webkit-overflow-scrolling: auto";
    content.style.overflowY = "auto";
    content.style.flexDirection = "column";
    content.style.fontSize = 'font-size: 3.5vw';
    content.innerHTML =`
    <h3 style="margin-top:10px">Additional Resources</h3>
    <a class="additres-link" href="https://fa-epxn-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/faces/deeplink?objType=WLF_LEARN_LEARNING_ITEM&action=NONE&objKey=learningItemId%3D300000409065223" target="_blank">eLearning module</a><br>
    <a class="additres-link" href="http://sidramedicine.newsweaver.com/sidraflyer/oevoqjzq5xo17wwx8m6rye?email=true&a=5&p=7677373&t=1990805" target="_blank">Classification of Services</a><br>
    <div style="height: 20px;"></div>
    <h3 style="margin-bottom: 12px;">Leadership Team</h3>
    <ul style='text-align: left;'>
        <li>
            <h4 style="margin-bottom: 8px;">Dr. S Bhasker</h4>
            <p style="margin-top: 0px;">Executive Director of IMT</p>
        </li>
        <li>
            <h4 style="margin-bottom: 8px;">Mr. Abdulrahman Hasna</h4>
            <p style="margin-top: 0px;">Executive Director of Enterprise Application</p>
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
            <p style="margin-top: 0px;">Chair Person (Executive Committee for Service Classification)</p>
        </li>
    </ul>
    <br>
    <p style="font-style:italic; opacity:0.8">*Recommendations and rules changes must be reviewed and approved by the C-suite Executive Committee</p>

    `;
}