function getAllUser(cb){
    ajax({
        type:"GET",
        url:"/user"
    }).then(function(data){
        cb(data);
    });
}
function bindHtml(datas){
    let str = "";
    datas.forEach(function(item){
        str+=`
            <tr class="text-center">
                <td>${item.id}</td>
                <td>${item.username}</td>
                <td>${item.age}</td>
                <td>${item.sex}</td>
                <td>
                    <button type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#myModal" onclick="modify('${item.age}','${item.username}','${item.sex}','${item.id}')">修改</button>
                    <button type="button" class="btn btn-danger btn-xs" onclick="del(${item.id})">删除</button>
                </td>
            </tr>
        `;
    });
    $(".table tbody").empty().append(str);
}
function add(){
    let obj = {
        username:$("#username").val(),
        age:$("#age").val(),
        sex:$("#sex").val()
    };
    ajax({
        type:"POST",
        url:"/user",
        data:JSON.stringify(obj)
    }).then(function(data){
        console.log(data);
        bindHtml(data);
    });
}
function modify(age,name,sex,id){
    $("#uname").val(name);
    $("#uage").val(age);
    $("#usex").val(sex);
    $("#confirm").attr("uid",id);
}
function del(uid){
    ajax({
        type:"DELETE",
        url:"/user?id="+uid
    }).then(function(data){
        console.log(data);
        bindHtml(data);
    });
}
getAllUser(bindHtml);
$("#add").on("click",function(){
    add();
});
$("#confirm").on("click",function(){
    let username = $("#uname").val();
    let age = $("#uage").val();
    let sex = $("#usex").val();
    let id = $(this).attr("uid");
    let obj = {username,age,sex,id};
    ajax({
        type:"PUT",
        url:"/user?id="+id,
        data:JSON.stringify(obj)
    }).then(function(data){
        console.log(data);
        bindHtml(data);
        $('#myModal').modal('hide');
    });
});

