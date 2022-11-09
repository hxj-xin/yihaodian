var username=document.getElementById('username');
var password=document.getElementById('password');
var span_=document.getElementsByClassName('sp')[0];
var span1_=document.getElementById('sp');
username.onfocus=function(){
    span_.innerHTML='请输入11位数的手机号';
    username.setAttribute('placeholder','');
}
username.onblur=function(){
        var value0=username.value;
        console.log(value0);
        reg=/^1[3-9][0-9]{9}$/;
        var cookies = document.cookie;
        var arry=cookies.split(';');
        // console.log(arry);
        for(var i=0;i<arry.length;i++){
            var newArry=arry[i].split('=');
            // console.log(newArry);
            if(newArry[0]=='name'){
                console.log(newArry[1]);
                var numname=newArry[1];
            }   
        }
        if(reg.test(value0)==true&&value0==numname){ 
            span_.innerHTML='用户名输入正确'; 
            span_.className='red'; 
            
        }else if(value0.length==0){
            span_.innerHTML='用户名不能为空，请输入';              
        }
        else if(reg.test(value0)==true&&value0!=newArry[1]){
            span_.innerHTML='用户名不存在，请先注册';              
        }else{
            span_.innerHTML='用户名输入错误，请重新输入'; 
            span_.style.color='green';
        }   
}

password.onfocus=function(){
    span1_.innerHTML='请输入6位数的数字密码';
    password.setAttribute('placeholder','');
}
password.onblur=function(){
    // console.log(username.value);
        var value1=password.value;
        reg=/^\d{6}$/;
        var cookies = document.cookie;
        var arry=cookies.split(';');
        for(var i=0;i<arry.length;i++){
            var newArry=arry[i].split('=');
            console.log(newArry);
            if(newArry[0]=='password'){
                console.log(newArry[1]);//数字密码 
            }
        } 
        if(reg.test(value1)==true&&value1==newArry[1]){ 
            span1_.innerHTML='密码输入正确'; 
            span1_.className='red'; 
        }else if(value1.length==0){
            span1_.innerHTML='密码不能为空，请输入';              
        }else{
            span1_.innerHTML='密码输入错误，请重新输入'; 
        }      
}
if(getCookie('isRemember')){
    var nameValue=document.getElementById('username').value=getCookie('name');
    var passwordValue=document.getElementById('password').value=getCookie('password');
    var checkbox_=document.getElementById('checkbox').checked=getCookie('isRemember');
}
function btn(){
    var nameValue=document.getElementById('username').value;
    var passwordValue=document.getElementById('password').value;
    var checkbox_=document.getElementById('checkbox').checked;
    var login=document.getElementById('login');
    if(checkbox_){
        setCookie('name',nameValue);
        setCookie('password',passwordValue);
        setCookie('isRemember',checkbox_);
    }else{
        removeCookie('name');
        removeCookie('password');
        removeCookie('isRemember');
    }
    console.log(span_);
    if(span_.className=='red'&&span1_.className=='red'){
        alert('登录成功');
        window.open('http://127.0.0.1:5500/index.html'); 
    } else{
        alert('信息错误,请重新输入');
    }     
}
