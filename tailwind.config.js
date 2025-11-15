/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "beige-100": "var(--beige-100)",
        "beige-200": "var(--beige-200)",
        "beige-300": "var(--beige-300)",
        "beige-400": "var(--beige-400)",
        "beige-500": "var(--beige-500)",
        black: "var(--black)",
        fddsraspberry: "var(--fddsraspberry)",
        gadkidarkblue: "var(--gadkidarkblue)",
        gadkidarkgreen: "var(--gadkidarkgreen)",
        gadkidarkred: "var(--gadkidarkred)",
        gadkiorange: "var(--gadkiorange)",
        gadkiyellow: "var(--gadkiyellow)",
        white: "var(--white)",
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'happy-season': ['Happy Season', 'cursive'],
      },
      keyframes: {
        'gentle-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'gentle-pulse': 'gentle-pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
