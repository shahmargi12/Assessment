/* eslint-disable  */
module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
        tsconfigRootDir: __dirname + '/',
        project: ['./tsconfig.json'],
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:react-hooks/recommended', // Uses the react hooks plugin
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'plugin:import/recommended', // Keeps standard import order
        'plugin:jsx-a11y/recommended', // For a11y
    ],
    plugins: [
        'react-hooks', // For React hooks, exhaustive depenendencies and all
        '@typescript-eslint', // Eslint for typescript
        'jsx-a11y', // Plugin for a11y
    ],
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        'react/jsx-key': 'warn',
        '@typescript-eslint/ban-types': 'warn',
        'import/no-unresolved': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
};

// Used eslintrc.js instead of json as it supports comments
