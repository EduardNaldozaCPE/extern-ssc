//  PURPOSE
// 
//  - formQuestions() performs the following:
//      1. Remembers left-panel's scroll position.
//      2. Refreshes page, and updates to show the currently selected service.
//      3. Sets the default outcome HTML for each service.
//      4. Sets the conditions for each service.



function formQuestions() {
    if (location.pathname == '/'+getRootDir()+"form.html"){

        window.onload = () => {
            // Remember left-panel's scroll position.
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
    
            //  For each service button in left-panel: 
            //      When clicked, set the new 'branch' to text in button, then refresh the page.
            const btnlist = document.getElementsByClassName('panel-btn');
            for (let btn=0;btn<btnlist.length-1;btn++){
                    btnlist[btn].onclick = () => {
                        console.log(btnlist[btn].innerText);
                        sessionStorage.setItem('branch',btnlist[btn].innerText);
                        window.location = window.location.href;
                    } 
            }
    
            // ADD CLASSIFICATION CONDITIONS HTML HERE
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
                    selfRef();
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
                    selfRef();
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
                        <p class="qpanel-q">The patient is over 14 years old and internally referred from a Sole service.</p></input>
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
                        <p class="qpanel-q">The patient is at least 18 years old and internally referred from a Sole service.</p></input>
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
                        <p class="qpanel-q">The patient's age is 18 years or older</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="ageReqDiv">
                        <input class="checkbox" type="radio" onclick="ageradio()" id="ageReqBox" name="agereq" value=1>
                        <p class="qpanel-q">The patient's age below 18 years</p></input>
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
                        <p class="qpanel-q">The patient is over 3 months old and internally referred from a Sole service</p></input>
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
                            <p class="qpanel-q" id="updowngrade-q">The NICU Level is upgraded to level 3/4.</p></input>
                        </div>
                        `;
                        nicuLvl();
                        updowngradedReq();
                        break;
                
                case "Gynecology":
                    qpanel1.innerHTML += `
                    <div class='qpanel1-qbox' id="ageReqDiv">
                        <input class="checkbox" type="radio" onclick="showGyneInfo(this)" id="ageReqBox" name="agegroup" value=3>
                        <p class="qpanel-q">The patient is a self referral</p></input>
                    </div>    
                    <div class='qpanel1-qbox' id="">
                        <input class="checkbox" type="radio" onclick="showGyneInfo(this)" id="" name="agegroup" value="0">
                        <p class="qpanel-q">Pediatrics (4 - 14 Years)</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="">
                        <input class="checkbox" type="radio" onclick="showGyneInfo(this)" id="" name="agegroup" value="1">
                        <p class="qpanel-q">Adolescence (14 - 18 Years)</p></input>
                    </div>
                    <div class='qpanel1-qbox' id="">
                        <input class="checkbox" type="radio" onclick="showGyneInfo(this)" id="" name="agegroup" value="2">
                        <p class="qpanel-q">Adult (18 Years and Above)</p></input>
                    </div>
                    <div class='forms-additinfo' style='display:none;'>
                        <p style='margin-top: 5px;'>Physicians need to use the following orders:</p>
                        <ul id='gyneinfo-1'></ul>
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
                    The Reproductive Medicine service is a private medical service.
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
    
                case "Surgery Procedures (Inpatient & Ambulatory)":
                    qpanel1.innerHTML = `
                    <p>Prior to placing the surgical procedure orders, Physician need to open the relevant Outpatient encounter that holds the classification and then place the Orders.</p>
                    <p>This will enable the classification to carry forward from the encounter onto the procedure Orders.</p>
                    `
                    break;
    
                case "Dental Surgery":
                    qpanel1.innerHTML = `
                    `
                    break;
                case "General Surgery":
                    qpanel1.innerHTML = `
                    `
                    break;
                case "General Pediatrics":
                    qpanel1.innerHTML = `
                    `
                    break;
                case "Maternal Fetal Medicine":
                    qpanel1.innerHTML = `
                    `
                    break;

                case "Private Clinics":
                    let vert;
                    let borderline;
                    if (canvas.width > canvas.height+(canvas.width/7)) {
                        vert = 'grid-column';
                        borderline = 'right';
                    } else {
                        vert = 'grid-row';
                        borderline = 'bottom';
                    }
                    qpanel1.innerHTML = `
                    <div style='
                    margin: 0px;
                    width: 95%;
                    display: grid;
                    ${vert}-start: 1;
                    ${vert}-end: 2;
                    '> 
                        <div id="physiciannote" style="
                        border-${borderline}: 1px solid #ccc;
                        width: 100%;
                        ${vert}: 1;
                        text-align: center;
                        padding: 5px;
                        ">
                            <h4>Phyisican</h4>
                            <p>Note: When placing a referral order, please select a 'Private Clinic Consult' in the Consultation Type field in the order OEF.</p>
                            <p style='font-style:oblique'>Example: Physician Order for Private Clinic</p>
                            <img src='./images/privclinic-physician.png' width='70%' style='box-shadow: #aaa 0px 2px 9px 1px;'>
                            <p>Physician selects 'Private Clinic Consult'.</p>
                        </div>
                        <div id="patientaccessnote" style="
                        width: 100%;
                        ${vert}: 2;
                        text-align: center;
                        padding: 5px;
                        ">
                            <h4>Patient Access</h4>
                            <p style='font-style:oblique'>Example: Patient Access Registration Encounter.</p>
                            <img src='./images/privclinic-patientaccess.png' width='85%' style='box-shadow: #aaa 0px 2px 9px 1px;'>
                            <p>Patient Access selects referral source as 'Self Referral'.</p>
                        </div>
                    </div>
                    `;
                    break;
    
                default:
                    break;
            }
            // Call updateClassif() to make sure that the correct classification shows.
            updateClassif();
    }}}