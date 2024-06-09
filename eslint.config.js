// @ts-check
const eslint = require("@eslint/js");
const tseslint = require('typescript-eslint');
const softarceslint = require('@softarc/eslint-plugin-sheriff');

const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    ignores: [
      '.angular/',
      '.husky/',
      '.vscode/',
      'dist/',
      'node_modules/',
      'ssl/',
      'index.ts',
      'jest.config.ts',
      'jest.preset.ts',
      'test-setup.ts',
      'sheriff.config.ts',
    ],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},

  },
  {
    files: ['**/*.ts'],
    extends: softarceslint.configs.flat,
  }
);
