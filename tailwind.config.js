/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#50e552",
        
"secondary": "#f9ea3e",
        
"accent": "#f2a3a2",
        
"neutral": "#1C1A2D",
        
"base-100": "#fff",
        
"info": "#9BC7EE",
        
"success": "#189A80",
        
"warning": "#9F6404",
        
"error": "#FB567C",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

