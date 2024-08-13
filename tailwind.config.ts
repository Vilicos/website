import type { Config } from "tailwindcss"
const { fontFamily } = require("tailwindcss/defaultTheme")
const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      screens:{
        "xs":"576px",
        "ml":"867px"
      },
      fontFamily:{
        sans: ["var(--font-sans)", ...fontFamily.sans]
      },
      colors: {
        "brand-primary":"hsl(var(--brand-primary))",
        "brand-secondary":"hsl(var(--brand-secondary))",
        "brand-third":"hsl(var(--brand-third))",
        "brand-fourth":"hsl(var(--brand-fourth))",
        "brand-fifth":"hsl(var(--brand-fifth))",
        "brand-bg":"hsl(var(--brand-bg))",
        "brand-card-bg":"hsl(var(--brand-card-bg))",
        "brand-white":"hsl(var(--brand-white))",
        "brand-black":"hsl(var(--brand-black))",
        "brand-dm-bg":"hsl(var(--brand-dm-bg))",
        "brand-dark-2":"hsl(var(--brand-dark-2))",
        "brand-stroke-hover":"hsl(var(--brand-stroke-hover))",
        "brand-github":"hsl(var(--brand-github))",
        "brand-xtwitter":"hsl(var(--brand-xtwitter))",
        "brand-linkedin":"hsl(var(--brand-linkedin))",
        "brand-mail":"hsl(var(--brand-mail))",
        "brand-gradient-one":"hsl(var(--brand-gradient-one))",
        "brand-gradient-two":"hsl(var(--brand-gradient-two))",
        "brand-gradient-line-top":"hsl(var(--brand-gradient-line-top))",
        "brand-gradient-line-bottom":"hsl(var(--brand-gradient-line-bottom))",
        
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"),require('tailwind-scrollbar')],
} satisfies Config

export default config