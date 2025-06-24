import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default tseslint.config(
  { ignores: ['dist', '**/node_modules/**'] },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser, // ✅ tell ESLint to use the TypeScript parser
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/no-unused-prop-types': 'warn',
      'react/button-has-type': 'error',
      'no-multiple-empty-lines': [
        'warn',
        {
          max: 1,
          maxEOF: 0,
          maxBOF: 0,
        },
      ],
      'react/jsx-pascal-case': [
        'error',
        {
          allowAllCaps: true,
          ignore: [],
        },
      ],
      'react/jsx-no-useless-fragment': 'warn',
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      'no-console': 'warn',
      'no-unused-vars': 'off',
      'no-debugger': 'warn',
      eqeqeq: ['error', 'always'],
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: 'import', next: 'export' },
      ],
    },
    settings: {
      react: {
        version: 'detect', // ✅ ensures React plugin detects correct version
      },
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettier, // disables formatting rules that conflict with Prettier
    ],
  },
);
