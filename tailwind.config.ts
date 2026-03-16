import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0f0f0f",
          purple: "#7e22ce",
          gold: "#facc15",
          orange: "#fb923c",
        },
      },

      backgroundImage: {
        "brand-gradient": "linear-gradient(to right,#facc15,#fb923c)",
      },
    },
  },
  plugins: [],
};

export default config;