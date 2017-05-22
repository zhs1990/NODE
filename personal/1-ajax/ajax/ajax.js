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
            data:null,
            dataType:null,
            cache:true,
            async:true,
            success:null,
            error:null
        };

        for(var attr in options){
            defaultOptions[attr] = options[attr];
        }

        //先处理缓存问题
        if(defaultOptions.type.toUpperCase()==="GET"){
            if(!defaultOptions.cache){
                if(defaultOptions.url.indexOf("?")!=-1){
                    defaultOptions.url+="_="+new Date().getTime();
                }else{
                    defaultOptions.url+="?"+"_="+new Date().getTime();
                }
            }
        }

        //处理数据
        if(defaultOptions.data){
            for(var attr in defaultOptions.data){
                if(defaultOptions.url.indexOf("?")!=-1){
                    defaultOptions.url+="&"+attr+"=" +defaultOptions.data[attr];
                }else{
                    defaultOptions.url+="?"+attr+"="+defaultOptions.data[attr];
                }
            }
        }

        var xhr = getXhr();
        xhr.open(defaultOptions.type,defaultOptions.url,defaultOptions.async);
        xhr.responseType = defaultOptions.dataType;
        xhr.onreadystatechange = function(){
          if(this.readyState===4 && /^2\d{2}$/.test(this.status)){
              if(typeof defaultOptions.success === "function"){
                  defaultOptions.success.call(defaultOptions,this.response);
              }
          }
        };
        xhr.send(JSON.stringify(defaultOptions.data));
        //console.log(defaultOptions.url);
    }
    window.ajax = ajax;
})();