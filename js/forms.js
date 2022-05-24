/* 

    In the case that conditions must be changed, follow steps below:

        1. Add button tag in form.html using "panel-btn" class name (if adding new service).
        
        2. In select.js, add service name in this.servicelist_alpha "name" list (if adding new service).

        3. In forms.js, add new case statement inside formQuestions function's switch statement (line 37). (if adding new service)
            
            3a. To create new conditions, use "qpanel1.innerHTML += [HTML CODE]"
                - Every question div follows the same class name
                - Every input has an "onclick" attribute based on the type of variable it will set. 
                    (i.e. Checkbox that changes the "self referral" condition uses "selfRef()" function. Refer to functions.js)
                - Certain inputs follow different id attributes based on the variables that will be used for the outcome decision.
                    (i.e. Checkbox that changes the "self referral" condition uses "selfRefbox" id. Logic is seen in pageupdate.js)
            
            3b. To set initial outcome message, use "outcome.innerText" and "outcomeSub.innerText"
        
        4. In pageupdate.js add new case statement inside updateClassif function's switch statement (line 13). (if adding new service)
        
        5. Using the variables prefixed "ls_", apply decision logic in the case statement. 
            
            5a. use "outcome.innerText" and "outcomeSub.innerText" to change outcome.

*/

function formQuestions() {
    if (location.pathname == '/'+getRootDir()+"form.html"){
        window.onload = () => {
            
            const branch = localStorage.getItem('branch')
            var outcome = document.getElementById("outcome");
            var outcomeSub = document.getElementById("outcome-sub");
            var qpanel = document.getElementById("q-panel");
            var qpanelheader = document.getElementById('q-panel-header');
            var qpanel1 = document.getElementById('q-panel1');
            qpanelheader.innerText = branch;
    
            const btnlist = document.getElementsByClassName('panel-btn');
            for (let btn=0;btn<btnlist.length;btn++){
                    btnlist[btn].onclick = () => {
                        console.log(btnlist[btn].innerText);
                        localStorage.setItem('branch',btnlist[btn].innerText);
                        fadeout(document.getElementById("outcome"));
                        fadeout(document.getElementById("outcome-sub"));
                        fadeout(document.getElementById("q-panel"));
                    } 
            }
    
            fade(outcome);
            fade(outcomeSub);
            fade(qpanel);
    
            switch (branch) {
                case "Adolescent Medicine":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Adolescent Medicine's classification is Sole by default";
    
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
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
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
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
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
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
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
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
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
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
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
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
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
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
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
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
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
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
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
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
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
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
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
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
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
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
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
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
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
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
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
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
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
                    </div>
                    `;
                    break;
                case "Urology":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Urology's classification is Sole by default";
    
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
                    </div>
                    `;
                    break;
                case "Adult Mental Health":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Adult Mental Health's classification is Sole by default";
    
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
                    </div>
                    `;
                    selfRef();
                    break;
            
                case "CAMHS":
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox' id="inoutpatientDiv">
                        <input class="checkbox" type="checkbox" onclick="inoutpatient()" id="inoutpatientBox">
                        <p class="qpanel-q">Is this person an Outpatient?</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="ageReqDiv" style="display: none">
                        <input class="checkbox" type="checkbox" onclick="ageReq()" id="ageReqBox">
                        <p class="qpanel-q">Is the patient above 14 years of age?</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="internalRefDiv" style="display: none">
                        <input class="checkbox" type="checkbox" onclick="internalRef()" id="internalRefBox">
                        <p class="qpanel-q">Is the patient internally referred from a Sole service?</p></input>
                    </div>
                    `;
    
                    inoutpatient();
                    ageReq();
                    internalRef();
    
                    break;
    
                case "Genetics":
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="ageReqDiv">
                        <input class="checkbox" type="checkbox" onclick="ageReq()" id="ageReqBox">
                        <p class="qpanel-q">Is the patient above 18 years of age?</p></input>
                    </div>
                    `;
                    selfRef();
                    ageReq();
                    break;
    
                case "ENT":
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="ageReqDiv">
                        <input class="checkbox" type="checkbox" onclick="ageReq()" id="ageReqBox">
                        <p class="qpanel-q">Is the patient above 3 years of age?</p></input>
                    </div>
                    `;
                    ageReq();
                    selfRef();
                    break;
    
                case "Plastic Surgery":
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="ageReqDiv">
                        <input class="checkbox" type="checkbox" onclick="ageReq()" id="ageReqBox">
                        <p class="qpanel-q">Is the patient over 18 years of age?</p></input>
                    </div>
                    `;
                    ageReq();
                    selfRef();
                    break;
    
                case "Dermatology":
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="ageReqDiv">
                        <input class="checkbox" type="checkbox" onclick="ageReq()" id="ageReqBox">
                        <p class="qpanel-q">Is the patient over 3 Months of age?</p></input>
                    </div>
                    `;
                    ageReq();
                    selfRef();
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
                            <p class="qpanel-q" id="updowngrade-q">Has the NICU Level been upgraded to level 3/4?</p></input>
                        </div>
                        `;
                        nicuLvl();
                        updowngradedReq();
                        break;
                
                case "Gynecology":
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox'>
                        <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                        <p class="qpanel-q">Is the patient self-referred?</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="">
                        <h3>Choose Age Group:</h3>
                    </div>
    
                    <div class='qpanel1-qbox' id="">
                        <input class="checkbox" type="radio" onclick="ageGroup()" id="" name="agegroup" checked value="0">
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
                    ageGroup();
                    selfRef();
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
                        <p class="qpanel-q">Is the patient internally referred from a Sole service?</p></input>
                    </div>
                    `;
                    internalRef();
                    break;
    
                case "Aesthetics":
                    qpanel1.innerHTML = `
                    <p style="font-style:oblique">The Aesthetics service has no conditions which affect its classification.</p>
                    `;
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
                        <p class="qpanel-q">Is the patient referred from Sidra Adult Mental Health Services</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="">
                        <input class="checkbox" type="radio" onclick="obsRadio()" id="" name="obsRadio" value="1">
                        <p class="qpanel-q">Is the patient referred from Sidra Cardiology (Congenital Heart Disease)</p></input>
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
                        <p style="font-style:oblique">Ancillary Services has no conditions that will affect its classification</p>
                    `;
                    break;
                
                case "Adult Services":
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox' id="internalRefDiv">
                        <input class="checkbox" type="checkbox" onclick="internalRef()" id="internalRefBox">
                        <p class="qpanel-q">Is the patient internally referred from Obstetrics to any of the following services?</p></input>
                    </div>
                    <p>Services Included:</p>
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
                    <p style="font-style:oblique">"Inpatient & Ambulatory Surgery Procedures" has no conditions that will affect its classification</p>
                    `
                    break;
    
                case "Dental Surgery":
                    qpanel1.innerHTML = `
                    <p>Dental Surgery requires a Physician's clinical assessment by default to determine the service's classification.</p>
                    <p style="font-style:oblique">Dental Surgery has no conditions that will affect its classification</p>
                    `
                    break;
                case "General Surgery":
                    qpanel1.innerHTML = `
                    <p>General Surgery requires a Physician's clinical assessment by default to determine the service's classification.</p>
                    <p style="font-style:oblique">General Surgery has no conditions that will affect its classification</p>
                    `
                    break;
                case "General Pediatrics":
                    qpanel1.innerHTML = `
                    <p>General Pediatrics requires a Physician's clinical assessment by default to determine the service's classification.</p>
                    <p style="font-style:oblique">General Pediatrics has no conditions that will affect its classification</p>
                    `
                    break;
                case "Maternal Fetal Medicine":
                    qpanel1.innerHTML = `
                    <p>Maternal Fetal Medicine requires a Physician's clinical assessment by default to determine the service's classification.</p>
                    <p style="font-style:oblique">Maternal Fetal Medicine has no conditions that will affect its classification</p>
    
                    `
                    break;
    
                default:
                    break;
            }
            
            updateClassif();
    }}
    

}