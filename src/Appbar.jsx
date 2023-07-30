import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";

function Appbar(){
    const navigate = useNavigate();
    const [userEmail, setUserEmail]= useState(null);

    useEffect(()=>{
        fetch("http://localhost:3000/admin/me",{
            method :"GET",
            headers : {
                "Authorization" : "Bearer "+localStorage.getItem("token")
            }
        }).then((res)=>{
            res.json().then((data)=>{
                if(data.username)
                {
                    setUserEmail(data.username);
                }
            })
        })
    }, []);

    if(userEmail)
    {
        return (
        <div style={{
            display:"flex",
            justifyContent:"space-between",
            padding: 4
            }}>
            <div>
                <Typography>Coursera</Typography>
            </div>
            <div style={{display:"flex"}}>
                <div>{userEmail}</div>
                <div style={{marginRight:10}}>
                    <Button variant={"contained"} onClick={()=>
                        {
                            localStorage.setItem("token", null);
                            window.location="/";
                        }}>Log out
                    </Button>
                </div>
            </div>
        </div>
        )
    }
    
    return (
    <div style={{
        display:"flex",
        justifyContent:"space-between",
        padding: 4
        }}>
        <div>
            <Typography>Coursera</Typography>
        </div>
        <div >
            <Button variant={"contained"} onClick={()=>
                {
                    navigate("/signup");
                }}>Sign up
            </Button>
            <Button variant={"contained"}
                onClick={()=>
                {
                    navigate("/signin");
                }}>Sign in
            </Button>
        </div>
    </div>
    )
}
export default Appbar;