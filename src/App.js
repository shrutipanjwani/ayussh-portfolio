import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Header = React.lazy(() => import("./Components/Header"));
const Footer = React.lazy(() => import("./Components/Footer"));
const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Work = React.lazy(() => import("./Pages/Work"));
const Chat = React.lazy(() => import("./Pages/Chat"));

function App() {
  return (
    <Router>
      <div className="App">
        <React.Suspense
          fallback={
            <div className="loading">
              <p>Loading</p>
            </div>
          }
        >
          <Header />
          <div className="container">
            <div className="wrapper">
              <div className="home">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/about" element={<Work />} />
                  <Route path="/about" element={<Chat />} />
                </Routes>
              </div>
            </div>
          </div>
          <Footer />
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;
