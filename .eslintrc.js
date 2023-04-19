module.exports = {
  ignorePatterns: ['**/public/**', '**/.cache/**', '**/static/**', '**/content/**'],
  extends: ['next/core-web-vitals', 'plugin:react-hooks/recommended', 'airbnb/hooks', 'airbnb'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-bitwise': ['error', { allow: ['>>', '<<'] }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'react-hooks/exhaustive-deps': 'off'
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      env: {
        'browser': true,
        'es6': true,
        'jest/globals': true,
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript',
        'prettier',
      ],
      plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'jest',
        'jest-dom',
        'testing-library',
        'prettier',
        'better-styled-components',
      ],
      rules: {
        'better-styled-components/sort-declarations-alphabetically': 2,
        'curly': 'error',
        'padding-line-between-statements': [
          'error',
          {
            blankLine: 'always',
            prev: 'block-like',
            next: 'return',
          },
        ],
        'no-console': 'error',
        'no-plusplus': 'off',
        'no-param-reassign': 'off',
        'no-restricted-syntax': [
          'error',
          {
            selector: 'LabeledStatement',
            message:
              'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
          },
          {
            selector: 'WithStatement',
            message:
              '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
          },
        ],

        'import/prefer-default-export': 'off',
        'arrow-body-style': ['error', 'as-needed'],
        'react/require-default-props': 'off',
        'react/prop-types': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/boolean-prop-naming': [
          'error',
          {
            rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
            message:
              'It is better if your prop ({{ propName }}) matches this pattern: ({{ pattern }})',
          },
        ],
        'react/no-access-state-in-setstate': 'error',
        'react/jsx-key': ['error', { checkKeyMustBeforeSpread: true }],
        'react/jsx-uses-react': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-props-no-spreading': 'off',
        'react/self-closing-comp': 'off',
        'react/forbid-prop-types': 'off',
        "react/function-component-definition": [2, { "namedComponents": "arrow-function", "unnamedComponents": "arrow-function" }],
        'i18next/no-literal-string': 0,
        'import/no-extraneous-dependencies': 0,
        "import/no-cycle": "off"
      },

      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: {
        'import/resolver': {
          node: {
            paths: ['src'],
          },
        },
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      env: {
        'browser': true,
        'es6': true,
        'jest/globals': true,
      },
      extends: ['prettier'],
      rules: {
        'jsx-a11y/no-static-element-interactions': ['warn'],
        'jsx-a11y/click-events-have-key-events': ['warn'],
        'jsx-a11y/mouse-events-have-key-events': ['warn'],
        'jsx-a11y/label-has-associated-control': 'off',
      },
      plugins: ['jest', 'jest-dom', 'testing-library', 'react', 'react-hooks', 'prettier'],
    },
  ],
};
