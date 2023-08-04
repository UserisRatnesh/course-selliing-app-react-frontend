import React from 'react';
import{ useState, useEffect } from "react";
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import { atom } from "recoil";

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
                setCourses(data.courses);   //We get data with a key - "courses" which stores the array of courses.
            })
        })
    },[])
    return (
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
        {courses.map(createCourse)}
    </div>)
}

function createCourse(course){
    return <div>
        <Course key={course.id}  imageLink={course.imgLink} title={course.title} description={course.description}></Course>
    </div>
}
function Course(props){
    return <Card style={{
        margin: 10,
        width : 200,
        minHeight : 200
    }}>
        <Typography textAlign="center" variant='h5'>{props.title}</Typography>
        <br/>
        <Typography textAlign="center" variant='subtitle1'>{props.description}</Typography>
        <img style={{height : 200 ,width : 200}} src={props.imageLink} alt="image"></img>
    </Card>
}
export default Courses;


const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });