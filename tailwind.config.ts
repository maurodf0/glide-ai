import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    mode: "jit",
  content: ['/app/**/*.{js,ts,vue}']
}
