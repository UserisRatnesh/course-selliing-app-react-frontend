import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { useState } from "react";
import {Typography} from "@mui/material";

function Addcourse(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
    <div style={{
            paddingTop:150,
            marginBottom:10,
            display: "flex",
            justifyContent: "center"
        }}>
            <Typography variant={"h6"}>
                Course Details !
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
                        label="title" 
                        variant="outlined" 
                    />
                    <br/><br/>
                    <TextField 
                        onChange = {(e)=>{
                            setDescription(e.target.value);
                        }}
                        fullWidth={true} 
                        label="description" 
                        variant="outlined" 
                    />
                    <br/><br/>
                    <Button 
                        size={"large"}
                        variant="contained"
                        onClick={()=>{
                            fetch("http://localhost:3000/admin/courses",{
                                method : "POST",
                                body : JSON.stringify({
                                    title : title,
                                    description : description,
                                    imgLink : "",
                                    published : true
                                }),
                                headers : {
                                    "Content-type" : "application/json",
                                    "Authorization" : "Bearer "+localStorage.getItem("token")
                                }
                            }).then((res)=>{
                                res.json().then((data)=>{
                                    console.log(data);
                                    alert("course added successfully");
                                })
                            });
                        }}
                    >Add course</Button>
                </Card>
        </div>
    </div>
}

export default Addcourse;