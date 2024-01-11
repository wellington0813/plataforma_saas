import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode:["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   container:{
    center: true,
    padding: '2ren',
    screens:{'2x1' : '1402px'}
   },
   extend:{
    maxWidth:{
      "8x1":"1408"
    },
    colors:{
      border:"hls(var(--border))",
      input:"hls(var(--input))",
      ring:"hls(var(--ring))",
      background:"hls(var(--background))",
      foreground:"hls(var(--foreground))",
      primary:{
        DEFAULT:"hsl(var(--primary))",
        foreground:"hsl(var(--primary-foreground))"
      },
      secoundary:{
        DEFAULT:"hsl(var(--secoundary))",
        foreground:"hsl(var(--secoundary-foreground))"
      },
      destructive:{
        DEFAULT:"hsl(var(--destructive))",
        foreground:"hsl(var(--destructive-foreground))"
      },
      muted:{
        DEFAULT:"hsl(var(--muted))",
        foreground:"hsl(var(--muted-foreground))"
      },
      accent:{
        DEFAULT:"hsl(var(--accent))",
        foreground:"hsl(var(--accent-foreground))"
      },
      popover:{
        DEFAULT:"hsl(var(--popover))",
        foreground:"hsl(var(--popover-foreground))"
      },
      card:{
        DEFAULT:"hsl(var(--card))",
        foreground:"hsl(var(--card-foreground))"
      },
    },
    borderRadius:{
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)"
    },
    keyframes:{
      'accordion-down':{
        from: {height: '0'},
        to: {height: 'var(--radix accordion-content-height)'},
      },
      'accordion-up':{
        from:  {height: 'var(--radix accordion-content-height)'},
        to: { height: '0'},
      },
    },
    animation:{
      "accordion-up": "accordion-up 0.2s easy-out",
      "accordion-down": "accordion-down 0.2s easy-out"
    }
   }
  },
    /*  plugins: [require('tailwind-animate'), require]*/
  plugins:[require('tailwind-animate'), require('@tailwindcss/typography')],
}
export default config
