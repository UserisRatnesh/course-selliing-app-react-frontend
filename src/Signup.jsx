import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import {Typography} from "@mui/material";
import { useState } from "react";
import axios from "axios";

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
                        axios.post("http://localhost:3000/admin/signup",{
                            username : email,
                            password : password
                        }).then((res)=>{
                            console.log(res.data);
                            localStorage.setItem("token", res.data.token);
                            window.location="/admin/me";
                        });
                    }}
                >Sign Up</Button>
            </Card>
        </div>
    </div>
}

export default Signup;
