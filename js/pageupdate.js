//  PURPOSE
// 
//  - When updateClassif is called / when user changes the active condition, the function will:
//      1. Read the session storage for relevant key-value pair
//      2. Overwrite the outcome's innerHTML
//      3. Changes the outcome text's colour when service is 'Preferred Provider' 
//      4. Changes the outcome's styling when window is in portait/mobile & adds "Scroll For More" box.



function updateClassif() {
    //#region
    let outcome = document.getElementById("outcome");
    let outcomeSub = document.getElementById("outcome-sub");
    let ss_selfref = sessionStorage.getItem('selfRef');
    let ss_agereq = sessionStorage.getItem('agereq');
    let ss_camhs = sessionStorage.getItem('camhs');
    let ss_internalRef = sessionStorage.getItem('internalRef');
    let ss_niculvl = sessionStorage.getItem('niculvl');
    let ss_obsradio = sessionStorage.getItem('obsRadio');
    let ss_updowngraded = sessionStorage.getItem('up-down-graded');
    let ss_agegroup = sessionStorage.getItem('agegroup');
    //#endregion
    // ADD CLASSIFICATION CONDITIONS LOGIC HERE
    switch (sessionStorage.getItem('branch')) {
        case "Adolescent Medicine":
            if (ss_selfref == 'true') {
                outcome.innerText = "Preferred Provider"
                outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)'
            } else {
                outcome.innerText = "Sole Provider"
                outcomeSub.innerText = "Adolescent Medicine's classification is Sole Provider by default"
            }
            break;
        case "Allergy Immunology":
            if (ss_selfref == 'true') {
                outcome.innerText = "Preferred Provider"
                outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)'
            } else {
                outcome.innerText = "Sole Provider"
                outcomeSub.innerText = "Allergy Immunology's classification is Sole Provider by default"
            }
            break;
        case "Endocrinology":
            if (ss_selfref == 'true') {
                outcome.innerText = "Preferred Provider"
                outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)'
            } else {
                outcome.innerText = "Sole Provider"
                outcomeSub.innerText = "Endocrinology's classification is Sole Provider by default"
            }
            break;
        case "Gastroenterology":
            if (ss_selfref == 'true') {
                outcome.innerText = "Preferred Provider"
                outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)'
            } else {
                outcome.innerText = "Sole Provider"
                outcomeSub.innerText = "Gastroenterology's classification is Sole Provider by default"
            }
            break;
        case "Cardiology":
            if (ss_selfref == 'true') {
                outcome.innerText = "Preferred Provider"
                outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)'
            } else {
                outcome.innerText = "Sole Provider"
                outcomeSub.innerText = "Cardiology's classification is Sole Provider by default"
            }
            break;
        case "Hematology/Oncology":
            if (ss_selfref == 'true') {
                outcome.innerText = "Preferred Provider"
                outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)'
            } else {
                outcome.innerText = "Sole Provider"
                outcomeSub.innerText = "Hematology/Oncology's classification is Sole Provider by default"
            }
            break;
        case "Nephrology":
            if (ss_selfref == 'true') {
                outcome.innerText = "Preferred Provider"
                outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)'
            } else {
                outcome.innerText = "Sole Provider"
                outcomeSub.innerText = "Nephrology's classification is Sole Provider by default"
            }
            break;
        case "Neurology":
            if (ss_selfref == 'true') {
                outcome.innerText = "Preferred Provider"
                outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)'
            } else {
                outcome.innerText = "Sole Provider"
                outcomeSub.innerText = "Neurology's classification is Sole Provider by default"
            }
            break;
        case "Infectious Disease":
            if (ss_selfref == 'true') {
                outcome.innerText = "Preferred Provider"
                outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)'
            } else {
                outcome.innerText = "Sole Provider"
                outcomeSub.innerText = "Infectious Disease's classification is Sole Provider by default"
            }
            break;
        case "Pulmonology":
            if (ss_selfref == 'true') {
                outcome.innerText = "Preferred Provider"
                outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)'
            } else {
                outcome.innerText = "Sole Provider"
                outcomeSub.innerText = "Pulmonology's classification is Sole Provider by default"
            }
            break;
        case "Rheumatology":
            if (ss_selfref == 'true') {
                outcome.innerText = "Preferred Provider"
                outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)'
            } else {
                outcome.innerText = "Sole Provider"
                outcomeSub.innerText = "Rheumatology's classification is Sole Provider by default"
            }
            break;
        case "Rehab Medicine":
            if (ss_selfref == 'true') {
                outcome.innerText = "Preferred Provider"
                outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)'
            } else {
                outcome.innerText = "Sole Provider"
                outcomeSub.innerText = "Rehab Medicine's classification is Sole Provider by default"
            }
            break;
        case "Neonatal Surgery":
            if (ss_selfref == 'true') {
                outcome.innerText = "Preferred Provider"
                outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)'
            } else {
                outcome.innerText = "Sole Provider"
                outcomeSub.innerText = "Neonatal Surgery's classification is Sole Provider by default"
            }
            break;
        case "Neurosurgery":
            if (ss_selfref == 'true') {
                outcome.innerText = "Preferred Provider"
                outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)'
            } else {
                outcome.innerText = "Sole Provider"
                outcomeSub.innerText = "Neurosurgery's classification is Sole Provider by default"
            }
            break;
        case "Ophthalmology":
            if (ss_selfref == 'true') {
                outcome.innerText = "Preferred Provider"
                outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)'
            } else {
                outcome.innerText = "Sole Provider"
                outcomeSub.innerText = "Ophthalmology's classification is Sole Provider by default"
            }
            break;
        case "Orthopedics":
            if (ss_selfref == 'true') {
                outcome.innerText = "Preferred Provider"
                outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)'
            } else {
                outcome.innerText = "Sole Provider"
                outcomeSub.innerText = "Orthopedics's classification is Sole Provider by default"
            }
            break;
        case "Transplant":
            if (ss_selfref == 'true') {
                outcome.innerText = "Preferred Provider"
                outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)'
            } else {
                outcome.innerText = "Sole Provider"
                outcomeSub.innerText = "Transplant's classification is Sole Provider by default"
            }
            break;
        case "Urology":
            if (ss_selfref == 'true') {
                outcome.innerText = "Preferred Provider"
                outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)'
            } else {
                outcome.innerText = "Sole Provider"
                outcomeSub.innerText = "Urology's classification is Sole Provider by default"
            }
            break;
        case "Adult Mental Health":
            if (ss_selfref == 'true') {
                outcome.innerText = "Preferred Provider"
                outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)'
            } else {
                outcome.innerText = "Sole Provider"
                outcomeSub.innerText = "Adult Mental Health's classification is Sole Provider by default"
            }
            break;
        
        case "CAMHS":
            switch (ss_camhs) {
                case "0":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "CAMHS Outpatient service is classified as Sole Provider";
                    break;
                case "1":      
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "CAMHS Inpatient service (for patients aged 14 and below) is classified as Sole Provider";
                    break;
                case "2":
                    outcome.innerText = "Preferred Provider";
                    outcomeSub.innerText = "CAMHS Inpatient service (for patients aged 15 and above) is classified as Preferred";                    break;
                case "3":
                    outcome.innerText = "Require Comorbidity Assessment";
                    outcomeSub.innerText = "A Physician Assessment is required in order to determine the service classification";
                    break;
                default:
                    outcome.innerText = "";
                    outcomeSub.innerText = "";
                    break;
            }
            break;
        
        case "Genetics":
            switch (ss_agereq) {
                case "0":
                    outcome.innerText = "Preferred Provider";
                    outcomeSub.innerText = 'Genetics services are Classified as Preferred for patients aged 18 and above.';
                    break;
                case "1":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "Genetics services are Classified as Sole Provider for patients below 18 years of age.";
                    break;
                case "2":
                    outcome.innerText = "Preferred Provider";
                    outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)';
                    break;
                case "3":
                    outcome.innerText = 'Require Comorbidity Assessment';
                    outcomeSub.innerText = "A Physician Assessment is required in order to determine the service classification";
                    break;
                default:
                    outcome.innerText = "";
                    outcomeSub.innerText = "";
                    break;
            }
            break;
        
        case "ENT":
            switch (ss_agereq) {
                case "0":
                    outcome.innerText = 'Require Clinical Assessment';
                    outcomeSub.innerText = "A Physician Assessment is required in order to determine the service classification";
                    break;
                case "1":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = 'ENT service for patients aged 3 and below is classified as Sole Provider';
                    break;
                case "2":
                    outcome.innerText = "Preferred Provider";
                    outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)';
                    break;
                default:
                    outcome.innerText = ""
                    outcomeSub.innerText = ""
                    break;
            }
            break;
        
        case "Plastic Surgery":
            switch (ss_agereq) {
                case "0":
                    outcome.innerText = 'Require Clinical Assessment';
                    outcomeSub.innerText = "A Physician Assessment is required in order to determine the service classification";
                    break;
                case "1":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = 'Plastic Surgery service for patients below 18 years of age is classified as Sole Provider';
                    break;
                case "2":
                    outcome.innerText = "Preferred Provider";
                    outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)';
                    break;
                default:
                    outcome.innerText = "";
                    outcomeSub.innerText = "";
                    break;
            }
        break;

        case "Dermatology":
            switch (ss_agereq) {
                case "0":
                    outcome.innerText = "Preferred Provider"
                    outcomeSub.innerText = 'Dermatology service for patients aged 3 months and older is classified as Preferred';
                    break;
                case "1":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = 'Dermatology service for patients under 3 months of age is classified as Sole';
                    break;
                case "2":
                    outcome.innerText = "Preferred Provider";
                    outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)';
                    break;
                case "3":
                    outcome.innerText = 'Require Comorbidity Assessment';
                    outcomeSub.innerText = "A Physician Assessment is required in order to determine the service classification";
                    break;
                default:
                    outcome.innerText = "";
                    outcomeSub.innerText = "";
                    break;
            }
            break;
        
        case 'NICU':
            if (ss_updowngraded == "true"){
                outcome.innerText = "Sole Provider";
                outcomeSub.innerText = "The Newborn Intensive Care Unit service is classified as Sole Provider when upgraded/downgraded";
                switch (ss_niculvl) {
                    case "0":
                        document.getElementById('updowngrade-q').innerText = "The NICU Level has been upgraded to level 3/4";
                        break;
                    case "1":
                        document.getElementById('updowngrade-q').innerText = "The NICU Level has been downgraded to level 1/2";        
                        break;
                    default:
                        break;
                }
            } else {
                switch (ss_niculvl) {
                    case "0":
                        outcome.innerText = "Preferred Provider";
                        outcomeSub.innerText = "The Newborn Intensive Care Unit service is classified as Preferred for NICU Levels 1 & 2";
                        document.getElementById('updowngrade-q').innerText = "The NICU Level is upgraded to level 3/4.";
                        break;
                    case "1":
                        outcome.innerText = "Sole Provider";
                        outcomeSub.innerText = "The Newborn Intensive Care Unit service is classified as Sole Provider for NICU Levels 3 & 4";
                        document.getElementById('updowngrade-q').innerText = "The NICU Level is downgraded to level 1/2.";        
                        break;
                    default:
                        break;
                }
            }
            break;
        
        case 'Gynecology':
            switch (ss_agegroup) {
                case "0":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "The Gynecology service is classified as Sole Provider for patients aged 4 to 14 years old";        
                    break;
                case "1":
                    outcome.innerText = "Sole Provider";
                    outcomeSub.innerText = "The Gynecology service is classified as Sole for patients aged 14 to 18 years old";        
                    break;
                case "2":
                    outcome.innerText = "Preferred Provider";
                    outcomeSub.innerText = "The Gynecology service is classified as Preferred for patients aged 18 years and older";        
                    break;
                case "3":
                    outcome.innerText = "Preferred Provider";
                    outcomeSub.innerText = 'All self-referrals are classified as Preferred (Excluding CAMHS)';
                    break;
            
                default:
                    outcome.innerText = "";
                    outcomeSub.innerText = "";
                    break;
            }
            break;
        
        case 'Emergency Services':
            outcome.innerText = "Sole / Preferred"
            outcomeSub.innerText = "Emergency Services Classification is dependent on the patient's urgency (ESI) level. \n Please Read Below"
            break;
        
        case 'Developmental Pediatrics':
            switch (ss_internalRef) {
                case 'true':
                    outcome.innerText = 'Require Comorbidity Assessment';
                    outcomeSub.innerText = "A Physician Assessment is required in order to determine the service classification";
                    break;
                case 'false':
                    outcome.innerText = "Preferred Provider";
                    outcomeSub.innerText = "The Developmental Pediatrics service is classified as Preferred by default";
                    break;
            
                default:
                    break;
            }
            break;

        case 'Aesthetics':
            outcome.innerText = "Preferred Provider";
            outcomeSub.innerText = "The Aesthetics service is classified as Preferred by default."
            break;

        case 'Reproductive Medicine':
            outcome.innerText = "Preferred Provider";
            outcomeSub.innerText = "The Reproductive Medicine service is classified as Preferred by default."
            break;
            
        case 'Obstetrics':
            switch (ss_obsradio) {
                case "0":
                case "1":                    
                    outcome.innerText = 'Require Clinical Assessment';
                    outcomeSub.innerText = "A Physician Assessment is required in order to determine the service classification";
                    break;
                case "2":
                    outcome.innerText = "Preferred Provider";
                    outcomeSub.innerText = "The Obstetrics service is classified as Preferred by default";
                    break;
            
                default:
                    break;
            }
            break;
        
        case 'Ancillary Services':
            outcome.innerText = "Sole or Preferred"
            outcomeSub.innerText = "Inherits the service classification from the originating encounter."
            break;
        
        case 'Adult Services':
            switch (ss_internalRef) {
                case 'true':
                    outcome.innerText = 'Sole or Preferred';
                    outcomeSub.innerText = "The service inherits the service classification from the originating encounter";
                    break;
                case 'false':
                    outcome.innerText = "Preferred Provider";
                    outcomeSub.innerText = "The Adult Services are classified as Preferred by default";
                    break;
            
                default:
                    break;
            }
            
            break;

        case "Surgery Procedures (Inpatient & Ambulatory)":
            outcome.innerText = 'Sole or Preferred';
            outcomeSub.innerText = "Surgical procedures inherits its service classification from the originating encounter";
            break;

        case "Dental Surgery":
            outcome.innerText = 'Require Clinical Assessment';
            outcomeSub.innerText = "A Physician Assessment is required in order to determine the service classification";
            break;
        case "General Surgery":
            outcome.innerText = 'Require Clinical Assessment';
            outcomeSub.innerText = "A Physician Assessment is required in order to determine the service classification";
            break;
        case "General Pediatrics":
            outcome.innerText = 'Require Clinical Assessment';
            outcomeSub.innerText = "A Physician Assessment is required in order to determine the service classification";
            break;
        case "Maternal Fetal Medicine":
            outcome.innerText = 'Require Clinical Assessment';
            outcomeSub.innerText = "A Physician Assessment is required in order to determine the service classification";
            break;
        case "Private Clinics":
            outcome.innerText = 'Preferred Provider';
            outcomeSub.innerText = "All Patients referred as Private is by default classified as 'Preferred' (applicable to all Medical Services, Evenings & Morning Clinics)";
            break;
        
        default:
            outcome.innerText = '';
            outcomeSub.innerText = "";
            break;
    }
    
    // Changes the outcome's styling when window is in portait/mobile & adds "Scroll For More" box when in mobile
    if (canvas.width > canvas.height+(canvas.width/7)) {
        outcome.style = 'opacity: 1; transition: 0.6s; outline: solid 2px; padding: 15px;';
    } else {
        outcome.style = "opacity: 1; transition: 0.6s; outline: solid 2px; padding: 15px; font-size: 1.6em;width: 60%;margin-bottom: 0px;"
        if (document.getElementById("q-panel1").scrollHeight > document.getElementById("q-panel1").clientHeight + 70) {
            document.getElementById('scrollindic').style.display = 'block';
        } else {
            document.getElementById('scrollindic').style.display = 'none';
        }
    }

    // Changes the Outcome Colour when outcome is Preferred
    if (outcome.innerText != "") {
        outcome.style.outline = "solid 2px";
        outcome.style.padding = "15px"
        outcome.style.color = "#ffffff";
        if (outcome.innerText == "Preferred Provider") {
            outcome.style.outline = "solid 2px #d10e0e";
            outcome.style.color = "#d10e0e";
        }
    } else {
        outcome.style.outline = "0px";
        outcome.style.padding = "15px"
    }
}