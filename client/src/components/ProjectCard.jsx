import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

const ProjectCard = ({ proj }) => {
    const mode = useSelector((state) => state.app.mode);
    const openInNewTab = (url) => {
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
    };

    return (
        <Flex
            className="project-card"
            flexDirection={"column"}
            width={"30rem"}
            minH={"5rem"}
            margin={"2rem"}
            borderRadius={"15px"}
            // boxShadow={
            //     " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
            // }
            boxShadow={
                " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            }
        >
            <Flex
                className="img-container"
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Image
                    height={"200px"}
                    width={"200px"}
                    objectFit={"cover"}
                    src={proj.image}
                    borderRadius={"10px"}
                    margin={"2rem 1rem 0"}
                />
                {/* <Text>{proj.category}</Text> */}
            </Flex>
            <Flex
                justifyContent={"space-evenly"}
                margin={"1.5rem 0"}
            >
                <Flex
                    onClick={() => openInNewTab(proj.link)}
                    border={
                        mode === "light"
                            ? "1px solid rgb(53, 53, 53)"
                            : "1px solid white"
                    }
                    _hover={{
                        background:
                            mode === "light" ? "lightHover" : "darkHover",
                        cursor: "pointer",
                    }}
                    transition={"all 0.1s linear"}
                    borderRadius={"20px"}
                    padding={"0.6rem 1.5rem"}
                >
                    <AiFillEye size={"2.5rem"} />
                </Flex>
                <Flex
                    onClick={() => openInNewTab(proj.github)}
                    border={
                        mode === "light"
                            ? "1px solid rgb(53, 53, 53)"
                            : "1px solid white"
                    }
                    _hover={{
                        background:
                            mode === "light" ? "lightHover" : "darkHover",
                        cursor: "pointer",
                    }}
                    transition={"all 0.1s linear"}
                    borderRadius={"20px"}
                    padding={"0.6rem 1.5rem"}
                >
                    <AiFillGithub size={"2.5rem"} />
                </Flex>
            </Flex>
            <Text
                textAlign={"center"}
                fontSize={"h4"}
            >
                {proj.name}
            </Text>
            <Text
                textAlign={"center"}
                margin={"-0.5rem 0 1rem 0 "}
            >
                {proj.desc}
            </Text>
        </Flex>
    );
};

export default ProjectCard;
