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

function obsRadio() {
    let radioButtons = document.querySelectorAll('input[name="obsRadio"]');
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            localStorage.setItem('obsRadio', radioButton.value);
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
