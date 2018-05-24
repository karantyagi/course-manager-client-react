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
        <h2>Course Manager Web Application</h2>
        <p>We have a Node.js server which is hosting a react client.<br/>
            We have another Tomcat/Java server which is connected to MySQL database.
        </p>
        <h3>Features</h3>
        <ul>
        	<li>Faculty user can view all courses created by him/her</li>
        	<li>Course editor interface allows faculty users to create, find, update and delete courses (CRUD operations)</li>
        	<li>Courses consist of modules. Modules consist of lessons, which further consist of topics</li>
            <li>Module Editor allows faculty user to to create, find, update and delete modules</li>
            <li>Lesson Editor allows faculty user to to create, find, update and delete lessons</li>
            <li>Topic Editor allows faculty user to to create, find, update and delete topics</li>

        </ul>
        <hr/>
        <h3>Architecture</h3>
        <h5>Front end</h5>
        <p>
            The front end consists of a React UI which manipulates the virtual DOM.<br/>
            React components are used for developing the UI and React Router is used
            for navigating in the Single Page client application.
        </p>
        <h5>Middle tier and database</h5>
        <p>The react client application runs on a node server and it communicates with a Java-based middle
            tier running on a java server.
            <br/>The Spring boot framework provides useful abstractions and boilerplate behaviors to define Web services,
            <br/>Java data modeling, and object-relational mapping to a relational database.
            <br/>JPA maps Java data models to a MySQL database.</p>
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
                        {/*<a href="http://localhost:8080/api/course">Courses&nbsp;</a>: Web service endpoint for courses*/}
                        <a href="https://kt-course-manager-server.herokuapp.com/api/course">Courses&nbsp;</a>: Web service endpoint for courses
                    </li>
                    {/*&nbsp;&nbsp;&nbsp;*/}
                    <li>
                        {/*<a href="http://localhost:8080/api/module">Modules&nbsp;</a>*/}
                        <a href="https://kt-course-manager-server.herokuapp.com/api/module">Modules&nbsp;</a>
                        : Web service endpoint for modules
                    </li>
                    {/*&nbsp;&nbsp;&nbsp;*/}
                    <li>
                        {/*<a href="http://localhost:8080/api/lesson">Lessons&nbsp;</a>*/}
                        <a href="https://kt-course-manager-server.herokuapp.com/api/lesson">Lessons&nbsp;</a>
                        : Web service endpoint for lessons
                    </li>
                    {/*&nbsp;&nbsp;&nbsp;*/}
                    <li>
                        {/*<a href="http://localhost:8080/api/topic">Topics&nbsp;</a>*/}
                        <a href="https://kt-course-manager-server.herokuapp.com/api/topic">Topics&nbsp;</a>
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