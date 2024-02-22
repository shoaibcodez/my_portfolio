import "../index.css";
import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSun, FaMoon } from "react-icons/fa";
import { setMode } from "../state";
import { Squash as Hamburger } from "hamburger-react";
import Sidebar from "./Sidebar";

const Navbar = () => {
    const mode = useSelector((state) => state.app.mode);
    const dispatch = useDispatch();
    const [active, setActive] = useState(false);
    // const toggleNav = () => {
    //     setActive(!active);
    // };

    const toggleMode = () => {
        dispatch(setMode());
    };

    return (
        <>
            <Box
                className="navbar"
                width={"100vw"}
                position={"fixed"}
                top={0}
                zIndex={100}
            >
                <Flex
                    className="navbar-container"
                    // bgColor={
                    //     mode === "light" ? "secondaryLight" : "secondaryDark"
                    // }
                    backdropFilter="auto"
                    backdropBlur={"5px"}
                    color={mode === "light" ? "primaryDark" : "primaryLight"}
                    width={"100vw"}
                    height={"7rem"}
                    padding={"1vh 5vw"}
                    // boxShadow={"0 1px 3px var(--navHover-color)"}
                    boxShadow={
                        " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                    }
                    justifyContent={"space-between"}
                >
                    <Flex
                        className="navbar-left-container"
                        align={"center"}
                        justify={"center"}
                        textAlign={"center"}
                    >
                        <Text
                            _hover={{ cursor: "pointer" }}
                            fontSize={{
                                base: "16px",
                                sm: "20px",
                                lg: "28px",
                                "3xl": "36px",
                            }}
                        >
                            |shoaibcodez|
                        </Text>
                        <Box
                            padding={"0.5rem 0.7rem"}
                            margin={"0 0.7rem"}
                            borderRadius={"5px"}
                            _hover={{
                                background:
                                    mode === "light"
                                        ? "lightHover"
                                        : "darkHover",
                                cursor: "pointer",
                            }}
                            transition={"all 0.1s linear"}
                            onClick={toggleMode}
                        >
                            {mode === "light" ? (
                                <FaSun fontSize={"24px"}></FaSun>
                            ) : (
                                <FaMoon fontSize={"24px"}></FaMoon>
                            )}
                        </Box>
                    </Flex>

                    <Flex
                        className="navbar-right-container"
                        alignItems={"center"}
                        justifyContent={"center"}
                        textAlign={"center"}
                        marginRight={{ xl: "3.5rem", "3xl": "5rem" }}
                        fontSize={{
                            /* sm:- 30em - 480px */
                            /* 2xl:- 96em - 1536px */
                            base: "16px" /* 0em */,
                            md: "16px" /* 48em - 768px */,
                            lg: "18px" /* 62em - 992px */,
                            xl: "22px" /* 80em - 1280px */,
                            "3xl": "28px",
                        }}
                    >
                        <Flex
                            className="nav-item-grp"
                            display={{
                                base: "none",
                                sm: "none",
                                md: "flex",
                                lg: "flex",
                                "3xl": "flex",
                            }}
                        >
                            <Box
                                className="navItem"
                                as="a"
                                href="#home"
                                padding={"1.5rem 0rem"}
                                margin={{ md: "0 1rem", lg: "0 1.5rem" }}
                            >
                                Home
                            </Box>
                            <Box
                                className="navItem"
                                as="a"
                                href="#about"
                                padding={"1.5rem 0rem"}
                                margin={{ md: "0 1rem", lg: "0 1.5rem" }}
                            >
                                About Me
                            </Box>
                            <Box
                                className="navItem"
                                as="a"
                                href="#skills"
                                padding={"1.5rem 0rem"}
                                margin={{ md: "0 1rem", lg: "0 1.5rem" }}
                            >
                                Skills
                            </Box>
                            <Box
                                className="navItem"
                                as="a"
                                href="#projects"
                                padding={"1.5rem 0rem"}
                                margin={{ md: "0 1rem", lg: "0 1.5rem" }}
                            >
                                Projects
                            </Box>
                            <Box
                                className="navItem"
                                as="a"
                                href="#education"
                                padding={"1.5rem 0rem"}
                                margin={{ md: "0 1rem", lg: "0 1.5rem" }}
                            >
                                Education
                            </Box>
                            <Box
                                className="navItem"
                                as="a"
                                href="#contact"
                                padding={"1.5rem 0rem"}
                                margin={{ md: "0 1rem", lg: "0 1.5rem" }}
                            >
                                Contact
                            </Box>
                        </Flex>

                        <Flex
                            display={{
                                base: "flex",
                                sm: "flex",
                                md: "none",
                                lg: "none",
                                "3xl": "none",
                            }}
                            className="hamburger-menu"
                            width={"100%"}
                            justifyContent={"flex-end"}
                            paddingRight={"3rem"}
                        >
                            <Hamburger
                                size={32}
                                toggled={active}
                                toggle={setActive}
                                color={mode === "light" ? "#181818" : "#dfdddd"}
                            />
                        </Flex>
                    </Flex>
                </Flex>
                <Sidebar
                    active={active}
                    setActive={setActive}
                />
            </Box>
        </>
    );
};

export default Navbar;
