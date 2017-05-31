
let oUl = $(".list-group");
let oAdd = $(".btn-success");
let oUser = $("#username");
let oPwd = $("#pwd");
let oUpdate = $(".btn-warning");
loadData();
//页面加载，发送请求，获取所有数据
function loadData(){
    ajax({
        url:"/user"
    }).then(function(data){
        console.log();
        bindHtml(data);
    });
}
function bindHtml(data){
    let str = "";
    $.each(data,function(index,item){
        str+=`
            <li class="list-group-item">
                姓名：${item.username} 密码：${item.password}
                <button class="btn btn-danger pull-right btn-xs" onclick="del(${item.id})">&times;</button>
                <button type="button" class="btn btn-warning pull-right btn-xs" data-toggle="modal" data-target="#myModal" onclick="update('${item.username}','${item.password}','${item.id}')">修改</button>
            </li>
        `;
    });
    oUl.empty().append(str);
}

//删除用户
function del(id){
    ajax({
        url:"/user?uid="+id,
        type:"DELETE"
    }).then(function(data){
        bindHtml(data);
    });
}

//添加数据
oAdd.on("click",function(){
    let userObj = {
        username:oUser.val(),
        password:oPwd.val()
    };
    ajax({
        url:"/user",
        type:"POST",
        data:JSON.stringify(userObj),
    }).then(function(data){
        console.log(data);
        bindHtml(data);
    });
});
//修改信息
function update(name,pwd,id){
    $("#updateUser").val(name);
    $("#updatePassword").val(pwd);
    $("#comfirm").attr("uid",id);
}

$("#comfirm").on("click",function(){
    let id = $(this).attr("uid");
    let username = $("#updateUser").val();
    let password = $("#updatePassword").val();
    let user = {id,username,password};
    ajax({//修改的时候id通过url传递，修改成什么样，通过请求体传
        url:'/user?id='+id,
        type:"PUT",
        data:JSON.stringify(user)
    }).then(function(data){
        bindHtml(data);
        $('#myModal').modal('hide')
    });
});

