/*----------ヘッダのポップアップをするクラス-------------------------------------------------*/
let header = document.getElementsByClassName('popup_onTop');
let beforeScroll;
documentElement = document.documentElement;
function popOnTop() {
    header[0].style.transition = '0.8s';
    if(documentElement.scrollTop==0||documentElement.scrollTop<beforeScroll){
        header[0].style.transform = "translateY(0)";
    }else{
        header[0].style.transform = "translateY(-"+header[0].clientHeight+"px)";
    }
    beforeScroll = documentElement.scrollTop;
}
onload = popOnTop;
window.onscroll = popOnTop;
/*----------ヘッダのリンクをホバーするときの反応-------------------------------------------------*/
let hd_ul = document.getElementById('headList');
let hd_list = hd_ul.children;
let lineColorOffset = 15;
for (let i = 0; i < hd_list.length; i++) {
    // 色指定
    let color = i*(360/hd_list.length)+lineColorOffset;
    // 装飾の線
    let line = document.createElement("div");
    line.style.backgroundColor = "hsl("+color+", 100%, 50%)";
    line.style.width = '0';
    line.style.opacity='0';
    line.classList.add('hd-hoverLine');
    hd_list[i].appendChild(line);
    // 装飾の光
    let light = document.createElement("img");
    light.src = "../../images/light.jpg";
    light.style.width = "calc("+hd_list[i].clientWidth+"px + 5rem)";
    light.style.height = "calc("+hd_list[i].clientHeight+"px + 3rem)";
    light.style.transition = '0.8s';
    light.style.opacity='0';
    light.style.filter = "hue-rotate("+color+"deg)";
    light.classList.add('hd-hoverLight');
    hd_list[i].appendChild(light);
    let text = hd_list[i].firstChild;
    text.style.color = "var(--text-color-0)"
    text.style.textShadow="0 0 0px";
    // ホバー時の動作
    hd_list[i].firstChild.addEventListener("mouseover",function() {
        line.style.width = '300vw';
        line.style.opacity='1';
        light.style.opacity='1';
        text.style.color = "var(--bg-color-0)"
        text.style.textShadow="0 0 6px";
    });
    hd_list[i].firstChild.addEventListener("mouseout",function() {
        line.style.width = '0';
        line.style.opacity='0';
        light.style.opacity='0';
        text.style.color = "var(--text-color-0)"
        text.style.textShadow="0 0 0px";
    });
}