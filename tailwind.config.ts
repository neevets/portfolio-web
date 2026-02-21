import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				fiverr: {
					DEFAULT: 'hsl(var(--fiverr-green))',
					foreground: 'hsl(var(--fiverr-green-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				mono: ['JetBrains Mono', 'Fira Code', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'monospace'],
				sans: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
				serif: ['Playfair Display', 'Georgia', 'serif'],
				dev: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
				display: ['Unbounded', 'Geist', 'sans-serif']
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem'
			},
			transitionDuration: {
				'250': '250ms'
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
				'shrink': {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(0.95)' }
				},
				'typewriter': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'blink': {
					'0%, 50%': { opacity: '1' },
					'51%, 100%': { opacity: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'gentle-float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-5px) rotate(0.5deg)' }
				},
				'slide-infinite': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 5px hsl(0 0% 0% / 0.1)' },
					'50%': { boxShadow: '0 0 20px hsl(0 0% 0% / 0.3), 0 0 30px hsl(0 0% 0% / 0.2)' }
				},
				'paper-fly': {
					'0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '1' },
					'50%': { transform: 'translate(20px, -20px) rotate(5deg)', opacity: '0.8' },
					'100%': { transform: 'translate(40px, -40px) rotate(10deg)', opacity: '0' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'bg-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'25%': { backgroundPosition: '100% 50%' },
					'50%': { backgroundPosition: '200% 50%' },
					'75%': { backgroundPosition: '300% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'railway-pulse': {
					'0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.2)' }
				},
				'railway-pattern-drift': {
					'0%': { transform: 'translate(0, 0)' },
					'100%': { transform: 'translate(20px, 20px)' }
				},
				'railway-gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'railway-float-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'gradient-dynamic-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'25%': { backgroundPosition: '25% 25%' },
					'50%': { backgroundPosition: '100% 50%' },
					'75%': { backgroundPosition: '75% 75%' }
				},
				'professional-neon-glow': {
					'0%, 100%': { 
						filter: 'brightness(1.05) contrast(1.02)',
						textShadow: '0 0 8px hsl(var(--foreground) / 0.4), 0 0 16px hsl(var(--foreground) / 0.3), 0 0 24px hsl(var(--foreground) / 0.2)'
					},
					'50%': { 
						filter: 'brightness(1.08) contrast(1.04)',
						textShadow: '0 0 12px hsl(var(--foreground) / 0.5), 0 0 20px hsl(var(--foreground) / 0.35), 0 0 28px hsl(var(--foreground) / 0.25)'
					}
				},
				'elegant-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) translateX(0px) rotate(0deg)',
						opacity: '1'
					},
					'25%': { 
						transform: 'translateY(-3px) translateX(1px) rotate(0.3deg)',
						opacity: '0.98'
					},
					'50%': { 
						transform: 'translateY(-6px) translateX(-1px) rotate(-0.2deg)',
						opacity: '1'
					},
					'75%': { 
						transform: 'translateY(-3px) translateX(0.5px) rotate(0.1deg)',
						opacity: '0.99'
					}
				},
				'skill-gas-aura': {
					'0%, 70%, 100%': { 
						opacity: '0',
						transform: 'scale(0.8)'
					},
					'10%': { 
						opacity: '0.3',
						transform: 'scale(1.1)'
					},
					'35%': { 
						opacity: '0.6',
						transform: 'scale(1.3)'
					},
					'60%': { 
						opacity: '0.2',
						transform: 'scale(1.5)'
					}
				},
				'skill-gas-pulse': {
					'0%, 80%, 100%': { 
						opacity: '0',
						transform: 'scale(1) rotate(0deg)'
					},
					'20%': { 
						opacity: '0.4',
						transform: 'scale(1.2) rotate(90deg)'
					},
					'50%': { 
						opacity: '0.7',
						transform: 'scale(1.4) rotate(180deg)'
					},
					'70%': { 
						opacity: '0.3',
						transform: 'scale(1.6) rotate(270deg)'
					}
				},
				'gentle-skill-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) scale(1) rotate(0deg)',
						opacity: '1'
					},
					'25%': { 
						transform: 'translateY(-18px) scale(1.08) rotate(2deg)',
						opacity: '0.9'
					},
					'50%': { 
						transform: 'translateY(-28px) scale(1.12) rotate(-1.5deg)',
						opacity: '1'
					},
					'75%': { 
						transform: 'translateY(-12px) scale(1.06) rotate(1.8deg)',
						opacity: '0.95'
					}
				},
				'magical-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) translateX(0px) scale(1) rotate(0deg)',
						filter: 'brightness(1)',
						opacity: '1'
					},
					'20%': { 
						transform: 'translateY(-22px) translateX(8px) scale(1.1) rotate(3deg)',
						filter: 'brightness(1.1)',
						opacity: '0.9'
					},
					'40%': { 
						transform: 'translateY(-35px) translateX(-5px) scale(1.15) rotate(-2deg)',
						filter: 'brightness(1.05)',
						opacity: '1'
					},
					'60%': { 
						transform: 'translateY(-26px) translateX(6px) scale(1.12) rotate(2.5deg)',
						filter: 'brightness(1.08)',
						opacity: '0.95'
					},
					'80%': { 
						transform: 'translateY(-15px) translateX(-3px) scale(1.07) rotate(-1deg)',
						filter: 'brightness(1.02)',
						opacity: '0.98'
					}
				},
				'dreamy-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) translateX(0px) scale(1) rotateX(0deg) rotateY(0deg)',
						boxShadow: '0 4px 15px hsl(var(--foreground) / 0.1)'
					},
					'33%': { 
						transform: 'translateY(-20px) translateX(4px) scale(1.09) rotateX(5deg) rotateY(2deg)',
						boxShadow: '0 8px 25px hsl(var(--foreground) / 0.2)'
					},
					'66%': { 
						transform: 'translateY(-30px) translateX(-6px) scale(1.14) rotateX(-3deg) rotateY(-1deg)',
						boxShadow: '0 12px 35px hsl(var(--foreground) / 0.15)'
					}
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
				'card-hover': {
					'0%': { transform: 'translateY(0) scale(1)' },
					'100%': { transform: 'translateY(-4px) scale(1.05)' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						opacity: '0.5',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1.1)'
					}
				},
				'subtle-glow': {
					'0%, 100%': { boxShadow: '0 0 5px hsl(var(--foreground) / 0.1)' },
					'50%': { boxShadow: '0 0 15px hsl(var(--foreground) / 0.2)' }
				},
				'smooth-bounce': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-3px)' }
				},
				'grid-seamless-1': {
					'0%': { transform: 'translate(0, 0)' },
					'100%': { transform: 'translate(-80px, -80px)' }
				},
				'grid-seamless-2': {
					'0%': { transform: 'translate(0, 0)' },
					'100%': { transform: 'translate(-120px, -120px)' }
				},
				'grid-seamless-3': {
					'0%': { transform: 'translate(0, 0)' },
					'100%': { transform: 'translate(-40px, -40px)' }
				},
				'slide-infinite-perfect': {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'slide-infinite-fast': {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'bounce-horizontal': {
					'0%, 100%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(4px)' }
				},
				'hover-scale-mobile': {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(1.15)' }
				},
				'hover-scale-tablet': {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(1.1)' }
				},
				'hover-scale-desktop': {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(1.05)' }
				},
				'skill-continuous-glow': {
					'0%, 100%': { 
						filter: 'brightness(1) drop-shadow(0 0 3px var(--skill-color))',
						transform: 'scale(1)'
					},
					'25%': { 
						filter: 'brightness(1.1) drop-shadow(0 0 8px var(--skill-color))',
						transform: 'scale(1.02)'
					},
					'50%': { 
						filter: 'brightness(1.15) drop-shadow(0 0 12px var(--skill-color))',
						transform: 'scale(1.05)'
					},
					'75%': { 
						filter: 'brightness(1.1) drop-shadow(0 0 8px var(--skill-color))',
						transform: 'scale(1.02)'
					}
				},
				'skill-gas-pulse': {
					'0%, 80%, 100%': { 
						opacity: '0',
						transform: 'scale(1) rotate(0deg)'
					},
					'20%': { 
						opacity: '0.4',
						transform: 'scale(1.2) rotate(90deg)'
					},
					'50%': { 
						opacity: '0.7',
						transform: 'scale(1.4) rotate(180deg)'
					},
					'70%': { 
						opacity: '0.3',
						transform: 'scale(1.6) rotate(270deg)'
					}
				},
				'skill-smooth-fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px) scale(0.8) rotateX(15deg)',
						filter: 'blur(4px)'
					},
					'50%': {
						opacity: '0.6',
						transform: 'translateY(10px) scale(0.95) rotateX(5deg)',
						filter: 'blur(1px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1) rotateX(0deg)',
						filter: 'blur(0px)'
					}
				},
				'fast-pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
			},
			animation: {
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
				'shrink': 'shrink 0.2s ease-out forwards',
				'typewriter': 'typewriter 3s steps(40) 1s both',
				'blink': 'blink 1s infinite',
				'float': 'float 3s ease-in-out infinite',
				'gentle-float': 'gentle-float 6s ease-in-out infinite',
				'slide-infinite': 'slide-infinite 20s linear infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'paper-fly': 'paper-fly 0.6s ease-out forwards',
				'paper-fly-up': 'paper-fly-up 0.8s ease-out forwards',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
				'bg-shift': 'bg-shift 12s ease-in-out infinite',
				'railway-pulse': 'railway-pulse 2s ease-in-out infinite',
				'railway-pattern-drift': 'railway-pattern-drift 20s linear infinite',
				'railway-gradient-shift': 'railway-gradient-shift 8s ease-in-out infinite',
				'railway-float-in': 'railway-float-in 0.8s ease-out forwards',
				'gradient-dynamic-shift': 'gradient-dynamic-shift 4s ease-in-out infinite',
				'professional-neon-glow': 'professional-neon-glow 4s ease-in-out infinite',
				'elegant-float': 'elegant-float 8s ease-in-out infinite',
				'skill-gas-aura': 'skill-gas-aura 8s ease-in-out infinite',
				'skill-gas-pulse': 'skill-gas-pulse 12s ease-in-out infinite',
				'gentle-skill-float': 'gentle-skill-float 3.5s ease-in-out infinite',
				'magical-float': 'magical-float 4.8s ease-in-out infinite',
				'dreamy-float': 'dreamy-float 5.2s ease-in-out infinite',
				'enhanced-float': 'enhanced-float 6s ease-in-out infinite',
				'deep-float': 'deep-float 7s ease-in-out infinite',
				'card-hover': 'card-hover 0.3s ease-out forwards',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'subtle-glow': 'subtle-glow 3s ease-in-out infinite',
				'smooth-bounce': 'smooth-bounce 2s ease-in-out infinite',
				'bounce-horizontal': 'bounce-horizontal 1.5s ease-in-out infinite',
				'grid-seamless-1': 'grid-seamless-1 8s linear infinite',
				'grid-seamless-2': 'grid-seamless-2 12s linear infinite',
				'grid-seamless-3': 'grid-seamless-3 6s linear infinite',
				'hover-scale-mobile': 'hover-scale-mobile 0.3s ease-out forwards',
				'hover-scale-tablet': 'hover-scale-tablet 0.3s ease-out forwards',
				'hover-scale-desktop': 'hover-scale-desktop 0.3s ease-out forwards',
				'vite-lightning': 'vite-lightning 2s ease-in-out infinite',
				'skill-continuous-glow': 'skill-continuous-glow 6s ease-in-out infinite',
				'animate-dreamy-float': 'dreamy-float 6s ease-in-out infinite',
				'animate-magical-float': 'magical-float 8s ease-in-out infinite',
				'animate-gentle-skill-float': 'gentle-skill-float 7s ease-in-out infinite',
				'animate-glow-pulse': 'glow-pulse 4s ease-in-out infinite',
				'skill-gas-pulse': 'skill-gas-pulse 12s ease-in-out infinite',
				'skill-smooth-fade-in': 'skill-smooth-fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'fast-pulse': 'fast-pulse 0.8s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
