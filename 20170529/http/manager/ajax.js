(function(w){
    function ajax({type="GET",dataType="json",async=true,url=null,data=null}){
        return new Promise(function(resolve,reject){
            let xhr = new XMLHttpRequest();
            xhr.open(type,url,async);
            xhr.responseType = dataType;
            xhr.onload = function(){
                resolve(xhr.response);
            };
            xhr.send(data);//string formdata
        });
    }
    w.ajax = ajax;
})(window);