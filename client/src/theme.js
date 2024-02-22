import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        // body: "Poppins, sans-serif",
        body: "Josefin Sans, sans-serif",
        heading: "Poppins, sans-serif",
        mono: "Poppins, sans-serif",
    },
    colors: {
        // primaryLight: "#dfdddd",
        primaryLight: "#f7f7f7",
        secondaryLight: "white",
        lightHover: "#d2cdcd",
        primaryDark: "#181818",
        secondaryDark: "#353535",
        darkHover: "#505050",
    },
    fontSizes: {
        h1: "60px",
        h2: "44px",
        h3: "32px",
        h4: "24px",
        h5: "20px",
        h6: "16px",
    },
    breakpoints: {
        "3xl": "1900px",
    },
});

export default theme;
