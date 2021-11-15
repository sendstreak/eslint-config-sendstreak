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
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/default-param-last': 0,
        '@typescript-eslint/indent': [ 'error', 4 ],
        '@typescript-eslint/init-declarations': 'off',
        '@typescript-eslint/no-base-to-string': 'off',
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-extra-parens': [ 'error', 'all', { ignoreJSX: 'multi-line' } ],
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-implicit-any-catch': 'off',
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-type-alias': [ 'error', { allowAliases: 'in-unions-and-intersections' } ],
        '@typescript-eslint/no-unused-vars': [ 'error', { ignoreRestSiblings: true } ],
        '@typescript-eslint/no-unused-vars-experimental': 0,
        '@typescript-eslint/object-curly-spacing': [ 'error', 'always' ],
        '@typescript-eslint/prefer-readonly-parameter-types': 0,
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/quotes': [ 'error', 'single' ],
        '@typescript-eslint/restrict-template-expressions': 0,
        '@typescript-eslint/semi': [ 'error' ],
        '@typescript-eslint/space-before-function-paren': [ 'error', 'never' ],
        '@typescript-eslint/strict-boolean-expressions': [ 'error', { allowNullableString: true } ],
        '@typescript-eslint/unbound-method': 0,

        // Base JS
        'array-bracket-newline': [ 'error', 'consistent' ],
        'array-bracket-spacing': [ 'error', 'always' ],
        'array-element-newline': [ 'error', 'consistent' ],
        'arrow-parens': [ 'error', 'as-needed' ],
        'capitalized-comments': 0,
        'class-methods-use-this': 0,
        'computed-property-spacing': [ 'error', 'always' ],
        'default-param-last': 0,
        'dot-location': [ 'error', 'property' ],
        'func-style': 0,
        'function-call-argument-newline': [ 'error', 'consistent' ],
        'function-paren-newline': [ 'error', 'consistent' ],
        'id-length': 0,
        'import/no-duplicates': 'off',
        'import/order': [ 'error', {
            alphabetize: { order: 'asc' },
            groups: [ [ 'builtin', 'external' ], [ 'internal', 'sibling', 'parent', 'index', 'object' ] ],
            'newlines-between': 'always'
        } ],
        indent: 0,
        'init-declarations': 'off',
        'jsx-quotes': [ 'error', 'prefer-single' ],
        'lines-around-comment': [ 'error', { allowBlockStart: true } ],
        'lines-between-class-members': 0,
        'max-len': [ 'error', { code: 160 } ],
        'max-lines': 0,
        'max-lines-per-function': 0,
        'max-params': 0,
        'max-statements': 'off',
        'multiline-ternary': [ 'error', 'always-multiline' ],
        'new-cap': [ 'error', { capIsNew: false } ],
        'no-duplicate-imports': 0,
        'no-magic-numbers': 0,
        'no-ternary': 0,
        'no-undef-init': 0,
        'no-undefined': 0,
        'no-underscore-dangle': [ 'error', { allow: [ '_id' ] } ],
        'no-unused-expressions': [ 'error', { allowShortCircuit: true } ],
        'no-unused-vars': 0,
        'no-void': 0,
        'object-curly-newline': [ 'error', { consistent: true } ],
        'object-curly-spacing': 'off',
        'object-property-newline': 0,
        'one-var': [ 'error', 'never' ],
        'operator-linebreak': [ 'error', 'before' ],
        'padded-blocks': [ 'error', 'never' ],
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'prefer-destructuring': [ 'error', { AssignmentExpression: { array: false } } ],
        'quote-props': [ 'error', 'as-needed' ],
        'require-atomic-updates': 'off',
        semi: 0,
        'sort-imports': 0,
        'space-before-function-paren': 0
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
