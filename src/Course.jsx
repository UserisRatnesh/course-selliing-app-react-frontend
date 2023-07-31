import { useParams} from "react-router-dom";
import{ useState, useEffect } from "react";
import { Card } from "@mui/material";
import { Typography,TextField,Button } from '@mui/material';

function Course(){

    let {courseId} = useParams();
    const [courses, setCourses] = useState([]);

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

    const course = courses.find((c) => c.id == courseId);
  
    if (!course) {
      return <div>Course not found</div>;
    }
  
    return <div>
    <CourseCard course={course}></CourseCard>
    <UpdateCard course={course}></UpdateCard>
    </div>
  }

function CourseCard(props){
    const course=props.course;
    return <div style={{display:"flex", justifyContent:"center"}}>
        <Card style={{
            margin: 10,
            width : 200,
            minHeight : 200
        }}>
            <Typography textAlign="center" variant='h5'>{course.title}</Typography>
            <br/>
            <Typography textAlign="center" variant='subtitle1'>{course.description}</Typography>
            <img style={{height : 200 ,width : 200}} src={course.imgLink} alt="image"></img>
        </Card>
    </div>
}

function UpdateCard(props){
    const course=props.course;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageLink, setImageLink] = useState("");
    return <div>
    <div style={{
            paddingTop:150,
            marginBottom:10,
            display: "flex",
            justifyContent: "center"
        }}>
            <Typography variant={"h6"}>
                Update Course Details
            </Typography>
        </div>
        <div style={{
                display: "flex",
                justifyContent: "center"
                }}>
                <Card variant={"outlined"} style={{
                    width: 400,
                    padding: 20
                    }}>
                    <TextField 
                        onChange = {(e)=>{
                            setTitle(e.target.value);
                        }}
                        fullWidth={true} 
                        label="Title" 
                        variant="outlined" 
                    />
                    <br/><br/>
                    <TextField 
                        onChange = {(e)=>{
                            setDescription(e.target.value);
                        }}
                        fullWidth={true} 
                        label="Description" 
                        variant="outlined" 
                    />
                    <br/><br/>
                    <TextField 
                        onChange = {(e)=>{
                            setImageLink(e.target.value);
                        }}
                        fullWidth={true} 
                        label="ImageLink" 
                        variant="outlined" 
                    />
                    <br/><br/>
                    <Button 
                        size={"large"}
                        variant="contained"
                        onClick={()=>{
                            fetch("http://localhost:3000/admin/courses/"+course.id,{
                                method : "PUT",
                                body : JSON.stringify({
                                    title : title,
                                    description : description,
                                    imgLink : imageLink,
                                    published : true
                                }),
                                headers : {
                                    "Content-type" : "application/json",
                                    "Authorization" : "Bearer "+localStorage.getItem("token")
                                }
                            }).then((res)=>{
                                res.json().then((data)=>{
                                    console.log(data);
                                    alert("course updated successfully");
                                })
                            });
                        }}
                    >Update course</Button>
                </Card>
        </div>
    </div>
}


export default Course;