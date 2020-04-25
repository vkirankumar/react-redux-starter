import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";


class CoursesPage extends React.Component {

    /*constructor(props) {
        super(props);
        this.state = {
            course :{
                title: ""
            }
        }
    }*/
    state = {
        course :{
            title: ""
        }
    }

    handleCourseChange = event => {
        const course = {...this.state.course, title: event.target.value};
        this.setState({course});
    }

    onSubmit = event => {
        event.preventDefault();
        debugger;
        this.props.createCourse(this.state.course);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input type="text" onChange={this.handleCourseChange} value={this.state.course.title}/>
                <input type="submit" value="Submit"/>
                {
                    this.props.courses.map(course => (
                    <div key={course.title}>{course.title}</div>
                    ))
                }
            </form>           
        );
    }
}

CoursesPage.propTypes = {
    createCourse: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    createCourse: (course) => dispatch(courseActions.createCourse(course))
});

const mapStateToProps = (state) => ({
    courses: state.courses
});

export default connect(mapStateToProps, mapDispatchToProps) (CoursesPage);