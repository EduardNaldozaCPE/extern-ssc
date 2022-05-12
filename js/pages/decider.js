class Page{
    constructor(){
        this.list = [];
    }
    initpage = () => {
        pageState = 1;
        switch (localStorage.getItem('branch')) {

            case "CAMHS":
                if(localStorage.getItem('in-out-patient') == 'true'
                    && localStorage.getItem('ageReq') == 'true'){
                    location.href = 'preferred.html';
                } else {
                    location.href = 'sole.html';
                }
                break;
            case "Genetics":
                if(localStorage.getItem('selfRef') == 'true'){
                    location.href = 'preferred.html';
                } else {
                    if(localStorage.getItem('ageReq') == 'true'){
                        location.href = 'sole.html';
                    } else {
                        location.href = 'preferred.html';
                    }
                }
                break;
            case 'ENT':
                if(localStorage.getItem('selfRef') == 'true'){
                    location.href = 'preferred.html';
                } else {
                    if(localStorage.getItem('ageReq') == 'true'){
                        location.href = 'sole.html';
                    } else {
                        location.href = 'index.html';
                    }
                }
                break;
            case 'Plastic Surgery':
                if(localStorage.getItem('selfRef') == 'true'){
                    location.href = 'preferred.html';
                } else {
                    if(localStorage.getItem('ageReq') == 'true'){
                        location.href = 'sole.html';
                    } else {
                        location.href = 'index.html';
                    }
                }
                break;
            case 'Dermatology':
                if(localStorage.getItem('selfRef') == 'true'){
                    location.href = 'preferred.html';
                } else {
                    if(localStorage.getItem('ageReq') == 'true'){
                        location.href = 'preferred.html';
                    } else {
                        location.href = 'sole.html';
                    }
                }
                break;
            case 'Gynecology':
                console.log('poopy');
                switch (parseInt(localStorage.getItem('gyneAge'))) {
                    case 0:
                        location.href='sole.html';
                        break;
                    case 1:
                        location.href='preferred.html';
                        break;
                    case 2:
                        location.href='preferred.html';
                        break;
                    default:
                        break;
                }
            
            default:
                break;
        }
    }
    startInstanceList = () => {
        var titleheight = undefined;
        if (canvas.width > 700) {
            titleheight = canvas.width*0.23;
        } else {
            titleheight = canvas.width*0.25;
        }
        // TITLE
        this.list.push(new Titletext(
            (canvas.width/2),
            titleheight,
            (canvas.width*0.75),
            "Helvetica",
            (canvas.width*0.04),
            "Loading..."
        ));
        return this.list;
    }

    action = () => {
    }

}