const { findAllByRole } = require('@testing-library/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens : {
      'max-sm': { 'max' : '640px'},
      'max-md': { 'max' : '768px'},
      'max-lg': { 'max' : '1024px'},
      'max-xl': { 'max' : '1280px'}
      } ,
      colors : {
        'green-100' : '1D6600' ,
        'green-200' : '#0A3200',
        'green-300' : '#082900' , 
        'tin-100' : '#AE2B0A' ,
        'tin-200' : '#872108' ,
        'tin-300' : '#872108' ,
        'fade-100' : '#40404F' ,
        'fade-200' : '#2E2E38' ,
        'fade-300' : '#2E2E38' ,
      }
    },
  
  },
  plugins: [],
}
