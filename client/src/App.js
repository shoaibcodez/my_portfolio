import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setViewportSize } from "./state";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.app.mode);

    useEffect(() => {
        const updateDimension = () => {
            dispatch(
                setViewportSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                })
            );
        };
        window.addEventListener("resize", updateDimension);

        return () => {
            window.removeEventListener("resize", updateDimension);
        };
    }, []);

    const changeBodyColor = () => {
        // document.documentElement.style.setProperty(
        //     "--html-color",
        //     mode === "light" ? "#dfdddd" : "#181818"
        // );
        document.documentElement.style.setProperty(
            "--html-color",
            mode === "light" ? "#f7f7f7" : "#181818"
        );
        // document.documentElement.style.setProperty(
        //     "--navHover-color",
        //     mode === "dark" ? "#dfdddd" : "#181818"
        // );
        document.documentElement.style.setProperty(
            "--navHover-color",
            mode === "dark" ? "#f7f7f7" : "#181818"
        );
    };
    useEffect(() => {
        changeBodyColor();
    }, [mode]);

    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Project />
            <Education />
            <Contact />
        </>
    );
}

export default App;
