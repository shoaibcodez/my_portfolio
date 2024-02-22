import React from "react";
import { useSelector } from "react-redux";
import { Flex, Text, Image } from "@chakra-ui/react";

const SkillBox = ({ skill }) => {
    const mode = useSelector((state) => state.app.mode);

    return (
        <Flex
            maxW={{ base: "35rem", lg: "35rem", xl: "45rem" }}
            padding={"1.8rem 3rem"}
            flexDir={"column"}
            borderRadius={"3rem"}
            // boxShadow={" 0px 2px 10px 0px var(--navHover-color)"}
            boxShadow={
                " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            }
            gap={"2rem"}
            justifyContent={"center"}
            paddingBottom={"3rem"}
        >
            <Text
                textAlign={"center"}
                fontSize={"h4"}
                fontWeight={"600"}
            >
                {skill.title}
            </Text>
            <Flex
                flexWrap={"wrap"}
                justifyContent={"center"}
                gap={{ base: "1rem", lg: "1.2rem" }}
            >
                {skill.skills.map((item) => (
                    <Flex
                        border={
                            mode === "light"
                                ? "1px solid rgb(53, 53, 53)"
                                : "1px solid white"
                        }
                        padding={{
                            base: "0.8rem 1rem",
                            lg: "1.2rem 1.6rem",
                        }}
                        borderRadius={"1.2rem"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={"0.8rem"}
                    >
                        <Image
                            backgroundColor={"rgb(0,0,0,0.9)"}
                            borderRadius={"full"}
                            padding={"0.6rem"}
                            boxSize={{
                                base: "2.5rem",
                                lg: "3rem",
                            }}
                            src={item.image}
                        />
                        {item.name}
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};

export default SkillBox;
