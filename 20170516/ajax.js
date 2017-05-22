(function(){
    function getXhr(){
        var xhr = null;
        var arr = [function(){
            return new XMLHttpRequest;
        },function(){
            return new ActiveXObject("Microsoft.XMLHTTP");
        },function(){
            return new ActiveXObject("Msxml2.XMLHTTP");
        },function(){
            return new ActiveXObject("Msxml3.XMLHTTP");
        }];

        for(var i=0;i<arr.length;i++){
            var cunFn = arr[i];
            try{
                xhr = cunFn();
                getXhr = cunFn;
                break;
            }catch(e){}
        }
        if(!xhr){
           throw Error("请升级浏览器版本");
        }
        return xhr;
    }
    function ajax(options){
        var defaultOptions = {
            url:null,
            type:"GET",
            data:null,
            dataType:"text",
            cache:true,
            async:true,
            success:null,
            error:null,
            timeout:null
        };
        for(var attr in options){
            if(options.hasOwnProperty(attr)){
                defaultOptions[attr] = options[attr];
            }

        }

        if(defaultOptions.type.toUpperCase()==="GET"){
            if(!defaultOptions.cache){
                if(defaultOptions.url.indexOf("?")!=-1){
                    defaultOptions.url+="_="+new Date().getTime();
                }else{
                    defaultOptions.url+="?_="+new Date().getTime();
                }
            }
        }
        if(defaultOptions.data){
            for(var attr in defaultOptions.data){
                if(defaultOptions.type.toUpperCase()==="GET"){
                    if(defaultOptions.url.indexOf("?")!=-1){
                        defaultOptions.url+="?"+attr+"="+defaultOptions.data[attr];
                    }else{
                        defaultOptions.url+="&"+attr+"="+defaultOptions.data[attr];
                    }
                }
            }
        }
        var xhr = getXhr();
        xhr.open(defaultOptions.type,defaultOptions.url,defaultOptions.async);
        xhr.responseType = defaultOptions.dataType;
        xhr.timeout = defaultOptions.timeout;
        xhr.ontimeout = defaultOptions.error;
        xhr.onreadystatechange = function(){
            if(this.readyState===4&&/^2\d{2}$/.test(this.status)){
                if(typeof defaultOptions.success==="function"){
                    defaultOptions.success(this.response);
                }
            }
        };
        if(defaultOptions.type.toUpperCase()==="GET"){
            xhr.send();
        }else{
            xhr.send(JSON.stringify(defaultOptions.data));
        }

    }
    window.ajax = ajax;
})();