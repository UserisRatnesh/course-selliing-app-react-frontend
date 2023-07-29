import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import Signup from './Signup.jsx';
import Signin from './Signin.jsx';
import Appbar from "./Appbar.jsx";
import Addcourse from "./Addcourse.jsx";


function App() {
  
  return (
    <div style={{
      backgroundColor : "#eeeeee",
      width: "100vw",
      height: "100vh"
      }}>
      <Router>
        <Appbar></Appbar>
          <Routes>
            <Route path="/addcourse" element={<Addcourse />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
