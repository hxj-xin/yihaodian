var ipt1=document.getElementById('phone');//手机号
var ipt2=document.getElementsByClassName('w4')[0];//验证码
var ipt3=document.getElementById('psw');//密码
// console.log(ipt3);
var ipt4=document.getElementById('psw_a');//重复密码
var span_=document.getElementsByClassName('sp')[0];
console.log(span_);
var spana=document.getElementById('passspan');//密码后边的span
var spanb=document.getElementById('passspan1');//确认密码后的span
var spanc=document.getElementById('spc'); //验证码后的span
var yz=document.getElementsByClassName('w2')[0]; //获取验证码的button
var form=document.getElementsByTagName('form')[0];
var yanzheng=document.getElementById('yanzhengma');
ipt1.onfocus=function(){
    span_.innerHTML='请输入以1开头11位数的手机号';
}
ipt1.onblur=function(){
        var value0=ipt1.value;
        reg=/^1[3-9][0-9]{9}$/;
        if(reg.test(value0)==true){ 
            span_.innerHTML='用户名输入正确'; 
            span_.className='red'; 
            //cookie  
            var time = new Date();
            time.setDate(time.getDate()+2);
            document.cookie="name="+value0 +";expires="+time; 
        }else if(value0.length==0){
            span_.innerHTML='用户名不能为空，请输入';              
        }else{
            span_.innerHTML='用户名输入错误，请重新输入'; 
            span_.style.color='green';
        }
        
}
// 验证码
function identify(){
    var value1=Math.round(Math.random()*10000);
    value1=value1>1000?value1:value1+1000;
    return value1;     
} 
// identify();
var value_q=identify();
yanzheng.innerHTML=value_q;
yanzheng.style.display='block';
ipt2.onfocus=function(){
    spanc.innerHTML='请输入页面中显示的4位数字验证码';
}
ipt2.onblur=function(){
    yanzheng.style.display='none';
    if(ipt2.value==value_q){
        spanc.innerHTML='验证码输入正确';
        spanc.className='red';
    }else if(ipt2.value!=value_q){
        spanc.innerHTML='验证码输入错误';
    }else if(ipt2.value.length==0){
        spanc.innerHTML='验证码不能为空，请重新输入';
    }
}
// 密码
ipt3.onfocus=function(){
    spana.innerHTML='请输入6位数的数字密码';
}
ipt3.onblur=function(){
    var value2=ipt3.value;
    var reg=/\d{6}$/;
    if(reg.test(value2)==true){ 
        spana.innerHTML='密码输入正确';
        spana.className='red';
        //cookie
        var time = new Date();
        time.setDate(time.getDate()+2);
        document.cookie="password="+value2 +";expires="+time; 
    }else if(value2.length==0){
        spana.innerHTML='密码不能为空，请输入';        
    }else{
        spana.innerHTML='密码输入错误，请重新输入'; 
        spana.style.color='green';
    } 
        
}
//确认密码
ipt4.onfocus=function(){
    spanb.innerHTML='请再次输入密码,与前一密码一致';
}
ipt4.onblur=function(){
    var value3=ipt4.value;
    var reg=/\d{6}$/;
    var value2=ipt3.value;
    if(reg.test(value3)==true&&value3==value2){ 
        spanb.innerHTML='密码输入正确';
        spanb.className='red';
    }else if(value3.length==0){
        spanb.innerHTML='密码不能为空，请输入';        
    }else if(value3!=value2){
        spanb.innerHTML='两次密码不一致，请重新输入';        
    }else{
        spanb.innerHTML='密码输入错误，请重新输入'; 
        spanb.style.color='green';
    } 
}
//
function register(){
        if(span_.className=='red'&&spanc.className=='red'&&spana.className=='red'&&spanb.className=='red'){
            // if(span_.className=='red'){
            alert('提交成功');
            window.open('http://127.0.0.1:5500/login.html');
        }else{
            alert('信息错误，请重新输入')
        }   
}


