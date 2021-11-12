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
    // code styles
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'max-lines-per-function': ['error', { max: 100 }],
    'max-depth': ['error', 3], // ブロックのネストの深さの最大 https://eslint.org/docs/rules/max-depth
    'max-nested-callbacks': ['error', 2], // https://eslint.org/docs/rules/max-nested-callbacks
    'max-params': ['error', 3], // 関数の引数の最大数 https://eslint.org/docs/rules/max-params
    'no-else-return': 'error', // https://eslint.org/docs/rules/no-else-return
    complexity: ['error', { max: 10 }], // 循環的複雑度の最大値 https://eslint.org/docs/rules/complexity
    'consistent-return': 'error',
    'prefer-const': 'error',
    'require-await': 'error',
    'no-unused-vars': 'error',

    // typescript
    '@typescript-eslint/no-empty-interface': 'off',

    // import
    'import/no-named-as-default-member': 'off',
    'import/no-deprecated': 'error',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            target: 'src/components/atoms/**/*',
            from: 'src/components/!(atoms)/**/*',
            message: 'atomsは、他のcomponentsに依存しちゃダメ!',
          },
          {
            target: 'src/components/molecules',
            from: 'src/components/organisms',
            message: 'moleculesは、organismsに依存しちゃダメ！',
          },
          {
            target: 'src/components/!(templates)/**/*',
            from: 'src/components/templates/**/*',
            message:
              'templates should not be not use by other component folders',
          },
          {
            target: './src/*',
            from: './src/components/**/!(index)*',
            message: 'index.tsxからのみcomponentsを参照して！',
          },
          {
            target: './src/!(components)/**/*',
            from: './src/components/**/!(index)*',
            message: 'index.tsxからのみcomponentsを参照して！',
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
