formatServiceList = (list) => {
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

function camhsradio() {
    let radioButtons = document.querySelectorAll('input[name="camhs"]');
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            sessionStorage.setItem('camhs', radioButton.value);
            break;
        }
    }
    updateClassif();
}

function ageradio() {
    let radioButtons = document.querySelectorAll('input[name="agereq"]');
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            sessionStorage.setItem('agereq', radioButton.value);
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
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 5);
}

function fadegrid(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'grid';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 5);
}

function fadeoutgrid(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
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

// CANVAS FUNCTIONS

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

function rememberScroll(div) {
    sessionStorage.setItem("left-panel-scroll", div.scrollTop);
}

function scrollForMore() {
    var qbody = document.getElementById("q-panel1");
    if (qbody.scrollTop == 0) {
        document.getElementById('scrollindic').style.display = 'block';
    } else {
        document.getElementById('scrollindic').style.display = 'none';
    }
}

// SELECT SCREEN
function updatePageList() {
    fadegrid(document.getElementById("servicelist"));
    for (let index = 0; index < 12; index++) {
        if ((index)+(12*(page-1)) >= servicelist.length){
            break;
        }
        document.getElementById("servicelist").innerHTML += `<button class="select-panel-btn" onclick="serviceBtn(this)">${servicelist[(index)+(12*(page-1))]}</button>`
    }
    updatepageicons()
}

function updatepageicons() {
    pageicon = document.getElementsByClassName("pageicon");
    for (let index = 0; index < pageicon.length; index++) {
        const element = pageicon[index];
        element.setAttribute('src','./images/pageicon.png');
    }
    document.getElementById(`pageicon-${page}`).setAttribute('src','./images/pageicon-active.png');
}

function rightbutton() { 
    if (document.getElementById('pagenav').style.opacity != 0.5){
        document.getElementById("servicelist").innerHTML = ""
        if (page == Math.ceil(servicelist.length/12)) {
            page = 1;
        } else {
            console.log(Math.floor(servicelist.length/12));
            page++;
        }
        updatePageList()
    }  else {
        console.log('waht');
    }
}

function leftbutton() {    
    if (document.getElementById('pagenav').style.opacity != 0.5){
        document.getElementById("servicelist").innerHTML = ""
        if (page == 1) {
            page = Math.ceil(servicelist.length/12);
        } else {
            page--;
        }
        updatePageList()
    }
}

function selectPage(p){
    var letters = document.getElementsByClassName("filter-btn");
    for (let i=0;i<letters.length; i++){
        letters[i].style.textDecoration = "none";
    }
    document.getElementById('pagenav').style.opacity = 1;
    document.getElementById("servicelist").innerHTML = ""
    page = p;
    updatePageList();
}

function filterBtn_desktop(ltr) {
    fadegrid(document.getElementById("servicelist"));
    document.getElementById('pagenav').style.opacity = 0.5;
    var letters = document.getElementsByClassName("filter-btn");
    for (let i=0;i<letters.length; i++){
        if (letters[i].innerText == ltr.innerText) {
            letters[i].style.textDecoration = "underline";
        } else {
            letters[i].style.textDecoration = "none";
        }
    }
    document.getElementById("servicelist").innerHTML = "";
    for (let index = 0; index < servicelist.length; index++) {
        if (servicelist[index].startsWith(ltr.innerText)){
            document.getElementById("servicelist").innerHTML += `<button class="select-panel-btn" onclick="serviceBtn(this)">${servicelist[index]}</button>`
        }
    }
    if (document.getElementsByClassName('select-panel-btn').length < 12){
        for (let index = 0; index < 12-document.getElementsByClassName('select-panel-btn').length; index++) {
            document.getElementById("servicelist").innerHTML += `<div style="height: 50px; width: 90%; margin: 4%;"></div>`
            
        }
    }

}

function showMindMap(){
    document.getElementById('popup-mindmap').style.display = "block";
}
function hideMindMap(){
    document.getElementById('popup-mindmap').style.display = "none";
}

function showContact(){
    document.getElementById('popup-contact').style.display = "block";
}
function hideContact(){
    document.getElementById('popup-contact').style.display = "none";
}

function showAdditRes(){
    document.getElementById('popup-additres').style.display = "block";
}
function hideAdditRes(){
    document.getElementById('popup-additres').style.display = "none";
}


// MOBILE FUNCTIONS


function filterBtn(ltr) {
    var services = document.getElementsByClassName("mobile-panel-btn");
    var letters = document.getElementsByClassName("mobile-filter-btn");
    for (let i=0;i<letters.length; i++){
        if (letters[i].innerText == ltr.innerText) {
            letters[i].style.textDecoration = "underline";
        } else {
            letters[i].style.textDecoration = "none";
        }
    }
    for (let i=0;i<services.length; i++){
        // console.log(services[i].innerText, services[i].innerText[0] != ltr.innerText);
        if (services[i].innerText[0] != ltr.innerText){
            services[i].style.display = "none";
        } else {
            services[i].style.display = "block";
        }
    }
}

function clearBtn() {
    var services = document.getElementsByClassName("mobile-panel-btn");
    var letters = document.getElementsByClassName("filter-btn");
    for (let i=0;i<letters.length; i++){
        letters[i].style.textDecoration = "none";
    }
    for (let i=0;i<services.length; i++){
        services[i].style.display = "block";
    }
}

function serviceBtn(btn) {
    sessionStorage.setItem('branch',btn.innerText)
    pageState = 1;
    location.href = "form.html";
}