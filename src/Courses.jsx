import React from 'react';
import{ useState, useEffect } from "react";

function Courses(){
    const [courses, setCourses]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/admin/courses",{
            method : "GET",
            headers : {
                "Authorization" : "Bearer "+localStorage.getItem("token")
            }
        }).then((res)=>{
            res.json().then((data)=>{
                console.log(data);
                setCourses(data);
            })
        })
    },[])
    return (
    <div>
        <h3>courses</h3>
        {/* {courses.map(createCourse)} */}
    </div>)
}

function createCourse(course){
    return <div>
        <Course title={course.title} description={course.description}></Course>
    </div>
}
function Course(props){
    return <div>
        {props.title}
        <br/>
        {props.description}
    </div>
}
export default Courses;