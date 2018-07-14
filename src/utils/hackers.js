/* eslint-disable */
;var  clientWidth = document.documentElement.clientWidth;
(function(win,doc){
    var fresh = function(){
        clientWidth = document.documentElement.clientWidth;
        var html = doc.documentElement;
        var w = html.clientWidth;
        if(w<768){
        	html.style.fontSize = (w/375)*100+'px';
        }else{
        	html.style.fontSize = '14px';
        }

    }
    if(document.readyState === "complete"){
        fresh();

    }else{
        document.addEventListener("DOMContentLoaded",fresh,false);
    }
    win.addEventListener("resize",fresh,false);
})(window,document)

window.onload=function(){
    maxHeight('lists','intro');
    if(typeof(jQuery)!="undefined" && $('.news-box .scroll')[0]){
        $('.news-box .scroll').perfectScrollbar();
    }
    if(typeof(jQuery)!="undefined" && $('.news-intro')[0]){
        $('.news-intro').perfectScrollbar();
    }

}
function pc(){
    if(document.documentElement.clientWidth<768){
        return false
    }else{
        return true;
    }
}
function toThousands(num) {
    var num = (num || 0).toString(), result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) { result = num + result; }
    return result;
}


function maxHeight(pname,cname){
    if(!pc()) return;
    if(!pname || !cname) return;
    let h = 0,height='',el = [];
    let par = document.getElementsByClassName(pname);
    for(i=0;i<par.length;i++){
        el[i] = par[i].getElementsByClassName(cname);
    }
    for (j=0;j<el.length;j++){
        for(k=0;k<el[j].length;k++){
            if(h<el[j][k].offsetHeight){
                h = el[j][k].offsetHeight
            }
        }
    }
    if(h==0){
        height=='auto'
    }else{
        height = h+'px'
    }
    for (j=0;j<el.length;j++){
        for(k=0;k<el[j].length;k++){
            el[j][k].style.height = height
        }
    }
}

