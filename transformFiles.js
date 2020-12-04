const { parse } = require("@babel/parser");
const { default: traverse } = require("@babel/traverse");
const { default: generate } = require("@babel/generator");
const _ = require("lodash");
var fs = require("fs");

const computeCode = (code) => {
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
  return generate(ast, {}).code;
};

const INPUT_DIR = "./in";
const OUTPUT_DIR = "./out";

var files = fs.readdirSync(INPUT_DIR);
files.forEach((file) => {
  const content = fs.readFileSync(`${INPUT_DIR}/${file}`, "utf8");
  fs.writeFileSync(`${OUTPUT_DIR}/${file}`, computeCode(content));
});
