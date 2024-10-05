/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
          950: '#042F2E',
        }
      }
    }
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
  ],
  safelist: [
    'text-2xl',
    'text-3xl',
    {
      pattern: /grid-cols-.+/,
      variants: ['md'],
    },
    {
      pattern: /col-span-.+/,
      variants: ['12', '6'],
    },
    {
      pattern: /md:col-span-.+/,
      variants: ['12', '6'],
    },
    {
      pattern: /(bg-|dark:bg-).+/
    },
  ],
}

