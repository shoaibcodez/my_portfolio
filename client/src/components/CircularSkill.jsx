import React from "react";
import {
    Box,
    CircularProgress,
    CircularProgressLabel,
    Flex,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const CircularSkill = ({ name, value }) => {
    const mode = useSelector((state) => state.app.mode);
    const color = mode === "light" ? "primaryDark" : "primaryLight";
    const trackColor = mode === "light" ? "primaryLight" : "primaryDark";
    // console.log(trackColor);
    return (
        <Flex
            className="circular-skill"
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Box fontSize={{ base: "1.2rem", sm: "1.5rem", md: "2rem" }}>
                {name}
            </Box>
            <CircularProgress
                size={{ base: "6rem", md: "8rem", lg: "10rem" }}
                color={color}
                trackColor={trackColor}
                thickness={"0.5rem"}
                value={value}
                capIsRound
            >
                <CircularProgressLabel>{value}%</CircularProgressLabel>
            </CircularProgress>
        </Flex>
    );
};

export default CircularSkill;
