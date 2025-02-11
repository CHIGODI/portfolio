import React from "react";
import Nav from "./pages/Header";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Work from "./pages/Work";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


class App extends React.Component {
    render() {
        return (
            <>
                <Nav />
                <About />
                <Skills />
                <Projects />
                <Work />
                <Contact />
                <Footer />
                <ToastContainer />
            </>
        );
    }
}
export default App;
