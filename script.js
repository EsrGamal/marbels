img = document.querySelectorAll("img");
var i = 0,timer;
function startMarbel() {
    timer = setInterval(() => {
        if (i < img.length) {
            img[i].src = "marble3.jpg";

            if (i != 0) {
                img[i - 1].src = "marble1.jpg";
            }
            i++;
        }
        else {
            img[i - 1].src = "marble1.jpg";
            i = 0;
            img[i].src = "marble3.jpg";
            if (i != 0) {
                img[i - 1].src = "marble1.jpg";
            }
            i++;
        }

    }, 1000);
}

function out(e) {
    console.log(e.keyCode);
    if(e.keyCode== 13)
    {clearInterval(timer);}
    
}