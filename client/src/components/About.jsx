import { Flex, Box, Text, Button } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Bio } from "../data/myData";
import {
    SiCodeforces,
    SiLeetcode,
    SiCodechef,
    SiGeeksforgeeks,
} from "react-icons/si";
import { motion, useScroll } from "framer-motion";

const About = () => {
    const mode = useSelector((state) => state.app.mode);
    const openInNewTab = (url) => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    };
    const scrollYref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollYref,
        offset: ["start end", "center start"],
    });

    return (
        <Box
            id="about"
            className="about"
            bgColor={mode === "light" ? "primaryLight" : "primaryDark"}
            color={mode === "light" ? "primaryDark" : "primaryLight"}
            // height={"100vh"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            paddingTop={"7rem"}
        >
            <Flex
                className="about-container"
                flexDir={"column"}
                gap={"4rem"}
                padding={"0 6vw"}
                width={"100%"}
                maxW={"1536px"} /* 2xl */
            >
                <Flex
                    className="title"
                    fontSize={"h2"}
                    fontWeight={"900"}
                    flexDir={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"3rem"}
                >
                    <Text
                        textDecorationLine={"underline"}
                        textUnderlineOffset={"1rem"}
                    >
                        About
                    </Text>
                    <Text
                        fontSize={"h3"}
                        fontWeight={"700"}
                    >
                        I'm Shoaib Raja Molla
                    </Text>
                </Flex>
                <Box position={"relative"}>
                    <Box
                        as={motion.div}
                        style={{ scaleY: scrollYProgress }}
                        ref={scrollYref}
                        position={"absolute"}
                        left={"8"}
                        top={"0"}
                        height={"100%"}
                        width={"5px"}
                        background={
                            mode === "light" ? "primaryDark" : "primaryLight"
                        }
                        transformOrigin={"top"}
                    />
                    <Box
                        className="description"
                        fontSize={"h5"}
                        padding={"2rem"}
                        ml={"3rem"}
                        // borderLeft={"5px solid var(--navHover-color)"}
                    >
                        <Text>{Bio.description}</Text>
                    </Box>
                    <Flex
                        padding={"2rem"}
                        // borderLeft={"5px solid var(--navHover-color)"}
                        flexDir={"column"}
                        gap={"2rem"}
                        ml={"3rem"}
                    >
                        <Text
                            fontSize={"h4"}
                            fontWeight={"700"}
                        >
                            Competetive Programming :
                        </Text>
                        <Text>
                            <ul style={{ listStyleType: "none" }}>
                                <li>
                                    <span style={{ fontWeight: "900" }}>
                                        --
                                    </span>{" "}
                                    Pupil on Codeforces, max rating – 1316.
                                </li>
                                <li>
                                    <span style={{ fontWeight: "900" }}>
                                        --
                                    </span>{" "}
                                    3 Star on Codechef, max rating – 1678.
                                </li>
                                <li>
                                    <span style={{ fontWeight: "900" }}>
                                        --
                                    </span>{" "}
                                    Solved over 300+ DSA Problems on Leetcode,
                                    max rating – 1555.
                                </li>
                                <li>
                                    <span style={{ fontWeight: "900" }}>
                                        --
                                    </span>{" "}
                                    Achieved 2111th global rank out of 25000
                                    participants in Codeforces Round 860
                                    (Div.2).
                                </li>
                                <li>
                                    <span style={{ fontWeight: "900" }}>
                                        --
                                    </span>{" "}
                                    Achieved 3411th global rank out of 35000
                                    participants in Codeforces Round 834
                                    (Div.3).
                                </li>
                                <li>
                                    <span style={{ fontWeight: "900" }}>
                                        --
                                    </span>{" "}
                                    Achieved 687th global rank out of 3300
                                    participants in Codechef Starters 83
                                    (Div.2).
                                </li>
                            </ul>
                        </Text>
                    </Flex>
                </Box>
                <Flex
                    className="socialLinks-container"
                    justifyContent={"center"}
                    marginTop={"1.5rem "}
                >
                    <Flex
                        zIndex={"1"}
                        onClick={() => openInNewTab(Bio.links.leetcode)}
                        bgColor={
                            mode === "light" ? "primaryDark" : "primaryLight"
                        }
                        color={mode === "light" ? "#00d9ff" : "#008080"}
                        height={"5rem"}
                        width={"5rem"}
                        borderRadius={"100%"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        padding={"1.5rem"}
                        margin={"0 1rem"}
                        cursor={"pointer"}
                        transition={"all 0.2s linear"}
                        _hover={{
                            bgColor: "#FFA116",
                            color: `${mode === "light" ? "#fff" : "#000000"}`,
                        }}
                    >
                        <SiLeetcode size={"3rem"} />
                    </Flex>
                    <Flex
                        zIndex={"1"}
                        onClick={() => openInNewTab(Bio.links.codeforces)}
                        bgColor={
                            mode === "light" ? "primaryDark" : "primaryLight"
                        }
                        color={mode === "light" ? "#00d9ff" : "#008080"}
                        height={"5rem"}
                        width={"5rem"}
                        borderRadius={"100%"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        padding={"1.2rem"}
                        margin={"0 1rem"}
                        cursor={"pointer"}
                        transition={"all 0.2s linear"}
                        _hover={{
                            bgColor: "#1990ce",
                            color: `${mode === "light" ? "#fff" : "#000000"}`,
                        }}
                    >
                        <SiCodeforces size={"3rem"} />
                    </Flex>
                    <Flex
                        zIndex={"1"}
                        onClick={() => openInNewTab(Bio.links.codechef)}
                        bgColor={
                            mode === "light" ? "primaryDark" : "primaryLight"
                        }
                        color={mode === "light" ? "#00d9ff" : "#008080"}
                        height={"5rem"}
                        width={"5rem"}
                        borderRadius={"100%"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        padding={"1.5rem"}
                        margin={"0 1rem"}
                        cursor={"pointer"}
                        transition={"all 0.2s linear"}
                        _hover={{
                            bg: "#905424",
                            color: `${mode === "light" ? "#fff" : "#000000"}`,
                        }}
                    >
                        <SiCodechef size={"3rem"} />
                    </Flex>
                    <Flex
                        zIndex={"1"}
                        onClick={() => openInNewTab(Bio.links.gfg)}
                        bgColor={
                            mode === "light" ? "primaryDark" : "primaryLight"
                        }
                        color={mode === "light" ? "#00d9ff" : "#008080"}
                        height={"5rem"}
                        width={"5rem"}
                        borderRadius={"100%"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        padding={"1.5rem"}
                        margin={"0 1rem"}
                        cursor={"pointer"}
                        transition={"all 0.2s linear"}
                        _hover={{
                            bg: "#2F8D46",
                            color: `${mode === "light" ? "#fff" : "#000000"}`,
                        }}
                    >
                        <SiGeeksforgeeks size={"3rem"} />
                    </Flex>
                </Flex>
                <Flex
                    className="btn-container"
                    justifyContent={"center"}
                >
                    <Button
                        onClick={() => openInNewTab(Bio.links.resume)}
                        transition={"all 0.5s"}
                        _hover={{
                            bg: "var(--html-color)",
                            color: "var(--navHover-color)",
                            boxShadow:
                                "0 0.20em 0.20em -0.1em var(--navHover-color)",
                            transform: "translateY(-0.20em)",
                        }}
                        className="btn-resume"
                        zIndex={"1"}
                        border={
                            mode === "light"
                                ? "1px solid rgb(53, 53, 53)"
                                : "1px solid white"
                        }
                        padding={"1.2rem 1.2rem"}
                        cursor={"pointer"}
                        bgColor={
                            mode === "light" ? "primaryDark" : "primaryLight"
                        }
                        color={
                            mode === "light" ? "primaryLight" : "primaryDark"
                        }
                        sx={{
                            fontSize: "h5",
                            height: "5rem",
                            width: "20rem",
                            borderRadius: "30px",
                        }}
                    >
                        My Resume
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
};

export default About;
