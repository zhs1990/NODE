var oTime = document.getElementById("time");

function getTime(){
    var oAjax = new XMLHttpRequest();
    oAjax.open("GET","http://127.0.0.1:5000/getTime",true);
    oAjax.responseType = "json";//不兼容,按照json对象形式进行解析，响应数据
    oAjax.onreadystatechange = function(){
        if(this.readyState==4 && /^2\d{2}$/.test(this.status)){
            //console.log(this.response);//因为设置了responseType，才能直接使用
            //console.log(this.responseText);//string
            oTime.innerHTML = this.response.timer;
        }
    };
    oAjax.send();
}
getTime();
setInterval(getTime,1000);