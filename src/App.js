import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeTemplate from "./template/HomeTemplate";
import Home from "./template/HomeTemplate/Home";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route path="" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="news" element={<News />} />
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
