function toggleFAQBox(item) {
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