class Page{
    initpage = () => {
        if (canvas.width <= canvas.height+(canvas.width/7)) {
            mobileUI()
            document.getElementById('content1').innerHTML += `
                <a id="mobile-backbtn" onclick="goHome()"><</a>
            `
        }

    }
}