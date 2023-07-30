import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import {Typography} from "@mui/material";
import { useState } from "react";

function Signup(){
    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");
    
    return <div >
        <div style={{
            paddingTop:150,
            marginBottom:10,
            display: "flex",
            justifyContent: "center"
        }}>
            <Typography variant={"h6"}>
                Welcome to Coursera. Sign Up below!
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
                        setEmail(e.target.value);
                    }}
                    fullWidth={true} 
                    label="Email" 
                    variant="outlined" />
                <br/><br/>
                <TextField 
                    onChange = {(e)=>{
                        setPassword(e.target.value);
                    }}
                    fullWidth={true} 
                    type="password" 
                    label="Password" 
                    variant="outlined" />
                <br/><br/>
                <Button 
                    size={"large"}
                    variant="contained"
                    onClick={()=>{
                        fetch("http://localhost:3000/admin/signup",{
                            method : "POST",
                            body : JSON.stringify({
                                username : email,
                                password : password
                            }),
                            headers : {
                                "Content-type" : "application/json"
                            }
                        }).then((res)=>{
                            res.json().then((data)=>{
                                localStorage.setItem("token",data.token);
                                console.log(data);
                            })
                        });
                    }}
                >Sign Up</Button>
            </Card>
        </div>
    </div>
}

export default Signup;
