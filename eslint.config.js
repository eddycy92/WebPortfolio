import js from '@eslint/js'; // ESLint recommended config for JavaScript
import globals from 'globals'; // Browser globals like window, document, etc.
import react from 'eslint-plugin-react'; // React linting
import reactHooks from 'eslint-plugin-react-hooks'; // React hooks linting
import reactRefresh from 'eslint-plugin-react-refresh'; // React Refresh linting
import tseslint from '@typescript-eslint/eslint-plugin'; // TypeScript linting plugin
import tsParser from '@typescript-eslint/parser'; // TypeScript parser for ESLint
import prettier from 'eslint-config-prettier'; // Prettier config to avoid conflicts
import prettierPlugin from 'eslint-plugin-prettier'; // Prettier plugin to show formatting issues

export default {
  // Basic ESLint Configuration
  ignores: ['dist', 'node_modules', 'public'], // Ignore build, node_modules, and public directories
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },

  // Global Configuration for JavaScript & TypeScript
  languageOptions: {
    ecmaVersion: 2020, // ECMAScript version
    sourceType: 'module', // Use ES Modules
    globals: globals.browser, // Browser globals (window, document)
  },

  // Base Config for All Files
  plugins: {
    prettier: prettierPlugin, // Prettier plugin for consistent formatting
  },

  extends: [
    'eslint:recommended', // ESLint recommended config for general rules
    'plugin:prettier/recommended', // Prettier config to enforce consistent formatting
  ],

  rules: {
    'prettier/prettier': 'error', // Prettier issues should be flagged as errors
  },

  // Override Configuration for Specific File Types
  overrides: [
    // JavaScript and JSX files
    {
      files: ['**/*.{js,jsx}'],
      plugins: {
        react, // React linting
        'react-hooks': reactHooks, // React Hooks linting
        'react-refresh': reactRefresh, // React Refresh linting for hot reloads
      },
      extends: [
        'eslint:recommended', // ESLint's built-in recommendations
        'plugin:react/recommended', // React recommendations
        'plugin:react-hooks/recommended', // React hooks recommendations
      ],
      rules: {
        // React-Specific Rules
        'react/jsx-uses-react': 'off', // React 17+ JSX doesn't need React import
        'react/react-in-jsx-scope': 'off', // React 17+ doesn't require React in JSX scope
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }], // Enforce only exporting components for React Refresh
        // Prettier Formatting
        'prettier/prettier': 'error', // Show Prettier issues as errors
      },
    },

    // TypeScript and TSX files
    {
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        parser: tsParser, // TypeScript parser for ESLint
      },
      plugins: {
        '@typescript-eslint': tseslint, // TypeScript linting plugin
        react, // React linting
        'react-hooks': reactHooks, // React Hooks linting
        'react-refresh': reactRefresh, // React Refresh linting
      },
      extends: [
        'eslint:recommended', // ESLint's recommended rules
        'plugin:@typescript-eslint/recommended', // TypeScript's recommended rules
        'plugin:@typescript-eslint/eslint-recommended', // Turns off unnecessary ESLint JS rules in favor of TS
        'plugin:react/recommended', // React recommendations
        'plugin:react-hooks/recommended', // React Hooks recommendations
      ],
      rules: {
        // TypeScript-Specific Rules
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Ignore variables starting with underscore
        '@typescript-eslint/explicit-module-boundary-types': 'off', // Turn off explicit return types for modules
        // React-Specific Rules
        'react/jsx-uses-react': 'off', // React 17+ JSX doesn't need React import
        'react/react-in-jsx-scope': 'off', // React 17+ doesn't require React in JSX scope
        // Prettier Formatting
        'prettier/prettier': 'error', // Show Prettier issues as errors
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }], // Enforce only exporting components for React Refresh
      },
    },
  ],
};
