import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import prettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        plugins: {
            js,
            prettier: eslintPluginPrettier,
        },
        extends: ['js/recommended', prettier],
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
        },
    },
    tseslint.configs.recommended,
    {
        ...pluginReact.configs.flat.recommended,
        rules: {
            ...pluginReact.configs.flat.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    prefer: 'type-imports',
                },
            ],
            'prettier/prettier': 'error',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
])
