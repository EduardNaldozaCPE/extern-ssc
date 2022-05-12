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

//function getPath_last() {
//    return location.pathname.split("/")[location.pathname.split("/").length-1]
//}
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
//function getPath_secondlast() {
//    return location.pathname.split("/")[location.pathname.split("/").length-2]
//}

function writeLS() {
    localStorage.setItem('clientAge',undefined);
}


const parseCookie = str =>
  str
  .split(';')
  .map(v => v.split('='))
  .reduce((acc, v) => {
    acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
    return acc;
  }, {});
  
// cookie in browser: `pkg=math; equation=E%3Dmc%5E2`
console.log(parseCookie('boop=asd;aaarp=21'));
//console: { pkg: 'math', equation: 'E=mc^2' }
