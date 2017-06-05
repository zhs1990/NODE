(function (w) {
    function ajax({type="GET",url=null,data=null,dataType="json",async=true}){
        return new Promise(function(resolve,reject){
            let xhr = new XMLHttpRequest();
            xhr.open(type,url,async);
            xhr.responseType = dataType;
            xhr.onload = function(){
                resolve(xhr.response);
            };
            xhr.send(data);
        });
    }
    w.ajax = ajax;
})(window);