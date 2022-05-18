class GuiButton1 {
    constructor(x, y, w, h, colour, url, partner, deleteAction) {
        this.name = "GuiButton1";
        this.x = x;
        this.y = y+50;
        this.w = w;
        this.h = h;
        this.colour = colour;
        this.opacity = 0;
        this.vel = 10;
        this.state = 0; //0 - Instantiated ; 1 - Stable; 2 - To be deleted
        this.url = url;
        this.partner = partner;
        this.anim = {
            frame: 0,
            animlength: 70,
            startx: this.x,
            starty: this.y,
            destx: x,
            desty: y,
        }
        this.click = false;
        this.deleteAction = deleteAction;
    }

    draw = () => {
        // console.log(this.opacity + " " + this.state);
        switch(this.state) {
            case 0:
                if (this.anim.frame > this.anim.animlength){
                    this.state = 1;
                }
                c.beginPath();
                this.opacity = Math.pow(this.anim.frame/this.anim.animlength, 2).toFixed(2)
                c.strokeStyle = `rgba(${this.colour},${this.opacity})`;
                c.rect(this.x, this.y, this.w, this.h);
                c.lineWidth = 2;
                c.stroke();
                this.y = Math.pow((this.anim.frame/this.anim.animlength),0.1)*(this.anim.desty-this.anim.starty)+this.anim.starty;
                this.anim.frame++;
                break;
            case 1:
                this.anim.frame = 0;
                c.beginPath();
                c.strokeStyle = `rgba(${this.colour},1)`;
                c.rect(this.x, this.y, this.w, this.h);
                c.lineWidth = 2;
                c.stroke();
                this.vel = 0;
                this.opacity = 1;
                break;
            case 2:
                // console.log(this.opacity);
                if (this.opacity <= 0.2){
                    if (this.click){
                        try {
                            location.href = this.url;
                        } catch {}
                        pageState = 1;
                    } else {
                        try {
                            this.deleteAction();
                        } catch {
                        }
                    }
                    this.opacity = Math.pow((50-this.anim.frame)/this.anim.animlength, 2).toFixed(2);
                    this.anim.frame++;
                } else {
                    c.beginPath();
                    this.opacity = Math.pow((50-this.anim.frame)/this.anim.animlength, 2).toFixed(2)
                    c.strokeStyle = `rgba(${this.colour},${this.opacity}`;
                    c.rect(this.x, this.y, this.w, this.h);
                    c.lineWidth = 2;
                    c.stroke();
                    this.y = Math.pow((this.anim.frame/this.anim.animlength),0.4)*(this.anim.desty-this.anim.starty)+this.anim.starty;
                    this.anim.frame++;
                    break;
                }
        }
    }

    delete = () => {
        this.anim = {
            frame: 0,
            animlength: 50,
            startx: this.x,
            starty: this.y,
            destx: this.x,
            desty: this.y-20,
        }
        this.state = 2;
        try{
            this.partner.delete();
        } catch {}
        
    };

    hovering = () => {
        if (isHovering(mpos.x, mpos.y, this.x, this.y, this.w, this.h)) {
            return true;
        } else {
            return false;
        }
    }
}

class GuiButton2 {
    constructor(x, y, w, h, colour, url, partner) {
        this.name = "GuiButton2";
        this.x = x;
        this.y = y+50;
        this.w = w;
        this.h = h;
        this.colour = colour;
        this.opacity = 1;
        this.vel = 10;
        this.state = 0; //0 - Instantiated ; 1 - Stable; 2 - To be deleted
        this.url = url;
        this.partner = partner;
        this.anim = {
            frame: 0,
            animlength: 70,
            startx: this.x,
            starty: this.y,
            destx: x,
            desty: y,
        }
    }

    draw = () => {
        // console.log(this.opacity + " " + this.state);
        switch(this.state) {
            case 0:
                if (this.anim.frame > this.anim.animlength){
                    this.state = 1;
                }
                c.beginPath();
                this.opacity = Math.pow(this.anim.frame/this.anim.animlength, 2).toFixed(2);
                c.fillStyle = `rgba(${this.colour},${this.opacity})`;
                c.rect(this.x, this.y, this.w, this.h);
                c.lineWidth = 2;
                c.fill();
                this.y = Math.pow((this.anim.frame/this.anim.animlength),0.1)*(this.anim.desty-this.anim.starty)+this.anim.starty;
                // console.log(this.anim.frame + " " + this.y);
                this.opacity = Math.pow(this.anim.frame/this.anim.animlength, 2).toFixed(2);
                this.anim.frame++;
                break;
            case 1:
                // this.opacity = 1
                this.anim.frame = 0;
                c.beginPath();
                c.fillStyle = `rgba(${this.colour},${this.opacity})`;
                c.rect(this.x, this.y, this.w, this.h);
                c.lineWidth = 2;
                c.fill();
                break;
            case 2:
                if (this.opacity <= 0.2){
                    // console.log(this.url);
                    // location.href = this.url;
                    // pageState = 1;
                    this.opacity = Math.pow((50-this.anim.frame)/this.anim.animlength, 2).toFixed(2);
                    this.anim.frame++;
                } else {
                    c.beginPath();
                    this.opacity = Math.pow((50-this.anim.frame)/this.anim.animlength, 2).toFixed(2);
                    c.fillStyle = `rgba(${this.colour},${this.opacity}`;
                    c.rect(this.x, this.y, this.w, this.h);
                    c.lineWidth = 2;
                    c.fill();
                    this.y = Math.pow((this.anim.frame/this.anim.animlength),0.4)*(this.anim.desty-this.anim.starty)+this.anim.starty;
                    this.anim.frame++;
                    break;
                }
        }
    }

    delete = () => {
        this.anim = {
            frame: 0,
            animlength: 50,
            startx: this.x,
            starty: this.y,
            destx: this.x,
            desty: this.y-20,
        }
        this.state = 2;
        this.partner.delete();
    };

    hovering = () => {
        if (isHovering(mpos.x, mpos.y, this.x, this.y, this.w, this.h)) {
            return true;
        } else {
            return false;
        }
    }
}

class Buttontext {
    constructor(x,y,w,font,size,msg,colour, deleteAction){
        this.name = "Buttontext";
        this.x = x;
        this.y = y+50;
        this.w = w;
        this.font = font;
        this.size = size;
        this.msg = msg;
        this.colour = colour;
        this.opacity = 0;
        this.vel = 10;
        this.state = 0; //0 - Instantiated ; 1 - Stable; 2 - To be deleted
        this.anim = {
            frame: 0,
            animlength: 70,
            startx: this.x,
            starty: this.y,
            destx: x,
            desty: y,
        }
        this.deleteAction = deleteAction;
    }

    draw = () => {
        // console.log (this.state);
        switch (this.state) {
            case 0:
                if (this.anim.frame > this.anim.animlength){
                    this.state = 1
                }
                c.font = `${this.size}px ${this.font}`
                c.fillStyle = `rgb(${this.colour},${Math.pow(this.anim.frame/this.anim.animlength, 2).toFixed(2)})`;
                this.opacity = Math.pow(this.anim.frame/this.anim.animlength, 2).toFixed(2);
                c.textAlign = "center"
                c.fillText(this.msg, this.x, this.y, this.w);
                this.y = Math.pow((this.anim.frame/this.anim.animlength),0.1)*(this.anim.desty-this.anim.starty)+this.anim.starty;
                this.anim.frame++;
                break;
            case 1:
                this.opacity = 1;
                c.font = `${this.size}px ${this.font}`
                c.fillStyle = `rgb(${this.colour},1)`;
                c.textAlign = "center"
                c.fillText(this.msg, this.x, this.y, this.w)
                break;
            case 2:
                if (this.opacity <= 0.2) {
                    try {
                        this.deleteAction();
                    } catch (error) {
                        "no deleteAction"
                    }
                    this.opacity = Math.pow((50-this.anim.frame)/this.anim.animlength, 2).toFixed(2);
                    this.anim.frame++;
                } else {
                c.font = `${this.size}px ${this.font}`
                c.fillStyle = `rgb(${this.colour},${Math.pow((50-this.anim.frame)/this.anim.animlength, 2).toFixed(2)})`;
                this.opacity = Math.pow((50-this.anim.frame)/this.anim.animlength, 2).toFixed(2);
                c.textAlign = "center"
                c.fillText(this.msg, this.x, this.y, this.w);
                this.y = Math.pow(((this.anim.frame)/this.anim.animlength),0.4)*(this.anim.desty-this.anim.starty)+this.anim.starty;
                this.anim.frame++;
                }
                break;
        }
    }
    delete = () => {
        this.anim = {
            frame: 0,
            animlength: 50,
            startx: this.x,
            starty: this.y,
            destx: this.x,
            desty: this.y-20,
        }
        this.state = 2;
    };

}

class Tickbox {
    constructor(x, y, w, colour, key) {
        this.name = "Tickbox";
        this.x = x;
        this.y = y+50;
        this.w = w;
        this.colour = colour;
        this.key = key;
        this.state = 0; //0 - Instantiated ; 1 - Unticked; 2 - Ticked; 3 - To be deleted
        this.tickanim = {
            frame:0,
            length:50,
            px:this.x+5,
            py:(this.y-150)+(this.w-15),
            strokenum:0
        };
        this.disabled = false;
        this.anim = {
            frame: 0,
            animlength: 70,
            startx: this.x,
            starty: this.y,
            destx: x,
            desty: y,
        }

        localStorage.setItem(this.key, 'false');
    }

    draw = () => {
        // console.log(this.state);
        switch(this.state) {
            case 0:
                if (this.anim.frame > this.anim.animlength){
                    this.state = 1
                }
                c.beginPath();
                c.strokeStyle = `rgb(221,221,221,${Math.pow(this.anim.frame/this.anim.animlength, 1).toFixed(1)})`;
                c.rect(this.x, this.y, this.w, this.w);
                c.lineWidth = 2;
                c.stroke();
                this.y = Math.pow((this.anim.frame/this.anim.animlength),0.2)*(this.anim.desty-this.anim.starty)+this.anim.starty;
                this.anim.frame++;
                break;
            case 1:
                c.beginPath();
                c.strokeStyle = `rgba(221,221,221,1)`;
                c.rect(this.x, this.y, this.w, this.w);
                c.lineWidth = 2;
                c.stroke();
                this.vel = 0;
                break;
            case 2:
                c.beginPath();
                c.strokeStyle = `rgba(221,221,221,1)`;
                c.rect(this.x, this.y, this.w, this.w);
                c.lineWidth = 2;
                c.stroke();
                c.beginPath();
                c.moveTo(this.x+5,this.y+this.w-15);
                if (this.tickanim.frame < this.tickanim.length){
                    this.tickanim.frame++;
                }
                if (this.tickanim.strokenum == 0){ //stroke 1
                    this.tickanim.px += (this.tickanim.frame/this.tickanim.length)*(this.x+12-this.tickanim.px);
                    this.tickanim.py += (this.tickanim.frame/this.tickanim.length)*(this.y+this.w-7-this.tickanim.py);
                    c.lineTo(this.tickanim.px,this.tickanim.py);
                    if (this.tickanim.frame >= this.tickanim.length/2) {
                        this.tickanim.strokenum = 1;
                    }
                }
                if (this.tickanim.strokenum == 1){ //stroke 2
                    c.lineTo(this.x+12,this.y+this.w-7);
                    this.tickanim.px += ((this.x+this.w-5-this.tickanim.px)*(this.tickanim.frame/this.tickanim.length));
                    this.tickanim.py += ((this.y+5-this.tickanim.py)*(this.tickanim.frame/this.tickanim.length));
                    c.lineTo(this.tickanim.px,this.tickanim.py);
                }
                c.lineWidth = 3;
                c.stroke();
                break;
        }
        if (this.disabled) {
            //c.strokeStyle = `rgba(221,221,221,0.3)`;
        }
    }

    delete = () => {
        this.state = 3;
    };

    tickToggle = () =>{
        if (!this.disabled) {
            switch (this.state) {
                case 1:
                    this.tickanim = {
                        frame:0,
                        length:50,
                        px:this.x+5,
                        py:(this.y)+(this.w-15),
                        strokenum:0
                    };
                    localStorage.setItem(this.key, 'true');
                    this.state = 2;
                    break;
            
                case 2:
                    localStorage.setItem(this.key, 'false');
                    this.state = 1;
                    break;
            }
        }
    };
    
    disable = () => {
        this.disabled = true;
    }
    enable = () => {
        this.disabled = false;
    }

    hovering = () => {
        if (isHovering(mpos.x, mpos.y, this.x, this.y, this.w, this.w)) {
            return true;
        } else {
            return false;
        }
    }
}

class Titletext {
    constructor(x,y,w,font,size,msg){
        this.name = "Titletext";
        this.x = x;
        this.y = y;
        this.w = w;
        this.font = font;
        this.size = size;
        this.msg = msg;
        this.opacity = 0;
        this.state = 0; //0 - Instantiated ; 1 - Stable; 2 - To be deleted
        this.anim = {
            frame: 0,
            animlength: 70,
            startx: this.x,
            starty: this.y,
            destx: x,
            desty: y,
        }
    }

    draw = () => {
        switch (this.state) {
            case 0:
                if (this.anim.frame > this.anim.animlength){
                    this.state = 1
                }
                c.font = `bold ${this.size}px ${this.font}`
                this.opacity = Math.pow(this.anim.frame/this.anim.animlength, 2).toFixed(2)
                c.fillStyle = `rgb(221,221,221,${this.opacity})`;
                c.textAlign = "center";
                c.fillText(this.msg, this.x, this.y, this.w);
                this.anim.frame++;
                break;
        
            case 1:
                c.font = `bold ${this.size}px ${this.font}`
                c.fillStyle = `rgb(221,221,221,1)`;
                c.textAlign = "center";
                c.fillText(this.msg, this.x, this.y, this.w);
                break;

            case 2:
                // console.log(this.anim.frame);
                c.font = `bold ${this.size}px ${this.font}`
                this.opacity = Math.pow((50-this.anim.frame)/this.anim.animlength, 2).toFixed(2)
                c.fillStyle = `rgb(221,221,221,${this.opacity})`;
                c.textAlign = "center";
                c.fillText(this.msg, this.x, this.y, this.w);
                this.anim.frame++;
                break;
        }
    }
    delete = () => {
        this.anim = {
            frame: 0,
            animlength: 50,
            startx: this.x,
            starty: this.y,
            destx: this.x,
            desty: this.y-20,
        }
        this.state = 2;
    }

}

class Backline {
    constructor(x1, x2, y1, y2, dx1, dx2, dy1, dy2, colour) {
        this.name = "Backline";
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.dx1 = dx1;
        this.dx2 = dx2;
        this.dy1 = dy1;
        this.dy2 = dy2;
        this.colour = colour;
        this.fresh = true;
    }

    draw = () => {
        c.beginPath();
        c.moveTo(this.x1, this.y1);
        c.lineTo(this.x2, this.y2);
        c.lineWidth = 1;
        c.strokeStyle = this.colour;
        c.stroke();
    };

    update = () => {
        if (this.x1 > innerWidth || this.x1 < 0) {
            this.dx1 = -this.dx1;
        }
        if (this.x2 > innerWidth || this.x2 < 0) {
            this.dx2 = -this.dx2;
        }
        if (this.y1 > innerHeight || this.y1 < 0) {
        }
        if (this.y2 > innerHeight || this.y2 < 0) {
            this.dy2 = -this.dy2;
        }

        this.x1 += this.dx1;
        this.x2 += this.dx2;
        this.y1 += this.dy1;
        this.y2 += this.dy2;
    };
}

class SubtitleText {
    constructor(x,y,w,font,size,msg){
        this.name = "SubtitleText";
        this.x = x;
        this.y = y;
        this.w = w;
        this.font = font;
        this.size = size;
        this.msg = msg;
        this.opacity = 0;
        this.state = 0; //0 - Instantiated ; 1 - Stable; 2 - To be deleted
        this.anim = {
            frame: 0,
            animlength: 70,
            startx: this.x,
            starty: this.y,
            destx: x,
            desty: y,
        }
    }

    draw = () => {
        switch (this.state) {
            case 0:
                if (this.anim.frame > this.anim.animlength){
                    this.state = 1
                }
                c.font = `bold ${this.size}px ${this.font}`
                this.opacity = Math.pow(this.anim.frame/this.anim.animlength, 2).toFixed(2)
                c.fillStyle = `rgb(221,221,221,${this.opacity})`;
                c.textAlign = "center";
                c.fillText(this.msg, this.x, this.y, this.w);
                this.anim.frame++;
                break;
        
            case 1:
                c.font = `bold ${this.size}px ${this.font}`
                c.fillStyle = `rgb(221,221,221,1)`;
                c.textAlign = "center";
                c.fillText(this.msg, this.x, this.y, this.w);
                break;

            case 2:
                c.font = `bold ${this.size}px ${this.font}`
                this.opacity = Math.pow((50-this.anim.frame)/this.anim.animlength, 2).toFixed(2);
                c.fillStyle = `rgb(221,221,221,${this.opacity})`;
                c.textAlign = "center";
                c.fillText(this.msg, this.x, this.y, this.w);
                this.anim.frame++;
                break;
        }
    }
    delete = () => {
        this.anim = {
            frame: 0,
            animlength: 50,
            startx: this.x,
            starty: this.y,
            destx: this.x,
            desty: this.y-20,
        }
        this.state = 2;
    }

}

class Ntext {
    constructor(x,y,w,font,size,msg,align){
        this.name = "Titletext";
        this.x = x;
        this.y = y;
        this.w = w;
        this.font = font;
        this.size = size;
        this.msg = msg;
        this.opacity = 0;
        this.align = align;
        this.state = 0; //0 - Instantiated ; 1 - Stable; 2 - To be deleted
        this.anim = {
            frame: 0,
            animlength: 70,
            startx: this.x,
            starty: this.y,
            destx: x,
            desty: y,
        }
    }

    draw = () => {
        // console.log(this.anim.frame);
        switch (this.state) {
            case 0:
                if (this.anim.frame == this.anim.animlength){
                    this.state = 1;
                } else {this.anim.frame++;}
                    this.opacity = Math.pow(this.anim.frame/this.anim.animlength, 2).toFixed(2);
            case 1:
                c.font = `${this.size}px ${this.font}`;
                c.fillStyle = `rgb(221,221,221,${this.opacity})`;
                c.textAlign = this.align;
                c.fillText(this.msg, this.x, this.y, this.w);
                break;
            case 2:
                c.font = `${this.size}px ${this.font}`
                this.opacity = Math.pow((50-this.anim.frame)/this.anim.animlength, 2)
                c.fillStyle = `rgb(221,221,221,${this.opacity})`;
                c.textAlign = this.align;
                c.fillText(this.msg, this.x, this.y, this.w);
                this.anim.frame++;
                break;
        }
    }
    delete = () => {
        this.anim = {
            frame: 0,
            animlength: 50,
            startx: this.x,
            starty: this.y,
            destx: this.x,
            desty: this.y-20,
        }
        this.state = 2;
    }

}

class Rightbutton {
    constructor(x,y,w,url){
        this.name = "Rightbutton";
        this.x = x;
        this.y = y;
        this.w = w;
        this.state = 0;
        this.url = url;
        this.click = false;
    }
    draw = () => {
        switch (this.state) {
            case 0:
            c.beginPath();
            c.fillStyle='rgba(221,221,221,0.7)';
            c.moveTo(this.x, this.y);
            c.lineTo(this.x+30, this.y+15);
            c.lineTo(this.x, this.y+30);
            c.lineTo(this.x, this.y);
            // c.fillStyle = 'rgb(221,221,221,1)';
            c.fill();
            break;
        case 1:
            if (this.click) {
                location.href = this.url;
                pageState = 1;
            }
            break;
        }
    }
    delete = () => {
        this.state = 1;
    }

    delete = () => {}
    hovering = () =>{
        if (isHovering(mpos.x, mpos.y, this.x, this.y, this.w, this.w)) {
            return true;
        } else {
            return false;
        }
    }
}

class Leftbutton {
    constructor(x,y,w,url){
        this.name = "Leftbutton";
        this.x = x;
        this.y = y;
        this.w = w;
        this.state = 0;
        this.url = url;
        this.click = false;
    }
    draw = () => {
        switch (this.state) {
            case 0:
                c.beginPath();
                c.fillStyle='rgba(221,221,221,0.7)';
                c.moveTo(this.x, this.y);
                c.lineTo(this.x-this.w, this.y+(this.w/2));
                c.lineTo(this.x, this.y+this.w);
                c.lineTo(this.x, this.y);
                // c.fillStyle = 'rgb(221,221,221,1)';
                c.fill();
                break;
            case 1:
                if (this.click) {
                    location.href = this.url;
                    pageState = 1;
                }
                break;
        }
    }
    delete = () => {
        this.state = 1;
    }
    hovering = () =>{
        if (isHovering(mpos.x, mpos.y, this.x-this.w, this.y, this.w, this.w)) {
            return true;
        } else {
            return false;
        }
    }
}

class EmptyObj {
    draw = () => {}
    delete = () => {}
}

class PageIndicator {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.selected = false;
    }

    draw = () => {
        c.beginPath();
        c.strokeStyle='rgba(221,221,221,0.7)';
        c.lineWidth = '3'
        c.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        c.stroke();

        if (this.selected == true){
            c.beginPath();
            c.fillStyle='rgba(221,221,221,0.7)';
            c.lineWidth = '3'
            c.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            c.fill();
        }
    }

    toggle = () => {
        this.selected = !this.selected;
    }
    setOn = () => {
        this.selected = true;
    }
    setOff = () => {
        this.selected = false;
    }
}

class PageFilter {
    constructor(x,y){
        this.x = x,
        this.y = y,
        this.selectedletter = undefined;
        this.selectedletter_index = undefined;
        this.alphabList = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    }

    draw = () => {
        for (let l=0;l<26;l++){
            c.beginPath();
            c.font = 'bold 16px Helvetica';
            c.fillStyle = "rgba(211,211,211,1)"
            c.fillText(this.alphabList[l],this.x + (l*25),this.y);
        }
        c.beginPath();
        c.strokeStyle = 'rgba(221,221,221,1)';
        c.rect(this.x + 650, this.y-16, 50, 20);
        c.fill()
        c.beginPath();
        c.font = 'bolder 11px Helvetica';
        c.fillStyle = "rgba(53,144,133,1)"
        c.fillText("CLEAR",this.x + 650 + 25, this.y-2);

        if (this.selectedletter_index != undefined) {
            c.beginPath();
            c.strokeStyle = 'rgba(221,221,221,1)';
            c.moveTo(this.x + (this.selectedletter_index*25)-8, this.y+5);
            c.lineTo(this.x + (this.selectedletter_index*25)+8, this.y+5);
            c.stroke()
        }
        
    }
    delete = () => {
    }
    hovering = () => {
        let letterclicked = false;
        for (let l=0;l<26;l++){
            if (isHovering(mpos.x,mpos.y, this.x + (l*25)-8, this.y-16, 16, 25)){
                this.selectedletter = this.alphabList[l];
                this.selectedletter_index = l;
                letterclicked = true;
                break;
            } else {
                letterclicked = false;
            }
        }
        if (letterclicked) {return true;} else {
            if (isHovering(mpos.x,mpos.y, this.x + 650, this.y-16, 50, 20)) {
                this.selectedletter = "CLEAR"
                this.selectedletter_index = undefined;
                return true;
            } else {
                return false;
            }
        }
    }
    getLetter = () => {return this.selectedletter}
}

class LeftPanel {
    constructor(){

    }
    draw = () => {
        c.beginPath();
        c.fillStyle = "rgba(255,255,255,1)";
        c.fillRect(0,0,canvas.width/5, canvas.height);
    }
}

class Qpanel {
    constructor(){}
    draw = () => {
        c.beginPath();
        c.fillStyle = "rgba(255,255,255,1)";
        c.roundRect(
            (canvas.width/5)+10,
            3*canvas.height/8-10,
            canvas.width-(canvas.width/5)-20,
            5*canvas.height/8, 
        10).fill()
    }
}