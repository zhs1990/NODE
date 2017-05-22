(function(){
    function getXhr(){
        var xhr = null;
        var arr = [
            function(){
                return new XMLHttpRequest;
            },
            function(){
                return new ActiveXObject("Microsoft.XMLHTTP");
            },
            function(){
                return new ActiveXObject("Msxml2.XMLHTTP");
            },
            function(){
                return new ActiveXObject("Msxml3.XMLHTTP");
            }
        ];

        for(var i=0;i<arr.length;i++){
            var curFn = arr[i];
            try{
                xhr = curFn();
                getXhr = curFn;
                break;
            }catch(e){}
        }
        if(!xhr){
            throw Error("请升级浏览器");
        }
        return xhr;
    }
    function ajax(options){
        var defaultOptions = {
            url:null,
            type:"GET",
            dataType:"text",
            data:null,
            cache:true,
            async:true,
            timeout:null,
            success:null,
            error:null
        };

        //默认参数进行合并
        for(var attr in options){
            if(options.hasOwnProperty(attr)){
                defaultOptions[attr] = options[attr];
            }
        }
        //get  缓存问题
        if(defaultOptions.type.toUpperCase()==="GET"){
            //判断当前url是否存在？，如果有直接添加随机数，如果没有先拼？，再加随机数
            //当cache为false时，就不需要缓存
            if(!defaultOptions.cache){
                if(defaultOptions.url.indexOf("?")!=-1){
                    defaultOptions.url +="_="+new Date().getTime();
                }else{
                    defaultOptions.url +="?_="+new Date().getTime();
                }
            }
        }
        //get请求中的数据传输问题，需要将数据以name=zs&age=20这种形式进行凭借在url后面
        if(defaultOptions.data){
            for(var attr in defaultOptions.data){
                if(defaultOptions.url.indexOf("?")!=-1){
                    defaultOptions.url+="&"+attr+"="+defaultOptions.data[attr]
                }else{
                    defaultOptions.url+="?"+attr+"="+defaultOptions.data[attr]
                }
            }
        }
        //dataType
        var xhr = getXhr();
        xhr.responseType = defaultOptions.dataType;
        //超时处理
        xhr.timeout = defaultOptions.timeout;
        xhr.ontimeout = defaultOptions.error;

        xhr.open(defaultOptions.type,defaultOptions.url,defaultOptions.async);
        xhr.onreadystatechange = function(){
            if(this.readyState===4 && /^2\d{2}$/.test(this.status)){
                if(typeof defaultOptions.success === "function") {
                    //console.log();
                    defaultOptions.success.call(defaultOptions,this.response);
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