import tailwind from "@astrojs/tailwind";
/** @type {import('tailwindcss').Config} */

module.exports =
{
    content:
        [
            './src/**/*.{html,js,ts,jsx,tsx}', // Adjust to match your file paths
        ],
    theme:
    {
        extend:
        {
            backgroundColors:
            {
                pageBackgroundColor: '#F5C068',
                mobileMenuBackgroundColor: '(167.99deg, rgba(239, 239, 239, 0.2) 0%, rgba(239, 239, 239, 0.2) 100%)',
                mobileMenuBlur: 'backdrop-filter: blur(27.5px)',
            },

            textColors:
            {
                primaryTextColor: '#fff',
                secondaryTextColor: '#F5C068',
                pageHeadingsTextColor: '#B82024',
            },

        },
    },
    plugins:
        [

        ],
}