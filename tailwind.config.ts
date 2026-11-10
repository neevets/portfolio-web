import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				card: 'hsl(var(--card))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)'
			},
			fontFamily: {
				mono: ['JetBrains Mono', 'Fira Code', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'monospace'],
				dev: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
				display: ['Unbounded', 'Geist', 'sans-serif']
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'gentle-float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-5px) rotate(0.5deg)' }
				},
				'enhanced-float': {
					'0%, 100%': { transform: 'translateY(0px) scale(1) rotate(0deg)' },
					'25%': { transform: 'translateY(-10px) scale(1.03) rotate(1deg)' },
					'50%': { transform: 'translateY(-6px) scale(1.01) rotate(-0.5deg)' },
					'75%': { transform: 'translateY(-12px) scale(1.02) rotate(0.8deg)' }
				},
				'deep-float': {
					'0%, 100%': { transform: 'translateY(0px) translateX(0px) scale(1)' },
					'20%': { transform: 'translateY(-15px) translateX(2px) scale(1.02)' },
					'40%': { transform: 'translateY(-8px) translateX(-1px) scale(1.01)' },
					'60%': { transform: 'translateY(-18px) translateX(3px) scale(1.03)' },
					'80%': { transform: 'translateY(-6px) translateX(-2px) scale(1.01)' }
				},
				'subtle-glow': {
					'0%, 100%': { boxShadow: '0 0 5px hsl(var(--foreground) / 0.1)' },
					'50%': { boxShadow: '0 0 15px hsl(var(--foreground) / 0.2)' }
				},
				'grid-seamless-1': {
					'0%': { transform: 'translate(0, 0)' },
					'100%': { transform: 'translate(-80px, -80px)' }
				},
				'grid-seamless-2': {
					'0%': { transform: 'translate(0, 0)' },
					'100%': { transform: 'translate(-120px, -120px)' }
				}
			},
			animation: {
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
				'gentle-float': 'gentle-float 6s ease-in-out infinite',
				'enhanced-float': 'enhanced-float 6s ease-in-out infinite',
				'deep-float': 'deep-float 7s ease-in-out infinite',
				'subtle-glow': 'subtle-glow 3s ease-in-out infinite',
				'grid-seamless-1': 'grid-seamless-1 8s linear infinite',
				'grid-seamless-2': 'grid-seamless-2 12s linear infinite'
			}
		}
	}
} satisfies Config;
