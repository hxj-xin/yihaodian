// 购物车
function del(that){
    that.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(that.parentNode.parentNode.parentNode.parentNode); 
    function fn1(){
        var ul_=document.getElementsByClassName('shoplist')[0];
        var noshop_=document.getElementsByClassName('noshop')[0];
        var shop_=document.getElementsByClassName('shop')[0];
        var last_=document.getElementsByClassName('last')[0];
        var header_shopping_=document.getElementsByClassName('header_shopping')[0];
        console.log(ul_.children.length);
        if(ul_.children.length==0){
            last_.removeChild(shop_);
            noshop_.style.display='block';
            noshop_.onmouseleave=function(){
                noshop_.style.display='none';
            }
            header_shopping_.onmouseenter=function(){
                noshop_.style.display='block';
            }
        }else{
            shop_.style.display='block';
            shop_.onmouseleave=function(){
                shop_.style.display='none';
            }
            header_shopping_.onmouseenter=function(){
                shop_.style.display='block';
            }
        }
    }
    fn1()
}
var topnum=document.getElementsByClassName('topnum');
 // 商品 — 号
 function minus(num){
    var price1=document.getElementsByName('prices')[num].value;
    console.log(price1); //190
    var count1=parseInt(document.getElementsByName('amounts')[num].value)-1;
    if(count1<1){
        alert("不能再减了，再减就没有啦！");
    }else{
        document.getElementsByName('amounts')[num].value=count1;
        var total1=parseFloat(price1*count1).toFixed(2);
        document.getElementById("price"+num).innerHTML='￥'+total1;
    }
    topnum[num].innerHTML=count1;
}
// 商品 + 号
function plus(num){
    var price1=document.getElementsByName('prices')[num].value;
    console.log(price1); //21.90
    var count1=parseInt(document.getElementsByName('amounts')[num].value)+1;
    document.getElementsByName('amounts')[num].value=count1;
    var total1=parseFloat(price1*count1).toFixed(2);
    document.getElementById("price"+num).innerHTML='￥'+total1;
    topnum[num].innerHTML=count1;
    total();
}
// 自执行
function total(){
    var price=document.getElementsByName('prices');
    var count=document.getElementsByName('amounts');
    var sum=0;
    var countSum=0
    for(var i=0;i<price.length;i++){
        sum +=price[i].value*count[i].value;
    }
    document.getElementById('totalPrice').innerHTML="¥" +sum.toFixed(2);
    for(var i=0;i<count.length;i++){
        countSum +=count[i].value*1;
    }
    document.getElementById('counttal').innerHTML='('+parseInt(countSum)+')';
}
total();
// 
function fn1(){
    var ul_=document.getElementsByClassName('shoplist')[0];
    var noshop_=document.getElementsByClassName('noshop')[0];
    var shop_=document.getElementsByClassName('shop');
    console.log(ul_.children.length);
    if(ul_.children.length==0){
        shop_.style.display='none';
        noshop_.style.display='block';
    }
}
fn1()


