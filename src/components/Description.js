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
             <div className="container">

      <div className="card mb-4 rounded" style={{backgroundColor:'rgb(80,180,240,0.05)'}}>
  		<div className="card-body">
        <h2>Course Manager Web Appication</h2>
        <p><strike>We have a Tomcat/Java server which is connected to MySQL database, and is hosting the jQuery client.
        </strike></p>
        <h3>Features</h3>
        {/*<ul>*/}
        	{/*<li>User Admin module allows admin users to create, find, update and delete users (CRUD operations)</li>*/}
        	{/*<li>Registration module allows anyone to register as a user </li>*/}
        	{/*<li>Login module allows anyone to login</li>*/}
        	{/*<li>Profile module allows logged in users to update their profile information</li>*/}

        {/*</ul>*/}
        <hr/>
        <h3>Architecture</h3>
        <h5>Front end</h5>
        <p> <strike>
        The front end will consist of HTML pages dynamically rendered using JQuery,
         a popular JavaScript library for programmatically manipulating the DOM.
        The HTML and JQuery will be used to create a browser based client application.
        </strike>
        </p>
        <h5>Middle tier and database</h5>
        <p><strike>
            The client application will use AJAX to communicate with a Java based middle
         tier running on a tomcat server. The Spring boot framework will provide useful
          abstractions and boilerplate behaviors to define Web services, Java data modeling, and object relational mapping to a relational database. JPA will map Java data models to a MySQL database.
        </strike>
        </p>
            <h5>
                Links
            </h5>
            <hr/>
                <ul>
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

                    <li><a href="/home">Course Manager Application&nbsp;</a>: Homepage with Assignment Deliverables
                    </li>
                    <li><a href="/course/grid">Faculty Homepage - Courses&nbsp;</a>: All Courses in Gridview format
                        <br/><span style={{color:'rgb(100,100,100)'}}>
                            <i>(This is the page which the user(faculty) will see after successful login.)</i></span>
                    </li>
                    {/*&nbsp;&nbsp;&nbsp;*/}
                    <li>
                        <a href="http://localhost:8080/api/course">Courses&nbsp;</a>: Web service endpoint for courses
                    </li>
                    {/*&nbsp;&nbsp;&nbsp;*/}
                    <li>
                        <a href="http://localhost:8080/api/module">Modules&nbsp;</a>
                        : Web service endpoint for modules
                    </li>
                    {/*&nbsp;&nbsp;&nbsp;*/}
                    <li>
                        <a href="http://localhost:8080/api/lesson">Lessons&nbsp;</a>
                        : Web service endpoint for lessons
                    </li>
                    {/*&nbsp;&nbsp;&nbsp;*/}
                    <li>
                        <a href="http://localhost:8080/api/topic">Topics&nbsp;</a>
                        : Web service endpoint for topics
                    </li>
                    {/*&nbsp;&nbsp;&nbsp;*/}

                </ul>

            {/*<div className="card">*/}
                {/*<div className="card-header text-center">*/}
                {/*<h3>Insert DEMO GIF here</h3>*/}
                {/*</div>*/}
                {/*<div className="card-body text-center">*/}
                    {/*<img src={require('../images/usage.gif')}/>*/}
                {/*</div>*/}
            {/*</div>*/}


      </div>
	</div>
        </div>
        );
    }
}