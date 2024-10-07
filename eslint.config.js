import js from '@eslint/js'; // ESLint recommended config for JavaScript
import globals from 'globals'; // Browser globals like window, document, etc.
import react from 'eslint-plugin-react'; // React linting
import reactHooks from 'eslint-plugin-react-hooks'; // React hooks linting
import reactRefresh from 'eslint-plugin-react-refresh'; // React Refresh linting
import tseslint from '@typescript-eslint/eslint-plugin'; // TypeScript linting plugin
import tsParser from '@typescript-eslint/parser'; // TypeScript parser for ESLint
import prettier from 'eslint-config-prettier'; // Prettier config to avoid conflicts
import prettierPlugin from 'eslint-plugin-prettier'; // Prettier plugin to show formatting issues

export default [
  // JavaScript and JSX Config
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['dist', 'node_modules', 'public'], // Ignore build, node_modules, and public directories
    languageOptions: {
      ecmaVersion: 2020, // ECMAScript version
      sourceType: 'module', // ES Modules
      globals: globals.browser, // Browser globals (window, document)
    },
    plugins: {
      react, // React linting
      'react-hooks': reactHooks, // React Hooks linting
      'react-refresh': reactRefresh, // React Refresh for hot reload issues
    },
    extends: [
      'eslint:recommended', // ESLint recommended config
      'plugin:react/recommended', // React recommended config
      'plugin:react-hooks/recommended', // React hooks recommended config
      'plugin:prettier/recommended', // Prettier config
    ],
    rules: {
      'react/jsx-uses-react': 'off', // React 17+ JSX doesn't require React to be imported
      'react/react-in-jsx-scope': 'off', // React 17+ doesn't require React in JSX scope
      ...reactHooks.configs.recommended.rules, // Recommended React hooks rules
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }], // Ensures only component exports
      'prettier/prettier': 'error', // Prettier formatting issues as ESLint errors
    },
  },

  // TypeScript and TSX Config
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['dist', 'node_modules', 'public'], // Ignore build, node_modules, and public directories
    languageOptions: {
      parser: tsParser, // TypeScript parser
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser, // Browser globals (window, document)
    },
    plugins: {
      '@typescript-eslint': tseslint, // TypeScript linting
      react, // React linting
      'react-hooks': reactHooks, // React Hooks linting
      'react-refresh': reactRefresh, // React Refresh for hot reload issues
      prettier: prettierPlugin, // Prettier plugin for linting formatting issues
    },
    extends: [
      'eslint:recommended', // ESLint recommended config
      'plugin:@typescript-eslint/recommended', // TypeScript recommended config
      'plugin:react/recommended', // React recommended config
      'plugin:react-hooks/recommended', // React hooks recommended config
      'plugin:prettier/recommended', // Prettier recommended config
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Error on unused vars, but ignore leading underscore
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Turn off explicit return type requirement
      'react/jsx-uses-react': 'off', // React 17+ JSX doesn't require React to be imported
      'react/react-in-jsx-scope': 'off', // React 17+ doesn't require React in JSX scope
      'prettier/prettier': 'error', // Prettier formatting issues as ESLint errors
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
];
