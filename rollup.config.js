import path from 'path';
import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';

const packageJson = require('./package.json');

const mainConfig = {
  input: [
    'src/main.ts'
  ],
  output: {
    file: packageJson.main,
    format: 'es',
    sourcemap: true
  },
  external: [
    'react',
    'react-dom',
    'clsx'
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json'
    }),
    alias({
      entries: {
        'Components': path.resolve(__dirname, 'src/components/'),
        'Constants': path.resolve(__dirname, 'src/constants/'),
        'Types': path.resolve(__dirname, 'src/types/')
      }
    })
  ]
};

const config = [
  mainConfig
];

export default config;