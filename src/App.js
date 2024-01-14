// import logo from './logo.svg';
import './styles/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import UserHub from './pages/userHub.js';
import SignUp from './pages/signup.js';
import WLHub from './pages/WLHub.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
          }/>
          <Route path="/join" element={<SignUp />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/userpage" element={<UserHub />}/>
          <Route path="/group" element={<WLHub />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
