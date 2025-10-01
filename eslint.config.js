import antfu from '@antfu/eslint-config'

export default antfu({
  // Enable React support
  react: true,

  // Enable stylistic formatting rules
  stylistic: {
    indent: 2, // 2 spaces
    quotes: 'single', // single quotes
    semi: false, // no semicolons
  },

  // TypeScript with type-aware rules
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },

  // Enable JSX support
  jsx: true,

  // File patterns to ignore
  ignores: [
    'dist',
    'node_modules',
    '*.config.*',
  ],
})

