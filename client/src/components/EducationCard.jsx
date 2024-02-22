import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const EducationCard = ({ edu }) => {
    const mode = useSelector((state) => state.app.mode);
    console.log(edu);
    return (
        <Flex
            className="education-card"
            paddingBottom={"2rem"}
            gap={"1rem"}
            margin={{
                base: "0 1rem",
                sm: "0 4rem",
                md: " 0 6rem",
                lg: "0 10rem",
            }}
        >
            <Flex
                flexDir={"column"}
                alignItems={"center"}
                gap={"2rem"}
            >
                <Flex
                    className="list-circle"
                    borderStyle={"solid"}
                    borderWidth={"3px"}
                    padding={"4px"}
                    borderRadius={"50%"}
                    bgColor={"transparent"}
                    borderColor={
                        mode === "light" ? "primaryDark" : "primaryLight"
                    }
                    boxShadow={"none"}
                    // margin={"1.2rem 0rem"}
                />
                <Flex
                    className="vertical-line"
                    flexGrow={"1"}
                    width={"2px"}
                    backgroundColor={
                        mode === "light" ? "primaryDark" : "primaryLight"
                    }
                />
            </Flex>

            <Flex
                className="education-content"
                width={"100%"}
                maxWidth={"1000px"}
                boxShadow={
                    " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                }
                borderRadius={"15px"}
                border={
                    mode === "light"
                        ? "1px solid rgb(53, 53, 53)"
                        : "1px solid white"
                }
                margin={"1rem 0 0.5rem 0"}
                padding={"1.2rem 1.6rem"}
                flexDir={"column"}
                gap={"1.2rem"}
            >
                <Flex gap={"1.2rem"}>
                    <Image
                        marginTop={"0.4rem"}
                        height={"50px"}
                        width={"50px"}
                        src={edu.img}
                        borderRadius={"10px"}
                        objectFit={"cover"}

                        // margin={"2rem 1rem 0"}
                    />
                    <Flex flexDir={"column"}>
                        <Text
                            fontSize={"1.8rem"}
                            fontWeight={"600"}
                        >
                            {edu.school}
                        </Text>
                        <Text
                            fontSize={"1.4rem"}
                            fontWeight={"500"}
                        >
                            {edu.degree}
                        </Text>
                        <Text
                            fontSize={"1.2rem"}
                            fontWeight={"400"}
                        >
                            {edu.date}
                        </Text>
                    </Flex>
                </Flex>
                <Text
                    fontSize={"1.5rem"}
                    fontWeight={"500"}
                >
                    {`Grade: ${edu.grade}`}
                </Text>
                <Text
                    fontWeight={"500"}
                    marginBottom={"1rem"}
                >
                    {edu.desc}
                </Text>
            </Flex>

            <Flex
                flexDir={"column"}
                alignItems={"center"}
                gap={"2rem"}
            >
                <Flex
                    className="list-circle"
                    borderStyle={"solid"}
                    borderWidth={"3px"}
                    padding={"4px"}
                    borderRadius={"50%"}
                    bgColor={"transparent"}
                    borderColor={
                        mode === "light" ? "primaryDark" : "primaryLight"
                    }
                    boxShadow={"none"}
                    // margin={"1.2rem 0rem"}
                />
                <Flex
                    className="vertical-line"
                    flexGrow={"1"}
                    width={"2px"}
                    backgroundColor={
                        mode === "light" ? "primaryDark" : "primaryLight"
                    }
                />
            </Flex>
        </Flex>
    );
};

export default EducationCard;
