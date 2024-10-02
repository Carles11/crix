/** @type {import('eslint').Linter.Config} */
import { defineConfig } from 'eslint-define-config'

export default defineConfig({
  // Define the environment
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  // Specify parser options
  parserOptions: {
    ecmaVersion: 2020, // or 2021, depending on your setup
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
  },
  // Include plugins
  plugins: ['react', 'compat'],
  // Specify rules directly
  rules: {
    semi: [2, 'never'],
    'no-unexpected-multiline': 2,
    'compat/compat': 2,
    'react/no-did-update-set-state': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unused-prop-types': 'error',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error', // Only needed for React versions < 17
  },
  // Add settings
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
})
