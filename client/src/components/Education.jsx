import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { education } from "../data/myData";
import EducationCard from "./EducationCard";
const Education = () => {
    const mode = useSelector((state) => state.app.mode);

    return (
        <Box
            id="education"
            className="education"
            bgColor={mode === "light" ? "primaryLight" : "primaryDark"}
            color={mode === "light" ? "primaryDark" : "primaryLight"}
            // height={"100vh"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            paddingTop={"7rem"}
        >
            <Flex
                className="education-container"
                flexDir={"column"}
                alignItems={"center"}
                adding={"0 6vw"}
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
                        Education
                    </Text>
                </Flex>

                <Flex className="qualifications">
                    <ul style={{ listStyleType: "none" }}>
                        {education.map((edu, key) => (
                            <li>
                                <EducationCard
                                    edu={edu}
                                    key={key}
                                />
                            </li>
                        ))}
                    </ul>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Education;
