  
//nav 切换
var div_=document.getElementsByClassName('goodslist_left');
var box_=document.getElementsByClassName('goodslist_right');
for(var i=0;i<div_.length;i++){
  div_[i].setAttribute('index',i);
  div_[i].onmouseenter=function(){
    var index=this.getAttribute('index');
    for(var j=0;j<div_.length;j++){
      div_[j].className='goodslist_left';
      div_[index].className='goodslist_left click_a';
    }
    for(var k=0;k<box_.length;k++){
      box_[k].style.display='none';
      box_[index].style.display='block';
      box_[k].className='goodslist_right';
      box_[index].className='goodslist_right click_b';
      
    }
  }
  div_[i].onmouseleave=function(){
    for(var j=0;j<div_.length;j++){
      div_[j].className='goodslist_left';
    }
    for(var k=0;k<box_.length;k++){
      box_[k].style.display='none';
      box_[k].className='goodslist_right';
    }

  }
}

// index nav部分banner轮播图
var mySwiper = new Swiper ('.swiper', {
  direction: 'horizontal', // 水平切换选项
  loop: true, // 循环模式选项
  // autoplay:true,//自动切换
  autoplay: {
     delay: 2000,
     stopOnLastSlide: false,
     disableOnInteraction: true,
    },

  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
    clickable :true,
  },
  
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
})
//鼠标滑过pagination控制swiper切换
for(i=0;i<mySwiper.pagination.bullets.length;i++){
  mySwiper.pagination.bullets[i].onmouseover=function(){
    this.click();
  };
} 