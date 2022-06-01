if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
    document.getElementsByTagName('body')[0].innerHTML = 'HTML5/ES6 IS NOT SUPPORTED IN THIS BROWSER';
} 

var canvas = document.querySelector('canvas');
var pageState = 0;
var pageloaded = false;
var page = 1;

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

canvas.width = innerWidth-15;
canvas.height = innerHeight-15;
var c = canvas.getContext('2d');

// Mouse Coordinates
var mpos = {
    x:undefined,
    y:undefined
}
canvas.addEventListener('mousemove', (event) => {
    mpos.x = event.x - ((innerWidth-canvas.width)/2);
    mpos.y = event.y;
});

CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    this.beginPath();
    this.moveTo(x+r, y);
    this.arcTo(x+w, y,   x+w, y+h, r);
    this.arcTo(x+w, y+h, x,   y+h, r);
    this.arcTo(x,   y+h, x,   y,   r);
    this.arcTo(x,   y,   x+w, y,   r);
    this.closePath();
    return this;
}

window.onresize = () => {
    canvas.width = innerWidth-15;
    canvas.height = innerHeight-15;
}
if (location.pathname.endsWith("index.html")  || location.pathname.endsWith("/extern-ssc/")){
    window.onload= () => {
        page = 1;
        pageicons = document.getElementById("pageicons");
        pageicons.innerHTML += `<img src="./images/pageicon-active.png" alt="" class="pageicon" id="pageicon-1" onclick="selectPage(1)">`;
        for (let index = 1; index <= Math.ceil(servicelist.length/12)-1; index++) {
            pageicons.innerHTML += `<img src="./images/pageicon.png" alt="" class="pageicon" id="pageicon-${index+1}" onclick="selectPage(${index+1})">`;
        }

        let isSupported;
        if (document.createElement('canvas').getContext) {
            isSupported = true
        } else {
            isSupported = false;
        }
        if (!isSupported) {
            console.log('not supported');
        } else {
            console.log('supported');
        }

    }
}

addEventListener('beforeunload', event => {console.log('l');});
