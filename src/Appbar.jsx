import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Appbar(){
    const navigate = useNavigate();
    return (
    <div style={{
        display:"flex",
        justifyContent:"space-between",
        padding: 4
        }}>
        <div>
            <Typography>Coursera Appbar</Typography>
        </div>
        <div>
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