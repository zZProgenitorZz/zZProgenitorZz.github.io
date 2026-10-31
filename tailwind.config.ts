import type { Config } from 'tailwindcss'

const mono = ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#282C33',
        surface: '#2F343C',
        line: '#ABB2BF',
        fg: '#FFFFFF',
        muted: '#ABB2BF',
        accent: '#C778DD',
        'accent-2': '#E06CEE',
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
    },
  },
  plugins: [],
} satisfies Config
