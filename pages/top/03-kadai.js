var bNext = document.getElementById("sc-to-right");
var bPrev = document.getElementById("sc-to-left");
var headerImgObj = document.getElementById("top");
var imageNumber = 0 , scrollTimer, scrollSecond = 5, clockPerMilliSec = 5;
var headerImages = ['img/image01.jpg','img/image02.jpg','img/image03.jpg','img/pinky.gif','img/image04.jpg','img/garrmagedon.png','https://picsum.photos/1080','img/tornado.gif'];
scrollTimer = scrollSecond*1000;
var ImagesDiv = document.createElement('div');
ImagesDiv.style.zIndex = -1;
for(var i=0,len=headerImages.length;i<len;i++){
    var img = document.createElement('img');
    img.setAttribute('src',headerImages[i]);
    img.style.transition = '0.3s';
    img.style.opacity = '0';
    img.style.height='100%';
    img.style.width = '100%';
    img.style.objectFit = 'cover';
    img.style.position = 'absolute';
    ImagesDiv.appendChild(img);
}
headerImgObj.appendChild(ImagesDiv);
function imageSet(n){
    nx=(imageNumber+1)%headerImages.length;
    pr=(imageNumber-1<0?headerImages.length-1:imageNumber-1);
    ImagesDiv.children.item(n).style.transform = 'translateX(0)';
    ImagesDiv.children.item(n).style.opacity= '1';
    ImagesDiv.children.item(nx).style.transform = 'translateX(100vw)';
    ImagesDiv.children.item(nx).style.opacity= '0';
    ImagesDiv.children.item(pr).style.transform = 'translateX(-100vw)';
    ImagesDiv.children.item(pr).style.opacity= '0';
}
imageSet(imageNumber);
headerImgObj.style.background = 'none';
ImagesDiv.style.position = 'absolute';
ImagesDiv.style.backgroundColor = 'gray';
ImagesDiv.style.height = '100%';
ImagesDiv.style.width = '100%';



function scrollNext(){
    imageNumber = (imageNumber+1)%headerImages.length;
    imageSet(imageNumber);
}
function scrollPrev(){
    imageNumber = (imageNumber-1<0?headerImages.length-1:imageNumber-1);
    imageSet(imageNumber);
}
bNext.onclick = function(){
    scrollTimer = scrollSecond*1000;
    scrollNext();
};
bPrev.onclick = function(){
    scrollTimer = scrollSecond*1000;
    scrollPrev();
};
function clock(){
    scrollTimer -= clockPerMilliSec;
    if(scrollTimer<=0){
        scrollTimer+=scrollSecond*1000;
        scrollNext();
    }
}
setInterval(clock,clockPerMilliSec);