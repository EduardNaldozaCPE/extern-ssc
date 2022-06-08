var servicelist = [
    "Adolescent Medicine", "Adult Mental Health", "Adult Services", "Aesthetics", 
    "Allergy Immunology", "Ancillary Services", "CAMHS", "Cardiology", 
    "Dental Surgery", "Dermatology", "Developmental Pediatrics", "Emergency Services", 
    "Endocrinology", "ENT","Gastroenterology", "General Pediatrics", "General Surgery", 
    "Genetics", "Gynecology", "Hematology/Oncology", "Infectious Disease",
    "Inpatient & Ambulatory Surgery Procedures", "Maternal Fetal Medicine", 
    "NICU", "Neonatal Surgery", "Nephrology", "Neurology", "Neurosurgery", "Obstetrics", 
    "Ophthalmology", "Orthopedics", "Plastic Surgery", "Private Clinics", "Pulmonology", "Rehab Medicine", 
    "Reproductive Medicine", "Rheumatology", "Transplant", "Urology"
];

if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
    document.getElementsByTagName('body')[0].innerHTML = 'HTML5/ES6 IS NOT SUPPORTED IN THIS BROWSER';
} 

var canvas = document.querySelector('canvas');
var pageState = 0;
var pageloaded = false;
var page = 1;

canvas.width = innerWidth-15;
canvas.height = innerHeight-15;
var c = canvas.getContext('2d');

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

        // add animations to HTML elements
        document.getElementById("servicelist").style = 'transform: translateY(0px);opacity: 1;transition: 1s;';
    }
}
