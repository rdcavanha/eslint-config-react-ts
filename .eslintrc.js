const extensions = ['.ts', '.tsx', '.js', '.jsx'];

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'plugin:prettier/recommended'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': extensions,
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json',
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'no-use-before-define': ['error', { functions: false }],
    'dot-notation': 'off',
    'max-classes-per-file': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: true,
        trailingComma: 'all',
        singleQuote: true,
        printWidth: 120,
        tabWidth: 2,
        endOfLine: 'auto',
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
        'react/prop-types': 'off',
        'no-unused-vars': 'off',
        'react/require-default-props': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
      },
    },
    {
      files: ['*test.ts', '*test.tsx', './*.ts', './*.js', '**/__tests__/*.*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
