var canvas, ctx, xsend, ysend;
var canvasflag = false;
function init() {
    console.log("init canvas");
    canvas = document.getElementById('responsive-canvas');
    ctx = canvas.getContext("2d");

    let heightRatio = 1;
    canvas.height = canvas.width * heightRatio;
    let img = new Image();
    img.src = "./img/graph.png";
    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    canvas.addEventListener("click", function (e) {
        mouse(e)
    }, false);
}

function draw(posx, posy) {
    let context = canvas.getContext("2d");
    context.fillStyle = "#000000";
    context.beginPath();
    context.arc(posx, posy, 2, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
}

function coord(){
    canvas = document.getElementById('responsive-canvas');
    let x = document.getElementById("x-input").value;
    let y = document.getElementById("y-input").value;
    let r = $("input[name='r-input']:checked").val();
    x=parseFloat(x,10);
    y=parseInt(y,10);
    r=parseInt(r,10);
    let offsetx=(canvas.width*166)/350;
    let offsety=(canvas.height*185)/350;
    let posx=offsetx+x/r*146/350*canvas.width;
    let posy=offsety-y/r*146/350*canvas.width;
    console.log(posx, posy);
    draw(posx,posy);
}

function mouse(e){
    let r = $("input[name='r-input']:checked").val();
    if (typeof r == 'undefined') {
        document.getElementById("r-invite").style.color = "#AC2205";
        document.getElementById("r-invite").style.fontWeight = "300";
    }
    else{
        document.getElementById("r-invite").style.color = "white";
        document.getElementById("r-invite").style.fontWeight = "300";
        canvas = document.getElementById('responsive-canvas');
        let posx=getMouesPosition(e).x;
        let posy=getMouesPosition(e).y;
        posx=parseFloat(posx);
        posy=parseFloat(posy);
        r=parseInt(r,10);
        let offsetx=(canvas.width*166)/350;
        let offsety=(canvas.height*185)/350;
        xsend=(posx-offsetx)*r*350/(146*canvas.width);
        ysend=-(posy-offsety)*r*350/(146*canvas.width);
        console.log(xsend, ysend);
        canvasflag = true;
        draw(posx,posy);
    }
}

function getMouesPosition(e) {
    let mouseX = e.offsetX * canvas.width / canvas.clientWidth | 0;
    let mouseY = e.offsetY * canvas.height / canvas.clientHeight | 0;
    return {x: mouseX, y: mouseY};
}