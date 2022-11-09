// nav 珠歆首饰尺码 颜色
var a_=document.getElementsByClassName('btn_a');
var span_=document.getElementsByClassName('btn_aa');
for(var i=0; i<a_.length;i++){
    a_[i].setAttribute('index',i);
    a_[i].onclick=function(){
        var index_=this.getAttribute('index');
        for(var j=0;j<a_.length;j++){
            a_[j].className='btn_a';
            a_[index_].className='btn_a border_a';
        }
        for(var k=0;k<span_.length;k++){
            span_[k].style.display='none';
            span_[index_].style.display='block';
        }
    }
}
var a2=document.getElementsByClassName('btn_b');
var span2=document.getElementsByClassName('btn_bz');
for(var i=0; i<a2.length;i++){
    a2[i].setAttribute('index',i);
    a2[i].onclick=function(){
        var index=this.getAttribute('index');
        for(var j=0;j<a2.length;j++){
            a2[j].className='btn_b';
            a2[index].className='btn_b border_b';
        }
        for(var k=0;k<span2.length;k++){
            span2[k].style.display='none';
            span2[index].style.display='block';
        }
    }
}
// 分享商品
var div_a=document.getElementsByClassName('product_en')[0];
var div_aa=document.getElementsByClassName('en_box')[0];
div_a.onmouseenter=function(){
    div_aa.style.display='block';
    div_a.onmouseleave=function(){
        div_aa.style.display='none';
    }
}
// 商品数量增减
var amount=document.getElementsByClassName('num')[0];
var amountValue=amount.firstChild.nodeValue;
var add=document.getElementsByClassName('num_js')[0];
var minus=document.getElementsByClassName('num_jx')[0];
add.onclick=function(){
    amountValue ++;
    amount.innerHTML=amountValue;
}
minus.onclick=function(){
    amountValue --;
    if(amountValue<1){
        amountValue=1;
    }
    amount.innerHTML=amountValue;
}

// 组合购买功能

// 获取组合商品的选中框
var checkboxs = document.getElementsByClassName("checkbox");
// 获取组合商品的价格框
var shopPrices = document.getElementsByClassName("group_price");
// 获取组合商品的件数输入框
var shopTotalcount = document.getElementsByClassName("number")[0];
// 获取组合商品的总价格
var shopTotalprice = document.getElementsByClassName("zprice")[0];
for(var i=0;i<checkboxs.length;i++){
  //总数量框 失去焦点时 总数量、总价格的变动
  shopTotalcount.onblur=function(){
    var z_sum=0;
    for(var k=0;k<checkboxs.length;k++){
      var v=checkboxs[k].checked;
      if(v){
        var p=document.getElementsByClassName("group_price")[k].firstChild.nodeValue-0;
        z_sum +=p;
      }
      if(shopTotalcount.value<=0||isNaN(shopTotalcount.value)||shopTotalcount.value==''){
        shopTotalcount.value=1;
        shopTotalprice.innerHTML=1*z_sum;
      }else{
        shopTotalprice.innerHTML=shopTotalcount.value*z_sum;
      }
    }
  }
  //商品选择中
  checkboxs[i].onclick=function(){
    var z_sum=0;
    for(var k=0;k<checkboxs.length;k++){
      var v=checkboxs[k].checked;
      if(v){
        var p=shopPrices[k].firstChild.nodeValue-0;
        z_sum +=p;
      }
      shopTotalprice.innerHTML=shopTotalcount.value*z_sum;
    }
  }
}


