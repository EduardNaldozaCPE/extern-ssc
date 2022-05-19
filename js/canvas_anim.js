lineArray = newLineArray();
// Instantiating Objects in Animation
var pageinit = true;
let frame = 0;
setInterval(animation,8);  
function animation() {
    frame++;
    c.clearRect(0,0,innerWidth,innerHeight);
    // console.log(frame);

    // Create Background Lines 
    for (let i=0; i<lineArray.length; i++){
        lineArray[i].draw();
        lineArray[i].update();
    }
    if (pageinit){
        pagecontent.initpage();
    }
    pageinit = false;
    //Animate canvas states
    if (pageState == 0) {
        //Draw each instance in the list.
        let transobjs = 0;
        instanceList.forEach((instanceobj, i) => {

            // Delete all objects that are both: At state=2 (to be deleted) and already invisible.
            if (instanceobj.state == 2){
                transobjs++;
                if (instanceobj.opacity <= 0.001) {
                        instanceList.splice(i,1);
                } 
            } 
            
            // Draw all objects
            instanceobj.draw();
        });

        // On the Select page, if the transitions have finished (no more objects at state=2), update page.
        //  If there are still transitions, page.transition will be/stay true.
        //  But if there are no more objects and page.transition is still true, run the new page objects and make page.transition false
        //  This makes the pagefunctions run only once every transition stage, making it impossible to make multiple transitions while one is still running 
        if (pagecontent.name == 'select'){
            if (transobjs > 0) {
                pagecontent.transition = true;
            } else {
                if(pagecontent.transition == true){
                    pagecontent.pagefuncs[pagecontent.page-1]()
                }
                pagecontent.transition = false;
            }
        }
    } else {
        console.log("Loading next page");
    }
    // requestAnimationFrame(animation);
}

//ONCLICK
canvas.addEventListener('click', () => {
    pagecontent.action();
});

// Running Animation
// animation(0);

function updateClassif() {
    let outcome = document.getElementById("outcome");
    let outcomeSub = document.getElementById("outcome-sub");
    let ls_selfref = localStorage.getItem('selfRef');
    let ls_agereq = localStorage.getItem('ageReq');
    let ls_inoutpatient = localStorage.getItem('in-out-patient');
    let ls_internalRef = localStorage.getItem('internalRef');
    let ls_niculvl = localStorage.getItem('niculvl');
    let ls_updowngraded = localStorage.getItem('up-down-graded');
    let ls_agegroup = localStorage.getItem('agegroup');
    let ls_obsRef = localStorage.getItem('obsRef');

    switch (localStorage.getItem('branch')) {
        case "Adolescent Medicine":
            if (ls_selfref == 'true') {
                outcome.innerText = 'Preferred'
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred'
            } else {
                outcome.innerText = 'Sole'
                outcomeSub.innerText = "Adolescent Medicine's classification is Sole by default"
            }
            break;
        case "Allergy Immunology":
            if (ls_selfref == 'true') {
                outcome.innerText = 'Preferred'
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred'
            } else {
                outcome.innerText = 'Sole'
                outcomeSub.innerText = "Allergy Immunology's classification is Sole by default"
            }
            break;
        case "Endocrinology":
            if (ls_selfref == 'true') {
                outcome.innerText = 'Preferred'
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred'
            } else {
                outcome.innerText = 'Sole'
                outcomeSub.innerText = "Endocrinology's classification is Sole by default"
            }
            break;
        case "Gastroenterology":
            if (ls_selfref == 'true') {
                outcome.innerText = 'Preferred'
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred'
            } else {
                outcome.innerText = 'Sole'
                outcomeSub.innerText = "Gastroenterology's classification is Sole by default"
            }
            break;
        case "Cardiology":
            if (ls_selfref == 'true') {
                outcome.innerText = 'Preferred'
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred'
            } else {
                outcome.innerText = 'Sole'
                outcomeSub.innerText = "Cardiology's classification is Sole by default"
            }
            break;
        case "Hematology/Oncology":
            if (ls_selfref == 'true') {
                outcome.innerText = 'Preferred'
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred'
            } else {
                outcome.innerText = 'Sole'
                outcomeSub.innerText = "Hematology/Oncology's classification is Sole by default"
            }
            break;
        case "Nephrology":
            if (ls_selfref == 'true') {
                outcome.innerText = 'Preferred'
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred'
            } else {
                outcome.innerText = 'Sole'
                outcomeSub.innerText = "Nephrology's classification is Sole by default"
            }
            break;
        case "Neurology":
            if (ls_selfref == 'true') {
                outcome.innerText = 'Preferred'
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred'
            } else {
                outcome.innerText = 'Sole'
                outcomeSub.innerText = "Neurology's classification is Sole by default"
            }
            break;
        case "Infectious Disease":
            if (ls_selfref == 'true') {
                outcome.innerText = 'Preferred'
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred'
            } else {
                outcome.innerText = 'Sole'
                outcomeSub.innerText = "Infectious Disease's classification is Sole by default"
            }
            break;
        case "Pulmonology":
            if (ls_selfref == 'true') {
                outcome.innerText = 'Preferred'
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred'
            } else {
                outcome.innerText = 'Sole'
                outcomeSub.innerText = "Pulmonology's classification is Sole by default"
            }
            break;
        case "Rheumatology":
            if (ls_selfref == 'true') {
                outcome.innerText = 'Preferred'
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred'
            } else {
                outcome.innerText = 'Sole'
                outcomeSub.innerText = "Rheumatology's classification is Sole by default"
            }
            break;
        case "Rehab Medicine":
            if (ls_selfref == 'true') {
                outcome.innerText = 'Preferred'
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred'
            } else {
                outcome.innerText = 'Sole'
                outcomeSub.innerText = "Rehab Medicine's classification is Sole by default"
            }
            break;
        case "Neonatal Surgery":
            if (ls_selfref == 'true') {
                outcome.innerText = 'Preferred'
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred'
            } else {
                outcome.innerText = 'Sole'
                outcomeSub.innerText = "Neonatal Surgery's classification is Sole by default"
            }
            break;
        case "Neurosurgery":
            if (ls_selfref == 'true') {
                outcome.innerText = 'Preferred'
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred'
            } else {
                outcome.innerText = 'Sole'
                outcomeSub.innerText = "Neurosurgery's classification is Sole by default"
            }
            break;
        case "Ophthalmology":
            if (ls_selfref == 'true') {
                outcome.innerText = 'Preferred'
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred'
            } else {
                outcome.innerText = 'Sole'
                outcomeSub.innerText = "Ophthalmology's classification is Sole by default"
            }
            break;
        case "Orthopedics":
            if (ls_selfref == 'true') {
                outcome.innerText = 'Preferred'
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred'
            } else {
                outcome.innerText = 'Sole'
                outcomeSub.innerText = "Orthopedics's classification is Sole by default"
            }
            break;
        case "Transplant":
            if (ls_selfref == 'true') {
                outcome.innerText = 'Preferred'
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred'
            } else {
                outcome.innerText = 'Sole'
                outcomeSub.innerText = "Transplant's classification is Sole by default"
            }
            break;
        case "Urology":
            if (ls_selfref == 'true') {
                outcome.innerText = 'Preferred'
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred'
            } else {
                outcome.innerText = 'Sole'
                outcomeSub.innerText = "Urology's classification is Sole by default"
            }
            break;
        case "Peri/Post Natal Mental Health":
            if (ls_selfref == 'true') {
                outcome.innerText = 'Preferred'
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred'
            } else {
                outcome.innerText = 'Sole'
                outcomeSub.innerText = "Peri/Post Natal Mental Health's classification is Sole by default"
            }
            break;
        
        case "CAMHS":
            let ageReqDiv = document.getElementById('ageReqDiv');
            let internalRefDiv = document.getElementById('internalRefDiv');
            if (ls_inoutpatient == 'true') {
                ageReqDiv.style.display = 'flex';
                if (ls_agereq == 'true') {
                    internalRefDiv.style.display = 'flex';
                    if (ls_internalRef == 'true') {
                        outcome.innerText = 'Require Comorbidity Assessment';
                        outcomeSub.innerText = "A Physician Assessment is required in order to determine service classification";
                    } else {
                        outcome.innerText = 'Preferred';
                        outcomeSub.innerText = 'CAMHS service for patients above 14 years of age is classified as Preferred';
                            }
                } else {
                    internalRefDiv.style.display = 'none';
                    outcome.innerText = 'Sole';
                    outcomeSub.innerText = 'CAMHS service for patients aged 14 and below is classified as Sole';
                    }
            } else {
                internalRefDiv.style.display = 'none';
                ageReqDiv.style.display = 'none';
                outcome.innerText = 'Preferred'
                outcomeSub.innerText = "CAMHS Inpatient service (only for patients aged 15 and above) is classified as preferred.";
            }
            break;
        
        case "Genetics":
            if (ls_selfref == 'true'){
                outcome.innerText = 'Preferred'
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred'
            } else {
                if (ls_agereq == 'true') {
                    outcome.innerText = 'Preferred'
                    outcomeSub.innerText = 'Genetics services are Classified as Preferred for patients aged 18 and above.'
                } else {
                    outcome.innerText = 'Sole'
                    outcomeSub.innerText = "Genetics services are Classified as Sole for patients below 18 years of age."
                }
            }
            break;
        
        case "ENT":
            if (ls_selfref == 'true'){
                outcome.innerText = 'Preferred';
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred';
            } else {
                if (ls_agereq == 'true') {
                    outcome.innerText = 'Require Clinical Assessment';
                    outcomeSub.innerText = "A Physician Assessment is required in order to determine service classification";
                } else {
                    outcome.innerText = 'Sole';
                    outcomeSub.innerText = 'ENT service for patients aged 3 and below is classified as Sole';
                }
            }
            break;
        
        case "Plastic Surgery":
            if (ls_selfref == 'true'){
                outcome.innerText = 'Preferred';
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred';
            } else {
                if (ls_agereq == 'true') {
                    outcome.innerText = 'Require Clinical Assessment';
                    outcomeSub.innerText = "A Physician Assessment is required in order to determine service classification";
                } else {
                    outcome.innerText = 'Sole';
                    outcomeSub.innerText = 'Plastic Surgery service for patients under 18 years of age is classified as Sole';
                }
            }
            break;

        case "Dermatology":
            if (ls_selfref == 'true'){
                outcome.innerText = 'Preferred';
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred';
            } else {
                if (ls_agereq == 'true') {
                    outcome.innerText = 'Require Comorbidity Assessment';
                    outcomeSub.innerText = "A Physician Assessment is required in order to determine service classification";
                } else {
                    outcome.innerText = 'Preferred';
                    outcomeSub.innerText = 'Dermatology service for patients under 3 months of age is classified as Preferred';
                }
            }
            break;
        
        case 'NICU':
            if (ls_updowngraded == "true"){
                outcome.innerText = 'Sole';
                outcomeSub.innerText = "The Newborn Intensive Care Unit service is classified as sole when upgraded/downgraded";
            } else {
                switch (ls_niculvl) {
                    case "0":
                        outcome.innerText = 'Preferred';
                        outcomeSub.innerText = "The Newborn Intensive Care Unit service is classified as Preferred for NICU Levels 1 & 2";        
                        break;
                    case "1":
                        outcome.innerText = 'Sole';
                        outcomeSub.innerText = "The Newborn Intensive Care Unit service is classified as Sole for NICU Levels 3 & 4";        
                        break;
                    default:
                        break;
                }
            }
            break;
        
        case 'Gynecology':
            if (ls_selfref == 'true'){
                outcome.innerText = 'Preferred';
                outcomeSub.innerText = 'Self-referred services are Classified as Preferred';
            } else {
            
                switch (ls_agegroup) {
                    case "0":
                            outcome.innerText = 'Sole';
                            outcomeSub.innerText = "The Gynecology service is classified as Sole for patients at 4 to 14 years of age";        
                        break;
                    case "1":
                            outcome.innerText = 'Preferred';
                            outcomeSub.innerText = "The Gynecology service is classified as Preferred for patients at 15 to 17 Years years of age";        
                        break;
                    case "2":
                            outcome.innerText = 'Preferred';
                            outcomeSub.innerText = "The Gynecology service is classified as Preferred for patients aged 18 years and older";        
                        break;
                
                    default:
                        break;
                }
            }
            break;
        
        case 'Emergency Services':
            outcome.innerText = "Sole / Preferred"
            outcomeSub.innerText = "Emergency Services Classification is dependent on the patient's urgency (ESI) level. \n Please Read Below"
            break;
        
        case 'Developmental Pediatrics':
            switch (ls_internalRef) {
                case 'true':
                    outcome.innerText = 'Require Comorbidity Assessment';
                    outcomeSub.innerText = "A Physician Assessment is required in order to determine service classification";
                    break;
                case 'false':
                    outcome.innerText = 'Preferred';
                    outcomeSub.innerText = "The Developmental Pediatrics service is classified as Preferred by default";
                    break;
            
                default:
                    break;
            }
            break;

        case 'Aesthetics':
            outcome.innerText = "Preferred";
            outcomeSub.innerText = "The Aesthetics service is classified as Preferred by default."
            break;

        case 'Reproductive Medicine':
            outcome.innerText = "Preferred";
            outcomeSub.innerText = "The Reproductive Medicine service is classified as Preferred by default."
            break;
            
        case 'Obstetrics':
            switch (ls_internalRef) {
                case 'true':
                    outcome.innerText = 'Require Clinical Assessment';
                    outcomeSub.innerText = "A Physician Assessment is required in order to determine service classification";
                break;
                case 'false':
                    outcome.innerText = 'Preferred';
                    outcomeSub.innerText = "The Obstetrics service is classified as Preferred by default";
                    break;
            
                default:
                    break;
            }
            break;
        
        case 'Ancillary Services':
            outcome.innerText = "Sole or Preferred"
            outcomeSub.innerText = "Inherits the service classification from originating encounter."
            break;
        
        case 'Adult Services':
            switch (ls_internalRef) {
                case 'true':
                    outcome.innerText = 'Sole or Preferred';
                    outcomeSub.innerText = "The service inherits the service classification from originating encounter";
                    break;
                case 'false':
                    outcome.innerText = 'Preferred';
                    outcomeSub.innerText = "The Developmental Pediatrics service is classified as Preferred by default";
                    break;
            
                default:
                    break;
            }
            break;

        case "Inpatient & Ambulatory Surgery Procedures":
            outcome.innerText = 'Sole or Preferred';
            outcomeSub.innerText = "The service inherits the service classification from originating encounter";
            break;

        case "Dental Surgery":
            outcome.innerText = 'Require Clinical Assessment';
            outcomeSub.innerText = "A Physician Assessment is required in order to determine service classification";
            break;
        case "General Surgery":
            outcome.innerText = 'Require Clinical Assessment';
            outcomeSub.innerText = "A Physician Assessment is required in order to determine service classification";
            break;
        case "General Pediatrics":
            outcome.innerText = 'Require Clinical Assessment';
            outcomeSub.innerText = "A Physician Assessment is required in order to determine service classification";
            break;
        case "Maternal Fetal Medicine":
            outcome.innerText = 'Require Clinical Assessment';
            outcomeSub.innerText = "A Physician Assessment is required in order to determine service classification";
            break;
        
        default:
            break;
        }

        
    fade(outcome);
    fade(outcomeSub);
}

function goHome() {
    pageState = 1;
    location.href = "index.html"
}

function ageReq() {
    let check1 = document.getElementById('ageReqBox');
    localStorage.setItem('ageReq', check1.checked);
    updateClassif();
}

function selfRef() {
    let check1 = document.getElementById('selfRefbox');
    localStorage.setItem('selfRef', check1.checked);
    updateClassif();
}

function inoutpatient() {
    let check1 = document.getElementById('inoutpatientBox');
    localStorage.setItem('in-out-patient', check1.checked);
    updateClassif();
}

function internalRef() {
    let check1 = document.getElementById('internalRefBox');
    localStorage.setItem('internalRef', check1.checked);
    updateClassif();
}

function nicuLvl() {
    let radioButtons = document.querySelectorAll('input[name="niculvl"]');
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            localStorage.setItem('niculvl', radioButton.value);
            break;
        }
    }
    updateClassif();
}

function updowngradedReq() {
    let check1 = document.getElementById('updowngradedBox');
    localStorage.setItem('up-down-graded', check1.checked);
    updateClassif();
}

function ageGroup() {
    let radioButtons = document.querySelectorAll('input[name="agegroup"]');
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            localStorage.setItem('agegroup', radioButton.value);
            break;
        }
    }
    updateClassif();
}

function internalRefObs(check) {
    let check1 = document.getElementById('internalRefBox1');
    let check2 = document.getElementById('internalRefBox2');
    switch (check) {
        case 1:
            check2.checked = false;
            break;

        case 2:
            check1.checked = false;
            break;
        default:
            break;
    }
    localStorage.setItem('internalRef', (check1.checked ||check2.checked));
    updateClassif();
}

if (location.pathname == '/'+getRootDir()+"form.html"){
    window.onload = () => {
        
        const branch = localStorage.getItem('branch')
        var outcome = document.getElementById("outcome");
        var outcomeSub = document.getElementById("outcome-sub");
        var qpanel = document.getElementById("q-panel");
        var qpanelheader = document.getElementById('q-panel-header');
        var qpanel1 = document.getElementById('q-panel1');
        var qpanel1header = document.getElementById('q-panel1-header');
        qpanelheader.innerText = branch;
        const homebtn = document.getElementById('home-btn');
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
                outcome.innerText = "Sole";
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
                outcome.innerText = "Sole";
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
                outcome.innerText = "Sole";
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
                outcome.innerText = "Sole";
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
                outcome.innerText = "Sole";
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
                outcome.innerText = "Sole";
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
                outcome.innerText = "Sole";
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
                outcome.innerText = "Sole";
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
                outcome.innerText = "Sole";
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
                outcome.innerText = "Sole";
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
                outcome.innerText = "Sole";
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
                outcome.innerText = "Sole";
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
                outcome.innerText = "Sole";
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
                outcome.innerText = "Sole";
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
                outcome.innerText = "Sole";
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
                outcome.innerText = "Sole";
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
                outcome.innerText = "Sole";
                outcomeSub.innerText = "Transplant's classification is Sole by default";

                qpanel1.innerHTML += `
                <div class='qpanel1-qbox'>
                    <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                    <p class="qpanel-q">Is the patient self-referred?</p></input>
                </div>
                `;
                break;
            case "Urology":
                outcome.innerText = "Sole";
                outcomeSub.innerText = "Urology's classification is Sole by default";

                qpanel1.innerHTML += `
                <div class='qpanel1-qbox'>
                    <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                    <p class="qpanel-q">Is the patient self-referred?</p></input>
                </div>
                `;
                break;
            case "Peri/Post Natal Mental Health":
                outcome.innerText = "Sole";
                outcomeSub.innerText = "Peri/Post Natal Mental Health's classification is Sole by default";

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
                        <input class="checkbox" type="checkbox" onclick="updowngradedReq()" id="updowngradedBox">
                        <p class="qpanel-q">Has the NICU Level been upgraded to level 3/4 or downgraded to level 1/2?</p></input>
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
                <div class='qpanel1-qbox' id="internalRefDiv">
                    <input class="checkbox" type="checkbox" onclick="internalRefObs(1)" id="internalRefBox1">
                    <p class="qpanel-q">Is the patient referred from Sidra Adult Mental Health Services</p></input>
                </div>
                <div class='qpanel1-qbox' id="internalRefDiv">
                    <input class="checkbox" type="checkbox" onclick="internalRefObs(2)" id="internalRefBox2">
                    <p class="qpanel-q">Is the patient referred from Sidra Cardiology (Congenital Heart Disease)</p></input>
                </div>
                `;
                internalRefObs();
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
                    <p class="qpanel-q">Is the patient internally referred from Obstetrics?</p></input>
                </div>
                <p>Services Included:</p>
                <ul>
                    <li>Diabetic New</li>
                    <li>Endocrinology New</li>
                    <li>Dietician New</li>
                    <li>Physiotherapy New</li>
                    <li>Internal Medicine</li>
                    <li>Adult Cardiology New (Congenital Hearth Disease)</li>
                </ul>

                `;

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
