/* #region 

    In the case that conditions must be changed, follow steps below:

        1. Add button tag in form.html using "panel-btn" class name (if adding new service).
        
        2. In canvas.js, add service name in servicelist array (if adding new service).

        3. In forms.js, add new case statement inside formQuestions function's switch statement (line 55). (if adding new service)
            
            3a. To create new conditions, use "qpanel1.innerHTML += [HTML CODE]"
                - Every question div follows the same class name
                - Every input has an "onclick" attribute based on the type of variable it will set. 
                    (i.e. Checkbox that changes the "self referral" condition uses "selfRef()" function. Refer to functions.js)
                - Certain inputs follow different id attributes based on the variables that will be used for the outcome decision.
                    (i.e. Checkbox that changes the "self referral" condition uses "selfRefbox" id. Logic is seen in pageupdate.js)
            
            3b. To set initial outcome message, use "outcome.innerText" and "outcomeSub.innerText"
        
        4. In pageupdate.js add new case statement inside updateClassif function's switch statement (line 15). (if adding new service)
        
        5. Using the variables prefixed "ls_", apply decision logic in the case statement. 
            
            5a. use "outcome.innerText" and "outcomeSub.innerText" to change outcome.

#endregion  */

function formQuestions() {
    if (location.pathname == '/'+getRootDir()+"form.html"){
        window.onload = () => {
            let leftpanelscroll = document.getElementById("left-panel-scroll");
        
            if (sessionStorage.getItem("left-panel-scroll") != null) {
                leftpanelscroll.scrollTop = sessionStorage.getItem("left-panel-scroll");
            }
            
            const branch = sessionStorage.getItem('branch');
            var outcome = document.getElementById("outcome");
            var outcomeSub = document.getElementById("outcome-sub");
            var qpanelheader = document.getElementById('q-panel-header');
            var qpanel1 = document.getElementById('q-panel1');
            qpanelheader.innerText = branch;
    
            const btnlist = document.getElementsByClassName('panel-btn');
            for (let btn=0;btn<btnlist.length;btn++){
                    btnlist[btn].onclick = () => {
                        console.log(btnlist[btn].innerText);
                        sessionStorage.setItem('branch',btnlist[btn].innerText);
                        location.reload()
                        // fadeout(document.getElementById("outcome"));
                        // fadeout(document.getElementById("outcome-sub"));
                        // fadeout(document.getElementById("q-panel"));
                    } 
            }
            
            // fade(outcome);
            // fade(outcomeSub);
            // fade(qpanel);
    
            switch (branch) {
                case "Adolescent Medicine":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Adolescent Medicine's classification is Sole by default";
    
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">The patient is a self referral.</p></input>
                    </div>
                    `;
                    selfRef();
                    break;
                case "Allergy Immunology":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Allergy ImmunologyAllergy Immunology's classification is Sole by default";
    
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">The patient is a self referral.</p></input>
                    </div>
                    `;
                    selfRef();
                    break;
                case "Endocrinology":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Endocrinology's classification is Sole by default";
    
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">The patient is a self referral.</p></input>
                    </div>
                    `;
                    selfRef();
                    break;
                case "Gastroenterology":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Gastroenterology's classification is Sole by default";
    
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">The patient is a self referral.</p></input>
                    </div>
                    `;
                    selfRef();
                    break;
                case "Cardiology":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Cardiology's classification is Sole by default";
    
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">The patient is a self referral.</p></input>
                    </div>
                    `;
                    selfRef();
                    break;
                case "Hematology/Oncology":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Hematology/Oncology's classification is Sole by default";
    
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">The patient is a self referral.</p></input>
                    </div>
                    `;
                    selfRef();
                    break;
                case "Nephrology":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Nephrology's classification is Sole by default";
    
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">The patient is a self referral.</p></input>
                    </div>
                    `;
                    selfRef();
                    break;
                case "Neurology":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Neurology's classification is Sole by default";
    
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">The patient is a self referral.</p></input>
                    </div>
                    `;
                    selfRef();
                    break;
                case "Infectious Disease":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Infectious Disease's classification is Sole by default";
    
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">The patient is a self referral.</p></input>
                    </div>
                    `;
                    selfRef();
                    break;
                case "Pulmonology":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Pulmonology's classification is Sole by default";
    
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">The patient is a self referral.</p></input>
                    </div>
                    `;
                    selfRef();
                    break;
                case "Rheumatology":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Rheumatology's classification is Sole by default";
    
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">The patient is a self referral.</p></input>
                    </div>
                    `;
                    selfRef();
                    break;
                case "Rehab Medicine":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Rehab Medicine's classification is Sole by default";
    
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">The patient is a self referral.</p></input>
                    </div>
                    `;
                    selfRef();
                    break;
                case "Neonatal Surgery":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Neonatal Surgery's classification is Sole by default";
    
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">The patient is a self referral.</p></input>
                    </div>
                    `;
                    selfRef();
                    break;
                case "Neurosurgery":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Neurosurgery's classification is Sole by default";
    
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">The patient is a self referral.</p></input>
                    </div>
                    `;
                    selfRef();
                    break;
                case "Ophthalmology":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Ophthalmology's classification is Sole by default";
    
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">The patient is a self referral.</p></input>
                    </div>
                    `;
                    selfRef();
                    break;
                case "Orthopedics":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Orthopedics's classification is Sole by default";
    
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">The patient is a self referral.</p></input>
                    </div>
                    `;
                    selfRef();
                    break;
                case "Transplant":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Transplant's classification is Sole by default";
    
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">The patient is a self referral.</p></input>
                    </div>
                    `;
                    break;
                case "Urology":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Urology's classification is Sole by default";
    
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">The patient is a self referral.</p></input>
                    </div>
                    `;
                    break;
                case "Adult Mental Health":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Adult Mental Health's classification is Sole by default";
    
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">The patient is a self referral.</p></input>
                    </div>
                    `;
                    selfRef();
                    break;
            
                case "CAMHS":
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox' id="inoutpatientDiv">
                        <input class="checkbox" type="radio" onclick="camhsradio()" id="inoutpatientBox" name="camhs" value=0>
                        <p class="qpanel-q">Child and Adolescent Psychiatry (CAMHS) Outpatient</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="inoutpatientDiv">
                        <input class="checkbox" type="radio" onclick="camhsradio()" id="inoutpatientBox" name="camhs" value=1>
                        <p class="qpanel-q">Child and Adolescent Psychiatry (CAMHS) Inpatient ≤14 Years</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="inoutpatientDiv">
                        <input class="checkbox" type="radio" onclick="camhsradio()" id="inoutpatientBox" name="camhs" value=2>
                        <p class="qpanel-q">Child and Adolescent Psychiatry (CAMHS) Inpatient >14 Years</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="inoutpatientDiv">
                        <input class="checkbox" type="radio" onclick="camhsradio()" id="inoutpatientBox" name="camhs" value=3>
                        <p class="qpanel-q">The patient is internally referred from a Sole service (>14 Years)</p></input>
                    </div>
                    `;
                    sessionStorage.setItem('camhs', -1);
                    break;
    
                case "Genetics":
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox' id="ageReqDiv">
                        <input class="checkbox" type="radio" onclick="ageradio()" id="ageReqBox" name="agereq" value=2>
                        <p class="qpanel-q">The patient is a self referral</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="ageReqDiv">
                        <input class="checkbox" type="radio" onclick="ageradio()" id="ageReqBox" name="agereq" value=1>
                        <p class="qpanel-q">The patient's age is below 18 years</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="ageReqDiv">
                        <input class="checkbox" type="radio" onclick="ageradio()" id="ageReqBox" name="agereq" value=0>
                        <p class="qpanel-q">The patient's age is 18 years or older</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="ageReqDiv">
                        <input class="checkbox" type="radio" onclick="ageradio()" id="ageReqBox" name="agereq" value=3>
                        <p class="qpanel-q">The patient is internally referred from a Sole service (≤18 Years)</p></input>
                    </div>
                    `;
                    sessionStorage.setItem('agereq', -1);
                    break;
    
                case "ENT":
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox' id="ageReqDiv">
                        <input class="checkbox" type="radio" onclick="ageradio()" id="ageReqBox" name="agereq" value=2>
                        <p class="qpanel-q">The patient is a self referral</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="ageReqDiv">
                        <input class="checkbox" type="radio" onclick="ageradio()" id="ageReqBox" name="agereq" value=0>
                        <p class="qpanel-q">The patient is above 3 years of age</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="ageReqDiv">
                        <input class="checkbox" type="radio" onclick="ageradio()" id="ageReqBox" name="agereq" value=1>
                        <p class="qpanel-q">The patient is 3 years of age or younger</p></input>
                    </div>
                    `;
                    sessionStorage.setItem('agereq', -1);
                    break;
    
                case "Plastic Surgery":
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox' id="ageReqDiv">
                        <input class="checkbox" type="radio" onclick="ageradio()" id="ageReqBox" name="agereq" value=2>
                        <p class="qpanel-q">The patient is a self referral</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="ageReqDiv">
                        <input class="checkbox" type="radio" onclick="ageradio()" id="ageReqBox" name="agereq" value=0>
                        <p class="qpanel-q">The patient is 18 years old or older</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="ageReqDiv">
                        <input class="checkbox" type="radio" onclick="ageradio()" id="ageReqBox" name="agereq" value=1>
                        <p class="qpanel-q">The patient is below 18 years of age</p></input>
                    </div>
                    `;
                    sessionStorage.setItem('agereq', -1);
                    break;
    
                case "Dermatology":
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox' id="ageReqDiv">
                        <input class="checkbox" type="radio" onclick="ageradio()" id="ageReqBox" name="agereq" value=2>
                        <p class="qpanel-q">The patient is a self referral</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="ageReqDiv">
                        <input class="checkbox" type="radio" onclick="ageradio()" id="ageReqBox" name="agereq" value=1>
                        <p class="qpanel-q">The patient's age is below 3 months</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="ageReqDiv">
                        <input class="checkbox" type="radio" onclick="ageradio()" id="ageReqBox" name="agereq" value=0>
                        <p class="qpanel-q">The patient's age is 3 months or older</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="ageReqDiv">
                        <input class="checkbox" type="radio" onclick="ageradio()" id="ageReqBox" name="agereq" value=3>
                        <p class="qpanel-q">The patient is internally referred from a Sole service (>3 Months)</p></input>
                    </div>
                    `;
                    sessionStorage.setItem('agereq', -1);
                    ageReq();
                    break;
    
                case "NICU":
                        qpanel1.innerHTML += `
                        <div class='qpanel1-qbox' id="">
                            <input class="checkbox" type="radio" onclick="nicuLvl()" id="" name="niculvl" checked value="0">
                            <p class="qpanel-q">NICU Level 1 or 2</p></input>
                        </div>
                        <div class='qpanel1-qbox' id="">
                            <input class="checkbox" type="radio" onclick="nicuLvl()" id="" name="niculvl" value="1">
                            <p class="qpanel-q">NICU Level 3 or 4</p></input>
                        </div>
                        <div style="height: 15px"></div>
                        <div class='qpanel1-qbox' id="updowngradedDiv">
                            <input class="checkbox" type="checkbox" onclick="updowngradedReq()" id="updowngradedBox" name="updowngraded">
                            <p class="qpanel-q" id="updowngrade-q">The NICU Level been upgraded to level 3/4</p></input>
                        </div>
                        `;
                        nicuLvl();
                        updowngradedReq();
                        break;
                
                case "Gynecology":
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox' id="ageReqDiv">
                        <input class="checkbox" type="radio" onclick="ageGroup()" id="ageReqBox" name="agegroup" value=3>
                        <p class="qpanel-q">The patient is a self referral</p></input>
                    </div>    
                    <div class='qpanel1-qbox' id="">
                        <input class="checkbox" type="radio" onclick="ageGroup()" id="" name="agegroup" value="0">
                        <p class="qpanel-q">Pediatrics (4 - 14 Years)</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="">
                        <input class="checkbox" type="radio" onclick="ageGroup()" id="" name="agegroup" value="1">
                        <p class="qpanel-q">Adolescence (15 - 17 Years)</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="">
                        <input class="checkbox" type="radio" onclick="ageGroup()" id="" name="agegroup" value="2">
                        <p class="qpanel-q">Adult (18 Years and Above)</p></input>
                    </div>
                    `;
                    sessionStorage.setItem('agegroup', -1);
                    ageGroup();
                    break;
                
                case "Emergency Services":
                    qpanel1.innerHTML = `
                    <p>Trauma ESI levels I - V is classified as <b>Sole</b></p>
                    <p>Medical ESI levels I, II, and III are classified as <b>Sole</b></p>
                    <p>Urgent Care ESI levels IV & V are classified as <b>Preferred</b></p>
                    `;
                    break;
                    
                case "Developmental Pediatrics":
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox' id="internalRefDiv">
                        <input class="checkbox" type="checkbox" onclick="internalRef()" id="internalRefBox">
                        <p class="qpanel-q">The patient is internally referred from a Sole service.</p></input>
                    </div>
                    `;
                    internalRef();
                    break;
    
                case "Aesthetics":
                    qpanel1.innerHTML = ``;
                    break;
    
                case "Reproductive Medicine":
                    qpanel1.innerHTML = `
                    The Reproductive Medicine service has no conditions which affect its classification.
                    `;
                    break;
    
                case "Obstetrics":
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox' id="">
                        <input class="checkbox" type="radio" onclick="obsRadio()" id="" name="obsRadio" checked value="0">
                        <p class="qpanel-q">The patient is referred from Sidra Adult Mental Health Services</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="">
                        <input class="checkbox" type="radio" onclick="obsRadio()" id="" name="obsRadio" value="1">
                        <p class="qpanel-q">The patient is referred from Sidra Cardiology (Congenital Heart Disease)</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="">
                        <input class="checkbox" type="radio" onclick="obsRadio()" id="" name="obsRadio" value="2" checked>
                        <p class="qpanel-q">None of the above</p></input>
                    </div>
                    `;
                    obsRadio();
                    break;
    
                case "Ancillary Services":
                    qpanel1.innerHTML = `
                        <p>Services Included:</p>
                        <ul>
                            <li>Radiology</li>
                            <li>Pharmacy</li>
                            <li>Pathology/Labs</li>
                            <li>Allied Health Services</li>
                            <li>Audiology</li>
                            <li>Homecare</li>
                            <li>Anesthesia / PAT</li>
                        </ul>
                    `;
                    break;
                
                case "Adult Services":
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox' id="internalRefDiv">
                        <input class="checkbox" type="checkbox" onclick="internalRef()" id="internalRefBox">
                        <p class="qpanel-q">The patient is internally referred from Obstetrics to any of the following services.</p></input>
                    </div>
                    <ul>
                        <li>Diabetic New</li>
                        <li>Endocrinology New</li>
                        <li>Dietician New</li>
                        <li>Physiotherapy New</li>
                        <li>Internal Medicine</li>
                        <li>Adult Cardiology New (Congenital Heart Disease)</li>
                    </ul>
    
                    `;
                    internalRef();
                    break;
    
                case "Inpatient & Ambulatory Surgery Procedures":
                    qpanel1.innerHTML = `
                    `
                    break;
    
                case "Dental Surgery":
                    qpanel1.innerHTML = `
                    <p>Dental Surgery requires a Physician's clinical assessment by default to determine the service's classification.</p>
                    `
                    break;
                case "General Surgery":
                    qpanel1.innerHTML = `
                    <p>General Surgery requires a Physician's clinical assessment by default to determine the service's classification.</p>
                    `
                    break;
                case "General Pediatrics":
                    qpanel1.innerHTML = `
                    <p>General Pediatrics requires a Physician's clinical assessment by default to determine the service's classification.</p>
                    `
                    break;
                case "Maternal Fetal Medicine":
                    qpanel1.innerHTML = `
                    <p>Maternal Fetal Medicine requires a Physician's clinical assessment by default to determine the service's classification.</p>    
                    `
                    break;
    
                default:
                    break;
            }
            
            updateClassif();
    }}
    

}