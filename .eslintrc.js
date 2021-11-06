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
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {}, // https://stackoverflow.com/questions/57032522/eslint-complains-about-typescripts-path-aliasing
    },
  },
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'import/no-named-as-default-member': 'off',
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
    'sort-imports': 0,
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index', 'object', 'unknown'],
          'type',
        ],
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
      },
    ],
  },
}
