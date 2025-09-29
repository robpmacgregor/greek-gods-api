import js from "@eslint/js";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";

const nodeGlobals = {
  module: 'readonly',
  require: 'readonly',
  process: 'readonly',
  __dirname: 'readonly',
  __filename: 'readonly',
  exports: 'readonly',
  Buffer: 'readonly',
  global: 'readonly',
  setImmediate: 'readonly',
  clearImmediate: 'readonly'
};

export default defineConfig([
  {
    // files: ["src/**/*.ts"],
    // ignores: ["dist/**/*.js"],
    extends: ["js/recommended"], 
    languageOptions: 
    { 
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: nodeGlobals
    },
    plugins: {
      js,
      '@typescript-eslint': tsEslintPlugin
    }, 
  },
  tseslint.configs.recommended,
]);
