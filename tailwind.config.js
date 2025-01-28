/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2", // 例: Twitterの青
        secondary: "#FFAD1F", // 例: ポップな黄色
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // デフォルトのフォントを変更
      },
    },
  },
  plugins: [],
}

