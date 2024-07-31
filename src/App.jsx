import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Courses from './pages/Courses';
import DetailCourse from './pages/DetailCourse';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import CourseSuccess from './pages/CourseSuccess';
import AllBlogs from './pages/AllBlog';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/detail" element={<DetailCourse />} />
          <Route path="/course/success" element={<CourseSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
