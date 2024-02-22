import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Sidebar = ({ active, setActive }) => {
    const mode = useSelector((state) => state.app.mode);

    return (
        <>
            <Flex
                display={{
                    base: "flex",
                    sm: "flex",
                    md: "none",
                    lg: "none",
                    "3xl": "none",
                }}
                className={`sidebar-container ${active ? "active" : ""}`}
                // bgColor={mode === "light" ? "primaryLight" : "primaryDark"}
                backdropFilter="auto"
                backdropBlur={"5px"}
                color={mode === "light" ? "primaryDark" : "primaryLight"}
                position={"fixed"}
                width={"100%"}
                height={"100vh"}
                transform={"translateX(100%)"}
                transition={"all 0.5s ease-in-out"}
                // borderTop={"1px solid var(--navHover-color)"}
            >
                <Flex
                    width={"40%"}
                    textAlign={"center"}
                    justify={"center"}
                >
                    <ul style={{ listStyleType: "none" }}>
                        <li>
                            <Box
                                className="navItem"
                                as="a"
                                href="#home"
                                margin={"0rem 1.2rem"}
                                padding={"1.5rem 0rem"}
                                onClick={() => setActive(false)}
                                textUnderlineOffset={"0.5rem"}
                                textDecoration={"underline"}
                            >
                                Home
                            </Box>
                        </li>
                        <li>
                            <Box
                                className="navItem"
                                as="a"
                                href="#about"
                                margin={"0rem 1.2rem"}
                                padding={"1.5rem 0rem"}
                                onClick={() => setActive(false)}
                                textUnderlineOffset={"0.5rem"}
                                textDecoration={"underline"}
                            >
                                About Me
                            </Box>
                        </li>
                        <li>
                            <Box
                                className="navItem"
                                as="a"
                                href="#skills"
                                margin={"0rem 1.2rem"}
                                padding={"1.5rem 0rem"}
                                onClick={() => setActive(false)}
                                textUnderlineOffset={"0.5rem"}
                                textDecoration={"underline"}
                            >
                                Skills
                            </Box>
                        </li>
                        <li>
                            <Box
                                className="navItem"
                                as="a"
                                href="#projects"
                                margin={"0rem 1.2rem"}
                                padding={"1.5rem 0rem"}
                                onClick={() => setActive(false)}
                                textUnderlineOffset={"0.5rem"}
                                textDecoration={"underline"}
                            >
                                Projects
                            </Box>
                        </li>
                        <li>
                            <Box
                                className="navItem"
                                as="a"
                                href="#education"
                                margin={"0rem 1.2rem"}
                                padding={"1.5rem 0rem"}
                                onClick={() => setActive(false)}
                                textUnderlineOffset={"0.5rem"}
                                textDecoration={"underline"}
                            >
                                Education
                            </Box>
                        </li>
                        <li>
                            <Box
                                className="navItem"
                                as="a"
                                href="#contact"
                                margin={"0rem 1.2rem"}
                                padding={"1.5rem 0rem"}
                                onClick={() => setActive(false)}
                                textUnderlineOffset={"0.5rem"}
                                textDecoration={"underline"}
                            >
                                Contact
                            </Box>
                        </li>
                    </ul>
                </Flex>
            </Flex>
        </>
    );
};

export default Sidebar;
