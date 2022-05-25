parseServiceList = (list) => {
    var newList = [];
    list.forEach(element => {
        newList.push(element)
    });
    let count = 0;
    let pagelist = [];
    let pageitems = [];
    let finaldata = [];
    while (newList.length != 0){
        count++;
        let k;

        if (newList.length >= 12){
            k = 12;
        } else {
            k = newList.length;
        }

        for (let i = 0; i < k; i++){
            pageitems.push(newList[i]);
        }

        pagelist.push(pageitems);

        if (newList.length < 12){
            newList.splice(0,newList.length);
        } else {
            newList.splice(0,12);
        }
        pageitems = [];
    }
    pagelist.forEach(page => {
        finaldata.push({name:page})
    });
    return finaldata;
}

function ageReq() {
    let check1 = document.getElementById('ageReqBox');
    sessionStorage.setItem('ageReq', check1.checked);
    updateClassif();
}

function selfRef() {
    let check1 = document.getElementById('selfRefbox');
    sessionStorage.setItem('selfRef', check1.checked);
    updateClassif();
}

function inoutpatient() {
    let check1 = document.getElementById('inoutpatientBox');
    sessionStorage.setItem('in-out-patient', check1.checked);
    updateClassif();
}

function internalRef() {
    let check1 = document.getElementById('internalRefBox');
    sessionStorage.setItem('internalRef', check1.checked);
    updateClassif();
}

function nicuLvl() {
    let radioButtons = document.querySelectorAll('input[name="niculvl"]');
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            sessionStorage.setItem('niculvl', radioButton.value);
            break;
        }
    }
    updateClassif();
}

function obsRadio() {
    let radioButtons = document.querySelectorAll('input[name="obsRadio"]');
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            sessionStorage.setItem('obsRadio', radioButton.value);
            break;
        }
    }
    updateClassif();
}

function updowngradedReq() {
    let check1 = document.getElementById('updowngradedBox');
    sessionStorage.setItem('up-down-graded', check1.checked);
    updateClassif();
}

function ageGroup() {
    let radioButtons = document.querySelectorAll('input[name="agegroup"]');
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            sessionStorage.setItem('agegroup', radioButton.value);
            break;
        }
    }
    updateClassif();
}


function fade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 5);
}

function fadeout(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
            location.reload()
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 5);
}

function goHome() {
    pageState = 1;
    location.href = "index.html"
}


//      CANVAS FUNCTIONS

function posneg() {
    let n = Math.round(Math.random());
    if (n == 0) {
        return -1;
    } else {
        return 1;
    }
}

function isHovering(x1,y1,x2,y2,w2,h2) {
    if(x1 > x2 && x1 < x2 + w2 &&
        y1 > y2 && y1 < y2 + h2) {
            return true;
     } else {
         return false;
     }
}

function getRootDir(subfoldernum) {
    let dir = location.pathname.split("/");
    let finaldir = "";
    dir.pop();
    for (let i=0; i<subfoldernum; i++){
        dir.pop();
    }
    dir.shift();
    dir.forEach(l => {
        finaldir += l + '/';
    });
    return finaldir;
}

const parseCookie = str =>
  str
  .split(';')
  .map(v => v.split('='))
  .reduce((acc, v) => {
    acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
    return acc;
  }, {});
