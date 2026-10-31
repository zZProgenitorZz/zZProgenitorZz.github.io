import type { Config } from 'tailwindcss'

const mono = ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
const display = ['"Cormorant Garamond"', 'Georgia', 'serif']

// Theme: Cultivation
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#12101A', // night ink
        surface: '#1B1826',
        line: '#3A3350',
        fg: '#EEE8F5',
        muted: '#A79FBF',
        accent: '#9D6BFF', // qi
        'accent-2': '#B794FF', // hover on accent elements
        gold: '#D9B45A', // realms, seals, highlights (sparingly)
        jade: '#5FC9A0', // breakthrough / success only
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
        qiDrift: {
          '0%': { transform: 'translate3d(-4%, -3%, 0) scale(1)' },
          '100%': { transform: 'translate3d(4%, 3%, 0) scale(1.08)' },
        },
        mistDrift: {
          '0%': { transform: 'translate3d(-6%, 0, 0)' },
          '100%': { transform: 'translate3d(6%, 0, 0)' },
        },
        spinSlow: { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        'qi-drift': 'qiDrift 28s ease-in-out infinite alternate',
        'mist-drift': 'mistDrift 36s ease-in-out infinite alternate',
        'spin-slow': 'spinSlow 180s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
