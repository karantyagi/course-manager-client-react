import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom'
import CourseService from "../services/CourseService";

export default class Description
    extends React.Component
{

    render(){

        return(
            <div>
                <br/>
                <nav className="navbar navbar-expand-md navbar-secondary bg-light">
                    <br/>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <nav>
                            <ul className="navbar-nav mr-auto">
                                &nbsp;&nbsp;&nbsp;
                                {/*<li className="nav-item">*/}
                                    {/*<a className="nav-link"*/}
                                       {/*href="/jquery/components/user-admin/user-admin.template.client.html">User-Admin</a>*/}
                                    {/*/!*<a class="nav-link" href="https://kt-web-dev-java-server.herokuapp.com/jquery/components/user-admin/user-admin.template.client.html">User-Admin</a> *!/*/}
                                {/*</li>*/}
                                {/*&nbsp;&nbsp;&nbsp;*/}
                                {/*<li className="nav-item">*/}
                                    {/*<a className="nav-link "*/}
                                       {/*href="/jquery/components/register/register.template.client.html">Register</a>*/}
                                    {/*/!*<a class="nav-link " href="https://kt-web-dev-java-server.herokuapp.com/jquery/components/register/register.template.client.html">Register</a> *!/*/}
                                {/*</li>*/}
                                {/*&nbsp;&nbsp;&nbsp;*/}
                                {/*<li className="nav-item">*/}
                                    {/*<a className="nav-link " href="/jquery/components/login/login.template.client.html">Login*/}
                                        {/*In</a>*/}
                                    {/*/!*<a class="nav-link " href="https://kt-web-dev-java-server.herokuapp.com/jquery/components/login/login.template.client.html">Login In</a> *!/*/}
                                {/*</li>*/}
                                {/*&nbsp;&nbsp;&nbsp;&nbsp;*/}
                                {/*<li className="nav-item">*/}
                                    {/*<a className="nav-link " href="/api/user">User Data (/api/user)</a>*/}
                                    {/*/!*<a class="nav-link " href="https://kt-web-dev-java-server.herokuapp.com/api/user">User Data (/api/user)</a> *!/*/}
                                {/*</li>*/}
                                {/*&nbsp;&nbsp;&nbsp;*/}

                                <li><a className="nav-link " href="http://localhost:8080/api/course">Courses (Webservice endpoint)</a>
                                </li>
                                &nbsp;&nbsp;&nbsp;
                                <li><a className="nav-link " href="/course/grid">Courses (Grid View)</a>
                                </li>
                                &nbsp;&nbsp;&nbsp;

                            </ul>
                        </nav>
                    </div>
                </nav>
            </div>
        );
    }
}