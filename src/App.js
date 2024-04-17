import React from "react";
import Nav from "./pages/Header";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Counter from "./components/Counter";
import TypingAnimation from "./components/TypingAnimation";



class App extends React.Component {
    render() {
        return (
            <>
                <Nav />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer /> 
            </>
        );
    }
}
export default App;
