const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                '82': '20rem',
                '90': '22rem',
                '93': '23rem',
                '99': "30rem",
                "new":"34rem",
                "new-1":"39rem",
                "100":"40rem",
                "105":"46rem",
                "106":"48rem",

            },

            screens: {
                '3xl': '1700px',
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },

        },
        variants: {
            extend: {},
        },


    },
    plugins: [

        require('@tailwindcss/line-clamp'),
    ],
}
