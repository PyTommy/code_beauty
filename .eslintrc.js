module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            target: 'src/components/atoms',
            from: 'src/components/molecules',
            message: 'molecules should not be used by atoms',
          },
          {
            target: './src/*',
            from: './src/components/**/!(index)*',
            message: 'only index.(ts|tsx) can be imported from components',
          },
          {
            target: './src/!(components)/**/*',
            from: './src/components/**/!(index)*',
            message: 'only index.(ts|tsx) can be imported from components',
          },
        ],
      },
    ],
  },
}
