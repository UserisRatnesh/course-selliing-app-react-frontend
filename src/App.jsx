import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import Signup from './Signup.jsx';
import Signin from './Signin.jsx';
import Appbar from "./Appbar.jsx";
import Addcourse from "./Addcourse.jsx";
import Courses from "./Courses.jsx"
import Course from "./Course.jsx";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  
  return (
    <div style={{
      backgroundColor : "#eeeeee",
      width: "100vw",
      height: "100vh"
      }}>
      <RecoilRoot>
        <Router>
          <Appbar></Appbar>
            <Routes>
              <Route path="/courses" element={<Courses />} />
              <Route path="/course/:courseId" element={<Course />} />
              <Route path="/addcourse" element={<Addcourse />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
