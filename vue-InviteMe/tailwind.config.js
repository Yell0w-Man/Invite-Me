/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        background: "#fdf8ff",
        "on-secondary-fixed-variant": "#444748",
        "surface-container-low": "#f7f1ff",
        "tertiary-fixed": "#ffdbd0",
        "surface-bright": "#fdf8ff",
        primary: "#4100c3",
        "on-primary": "#ffffff",
        "secondary-container": "#dee0e0",
        "surface-container-highest": "#e6e0f0",
        secondary: "#5c5f5f",
        "surface-container-high": "#ece6f5",
        "primary-fixed-dim": "#cabeff",
        "error-container": "#ffdad6",
        "on-secondary-fixed": "#191c1d",
        "on-error-container": "#93000a",
        "surface-container": "#f1ebfb",
        "on-secondary": "#ffffff",
        "tertiary-fixed-dim": "#ffb59c",
        "outline-variant": "#cac3da",
        "surface-container-lowest": "#ffffff",
        outline: "#797488",
        "on-tertiary": "#ffffff",
        "on-secondary-container": "#606363",
        error: "#ba1a1a",
        "on-tertiary-container": "#ffbea9",
        "inverse-on-surface": "#f4eefe",
        "surface-variant": "#e6e0f0",
        "on-tertiary-fixed": "#390c00",
        "on-primary-fixed-variant": "#4800d6",
        "primary-container": "#591cf4",
        "on-tertiary-fixed-variant": "#832700",
        surface: "#fdf8ff",
        "on-background": "#1c1a25",
        "on-primary-container": "#d1c6ff",
        "surface-dim": "#ddd7e7",
        "inverse-primary": "#cabeff",
        "primary-fixed": "#e6deff",
        "inverse-surface": "#312f3b",
        tertiary: "#762200",
        "secondary-fixed": "#e1e3e3",
        "on-surface": "#1c1a25",
        "surface-tint": "#612bfb",
        "secondary-fixed-dim": "#c4c7c7",
        "on-surface-variant": "#484457",
        "tertiary-container": "#9e3100",
        "on-error": "#ffffff",
        "on-primary-fixed": "#1c0062"
      },

      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "8px",
        xl: "12px",
        full: "9999px"
      },

      spacing: {
        "stack-md": "16px",
        "section-gap": "80px",
        "stack-sm": "8px",
        "margin-desktop": "64px",
        "container-max": "1200px",
        gutter: "24px",
        "margin-mobile": "20px",
        "stack-lg": "32px"
      },

      fontFamily: {
        "headline-lg": ["Hanken Grotesk"],
        "label-md": ["Hanken Grotesk"],
        "body-lg": ["Hanken Grotesk"],
        "display-lg": ["Hanken Grotesk"],
        "body-md": ["Hanken Grotesk"],
        "label-sm": ["Hanken Grotesk"],
        "headline-md": ["Hanken Grotesk"],
        "headline-lg-mobile": ["Hanken Grotesk"]
      },

      fontSize: {
        "headline-lg": [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "-0.01em",
            fontWeight: "600"
          }
        ],

        "label-md": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0.01em",
            fontWeight: "600"
          }
        ],

        "body-lg": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "400"
          }
        ],

        "display-lg": [
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "-0.02em",
            fontWeight: "700"
          }
        ],

        "body-md": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400"
          }
        ],

        "label-sm": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "500"
          }
        ],

        "headline-md": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "600"
          }
        ],

        "headline-lg-mobile": [
          "28px",
          {
            lineHeight: "36px",
            fontWeight: "600"
          }
        ]
      }
    }
  },

  plugins: []
}