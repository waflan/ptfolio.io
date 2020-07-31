function cube(size,element) {
    let d = size / 2;
    let parent = element;
    parent.style.height = size+"px";
    parent.style.width = size+"px";
    parent.style.transform = "translate3d(100px,100px,0)";
    for (let i = 0; i < 6; i++) {
        let tile = document.createElement("div");
        tile.style.position = "absolute";
        tile.style.height = size+"px";
        tile.style.width =size+"px";
        tile.style.backgroundColor="hsl("+(i*60)+", 100%, 50%)";
        parent.appendChild(tile);
    }
    let tiles = parent.children;
    tiles[0].style.transform = "translate3d(0,"+ d +"px,0) rotateX(90deg)";
    tiles[1].style.transform = "translate3d(0,-"+ d +"px,0) rotateX(-90deg)";
    tiles[2].style.transform = "translate3d("+ d +"px,0,0) rotateY(90deg)";
    tiles[3].style.transform = "translate3d(-"+ d +"px,0,0) rotateY(-90deg)";
    tiles[4].style.transform = "translate3d(0,0,"+ d +"px) rotateY(0deg)";
    tiles[5].style.transform = "translate3d(0,0,-"+ d +"px) rotateY(180deg)";
};
let cube1 =document.getElementById("cube");
var rotx=0;
var roty=0;
cube(100,cube1);
function rot() {
    rotx+=0.56;
    roty+=1.3;
    cube1.style.transform = "translate3d(100px,100px,0) rotateX("+rotx+"deg) rotateY("+roty+"deg)";
}
setInterval(rot,50);