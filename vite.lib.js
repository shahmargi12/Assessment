import { defineConfig } from 'vite';
import path from 'path';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'index',
            formats: ['es'],
        },
        rollupOptions: {
            external: ['react', 'react-router-dom', 'rc-time-picker', 'moment'],
            output: {
                globals: {
                    react: 'react',
                },
                strict: false,
                dir: 'lib',
                sourcemap: false,
            },
            plugins: [
                typescript({
                    allowJs: true,
                    allowSyntheticDefaultImports: true,
                    exclude: path.resolve(__dirname, './node_modules/**'),
                    declaration: true,
                    declarationDir: 'lib',
                    rootDir: path.resolve(__dirname, './src'),
                    sourceRoot: path.resolve(__dirname, './src/index.ts'),
                    emitDeclarationOnly: true,
                }),
            ],
        },
    },
});
