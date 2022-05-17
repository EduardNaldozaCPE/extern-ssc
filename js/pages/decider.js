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
                    if (localStorage.getItem('internalRef') == 'true'){
                        location.href = 'physmpages.html';
                    } else {
                        location.href = 'preferred.html';
                    }
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
            break;
            case 'NICU':
                switch (localStorage.getItem('niculvl')) {
                    case "0":
                        switch (localStorage.getItem('up-down-graded')) {
                            case "true":
                                location.href = 'sole.html';
                                break;
                            case "false":
                                location.href = 'preferred.html';
                                console.log('nicu');
                                break;
                        }
                        break;
                
                    case "1":
                        switch (localStorage.getItem('up-down-graded')) {
                            case "true":
                                location.href = 'sole.html';
                                break;
                            case "false":
                                location.href = 'sole.html';
                                break;
                        }
                        break;
                }
                break;
            case 'Emergency Services':
                let esi = undefined;
                for (let esiLS = 1; esiLS<=5; esiLS++){
                    if (localStorage.getItem(`esilvl-${esiLS}`) == "true") {esi = esiLS}
                }
                console.log(esi);
                switch (localStorage.getItem('emergType')) {
                    case '0':
                        location.href = 'sole.html';
                        break;
                    case '1':
                        if (esi > 3){ location.href = 'preferred.html'} else{location.href = 'sole.html'}
                        break;
                }
            break;
            case 'Obstetrics':
                console.log(localStorage.getItem('internalRef'));
                    if (localStorage.getItem('internalRef') == 'true'){
                        location.href = 'physmpages.html';
                    } else {
                        location.href = 'preferred.html';
                    }
                break;
            
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