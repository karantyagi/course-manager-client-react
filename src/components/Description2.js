import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom'
import CourseService from "../services/CourseService";

export default class Description2
    extends React.Component
{

    render(){

        return(
             <div className="container">

      <div className="card">
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
      </div>
	</div>
        </div>
        );
    }
}