/* eslint-disable @typescript-eslint/no-magic-numbers */
module.exports = {
    env: {
        es6: true,
        node: true
    },
    extends: [
        'eslint:all',
        'plugin:@typescript-eslint/all'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            impliedStrict: true,
            jsx: true
        },
        ecmaVersion: 11,
        project: './tsconfig.json'
    },
    plugins: [
        '@typescript-eslint',
        'import'
    ],
    root: true,
    rules: {
        // TypeScript
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/default-param-last': 'off',
        '@typescript-eslint/indent': [ 'error', 4 ],
        '@typescript-eslint/init-declarations': 'off',
        '@typescript-eslint/lines-between-class-members': [ 'error', 'always', { exceptAfterSingleLine: true } ],
        '@typescript-eslint/no-base-to-string': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-extra-parens': [ 'error', 'all', { ignoreJSX: 'multi-line', nestedBinaryExpressions: false } ],
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-implicit-any-catch': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-type-alias': [ 'error', { allowAliases: 'in-unions-and-intersections' } ],
        '@typescript-eslint/no-unused-vars': [ 'error', { ignoreRestSiblings: true } ],
        '@typescript-eslint/no-unused-vars-experimental': 'off',
        '@typescript-eslint/object-curly-spacing': [ 'error', 'always' ],
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/quotes': [ 'error', 'single' ],
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/semi': [ 'error' ],
        '@typescript-eslint/space-before-function-paren': [ 'error', 'never' ],
        '@typescript-eslint/strict-boolean-expressions': [ 'error', { allowNullableString: true } ],
        '@typescript-eslint/unbound-method': 'off',

        // Base JS
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
        'import/no-duplicates': 'off',
        'import/order': [ 'error', {
            alphabetize: { order: 'asc' },
            groups: [ [ 'builtin', 'external' ], [ 'internal', 'sibling', 'parent', 'index', 'object' ] ],
            'newlines-between': 'always'
        } ],
        indent: 'off',
        'init-declarations': 'off',
        'jsx-quotes': [ 'error', 'prefer-single' ],
        'lines-around-comment': [ 'error', { allowBlockStart: true } ],
        'lines-between-class-members': 'off',
        'max-len': [ 'error', { code: 160 } ],
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        'max-params': 'off',
        'max-statements': 'off',
        'multiline-ternary': [ 'error', 'always-multiline' ],
        'new-cap': [ 'error', { capIsNew: false } ],
        'no-duplicate-imports': 'off',
        'no-extra-parens': 'off',
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
        'object-curly-spacing': 'off',
        'object-property-newline': 'off',
        'one-var': [ 'error', 'never' ],
        'operator-linebreak': [ 'error', 'before' ],
        'padded-blocks': [ 'error', 'never' ],
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'prefer-destructuring': [ 'error', { AssignmentExpression: { array: false } } ],
        'quote-props': [ 'error', 'as-needed' ],
        'require-atomic-updates': 'off',
        semi: 'off',
        'sort-imports': 'off',
        'space-before-function-paren': 'off'
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
