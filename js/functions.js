//  PURPOSE
// 
//  - All functions that are called in other JS files are stored here. Functions included are:
//      1. sessionStorage value setting from conditions in form.html 
//      2. Page redirects
//      3. index.html navigation scripts
//      4. Misc Functions



//  1. sessionStorage value setting from conditions in form.html 

// Sets sessionStorage 'selfRef' key to the value of checkbox with id "selfRefbox".
function selfRef() {
    let check1 = document.getElementById('selfRefbox');
    sessionStorage.setItem('selfRef', check1.checked);
    updateClassif();
}

// Sets sessionStorage 'internalRef' key to the value of checkbox with id "internalRefBox".
function internalRef() {
    let check1 = document.getElementById('internalRefBox');
    sessionStorage.setItem('internalRef', check1.checked);
    updateClassif();
}

// Sets sessionStorage 'nicuLvl' key to the value of selected radiobutton's value attribute.
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

// Sets sessionStorage 'camhs' key to the value of selected radiobutton's value attribute.
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

// Sets sessionStorage 'agereq' key to the value of selected radiobutton's value attribute.
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

// Sets sessionStorage 'obsRadio' key to the value of selected radiobutton's value attribute.
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

// Sets sessionStorage 'up-down-graded' key to the value of checkbox with id "updowngradedBox".
function updowngradedReq() {
    let check1 = document.getElementById('updowngradedBox');
    sessionStorage.setItem('up-down-graded', check1.checked);
    updateClassif();
}

// Sets sessionStorage 'agegroup' key to the value of selected radiobutton's value attribute.
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

// In gynecology branch, show additional information depending on selected age group.
function showGyneInfo(i) {
    if (canvas.width <= canvas.height+(canvas.width/7)) {
        document.getElementsByClassName('forms-additinfo')[0].style.top = "200px";
    } else {
        document.getElementsByClassName('forms-additinfo')[0].style.top = "";
    }
    switch (i.value) {
        case '0':
            document.getElementsByClassName('forms-additinfo')[0].style.display = 'block';
            document.getElementById('gyneinfo-1').innerHTML = `
            <li>Referral to Gynecology Pediatrics (4-14)</li>
            <li>Follow-up to Gynecology Pediatrics (4-14)</li>
            `;
            break;
        case '1':
            document.getElementsByClassName('forms-additinfo')[0].style.display = 'block';
            document.getElementById('gyneinfo-1').innerHTML = `
            <li>Referral to Gynecology Adolescence (14-18)</li>
            <li>Follow-up to Gynecology Adolescence (14-18)</li>
            `;
            break;
        case '2':
            document.getElementsByClassName('forms-additinfo')[0].style.display = 'block';
            document.getElementById('gyneinfo-1').innerHTML = `
            <li>Referral to Gynecology Adult (18 and above)</li>
            <li>Follow-up to Gynecology Adult (18 and above)</li>
            `;
            break;
        case '3':
            document.getElementsByClassName('forms-additinfo')[0].style.display = 'none';
            break;
        default:
            break;
    }
    ageGroup()
}

// Fade in animation on service list in index.html  
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





//  2. Page redirects

// Redirect to Index.html
function goHome() {
    location.href = 'index.html';
}

// Redirect to previous page
function goBack() {
    if (sessionStorage.getItem('lastpage') != null) {
        location.href = sessionStorage.getItem('lastpage');
    } else {
        location.href = 'index.html';
    }
}

// Sets current page as 'lastpage' before redirecting to additionalresources.html
function goAdditRes(page) {
    sessionStorage.setItem('lastpage',page);
    location.href = 'additionalresources.html';
}

// Sets current page as 'lastpage' before redirecting to faq.html
function goFAQ(page) {
    sessionStorage.setItem('lastpage',page);
    location.href = 'faq.html';
}




//  3. index.html navigation scripts

    //  In index.html, when user presses the Left or Right button, the following functions are called:
    // 
    //      rightbutton()/leftbutton()  ->  updatePageList()  ->  updatePageIcons()
    // 
    //  rightbutton() / leftbutton(): 
    //      1. if opaque(not disabled), increments/decrements page variable (declared in canvas.js).
    //      2. clears the servicelist
    //  
    //  updatePageList():
    //      - creates new buttons in the servicelist with service names depending on the page variable.
    //  
    //  updatePageIcons():
    //      1. Replaces all icons with inactive pageicons
    //      2. Replaces one icon to active depending on the page variable.

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

function updatePageList() {
    document.getElementById("servicelist").style.transition = '0s';
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



// In index.html, when a pageicon is selected, page variable is updated to selected page and runs updatePageList().
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

//  In index.html, when user clicks on a letter to filter the services:
//      1. Service list fade animation starts
//      2. The left and right buttons are disabled (0.5 opacity)
//      3. Underlines chosen letter in filter
//      4. Clears the Service List, then adds buttons to Service list with selected letter as the first letter.
//      5. Adds empty divs to the rest of the list with no buttons.
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


// Shows/Hides the extra buttons' popup when hovering over the icons.
function showMindMap(){
    document.getElementById('popup-mindmap').style.transform = 'translate(0px, 0px)';
    document.getElementById('popup-mindmap').style.opacity = 0.7;
}
function hideMindMap(){
    document.getElementById('popup-mindmap').style.transform = ''; 
    document.getElementById('popup-mindmap').style.opacity = 0
}
function showContact(){
    document.getElementById('popup-contact').style.transform = 'translate(0px, 0px)';
    document.getElementById('popup-contact').style.opacity = 0.7;
}
function hideContact(){
    document.getElementById('popup-contact').style.transform = ''; 
    document.getElementById('popup-contact').style.opacity = 0
}
function showAdditRes(){
    document.getElementById('popup-additres').style.transform = 'translate(0px, 0px)';
    document.getElementById('popup-additres').style.opacity = 0.7;
}
function hideAdditRes(){
    document.getElementById('popup-additres').style.transform = '';
    document.getElementById('popup-additres').style.opacity = 0;
}
function showFaq(){
    document.getElementById('popup-faq').style.transform = 'translate(0px, 0px)';
    document.getElementById('popup-faq').style.opacity = 0.7;
}
function hideFaq(){
    document.getElementById('popup-faq').style.transform = '';
    document.getElementById('popup-faq').style.opacity = 0;
}

//  MOBILE FUNCTIONS

//  In mobile UI of index.html, when letter is pressed:
//      1. Selected letter is underlined.
//      2. Hides all Services that do not start with selected letter. 
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
        if (services[i].innerText[0] != ltr.innerText){
            services[i].style.display = "none";
        } else {
            services[i].style.display = "block";
        }
    }
}

//  In mobile UI of index.html, when clear button is pressed:
//      1. Removes underlines in filter letters.
//      2. Shows all the Services in the service list.
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

//  In index.html, when a service is clicked:
//      1. Stores the selected branch's name to session storage.
//      2. Stores 'index.html' in 'lastpage' session storage key.
//      3. Redirects to form.html page.
function serviceBtn(btn) {
    sessionStorage.setItem('branch',btn.innerText)
     
    sessionStorage.setItem('lastpage','index.html');
    location.href = "form.html";
}




//  4. Misc Functions

// For background animation: returns -1 or 1 randomly
function posneg() {
    let n = Math.round(Math.random());
    if (n == 0) {
        return -1;
    } else {
        return 1;
    }
}

// Returns the parent directory; subfoldernum - number of directories to go up
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

// Saves scroll position of div in session storage
function rememberScroll(div) {
    sessionStorage.setItem("left-panel-scroll", div.scrollTop);
}

// For mobile UI: Shows "Scroll For More" indicator. Hides when user scrolls down.
function scrollForMore() {
    var qbody = document.getElementById("q-panel1");
    if (qbody.scrollTop == 0) {
        document.getElementById('scrollindic').style.display = 'block';
    } else {
        document.getElementById('scrollindic').style.display = 'none';
    }
}
