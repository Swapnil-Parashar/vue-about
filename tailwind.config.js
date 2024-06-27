/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          fontFamily: {
              client: ["var(--client-font)"],
              admin: ["var(--admin-font)"],
              icon: ["var(--icon-font)"],
              awesome: ["'Font Awesome 6 Free'"],
          },
          width: {
              "40rem": "40rem",
          },
          hight: {
              "28rem": "28rem",
          },
          screens: {
              mobile: { min: "0px", max: "640px" },
              tablet: { min: "641px", max: "767px" },
              laptop: { min: "768px", max: "1024px" },
              desktop: { min: "1025px", max: "1280px" },
              monitor: { min: "1281px", max: "1536px" },
              "max-sm": { min: "0px", max: "640px" },
              "min-sm": { min: "640px", max: "1536px" },
              "max-md": { min: "0px", max: "767px" },
              "min-md": { min: "767px", max: "1536px" },
              "max-lg": { min: "0px", max: "1024px" },
              "min-lg": { min: "1024px", max: "1536px" },
              "max-xl": { min: "0px", max: "1280px" },
              "min-xl": { min: "1280px", max: "1536px" },
              xh: { min: "0px", max: "767px" },
          },
          colors: {
              text: "#6E7191",
              success: "#1AB759",
              danger: "#E93C3C",
              focus: "#006CC0",
              heading: "#374043",
              paragraph: "#6E7191",
              primary: "rgb(var(--primary) / <alpha-value>)",
              "primary-light": "rgb(var(--primary-light) / <alpha-value>)",
              "primary-slate": "rgb(var(--primary-slate) / <alpha-value>)",
              secondary: "#00446a",
              tertiary: "#f2f7f9",
              "shopperz-red": "#FF6262",
              "shopperz-gray": "#EFF0F6",
              "shopperz-slate": "#D9DBE9",
              "shopperz-yellow": "#FFBC1F",
              "shopperz-pink": "#FD0063",
              "shopperz-orange": "#F23E14",
              "shopperz-purple": "#9353DE",
              "shopperz-blue": "#0072F4",
              admin: {
                  red: "#FB4E4E",
                  sky: "#007FE3",
                  pink: "#FD0063",
                  blue: "#426EFF",
                  green: "#2AC769",
                  orange: "#F23E14",
                  yellow: "#F6A609",
                  purple: "#6A45FE",
              },
          },
          minWidth: {
              "3xl": "48rem",
          },
          lineHeight: {
              11: "2.75rem",
              12: "3rem",
          },
          zIndex: {
              60: "60",
              70: "70",
              80: "80",
          },
          boxShadow: {
              xs: "0px 6px 32px rgba(0, 0, 0, 0.04)",
              xst: "0px 4px 40px rgba(23, 31, 70, 0.16)",
              card: "0px 0px 10px rgba(0, 0, 0, 0.04)",
              hover: "0px 8px 40px rgba(23, 31, 70, 0.08)",
              paper: "0px 15px 40px rgba(73, 72, 72, 0.1)",
              indicate: "0px 2px 6px rgba(242, 62, 20, 0.46)",
              badge: "0px 4px 16px rgba(126, 133, 142, 0.16)",
              sidebar: "15px 0px 25px 0px rgba(0, 0, 0, 0.08)",
              "sidebar-right": "15px 0px 25px 0px rgb(0 0 0 / 12%)",
              "db-sidebar-left":
                  "0 0.125rem -0.375rem 0 rgb(161 172 184 / 12%)",
              "db-sidebar-right":
                  "0 0.125rem 0.375rem 0 rgb(161 172 184 / 12%)",
              "sidebar-left": "-15px 0px 25px 0px rgb(0 0 0 / 12%)",
              checkRound: "0 2px 4px 0 rgb(105 108 255 / 40%)",
              cookies: "0px 15px 40px 0px rgba(73, 72, 72, 0.16)",
              "db-card": "0 2px 6px 0 rgb(67 89 113 / 12%)",
              widget: "0px 4px 32px rgba(0, 0, 0, 0.06)",
              cart: "0px 6px 10px rgba(242, 62, 20, 0.34)",
              "btn-primary": "0px 8px 15px rgba(242, 62, 20, 0.18)",
              "btn-secondary":
                  "0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04)",
          },
      },
  },
  plugins: [],
};