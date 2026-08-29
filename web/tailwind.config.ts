import type { Config } from 'tailwindcss';

/**
 * NGUỒN DUY NHẤT CỦA DESIGN TOKEN — xem docs/04-design-system.md.
 * Không hard-code màu / khoảng cách trong component. Thấy `text-[#303030]` là sai.
 *
 * Bảng màu editorial tailoring của HAI Fashion.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ground: '#F2EEE7',
        surface: { DEFAULT: '#FAF8F3', 2: '#E8E0D5' },
        ink: { DEFAULT: '#242827', soft: '#474B49', muted: '#747873' },
        line: { DEFAULT: 'rgba(36, 40, 39, 0.16)', strong: 'rgba(36, 40, 39, 0.3)' },
        accent: { DEFAULT: '#866442', deep: '#61462F', light: '#B29268' },
        espresso: '#241A10',
        bronze: '#B29268',
        navy: '#102B35',
        band: { DEFAULT: '#241A10', ink: '#F2EEE7', soft: '#C9BFAF', line: '#493A2C', surface: '#2E2217' },
        flag: { DEFAULT: '#7A5300', bg: '#FFF3CD' },
      },
      fontFamily: {
        sans: ['var(--font-be-vietnam)', 'Segoe UI', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        quote: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      fontSize: {
        display: ['clamp(54px, 8.5vw, 122px)', { lineHeight: '0.84', letterSpacing: '-0.045em' }],
        h1: ['clamp(30px, 6vw, 48px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h2: ['clamp(26px, 4.6vw, 44px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h3: ['clamp(17px, 2.2vw, 20px)', { lineHeight: '1.3', letterSpacing: '-0.005em' }],
        lede: ['clamp(17px, 2.2vw, 19px)', { lineHeight: '1.6' }],
        body: ['16px', { lineHeight: '1.65' }],
        small: ['14px', { lineHeight: '1.55' }],
        eyebrow: ['13px', { lineHeight: '1.4', letterSpacing: '0.16em' }],
      },
      maxWidth: {
        container: '1280px',
        wide: '1440px',
        prose: '65ch',
        lede: '56ch',
      },
      borderRadius: { none: '0', sm: '1px', md: '2px' },
      boxShadow: { header: '0 12px 30px rgba(36,26,16,0.08)' },
      spacing: { section: '64px', 'section-md': '88px', 'section-lg': '120px' },
      transitionDuration: { DEFAULT: '200ms' },
      aspectRatio: { '4/5': '4 / 5', '3/4': '3 / 4', '3/2': '3 / 2' },
    },
  },
  plugins: [],
};

export default config;
