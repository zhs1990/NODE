import React,{Component} from "react"
export default class UserDetail extends Component{
    render(){
        //this.props
        // history  跳转路由 路径
        //  match  匹配结果 匹配上就是对象 匹配不上就是null
        // location
        let id = this.props.match.params.id;
        let userStr = localStorage.getItem("users");
        let users = userStr?JSON.parse(userStr):[];
        let user = users.find(user=>user.id==id);
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>姓名</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}