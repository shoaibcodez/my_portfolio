import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
    const mode = useSelector((state) => state.app.mode);

    return (
        <Box
            id="contact"
            className="contact"
            bgColor={mode === "light" ? "primaryLight" : "primaryDark"}
            color={mode === "light" ? "primaryDark" : "primaryLight"}
            height={"100vh"}
            display={"flex"}
            justifyContent={"center"}
            // alignItems={"center"}
            paddingTop={"7rem"}
        >
            <Flex
                className="contact-container"
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
                        Contact
                    </Text>
                </Flex>
                <Flex>
                    <Flex className="text-ontainer">
                        <Text fontSize={"h1"}>Let's Work together</Text>
                    </Flex>
                    <Flex className="form-container"></Flex>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Contact;
