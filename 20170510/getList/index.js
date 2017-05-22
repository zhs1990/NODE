var oUl = document.getElementsByTagName("ul")[0];
getData(bindData);

function getData(callBack){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","/getList",true);
    xhr.responseType = "json";
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && /^2\d{2}$/.test(this.status)){
            typeof callBack==="function"?callBack(this.response):null;
        }
    };
    xhr.send();
}

function bindData(data){
    var str = "";
    for(var i=0;i<data.data.length;i++){
        str+="<li><span>"+data.data[i].id+"</span><span>"+data.data[i].name+"</span><span>"+data.data[i].score+"</span></li>"
    }
    oUl.innerHTML = str;
}
