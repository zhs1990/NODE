import React,{Component} from "react"
import {
    BrowserRouter as Router,  //容器
    Route,   //一条路由
    Link,
    Switch
} from "react-router-dom";
import Home from "./Home"
import User from "./User"
import Profile from "./Profile"
import Login from "./Login"
import MenuLink from "./MenuLink"
import NotFound from "./NotFound"
import ProtectedRoute from "./ProtectedRoute"
import "bootstrap/dist/css/bootstrap.css"

export default (
    <Router>
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">珠峰管理系统</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <MenuLink label="首页" to="/home" />
                            <MenuLink label="用户管理" to="/user" />
                            <MenuLink label="个人设置" to="/profile" />
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route path="/user" component={User} />
                            <Route path="/login" component={Login} />
                            <ProtectedRoute path="/profile" component={Profile} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    </Router>
)

//Warning: Hash history cannot PUSH the same path; a new entry will not be added to the history stack   相同的路径已经在栈内存在了，无法继续添加
//解决以上问题方法将：HashRouter改为BrowserRouter
//栈型结构  特点是先进后出  好处：可以实现前进后退
/*
 <Switch>
* <Route  path="/" render={props=><div>首页</div>} />
 <Route  path="/:name" render={props=><div>{props.match.params.name}</div>} />
 </Switch>
* */
//当用户访问个人设置的时候，先判断此用户是否已经登录，如果已经登录则可以直接显示个人设置页面。如果此用户未登录，那么则跳转到登录页面进行登录，如果登录成功则自动跳回登录前的页

//match  匹配对象，匹配上就有值，匹配不上就没有值  当前的路径与path属性的值的就是match匹配的内容

