getData(loadData);
function getData(callBack){
    if(window.XMLHttpRequest){
        var oAjax = new XMLHttpRequest();
    }else{
        var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    oAjax.open("GET","/getDetail",true);
    oAjax.responseType = "json";
    oAjax.onreadystatechange = function(){
        if(this.readyState === 4 && /^2\d{2}$/.test(this.status)){
            typeof callBack === "function" ? callBack(this.response) : null;
        }
    };
    oAjax.send();
}

function loadData(data){
    var oTable = document.getElementsByTagName("table")[0];
    var str = "";
    for(var i=0;i<data.data.length;i++){
        str+="<tr><td>"+data.data[i].num+"</td><td>"+data.data[i].name+"</td><td>"+data.data[i].price+"</td><td>"+data.data[i].count+"</td></tr>"
    }
    oTable.tBodies[0].innerHTML = str;
}