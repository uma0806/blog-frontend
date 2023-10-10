import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleBlog from "./pages/SingleBlog";

import NavBar from "./components/Navbar"
import Footer from "./components/RecentPosts/Footer"
import { Container } from "@chakra-ui/react";
import Login from "./pages/Login";


function App() {

  return (
    <div style={{minHeight: "100vh"}}  >
      <NavBar/>
      <Routes>
        <Route element={<HomePage/>} path="/" />
        <Route element={<SingleBlog/>} path="/:id" />
        <Route element={<Login/>} path="/login" />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
