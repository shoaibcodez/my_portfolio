import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Category } from "../data/myData";
import { Projects } from "../data/myData";
import ProjectCard from "./ProjectCard";

const Project = () => {
    const mode = useSelector((state) => state.app.mode);
    const [projects, setProjects] = useState([]);
    const [activeBtn, setActiveBtn] = useState("all");
    const [limit, setLimit] = useState(3);

    const changeCategory = (cat) => {
        setLimit(3);
        setActiveBtn(cat);
        if (cat === "all") {
            setProjects([...Projects]);
            return;
        }
        let arr = Projects.filter((proj) => proj.category === cat);
        setProjects([...arr]);
    };

    useEffect(() => {
        changeCategory("all");
    }, []);

    return (
        <Box
            id="projects"
            className="projects"
            bgColor={mode === "light" ? "primaryLight" : "primaryDark"}
            color={mode === "light" ? "primaryDark" : "primaryLight"}
            // height={"100vh"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            paddingTop={"7rem"}
        >
            <Flex
                className="projects-container"
                flexDir={"column"}
                alignItems={"center"}
                padding={"0 6vw"}
                width={"100%"}
                maxW={"1536px"} /* 2xl */
                gap={"4rem"}
            >
                <Flex
                    className="title"
                    fontSize={"h2"}
                    fontWeight={"900"}
                >
                    <Text
                        textDecorationLine={"underline"}
                        textUnderlineOffset={"1rem"}
                    >
                        Projects
                    </Text>
                </Flex>

                <Flex
                    className="category-buttons"
                    maxW={"550px"}
                    textTransform={"capitalize"}
                >
                    {Category.map((cat, key) => (
                        <Flex
                            key={key}
                            className={activeBtn === cat ? "click-color" : ""}
                            onClick={() => changeCategory(cat)}
                            alignItems={"center"}
                            justifyContent={"center"}
                            cursor={"pointer"}
                            _hover={{ bg: "#313bac", color: "white" }}
                            minW={{
                                base: "4rem",
                                sm: "5rem",
                                md: "6rem",
                            }}
                            margin={{ base: "0 0.2rem", sm: "0 0.5rem" }}
                            fontSize={{
                                base: "1rem",
                                sm: "1.2rem",
                                md: "1.6rem",
                            }}
                            padding={{ base: "0.5rem", md: "1rem" }}
                            borderRadius={"1rem"}
                            border={
                                mode === "light"
                                    ? "1px solid rgb(53, 53, 53)"
                                    : "1px solid white"
                            }
                        >
                            {cat}
                        </Flex>
                    ))}
                </Flex>

                <Flex
                    className="project-cards"
                    flexWrap={"wrap"}
                    justifyContent={"center"}
                >
                    {projects.map(
                        (proj, key) =>
                            key < limit && (
                                <ProjectCard
                                    proj={proj}
                                    key={key}
                                />
                            )
                    )}
                </Flex>

                {limit < projects.length && (
                    <Flex
                        onClick={() => setLimit(limit + 3)}
                        width={"15rem"}
                        className="click-color"
                        alignItems={"center"}
                        justifyContent={"center"}
                        padding={{ base: "0.5rem", md: "1rem" }}
                        borderRadius={"1rem"}
                    >
                        Load more
                    </Flex>
                )}
            </Flex>
        </Box>
    );
};

export default Project;
