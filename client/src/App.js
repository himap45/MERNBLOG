import Home from "./pages/home/Home";
import Post from "./components/post/Post";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SinglePost from "./components/singlepost/SinglePost";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <>
     <TopBar />
     <Routes>
        <Route path="/" element={<Home/>} ></Route>
       <Route path="/register" element={user ? <Home />:<Register/>}></Route>
       <Route path="/post/:id" element={<SinglePost/>}></Route>
       <Route path="/login" element={user ? <Home/>:<Login/>}></Route>
       <Route path="/write" element={user ? <Write/>:<Login/>}></Route>
       <Route path="/settings" element={user ? <Settings/>:<Login/>}></Route>
        </Routes>
        </>
    </Router>  
  );
}
export default App;
