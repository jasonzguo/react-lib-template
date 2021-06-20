import path from 'path';
import util from 'util';
import ts from 'typescript'
import chalk from 'chalk';

const log = console.log;
const blue = chalk.blue;
const bgYellow = chalk.black.bgYellow;

const WORD_REGEX = /[a-zA-Z\/]+/;

const transformerProgram = (program) => {
  const compilerOptions = program.getCompilerOptions();
  const { baseUrl, paths } = compilerOptions;

  const rootDir = path.resolve(__dirname, baseUrl);
  const resolvedPaths = Object.keys(paths).reduce((acc, pathKey) => {
    const formattedPathKey = pathKey.match(WORD_REGEX)[0];
    const formattedPathValue = paths[pathKey][0].match(WORD_REGEX)[0];
    acc[formattedPathKey] = path.resolve(rootDir, formattedPathValue);
    return acc;
  }, {});

  // log(bgYellow('resolvedPaths is:', resolvedPaths));

  const transformerFactory = (context) => {
    return (source) => {
      const visitor = (node) => {
        if (node && source.isDeclarationFile && ts.isImportDeclaration(node)) {
          log(blue('file: ', source.fileName));
          log(bgYellow((node.getFullText())));
        }
        return ts.visitEachChild(node, visitor, context);
      };
      return ts.visitNode(source, visitor);
    };
  };

  return transformerFactory;
}

export default transformerProgram;
