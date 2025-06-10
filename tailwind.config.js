module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}", 
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                black:   "#000000",
                blue:    "#58869F",   
                green:   "#759564",
                lightBlue: "#98B9CC",
                mint:    "#C3D8B9",
                grayLight: "#D9D9D9",
                offWhite: "#FFFCF7",
                white:   "#FFFFFF",
            },
            fontFamily: {
                outfit: ["Outfit", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
            },
            fontSize:{

            },
        },
    },
    plugins: [],
};