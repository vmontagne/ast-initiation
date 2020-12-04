const { parse } = require("@babel/parser");
const { default: traverse } = require("@babel/traverse");
const { default: generate } = require("@babel/generator");
const _ = require("lodash");

const code = `function square_test(number_to_square) {
    return number_to_square * number_to_square;
  }`;

const ast = parse(code);

traverse(ast, {
  FunctionDeclaration: (path) => {
    path.node.id.name = _.camelCase(path.node.id.name);
    path.node.params.forEach((param) => {
      path.scope.rename(param.name, _.camelCase(param.name));
    });
  },
  VariableDeclarator: (path) => {
    path.scope.rename(path.node.id.name, _.camelCase(path.node.id.name));
  },
});

console.log(generate(ast, {}));
