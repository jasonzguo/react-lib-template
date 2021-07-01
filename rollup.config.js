import typescript from '@rollup/plugin-typescript';

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
    })
  ]
};

const config = [
  mainConfig
];

export default config;