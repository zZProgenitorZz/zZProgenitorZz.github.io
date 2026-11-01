import type { Config } from 'tailwindcss'

const mono = ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']

// Theme: Arcane terminal
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#16161E',
        surface: '#1E1F2B',
        line: '#3B3D52',
        'line-strong': '#6B6F8E',
        fg: '#E6E6F0',
        muted: '#9A9CB8',
        accent: '#A277FF', // purple
        'accent-2': '#FF3B4E', // red
        ok: '#E3AE3E', // gold
      },
      fontFamily: { sans: mono, mono },
      keyframes: {
        blink: { '0%, 49%': { opacity: '1' }, '50%, 100%': { opacity: '0' } },
        runeSpin: { to: { transform: 'rotate(360deg)' } },
        gearTurn: { to: { transform: 'rotate(360deg)' } },
        stamp: {
          '0%': { transform: 'scale(1.4) rotate(-12deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        },
      },
      animation: {
        blink: 'blink 1.1s steps(1, end) infinite',
        'rune-spin': 'runeSpin 240s linear infinite',
        'gear-turn': 'gearTurn 120s linear infinite',
        stamp: 'stamp 250ms ease-out 1',
      },
    },
  },
  plugins: [],
} satisfies Config
