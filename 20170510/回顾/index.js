function getData(cb){
    if(window.XMLHttpRequest){
        var oAjax = new XMLHttpRequest();
    }else{
        var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    oAjax.open("GET","http://127.0.0.1:9090/getList",true);
    oAjax.responseType = "json";
    oAjax.onreadystatechange = function(){
        if(this.readyState===4 && /^2\d{2}$/.test(this.status)){
            typeof cb === "function" ? cb(this.response) : null;
        }
    };
    oAjax.send();
}
function loadData(data){
    var oUl = document.getElementsByTagName("ul")[0];
    var str = "";
    for(var i=0;i<data.data.length;i++){
        str+="<li><span>"+data.data[i].id+"</span><span>"+data.data[i].name+"</span><span>"+data.data[i].score+"</span></li>"
    }
    oUl.innerHTML = str;
}
getData(loadData);
