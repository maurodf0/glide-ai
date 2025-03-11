import type { ModuleOptions } from "@nuxtjs/tailwindcss";

const tailwindConfig: ModuleOptions = {
  config: {
    content: [
      "./components/**/*.{vue,js,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./app.vue",
      "./plugins/**/*.{js,ts}",
      "./slices/**/*.{vue,js,ts}", // Assicurati che gli Slice siano inclusi
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  },
};

export default tailwindConfig;
