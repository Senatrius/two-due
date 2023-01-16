/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        component: '0.3125rem'
      },
      backgroundImage: {
        'hero-pattern':
          "url('../public/icon-check.svg'), linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"
      }
    },
    colors: {
      primary: 'hsl(220, 98%, 61%)',
      error: 'hsl(355, 87%, 61%)',
      light: {
        bg: 'hsl(0, 0%, 98%)',
        element: 'white',
        shadow: 'hsl(236, 33%, 92%)',
        complete: 'hsl(233, 11%, 84%)',
        inactive: 'hsl(236, 9%, 61%)',
        text: 'hsl(235, 19%, 35%)',
        hover: 'black'
      },
      dark: {
        bg: 'hsl(235, 21%, 11%)',
        element: 'hsl(235, 24%, 19%)',
        shadow: 'hsl(0, 0%, 0%, .5)',
        inactive: 'hsl(233, 14%, 35%)',
        text: 'hsl(234, 39%, 85%)',
        hover: 'hsl(236, 33%, 92%)'
      },
      white: 'white',
      'gradient-start': 'hsl(192, 100%, 67%)',
      'gradient-end': 'hsl(280, 87%, 65%)'
    },
    fontSize: {
      'title-m': [
        '1.6875rem',
        {
          letterSpacing: '0.35em',
          fontWeight: '700'
        }
      ],
      'title-d': [
        '2.5rem',
        {
          letterSpacing: '0.37em',
          fontWeight: '700'
        }
      ],
      'todo-m': [
        '0.75rem',
        {
          letterSpacing: '-0.015em',
          fontWeight: '400'
        }
      ],
      'todo-d': [
        '1.125rem',
        {
          letterSpacing: '-0.015em',
          fontWeight: '400'
        }
      ],
      info: [
        '0.875rem',
        {
          letterSpacing: '-0.015em',
          fontWeight: '400'
        }
      ],
      controls: [
        '0.875rem',
        {
          letterSpacing: '-0.015em',
          fontWeight: '700'
        }
      ]
    },
    backgroundImage: {
      'light-m': "url('../public/bg-mobile-light.jpg')",
      'light-d': "url('../public/bg-desktop-light.jpg')",
      'dark-m': "url('../public/bg-mobile-dark.jpg')",
      'dark-d': "url('../public/bg-desktop-dark.jpg')"
    }
  },
  plugins: []
};
