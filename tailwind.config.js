console.log("🚨 tailwind.config.cjs loaded");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  safelist: [
    'bg-primary', 'text-primary-foreground',
    'bg-secondary', 'text-secondary-foreground',
    'bg-destructive', 'text-destructive-foreground',
    'hover:bg-primary/90', 'hover:bg-secondary/80', 'hover:bg-destructive/90',
    'ring', 'ring-offset-background', 'border-input'
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8b5cf6",
        "primary-foreground": "#ffffff",

        secondary: "#f472b6",
        "secondary-foreground": "#ffffff",

        destructive: "#ef4444",
        "destructive-foreground": "#ffffff",

        background: "#ffffff",
        foreground: "#111827",

        ring: "#c084fc",
        accent: "#f3e8ff",
        input: "#e5e7eb",
      },
      borderColor: {
        input: "#e5e7eb",
      },
      ringOffsetColor: {
        background: "#ffffff",
      },
    },
  },
};