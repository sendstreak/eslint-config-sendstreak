const js = require("@eslint/js");
const parser = require('@typescript-eslint/parser');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const importPlugin = require('eslint-plugin-import');
const stylisticPlugin = require('@stylistic/eslint-plugin');
const globals = require('globals');

module.exports = {
    ...js.configs.all,
    files: ['**/*.ts', '**/*.tsx'],
    ignores: [ '*.js', '**/*.d.ts', 'node_modules' ],
    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.browser
        },
        parser,
        parserOptions: {
            ecmaFeatures: {
                impliedStrict: true,
                jsx: true
            },
            ecmaVersion: 11,
            project: true
        }
    },
    plugins: {
        '@typescript-eslint': typescriptEslint,
        'import': importPlugin,
        '@stylistic': stylisticPlugin
    },
    rules: {
        // TypeScript - only rules that still exist in v8
        '@typescript-eslint/default-param-last': 'off',
        '@typescript-eslint/init-declarations': 'off',
        '@typescript-eslint/no-base-to-string': 'off',
        '@typescript-eslint/no-empty-object-type': 'off',
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-type-alias': 'off',
        '@typescript-eslint/no-unsafe-function-type': 'off',
        '@typescript-eslint/no-unused-vars': [ 'error', { ignoreRestSiblings: true } ],
        '@typescript-eslint/no-wrapper-object-types': 'off',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/strict-boolean-expressions': [ 'error', { allowNullableString: true } ],
        '@typescript-eslint/unbound-method': 'off',

        // Import
        'import/no-duplicates': 'off',
        'import/order': [ 'error', {
            alphabetize: { order: 'asc' },
            groups: [ [ 'builtin', 'external' ], [ 'internal', 'sibling', 'parent', 'index', 'object' ] ],
            'newlines-between': 'always'
        } ],

        // Base JS - formatting rules (now used for both JS and TS since TS formatting rules were removed)
        'array-bracket-newline': [ 'error', 'consistent' ],
        'array-bracket-spacing': [ 'error', 'always' ],
        'array-element-newline': [ 'error', 'consistent' ],
        'arrow-parens': [ 'error', 'as-needed' ],
        'capitalized-comments': 'off',
        'class-methods-use-this': 'off',
        'computed-property-spacing': [ 'error', 'always' ],
        'default-param-last': 'off',
        'dot-location': [ 'error', 'property' ],
        'func-style': 'off',
        'function-call-argument-newline': [ 'error', 'consistent' ],
        'function-paren-newline': [ 'error', 'consistent' ],
        'id-length': 'off',
        indent: [ 'error', 4, { SwitchCase: 1 } ],  // Enabled - replaces @typescript-eslint/indent
        'init-declarations': 'off',
        'jsx-quotes': [ 'error', 'prefer-single' ],
        'lines-around-comment': [ 'error', { allowBlockStart: true } ],  // Enabled - replaces @typescript-eslint/lines-around-comment
        'lines-between-class-members': [ 'error', 'always', { exceptAfterSingleLine: true } ],  // Enabled - replaces @typescript-eslint/lines-between-class-members
        'max-len': [ 'error', { code: 160 } ],
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        'max-params': 'off',
        'max-statements': 'off',
        'multiline-ternary': [ 'error', 'always-multiline' ],
        'new-cap': [ 'error', { capIsNew: false } ],
        'no-duplicate-imports': 'off',
        'no-extra-parens': [ 'error', 'all', { ignoreJSX: 'multi-line', nestedBinaryExpressions: false } ],  // Enabled - replaces @typescript-eslint/no-extra-parens
        'no-magic-numbers': 'off',
        'no-ternary': 'off',
        'no-undef-init': 'off',
        'no-undefined': 'off',
        'no-underscore-dangle': [ 'error', { allow: [ '_id' ] } ],
        'no-unused-expressions': [ 'error', { allowShortCircuit: true } ],
        'no-unused-vars': 'off',
        'no-void': 'off',
        'no-warning-comments': 'warn',
        'object-curly-newline': [ 'error', { consistent: true } ],
        'object-curly-spacing': [ 'error', 'always' ],  // Enabled - replaces @typescript-eslint/object-curly-spacing
        'object-property-newline': 'off',
        'one-var': [ 'error', 'never' ],
        'operator-linebreak': [ 'error', 'before' ],
        'padded-blocks': [ 'error', 'never' ],
        'prefer-destructuring': [ 'error', { AssignmentExpression: { array: false } } ],
        'quote-props': [ 'error', 'as-needed' ],
        quotes: 'off',  // Disabled in favor of @stylistic/quotes
        'require-atomic-updates': 'off',
        semi: 'off',  // Disabled in favor of @stylistic/semi
        'sort-imports': 'off',

        // Stylistic rules - proper TypeScript support
        '@stylistic/quotes': [ 'error', 'single' ],
        '@stylistic/semi': [ 'error', 'always' ],
        'space-before-function-paren': [ 'error', 'never' ]  // Enabled - replaces @typescript-eslint/space-before-function-paren
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': [ '.ts', '.tsx' ]
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true
            }
        }
    }
};
