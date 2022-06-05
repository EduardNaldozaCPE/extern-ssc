class Page{
    initpage = () => {
        if ((canvas.width <= canvas.height+(canvas.width/7))) {
            document.getElementById('selectpanel').style.display = 'none';
            mobileUI()
        }

    }
}