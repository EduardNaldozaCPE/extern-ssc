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
                        outcome.innerText = 'Physician Assessment';
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
                outcomeSub.innerText = "CAMHS Inpatient service is preferred.";
            }
            break;
        
        case "Genetics":
            if (ls_agereq == 'true') {
                outcome.innerText = 'Preferred'
                outcomeSub.innerText = 'Genetics services are Classified as Preferred for patients aged 18 and above.'
            } else {
                outcome.innerText = 'Sole'
                outcomeSub.innerText = "Genetics services are Classified as Sole for patients below 18 years of age."
            }
            break;
        
        case "ENT":
            if (ls_agereq == 'true') {
                outcome.innerText = 'Physician Assessment';
                outcomeSub.innerText = "A Physician Assessment is required in order to determine service classification";
            } else {
                outcome.innerText = 'Sole';
                outcomeSub.innerText = 'ENT service for patients aged 3 and below is classified as Sole';
            }
            break;
        
        default:
            break;
    }

    fade(outcome);
    fade(outcomeSub);
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




if (location.pathname == '/'+getRootDir()+"test.html"){
    window.onload = () => {
        
        const branch = localStorage.getItem('branch')
        var outcome = document.getElementById("outcome");
        var outcomeSub = document.getElementById("outcome-sub");
        var qpanel = document.getElementById("q-panel");
        var qpanelheader = document.getElementById('q-panel-header');
        var qpanel1 = document.getElementById('q-panel1');
        var qpanel1header = document.getElementById('q-panel1-header');
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
                outcome.innerText = "Sole";
                outcomeSub.innerText = "Adolescent Medicine's classification is Sole by default";

                qpanel1.innerHTML += `
                <div class='qpanel1-qbox'>
                    <input class="checkbox" type="checkbox" onclick="selfRef()" id="selfRefbox">
                    <p class="qpanel-q">Is the patient self-referred?</p></input>
                </div>
                `;
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
                qpanel1.innerHTML = `
                <div class='qpanel1-qbox' id="ageReqDiv">
                    <input class="checkbox" type="checkbox" onclick="ageReq()" id="ageReqBox">
                    <p class="qpanel-q">Is the patient above 18 years of age?</p></input>
                </div>
                `;
                ageReq();
                break;

            case "ENT":
                qpanel1.innerHTML = `
                <div class='qpanel1-qbox' id="ageReqDiv">
                    <input class="checkbox" type="checkbox" onclick="ageReq()" id="ageReqBox">
                    <p class="qpanel-q">Is the patient above 3 years of age?</p></input>
                </div>
                `;
                ageReq();
                break;
            default:
                break;
        }
        
        updateClassif();
}}
