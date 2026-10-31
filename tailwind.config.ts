import type { Config } from 'tailwindcss'

const mono = ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
const display = ['"IM Fell English"', 'Georgia', 'serif']

// Theme: Mysteries
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0F0E12',
        surface: '#1A181F',
        fog: '#8A8794', // use at low opacity
        line: '#3B3743',
        fg: '#ECE6DA', // parchment white
        muted: '#A8A1B0',
        accent: '#8E6BD8',
        'accent-2': '#A98BE6', // hover on accent elements, accent text on surfaces
        crimson: '#B3243B', // moon, current step, small highlights
        brass: '#B08D57', // frames, gears, dividers
      },
      fontFamily: { sans: mono, mono, display },
      borderRadius: {
        none: '0',
        DEFAULT: '0',
        sm: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        full: '0',
      },
      keyframes: {
        fogDrift: {
          '0%': { transform: 'translate3d(-5%, 0, 0)' },
          '100%': { transform: 'translate3d(5%, 0, 0)' },
        },
        gearTurn: { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        'fog-drift': 'fogDrift 40s ease-in-out infinite alternate',
        'gear-turn': 'gearTurn 240s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
