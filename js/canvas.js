//  PURPOSE
// 
//  - servicelist contains all the services that is used in the application.
//  - Initialising the canvas for background animations.
//  - in index.html, initialise the page indicators.



var servicelist = [
    "Adolescent Medicine", "Adult Mental Health", "Adult Services", "Aesthetics", 
    "Allergy Immunology", "Ancillary Services", "CAMHS", "Cardiology", 
    "Dental Surgery", "Dermatology", "Developmental Pediatrics", "Emergency Services", 
    "Endocrinology", "ENT","Gastroenterology", "General Pediatrics", "General Surgery", 
    "Genetics", "Gynecology", "Hematology/Oncology", "Infectious Disease", "Maternal Fetal Medicine", 
    "NICU", "Neonatal Surgery", "Nephrology", "Neurology", "Neurosurgery", "Obstetrics", 
    "Ophthalmology", "Orthopedics", "Plastic Surgery", "Private Clinics", "Pulmonology", "Rehab Medicine", 
    "Reproductive Medicine", "Rheumatology", "Surgery Procedures (Inpatient & Ambulatory)", "Transplant", "Urology","Test"
];



var canvas = document.querySelector('canvas');
var pageloaded = false;
var page = 1;

canvas.width = innerWidth-15;
canvas.height = innerHeight-15;
var c = canvas.getContext('2d');



//  in index.html, create multiple page indicators depending on the number of services in servicelist.
if (location.pathname.endsWith("index.html")  || location.pathname.endsWith("/extern-ssc/")){
    window.onload= () => {
        page = 1;
        pageicons = document.getElementById("pageicons");
        pageicons.innerHTML += `<img src="./images/pageicon-active.png" alt="" class="pageicon" id="pageicon-1" onclick="selectPage(1)">`;
        for (let index = 1; index <= Math.ceil(servicelist.length/12)-1; index++) {
            pageicons.innerHTML += `<img src="./images/pageicon.png" alt="" class="pageicon" id="pageicon-${index+1}" onclick="selectPage(${index+1})">`;
        }

        let extrabtns = document.getElementById('extrabtns');
        extrabtns.style = 'transform: translateY(0px);opacity: 1;';

        // Add animations to HTML elements
        document.getElementById("servicelist").style = 'transform: translateY(0px);opacity: 1;transition: 1s;';
    }
}
