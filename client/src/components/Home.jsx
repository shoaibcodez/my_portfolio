import React from "react";
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import ParticlesBackground from "./particles/ParticlesBackground";
import { Bio } from "../data/myData";
import Typewriter from "typewriter-effect";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import Tilt from "react-parallax-tilt";

const Home = () => {
    const mode = useSelector((state) => state.app.mode);
    const openInNewTab = (url) => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    };

    return (
        <>
            <Box
                id="home"
                position={"relative"}
                height={"100vh"}
                className="home"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                paddingTop={"7rem"}
                bgColor={mode === "light" ? "primaryLight" : "primaryDark"}
                color={mode === "light" ? "primaryDark" : "primaryLight"}
                borderBottom={"1px solid var(--navHover-color)"}
            >
                <Flex
                    className="home-container"
                    padding={"10vh 6vw"}
                    maxW={"1536px"} /* 2xl */
                    width={"100%"}
                    // gap={"10rem"}
                    justifyContent={"space-between"}
                >
                    <Flex
                        className="home-left-conatiner"
                        flexDir={"column"}
                        gap={"4rem"}
                        marginLeft={"5rem"}
                        // width={"60%"}
                    >
                        <Text
                            zIndex={"1"}
                            fontSize={{ base: "h3", lg: "h2" }}
                            fontWeight={"700"}
                            lineHeight={"7rem"}
                        >
                            Hi there, <br /> I'm {Bio.name}
                            <Flex
                                // margin={"1.5rem 0"}
                                gap={"1.2rem"}
                                fontSize={"h4"}
                                fontWeight={"600"}
                                lineHeight={"4rem"}
                            >
                                <p>A</p>
                                <span>
                                    <Typewriter
                                        options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                            </Flex>
                        </Text>
                        <Flex className="btn-container">
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
                                    mode === "light"
                                        ? "primaryDark"
                                        : "primaryLight"
                                }
                                color={
                                    mode === "light"
                                        ? "primaryLight"
                                        : "primaryDark"
                                }
                                sx={{
                                    fontSize: "h6",
                                    height: "5rem",
                                    width: "20rem",
                                    borderRadius: "30px",
                                }}
                            >
                                My Resume
                            </Button>
                        </Flex>
                        <Flex className="socialLinks-container">
                            <Flex
                                zIndex={"1"}
                                onClick={() => openInNewTab(Bio.links.linkedIn)}
                                bgColor={
                                    mode === "light"
                                        ? "primaryDark"
                                        : "primaryLight"
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
                                    bgColor: "#007bb6",
                                    color: `${
                                        mode === "light" ? "#fff" : "#000000"
                                    }`,
                                }}
                            >
                                <BsLinkedin size={"3rem"} />
                            </Flex>
                            <Flex
                                zIndex={"1"}
                                onClick={() => openInNewTab(Bio.links.github)}
                                bgColor={
                                    mode === "light"
                                        ? "primaryDark"
                                        : "primaryLight"
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
                                    bgColor: `${
                                        mode === "light" ? "#0e0e0e" : ""
                                    }`,
                                    color: `${
                                        mode === "light" ? "#fff" : "#000000"
                                    }`,
                                }}
                            >
                                <BsGithub size={"3rem"} />
                            </Flex>
                            <Flex
                                zIndex={"1"}
                                onClick={() => openInNewTab(Bio.links.linkedIn)}
                                bgColor={
                                    mode === "light"
                                        ? "primaryDark"
                                        : "primaryLight"
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
                                    bg: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                                    color: `${
                                        mode === "light" ? "#fff" : "#000000"
                                    }`,
                                }}
                            >
                                <BsInstagram size={"3rem"} />
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex
                        className="home-right-conatiner"
                        marginRight={"5rem"}
                        zIndex={"1"}
                    >
                        <Tilt
                            tiltMaxAngleX={"10"}
                            tiltMaxAngleY={"10"}
                        >
                            <Flex
                                className="image-container"
                                justifyContent={"center"}
                                alignItems={"center"}
                            >
                                <Image
                                    zIndex={"1"}
                                    cursor={"pointer"}
                                    borderRadius="50%"
                                    boxSize="35rem"
                                    src="https://www.shareicon.net/data/256x256/2016/05/24/770085_man_512x512.png"
                                    alt=""
                                />
                            </Flex>
                        </Tilt>
                    </Flex>
                </Flex>
                <ParticlesBackground />
            </Box>
        </>
    );
};

export default Home;
