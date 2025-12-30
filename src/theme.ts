import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const theme = extendTheme({
    config,
    styles: {
        global: {
            body: {
                bg: "black",
                color: "white",
                fontFamily: "'Outfit', sans-serif",
            },
        },
    },
    colors: {
        brand: {
            50: "#F2F1FF",
            100: "#DCDAFF",
            200: "#C1BEFF",
            300: "#A4A1FF",
            400: "#8E8AFF",
            500: "#A4A1FF", // User requested #A4A1FF
            600: "#8E8BFF",
            700: "#7A76E0",
            800: "#1F1961",
            900: "#100D30",
        },
        gray: {
            900: "#09090b",
            800: "#18181b",
            700: "#27272a",
            600: "#3f3f46",
            500: "#52525b",
            400: "#71717a",
            300: "#a1a1aa",
            200: "#e4e4e7",
            100: "#f4f4f5",
            50: "#fafafa",
        },
    },
    fonts: {
        heading: "'Outfit', sans-serif",
        body: "'Outfit', sans-serif",
    },
    components: {
        Heading: {
            baseStyle: {
                letterSpacing: "-0.02em",
            },
        },
        Button: {
            baseStyle: {
                fontWeight: "bold",
                borderRadius: "full",
            },
            variants: {
                solid: {
                    bg: "brand.500",
                    color: "gray.900", // Dark text for contrast on light button
                    _hover: {
                        bg: "brand.400",
                    },
                    _active: {
                        bg: "brand.600",
                    },
                },
                outline: {
                    borderColor: "whiteAlpha.300",
                    color: "white",
                    _hover: {
                        bg: "whiteAlpha.100",
                    },
                },
            },
        },
        Container: {
            baseStyle: {
                maxW: "container.xl",
            },
        },
    },
});

export default theme;
