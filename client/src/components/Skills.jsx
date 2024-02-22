import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import CircularSkill from "./CircularSkill";
import { skills } from "../data/myData";
import SkillBox from "./SkillBox";

const Skills = () => {
    const mode = useSelector((state) => state.app.mode);

    return (
        <Box
            id="skills"
            className="skills"
            bgColor={mode === "light" ? "primaryLight" : "primaryDark"}
            color={mode === "light" ? "primaryDark" : "primaryLight"}
            // height={"100vh"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            paddingTop={"7rem"}
        >
            <Flex
                className="skills-container"
                flexDir={"column"}
                padding={"0 6vw"}
                width={"100%"}
                maxW={"1536px"} /* 2xl */
                gap={"6rem"}
            >
                <Flex
                    className="title"
                    fontSize={"h2"}
                    fontWeight={"900"}
                    justifyContent={"center"}
                >
                    <Text
                        textDecorationLine={"underline"}
                        textUnderlineOffset={"1rem"}
                    >
                        Skills
                    </Text>
                </Flex>
                <Flex
                    className="circular-skill-container"
                    // width={"80%"}
                    justifyContent={"space-evenly"}
                >
                    <CircularSkill
                        name={"Programming"}
                        value={90}
                    />
                    <CircularSkill
                        name={"Developing"}
                        value={80}
                    />
                    <CircularSkill
                        name={"Creativity"}
                        value={75}
                    />
                    <CircularSkill
                        name={"Communication"}
                        value={85}
                    />
                </Flex>
                <Flex
                    className="tech-skill-container"
                    flexDir={"column"}
                    gap={{
                        base: "4rem",
                        md: "6rem",
                        xl: "6rem",
                        "2xl": "8rem",
                        "3xl": "12rem",
                    }}
                    // maxW={"140rem"}
                >
                    <Flex
                        gap={{
                            base: "4rem",
                            md: "6rem",
                            lg: "0rem",
                        }}
                        flexDir={{ base: "column", lg: "row" }}
                        justifyContent={"space-around"}
                        alignItems={{ base: "center", lg: "stretch" }}
                    >
                        <SkillBox skill={skills[0]} />
                        <SkillBox skill={skills[1]} />
                    </Flex>
                    <Flex
                        gap={{
                            base: "4rem",
                            md: "6rem",
                            lg: "0rem",
                        }}
                        flexDir={{ base: "column", lg: "row" }}
                        justifyContent={"space-around"}
                        alignItems={{ base: "center", lg: "stretch" }}
                    >
                        <SkillBox skill={skills[2]} />
                        <SkillBox skill={skills[3]} />
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Skills;
