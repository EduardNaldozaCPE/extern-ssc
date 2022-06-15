//  PURPOSE *faq.html page-specific js file*
// 
//  - Page class:
//      1. Runs mobileUI() if canvas width is smaller than canvas height.
//      2. Adds mobile "Back" button.
// 
//  - mobileUI:
//      - Override current styling and content to portrait / mobile-friendly UI 



// Opens/Closes the FAQ box when clicked
function toggleFAQBox(item) {
    if (item.getElementsByTagName('img')[0].style.transform == 'rotate(180deg)'){
        item.getElementsByTagName('img')[0].style.transform = '';
    } else {
        item.getElementsByTagName('img')[0].style.transform = 'rotate(180deg)';
    }

    let isdisplayed = (item.getElementsByClassName('faq-answer')[0].style.height == '0px');
    if (isdisplayed) {
        item.getElementsByClassName('faq-answer')[0].style.height = '250px';
    } else {
        item.getElementsByClassName('faq-answer')[0].style.height = '0px';
    }
}

function mobileUI() {
    let title = document.getElementById("title");
    title.style.fontSize = "1.1rem";
    title.style.left = "50%";
    title.style.top = "6%";
    title.style.transform = "translateX(-50%)";

    let logo = document.getElementById("logo-white");
    logo.style.left = "50%"
    logo.style.transform = "translateX(-50%)"
    logo.style.width = "18%";
    
    document.getElementById('faq-filter').style.flexDirection = 'column';

    var content = document.getElementById('additrespanel');
    content.style.display = 'none';
    document.getElementById('home-btn').remove();
    content.style += "-webkit-overflow-scrolling: auto";
    content.style.overflowY = "auto";
    content.style.flexDirection = "column";
    content.style.fontSize = 'font-size: 3.5vw';
    content.style.top = "20%";
    content.style.bottom = "5%";
    content.style.right = "6.5%";
    content.style.left = "6.5%";

    
    var content1 = document.getElementById('faq-content');
    content1.style.width = "95%";
}

class Page{
    initpage = () => {
        if (canvas.width <= canvas.height+(canvas.width/7)) {
            mobileUI()
            document.getElementById('content1').innerHTML += `
                <a id="mobile-backbtn" onclick="goBack()"><</a>
            `
        }

    }
}

// Highlights FAQ text depending on input of the search field.
function highlight(text,inputText) {
    // var inputText = document.getElementById("inputText");
    var innerHTML = inputText.innerHTML;
    var index = innerHTML.toLowerCase().indexOf(text.toLowerCase());
    if (index >= 0) { 
        innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
        inputText.innerHTML = innerHTML;
    }
}  

// Clears the currently highlighted FAQ text.
function clearhighlight() {
    let highlighteds = document.getElementsByClassName('highlight');
    for (let i = 0; i < highlighteds.length; i++) {
        const highlighted = highlighteds[i];
        let parent = highlighted.parentElement;
        let t = parent.innerText;
        highlighted.remove();
        parent.innerText = t;
    }
}  

//  When search button is clicked:
//      1. Search for input text in each FAQ box, run highlight function when one is found.
//      2. Search for input text in each list in FAQ box, run highlight function when one is found.
//      3. Hide FAQ boxes with no matching keyword. 
//      4. Show "Showing FAQs with" text and "X" button.
function faqFilter() {
    let s = document.getElementById('faq-filter-textID').value;
    if (!(s == "" || s == " ")){
        let qbox = document.getElementsByClassName('faq-box');
        let filterlist = [];
        clearhighlight();

        for (let i_question = 0; i_question < qbox.length; i_question++) {
            const box = qbox[i_question];
            box.style.display = '';
        }

        for (let i_question = 0; i_question < qbox.length; i_question++) {
            const box = qbox[i_question];

            if (box.getElementsByTagName('h4')[0].innerText.toLowerCase().includes(s)){
                highlight(s,box.getElementsByTagName('h4')[0]);
            }

            let qbox_answerlist = box.getElementsByClassName('faq-answer-li')
            for (let i_answer = 0; i_answer < qbox_answerlist.length; i_answer++) {
                const ans = qbox_answerlist[i_answer];
                if (ans.innerText.toLowerCase().includes(s.toLowerCase())) {
                    box.style.display = '';
                    highlight(s,ans);
                    break;
                } else {
                    box.style.display = 'none';
                }
                
            }
        }
        document.getElementById('faq-filter-clear').style.display = 'block';
        document.getElementById('faq-filter-indic').style.display = 'block';
        document.getElementById('faq-filter-indic').innerText = `Showing FAQs with: "${s}"`;
    }
}

//  When the "X" button is clicked after searching
//      1. Hide "Showing FAQs with" text and "X" button.
//      1. Clears the currently highlighted FAQ text.
//      1. Shows all FAQ boxes; clears 'display:none' style.
function faqClear() {
    let qbox = document.getElementsByClassName('faq-box');
    document.getElementById('faq-filter-textID').value == '';
    document.getElementById('faq-filter-indic').style.display = 'none';
    document.getElementById('faq-filter-clear').style.display = 'none';
    clearhighlight()
    for (let i_question = 0; i_question < qbox.length; i_question++) {
        const box = qbox[i_question];
        box.style.display = '';
    }
}