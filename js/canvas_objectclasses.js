class GuiButton1 {
    constructor(x, y, w, h, colour, url, partner) {
        this.name = "GuiButton1";
        this.x = x;
        this.y = y+150;
        this.w = w;
        this.h = h;
        this.colour = colour;
        this.opacity = 0;
        this.vel = 10;
        this.state = 0; //0 - Instantiated ; 1 - Stable; 2 - To be deleted
        this.url = url;
        this.partner = partner;
    }

    draw = () => {
        // console.log(this.opacity + " " + this.state);
        switch(this.state) {
            case 0:
                c.beginPath();
                c.strokeStyle = `rgba(221,221,221,${Math.pow(this.opacity,2)/10000}`;
                c.rect(this.x, this.y, this.w, this.h);
                c.lineWidth = 2;
                c.stroke();
                if (this.opacity < 100) {
                    this.opacity += 1;
                    this.y -= this.vel;
                    this.vel -= this.vel/15;
                } else {
                    this.state = 1;
                }
                break;
            case 1:
                c.beginPath();
                c.strokeStyle = `rgba(221,221,221,1)`;
                c.rect(this.x, this.y, this.w, this.h);
                c.lineWidth = 2;
                c.stroke();
                this.vel = 0;
                this.opacity = 100;
                break;
            case 2:
                if (this.opacity <= 0) {
                    console.log(this.url);
                    location.href = this.url;
                    pageState = 1;
                } else {
                    c.beginPath();
                    c.strokeStyle = `rgba(221,221,221,${Math.pow(this.opacity,2)/10000}`;
                    c.rect(this.x, this.y, this.w, this.h);
                    c.lineWidth = 2;
                    c.stroke();
                    this.opacity -= 2;
                    this.y += -this.vel;
                    // console.log(this.y + " " + this.vel);
                    this.vel += 0.1;
                    break;
                }
        }
    }

    delete = () => {
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
    constructor(x,y,w,font,size,msg){
        this.name = "Buttontext";
        this.x = x;
        this.y = y+150;
        this.w = w;
        this.font = font;
        this.size = size;
        this.msg = msg;
        this.opacity = 0;
        this.vel = 10;
        this.state = 0; //0 - Instantiated ; 1 - Stable; 2 - To be deleted
    }

    draw = () => {
        // console.log(this.state);
        switch (this.state) {
            case 0:
                c.font = `${this.size}px ${this.font}`
                c.fillStyle = `rgb(221,221,221,${Math.pow(this.opacity,2)/10000})`;
                c.textAlign = "center"
                c.fillText(this.msg, this.x, this.y, this.w)
                if (this.opacity < 100) {
                    this.opacity += 1;
                    this.y -= this.vel;
                    this.vel -= this.vel/15;
                } else {
                    this.state = 1;
                }
                break;
            case 1:
                c.font = `${this.size}px ${this.font}`
                c.fillStyle = `rgb(221,221,221,1)`;
                c.textAlign = "center"
                c.fillText(this.msg, this.x, this.y, this.w)
                break;
            case 2:
                if (this.opacity > 0) {
                    c.font = `${this.size}px ${this.font}`
                    c.fillStyle = `rgb(221,221,221,${Math.pow(this.opacity,2)/10000})`;
                    c.textAlign = "center"
                    c.fillText(this.msg, this.x, this.y, this.w)
                    this.opacity -= 2;
                    this.y += -this.vel;
                    // console.log(this.y + " " + this.vel);
                    this.vel += 0.1;
                }
                break;
        }
    }
    delete = () => {
        this.state = 2;
    };

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
    }

    draw = () => {
        switch (this.state) {
            case 0:
                c.font = `bold ${this.size}px ${this.font}`
                c.fillStyle = `rgb(221,221,221,${Math.pow(this.opacity,2)/10000})`;
                c.textAlign = "center";
                c.fillText(this.msg, this.x, this.y, this.w);
                if (this.opacity < 100) {
                    this.opacity += 1;
                }
                break;
        
            case 1:
                c.font = `bold ${this.size}px ${this.font}`
                c.fillStyle = `rgb(221,221,221,1)`;
                c.textAlign = "center";
                c.fillText(this.msg, this.x, this.y, this.w);
                break;

            case 2:
                if (this.opacity > 0) {
                    c.font = `bold ${this.size}px ${this.font}`
                    c.fillStyle = `rgb(221,221,221,${Math.pow(this.opacity,2)/10000})`;
                    c.textAlign = "center";
                    c.fillText(this.msg, this.x, this.y, this.w);
                    // console.log(this.opacity);
                    this.opacity -= 1;
                }
                break;
        }
    }
    delete = () => {
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
    }

    draw = () => {
        switch (this.state) {
            case 0:
                c.font = `bold ${this.size}px ${this.font}`
                c.fillStyle = `rgb(221,221,221,${Math.pow(this.opacity,2)/10000})`;
                c.textAlign = "center";
                c.fillText(this.msg, this.x, this.y, this.w);
                if (this.opacity < 100) {
                    this.opacity += 1;
                }
                break;
        
            case 1:
                c.font = `bold ${this.size}px ${this.font}`
                c.fillStyle = `rgb(221,221,221,1)`;
                c.textAlign = "center";
                c.fillText(this.msg, this.x, this.y, this.w);
                break;

            case 2:
                c.font = `bold ${this.size}px ${this.font}`
                c.fillStyle = `rgb(221,221,221,${Math.pow(this.opacity,2)/10000})`;
                c.textAlign = "center";
                c.fillText(this.msg, this.x, this.y, this.w);
                // console.log(this.opacity);
                this.opacity -= 1;
                break;
        }
    }
    delete = () => {
        this.state = 2;
    }

}

class Rightbutton {
    constructor(x,y){
        this.name = "Rightbutton";
        this.x = x;
        this.y = y;
    }
    draw = () => {
        c.beginPath();
        c.moveTo(this.x, this.y);
        c.lineTo(this.x+30, this.y+15);
        c.lineTo(this.x, this.y+30);
        c.lineTo(this.x, this.y);
        c.fill();
    }

    delete = () => {}
}

class Leftbutton {
    constructor(x,y){
        this.name = "Leftbutton";
        this.x = x;
        this.y = y;
    }
    draw = () => {
        c.beginPath();
        c.moveTo(this.x, this.y);
        c.lineTo(this.x-30, this.y+15);
        c.lineTo(this.x, this.y+30);
        c.lineTo(this.x, this.y);
        c.fill();
    }
    delete = () => {}
}