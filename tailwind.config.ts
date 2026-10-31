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
        accent: '#A277FF',
        'accent-2': '#FF6AC1', // magenta
        ok: '#61FFCA',
      },
      fontFamily: { sans: mono, mono },
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
        blink: { '0%, 49%': { opacity: '1' }, '50%, 100%': { opacity: '0' } },
        runeSpin: { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        blink: 'blink 1.1s steps(1, end) infinite',
        'rune-spin': 'runeSpin 240s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
