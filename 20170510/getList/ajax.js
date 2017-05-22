function createAjax(){
    if(window.XMLHttpRequest){
        var oAjax = new XMLHttpRequest();
    }else{
        if(new ActiveXObject("Microsoft.XMLHTTP")){
            var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
        }else if(new ActiveXObject("Msxml2.XMLHTTP")){
            var oAjax = new ActiveXObject("Msxml2.XMLHTTP");
        }else if(new ActiveXObject("Msxml3.XMLHTTP")){
            var oAjax = new ActiveXObject("Msxml3.XMLHTTP");
        }
    }
    return oAjax;
}

let xhr = createAjax();
xhr.open("GET","",true);
xhr.responseType = "json";
xhr.onreadystatechange = function(){
    if(this.readyState===4 && /^2\d{2}$}/.test(this.status)){
        console.log(this.response);
    }
};
xhr.send();