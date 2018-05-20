import React, {Component} from 'react';
import CourseCard from '../components/CourseCard'
import BlankCourseCard from '../components/BlankCourseCard'
import CourseService from '../services/CourseService'

var decks;
var grid;
var total;

export default
    class CourseDeck extends React.Component {


    constructor() {
        super();
        this.courseService = CourseService.instance;
        decks = 1;
        grid = new Array(10);
        total = 0;
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);


    }


        titleChanged(event) {
            this.setState({
                course: { title: event.target.value }
            });
            //console.log(this.state);

        }
        createCourse() {
            // this.courseService
            //     .createCourse(this.state.course)
            //     .then(() => { this.findAllCourses(); });
            console.log("create course");
            console.log(this.state);
            this.courseService
                .createCourse(this.state.course)
                .then(() => { this.findAllCourses(); });


        }

        // componentDidMount() {
        //     this.courseService.findAllCourses()
        //         .then((courses) => {
        //
        //             this.setState({courses: courses});
        //         });
        //
        // }

        componentDidMount() {
            this.findAllCourses();
        }

        findAllCourses() {
            this.courseService
                .findAllCourses()
                .then((courses) => {
                    console.log("No. of Courses: ", courses.length);
                    total = courses.length;
                    this.setState({courses: courses});
                })
        }

        // renderCourseCards(){
        //     let courses = null;
        //   //  console.log("render course cards")
        //    // console.log(this.state)
        //     if(this.state) {
        //         courses = this.state.courses.map(
        //             function (course) {
        //                 return <CourseCard key={course.id}
        //                                    course={course}/>
        //             })
        //
        //         decks = Math.ceil(courses.length/4);
        //        // console.log("Decks: ", decks);
        //
        //
        //         for (var i = 0; i < decks; i++) {
        //             grid[i] = new Array(4);
        //         }
        //
        //         var courseCounter = 0;
        //         for(var m=0;m<decks;m++){
        //             for(var n=0;n<4;n++){
        //                 if(courseCounter<total){
        //                     //console.log("Course: ",courses[courseCounter]);
        //                     grid[m][n] = courses[courseCounter];
        //                     //console.log("Grid: ",grid[m][n]);
        //                 courseCounter++;}
        //                 else{break;}
        //             }
        //         }
        //     }
        //     return courses;
        // }

        renderGrid() {
            return(
                <div>
                    {this.renderDecks()}
                </div>)

        }


        renderDecks(){

            let courses = null;


            if(this.state) {
                //console.log(this.state);
               //console.log("inside renderdecks IF")
                courses = this.state.courses.map(
                    function (course) {
                        return <CourseCard key={course.id}
                                           course={course}/>
                    })

                decks = Math.ceil(courses.length / 4);
                //console.log("Decks: ", decks);

                var counter = 0;
                let cardDecks = [];
                let singleDeck;
                var four = [];

                for(var i =0;i< decks;i++) {
                    for (var j = 0; j < 4; j++) {
                        if(counter<total){
                           // console.log("Course ",counter," : ",courses[counter]);
                            four.push(courses[counter]);
                            counter++;
                        }
                         else{four.push(<BlankCourseCard key={(Math.random()).toString()+"CD"}/>)}
                    }
                    // console.log("four -> ",four);
                    singleDeck = (<div className="card-deck mb-4 m4-2 ml-2" key={(counter).toString()+"CD"}>{four}</div>);
                    cardDecks.push(singleDeck);
                   // console.log("Single deck -> ",singleDeck);
                    four = [];
                }

                return(
                    <div className="card-deck">
                        {cardDecks}
                    </div>)
            }

            else{
                return(
                    <div className="card-deck">
                    </div>)


            }


            }


            render() {
        return (

            <div>
            <div className="row">
                <div className="col-7">
                    <h2>&nbsp;Courses</h2>
                </div>
                <div className="col-4 mr-0">
                    <input onChange={this.titleChanged}
                           className="form-control" id="titleFld"
                           placeholder="cs101"></input>
                </div>
                <div className="col-1">
                    <button onClick={this.createCourse} className="delete btn btn-outline-danger">
                        <i className="fa fa-plus fa-1x"></i>
                    </button>
                </div>
            </div>

            <br/>

            <div>
                    {this.renderGrid()}
            </div>

            </div>
        )
    }
}

